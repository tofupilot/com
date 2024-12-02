"use server";

import { getErrorMessage } from "@/app/lib/errors";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

// Server Action to handle form submission
export async function handleContactSubmission(formData: FormData) {
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();

  if (!email || !message) {
    return { error: "Email and message are required." };
  }

  try {
    await sendgrid.send({
      to: "support@tofupilot.com",
      from: "hello@tofupilot.com",
      subject: "New Contact Request from TofuPilot",
      text: message.toString(),
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });
  } catch (error) {
    console.error(getErrorMessage(error));
    return { error: "Failed to send email" };
  }
}
