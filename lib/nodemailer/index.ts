import nodemailer from 'nodemailer';
import { WELCOME_EMAIL_TEMPLATE } from './templates';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL!,
    pass: process.env.NODEMAILER_PASSWORD!,
  }
})

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE
    .replace('{{name}}', name)
    .replace('{{intro}}', intro)
  

  const mailOptions = {
    from: `"Predicta" <ahmadimran67208@gmail.com>`,
    to: email,
    subject: 'Welcome to Predicta - Your Stock Market Winning Toolkit!',
    text: 'Thanks for joining Predicta',
    html: htmlTemplate,
  }

  await transporter.sendMail(mailOptions)
}