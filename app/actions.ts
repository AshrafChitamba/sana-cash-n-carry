"use server";

import { createTransport } from "nodemailer";
import { contactSchema, ContactFormData } from "@/lib/contactSchema";

const EMAIL_SERVER_HOST = process.env.EMAIL_SERVER_HOST;
const EMAIL_SERVER_USERNAME = process.env.EMAIL_SERVER_USERNAME;
const EMAIL_SERVER_PASSWORD = process.env.EMAIL_SERVER_PASSWORD;
const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER;

export async function sendContactMessage(data: ContactFormData) {
  const { firstName, lastName, email, phoneNumber, country, city, message } = data;
  

  try {
    const transporter = createTransport({
      host: EMAIL_SERVER_HOST,
      port: 587,
      secure: true,
      auth: {
        user: EMAIL_SERVER_USERNAME,
        pass: EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: EMAIL_RECEIVER,
      html: "",
    });

    return Response.json({ message: "Email sent!" });
  } catch (error) {
    return Response.json({ message: "Failed to send email" });
  }
}
