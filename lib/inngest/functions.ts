/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "lucide-react";
import { getNews } from "../actions/finnhub.actions";
import { getAllUsersForNewsEmail } from "../actions/user.actions";
import { getWatchlistSymbolsByEmail } from "../actions/watchlist.actions";
import { sendNewsSummaryEmail, sendWelcomeEmail } from "../nodemailer";
import { inngest } from "./client";
import { NEWS_SUMMARY_EMAIL_PROMPT, PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";
import { use } from "react";
import { formatDateToday } from "../utils";

export const sendSignUpEmail = inngest.createFunction(
  { id: 'sign-up-email' },
  { event: 'app/user.created' },
  async ({ event, step }) => {
    const userProfile = `
      - Country: ${event.data.country}
      - Investment Goals: ${event.data.investmentGoals}
      - Risk Tolerance: ${event.data.riskTolerance}
      - Preferred Industry: ${event.data.preferredIndustry}
    `

    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}', userProfile)

    const response = await step.ai.infer('generate-welcome-message', {
      model: step.ai.models.gemini({ model: 'gemini-2.5-flash-lite' }),
      body: {
        contents: [
          {
            role: 'user',
            parts: [
              { text: prompt }
            ]
          }
        ]
      }
    })

    await step.run('send-welcome-email', async () => {
      const part = response.candidates?.[0]?.content?.parts?.[0];
      const introText = (part && 'text' in part ? part.text : null) || 'Thanks for joining Predicta. You have now tools to track markets to make smarter moves.'

      const { data: { email, name } } = event;

      return await sendWelcomeEmail({
        email, name, intro: introText
      })
    })

    return {
      success: true,
      message: 'Welcome email sent successfully'
    }
  }
)

export const sendDailyNewsSummary = inngest.createFunction(
  { id: 'daily-news-summary' },
  [{ event: 'app/send.daily.news' }, { cron: '0 12 * * *' }],
  async ({ step }) => {
    // Step 1: Get all users
    const users = await step.run('get-all-users', getAllUsersForNewsEmail)

    if (!users || users.length === 0) return { success: false, message: 'No users found for news email' }
    // Step 2: Fetch personalized for all users
    const results = await step.run('fetch-user-news', async () => {
      const perUser: Array<{ user: any; articles: MarketNewsArticle[] }> = [];
      for (const user of users as any[]) {
        try {
          const symbols = await getWatchlistSymbolsByEmail(user.email);
          let articles = await getNews(symbols);
          // Enforce max 6 articles per user
          articles = (articles || []).slice(0, 6);
          // If still empty, fallback to general
          if (!articles || articles.length === 0) {
            articles = await getNews();
            articles = (articles || []).slice(0, 6);
          }
          perUser.push({ user, articles });
        } catch (e) {
          console.error('daily-news: error preparing user news', user.email, e);
          perUser.push({ user, articles: [] });
        }
      }
      return perUser;
    });

    // Step 3: Summarize news for each user via AI
    const userNewsSummaries: { user: User; newsContent: string | null}[] = [];

    for ( const { user, articles } of results ) {
      try {
        const prompt = NEWS_SUMMARY_EMAIL_PROMPT.replace('{{newsData}}', JSON.stringify(articles, null, 2))

        const response = step.ai.infer(`summarize-news-${user.email}`, {
          model: step.ai.models.gemini({ model: 'gemini-2.5-flash-lite' }),
          body: {
            contents: [{ role: 'user', parts: [{ text:prompt }]}]
          }
        })

        const part = (await response).candidates?.[0]?.content?.parts?.[0]
        const newsContent = (part && 'text' in part ? part.text : null ) || 'No market news found today.'

        userNewsSummaries.push({ user, newsContent })
      } catch (error) {
        console.log('Failed to summarize news for -', user.email);
        userNewsSummaries.push({ user, newsContent: null })
      }
    }

    // Step 4: Send emails
    await step.run('send-news-emails', async() => {
      await Promise.all(
        userNewsSummaries.map(async ({ user, newsContent }) => {
          if(!newsContent) return false;

          return await sendNewsSummaryEmail({ email: user.email, date: formatDateToday, newsContent })
        })
      )
    })

    return { success: true, message: "Daily news summary email sent successfully" } ;
  }
)