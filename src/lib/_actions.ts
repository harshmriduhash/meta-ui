'use server';

import { Resend } from 'resend';
import { ContactEmailForm } from './types';
import ContactFormEmail from 'emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactEmailForm) {
  const { name, email, message, phone, to } = data;
  try {
    const data = await resend.emails.send({
      from: `delivered@resend.dev`,
      to: [to],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message, phone } as ContactEmailForm),
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
