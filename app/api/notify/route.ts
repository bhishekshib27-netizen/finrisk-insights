import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { secret, type, title, url, excerpt } = await req.json();

    if (secret !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: subscribers, error } = await supabase
      .from("subscribers")
      .select("email, name")
      .eq("active", true);

    if (error || !subscribers?.length) {
      return NextResponse.json({ error: "No subscribers" }, { status: 200 });
    }

    const subject = type === "article"
      ? `New Insight: ${title}`
      : `New Job: ${title}`;

    const emailType = type === "article" ? "article" : "job";

    const results = await Promise.allSettled(
      subscribers.map((sub) =>
        resend.emails.send({
          from: "FinRisk Insights <hello@finriskinsight.com>",
          to: sub.email,
          subject,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #0f2654; padding: 24px 32px;">
                <h1 style="color: white; margin: 0; font-size: 20px;">FinRisk Insights</h1>
                <p style="color: #93c5fd; margin: 4px 0 0; font-size: 12px;">finriskinsight.com</p>
              </div>
              <div style="padding: 32px; background: white; border: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">
                  ${emailType === "article" ? "New Intelligence" : "New Career Opportunity"}
                </p>
                <h2 style="color: #111827; font-size: 20px; margin: 0 0 16px; line-height: 1.3;">${title}</h2>
                ${excerpt ? `<p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">${excerpt}</p>` : ""}
                <a href="https://www.finriskinsight.com${url}" style="display: inline-block; background: #1e3a8a; color: white; padding: 12px 24px; text-decoration: none; font-size: 14px; font-weight: bold;">
                  ${emailType === "article" ? "Read Article" : "View Job"} →
                </a>
              </div>
              <div style="padding: 16px 32px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none;">
                <p style="color: #9ca3af; font-size: 11px; margin: 0; text-align: center;">
                  You are receiving this because you subscribed to FinRisk Insights.<br/>
                  <a href="https://www.finriskinsight.com/newsletter" style="color: #1e3a8a;">Manage subscription</a>
                </p>
              </div>
            </div>
          `,
        })
      )
    );

    const sent = results.filter((r) => r.status === "fulfilled").length;
    return NextResponse.json({ success: true, sent }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
