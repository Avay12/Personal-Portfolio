"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import { EmailTemplate } from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("senderMessage");

  //simple server-side validation
  if (!validateString(senderEmail, 500)) {
    // return {
    //   error: "Inavalid sender email",
    // };
    console.log("Inavalid sender email");
  }

  if (!validateString(message, 5000)) {
    // return {
    //   error: "Invalid message",
    // };
    console.log("Invalid message");
  }
  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "avaygc@gmail.com",
      subject: "Message from Contact from",
      replyTo: senderEmail as string,
      // text: message as string,
      react: EmailTemplate({
        senderEmail: senderEmail as string,
        senderMessage: message as string,
      }),
    });
  } catch (error: unknown) {
    error: getErrorMessage(error);
    console.log(error);
  }
  return { data };
};
