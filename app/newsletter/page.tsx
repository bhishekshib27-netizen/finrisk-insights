import NewsletterSignup from "@/components/newsletter/NewsletterSignup";
import { Mail } from "lucide-react";

export const metadata = {
  title: "Newsletter | FinRisk Insights",
  description: "Subscribe to the FinRisk Intelligence Briefing — weekly financial intelligence for Mauritius.",
};

export default function NewsletterPage() {
  return (
    <div className="space-y-0">

      {/* Navy Hero */}
      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Weekly Briefing</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">FinRisk Intelligence Briefing</h1>
          <p className="mt-3 max-w-xl text-blue-200">The essential weekly briefing on Mauritius financial markets, regulation, and economic intelligence — delivered free to your inbox.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-8 sm:px-12 py-12 space-y-10">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left - What you get */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-900 mb-6">What you will receive</p>
            <div className="space-y-4">
              {[
                { title: "Live market updates", desc: "SEMDEX, MUR FX rates, and key economic indicators every week." },
                { title: "Regulatory alerts", desc: "FSC circulars, Bank of Mauritius guidance, and FATF developments." },
                { title: "Research & analysis", desc: "In-depth commentary on Mauritius finance and compliance." },
                { title: "Events & MPC decisions", desc: "Upcoming events and monetary policy committee updates." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-neutral-100 pb-4 last:border-0">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-blue-900 text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">{item.title}</p>
                    <p className="mt-0.5 text-xs text-neutral-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border border-neutral-200 bg-neutral-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Mail size={14} className="text-blue-900" />
                <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider">Published weekly</p>
              </div>
              <p className="text-xs text-neutral-500">No spam. No paywalls. Unsubscribe anytime. Free forever.</p>
            </div>
          </div>

          {/* Right - Signup form */}
          <div>
            <NewsletterSignup />
          </div>

        </div>

      </div>
    </div>
  );
}
