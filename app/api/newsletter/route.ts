import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Send welcome email to subscriber
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bhishekshib27@gmail.com",
      subject: "Welcome to FinRisk Insights",
      html: `
        <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #ffffff;">
          <div style="border-bottom: 2px solid #000000; padding-bottom: 24px; margin-bottom: 32px;">
            <h1 style="font-size: 24px; font-weight: 700; color: #000000; margin: 0;">FinRisk Insights</h1>
            <p style="font-size: 12px; color: #737373; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.1em;">The Financial Platform of Mauritius</p>
          </div>
          <h2 style="font-size: 20px; font-weight: 700; color: #000000; margin: 0 0 12px 0;">Welcome${name ? `, ${name}` : ""}</h2>
          <p style="font-size: 15px; color: #525252; line-height: 1.6; margin: 0 0 24px 0;">
            You are now subscribed to the FinRisk Intelligence Briefing — your weekly dose of financial intelligence from Mauritius.
          </p>
          <div style="border: 1px solid #e5e5e5; padding: 24px; margin: 0 0 24px 0;">
            <p style="font-size: 12px; font-weight: 700; color: #000000; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 16px 0;">What to expect</p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;"><div style="width: 6px; height: 6px; background: #16a34a; flex-shrink: 0;"></div><p style="font-size: 14px; color: #525252; margin: 0;">Live market updates and FX movements</p></div>
              <div style="display: flex; align-items: center; gap: 10px;"><div style="width: 6px; height: 6px; background: #16a34a; flex-shrink: 0;"></div><p style="font-size: 14px; color: #525252; margin: 0;">Regulatory alerts from FSC and Bank of Mauritius</p></div>
              <div style="display: flex; align-items: center; gap: 10px;"><div style="width: 6px; height: 6px; background: #16a34a; flex-shrink: 0;"></div><p style="font-size: 14px; color: #525252; margin: 0;">Exclusive research and analysis</p></div>
              <div style="display: flex; align-items: center; gap: 10px;"><div style="width: 6px; height: 6px; background: #16a34a; flex-shrink: 0;"></div><p style="font-size: 14px; color: #525252; margin: 0;">Upcoming events and MPC decisions</p></div>
            </div>
          </div>
          <a href="https://finriskinsights.mu" style="display: inline-block; background: #000000; color: #ffffff; font-size: 14px; font-weight: 600; padding: 12px 24px; text-decoration: none;">Visit FinRisk Insights →</a>
          <div style="border-top: 1px solid #e5e5e5; margin-top: 40px; padding-top: 20px;">
            <p style="font-size: 12px; color: #a3a3a3; margin: 0;">© ${new Date().getFullYear()} FinRisk Insights. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    // Notify yourself of new subscriber
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bhishekshib27@gmail.com",
      subject: `New FinRisk subscriber: ${email}`,
      html: `
        <p><strong>New newsletter subscriber!</strong></p>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Successfully subscribed!" }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
  }
}
