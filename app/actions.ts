"use server";

import { createTransport } from "nodemailer";
import { contactSchema, ContactFormData } from "@/lib/contactSchema";
import { ValidationError } from "yup";

const EMAIL_SERVER_HOST = process.env.EMAIL_SERVER_HOST;
const EMAIL_SERVER_USERNAME = process.env.EMAIL_SERVER_USERNAME;
const EMAIL_SERVER_PASSWORD = process.env.EMAIL_SERVER_PASSWORD;
const EMAIL_SERVER_PORT = process.env.EMAIL_SERVER_PORT;
const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER;
const DEFAULT_PORT = "465";

export async function sendContactMessage(data: ContactFormData) {
  try {
    const validatedData = await contactSchema.validate(data, {
      abortEarly: false,
    });

    const { firstName, lastName, email, phoneNumber, country, city, message } =
      validatedData;

    const transporter = createTransport({
      host: EMAIL_SERVER_HOST,
      port: parseInt(EMAIL_SERVER_PORT ?? DEFAULT_PORT),
      secure: true,
      auth: {
        user: EMAIL_SERVER_USERNAME,
        pass: EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `Sana Cash n Carry ${EMAIL_SERVER_USERNAME}`,
      to: EMAIL_RECEIVER,
      replyTo: email,
      subject: "New Message",
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber || "N/A"}</p>
        <p><strong>Location:</strong> ${city || "N/A"}, ${country || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, message: "Email sent!" };
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      return {
        success: false,
        message: "Something went wrong",
        errors: error.errors,
      };
    }
    return { success: false, message: "Failed to send email" };
  }
}
