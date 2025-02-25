"use server";

import { getErrorMessage } from "@/app/lib/errors";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export interface ContactSubmissionData {
  email: string;
  name: string;
  message: string;
}

export async function handleContactSubmission(
  data: ContactSubmissionData
): Promise<{ success: boolean; error?: string }> {
  const { email, name, message } = data;

  if (!email || !message) {
    return { success: false, error: "Email and message are required." };
  }

  try {
    await sendgrid.send({
      to: "support@tofupilot.com",
      from: "hello@tofupilot.com",
      subject: "New Support Request from TofuPilot",
      text: `From: ${email}\nName: ${name || "N/A"}\n${message}`,
    });
    return { success: true };
  } catch (error) {
    console.error(getErrorMessage(error));
    return { success: false, error: "Failed to send email." };
  }
}
