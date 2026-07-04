import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "FinRisk Insights <hello@finriskinsight.com>",
      to: "hello@finriskinsight.com",
      replyTo: email,
      subject: `[FinRisk Contact] ${subject || "New Enquiry"} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f2654; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 18px;">New Contact Form Submission</h1>
            <p style="color: #93c5fd; margin: 4px 0 0; font-size: 12px;">finriskinsight.com</p>
          </div>
          <div style="padding: 32px; background: white; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name</td><td style="padding: 8px 0; color: #111827;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #1e3a8a;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject</td><td style="padding: 8px 0; color: #111827;">${subject || "General Enquiry"}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Message</p>
            <p style="color: #111827; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="padding: 16px 32px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #9ca3af; font-size: 11px; margin: 0;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
