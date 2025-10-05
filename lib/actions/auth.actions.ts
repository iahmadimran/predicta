'use server';

import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const signUpWithEmail = async ({ email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData) => {
  try {
    const response = await (await auth).api.signUpEmail({
      body: {
        email,
        password,
        name: fullName,
      }
    })

    if (response) {
      await inngest.send({
        name: 'app/user.created',
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          preferredIndustry,
          riskTolerance,
        }
      })
    }

    return { success: true, data: response }
  } catch (error) {
    console.log('SignUp failed', error);
    return { success: false, error: 'Sign Up failed' }
  }
}