"use server";

import { getErrorMessage } from "@/app/lib/errors";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

// Server Action to handle form submission
export async function handleContactSubmission(formData: FormData) {
  const email = formData.get("email")?.toString();
  const name = formData.get("name")?.toString();
  const companySize = formData.get("companySize")?.toString();
  const message = formData.get("message")?.toString();

  if (!email || !message) {
    return { error: "Email and message are required." };
  }

  try {
    await sendgrid.send({
      to: "support@tofupilot.com",
      from: "hello@tofupilot.com",
      subject: "New Contact Request from TofuPilot",
      text: `From: ${email}\nName: ${name || "N/A"}\nCompany Size: ${companySize || "N/A"}\n\n${message}`,
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Name:</strong> ${name || "N/A"}</p><p><strong>Company Size:</strong> ${companySize || "N/A"}</p><p>${message}</p>`,
    });
  } catch (error) {
    console.error(getErrorMessage(error));
    return { error: "Failed to send email" };
  }
}
