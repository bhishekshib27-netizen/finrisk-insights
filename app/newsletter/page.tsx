import NewsletterSignup from "@/components/newsletter/NewsletterSignup";
import { Mail, Users, Clock, Shield } from "lucide-react";

export const metadata = {
  title: "Newsletter | FinRisk Insights",
  description: "Subscribe to the FinRisk Intelligence Briefing — weekly financial intelligence for Mauritius.",
};

const stats = [
  { icon: <Users size={18} />, label: "Subscribers", value: "1,200+" },
  { icon: <Clock size={18} />, label: "Published", value: "Weekly" },
  { icon: <Mail size={18} />, label: "Issues sent", value: "48" },
  { icon: <Shield size={18} />, label: "Spam rate", value: "0%" },
];

const pastIssues = [
  { title: "MPC holds Key Rate — what it means for borrowers", date: "Jun 20, 2026", number: "#048" },
  { title: "SEMDEX hits 2,145 — banking sector leads gains", date: "Jun 13, 2026", number: "#047" },
  { title: "FSC issues new AML guidance — key takeaways", date: "Jun 6, 2026", number: "#046" },
  { title: "MUR under pressure — FX outlook for Q3 2026", date: "May 30, 2026", number: "#045" },
  { title: "FATF removal — what it means for Mauritius IFC", date: "May 23, 2026", number: "#044" },
];

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-12">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Weekly Briefing</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">FinRisk Intelligence Briefing</h1>
        <p className="mt-2 text-neutral-500">The essential weekly briefing on Mauritius financial markets, regulation, and economic intelligence.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-4">
                <div className="mb-2 text-neutral-400">{stat.icon}</div>
                <p className="text-2xl font-bold text-black">{stat.value}</p>
                <p className="text-xs text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">Past Issues</h2>
            <div className="space-y-3">
              {pastIssues.map((issue, i) => (
                <div key={i} className="group flex items-start justify-between gap-4 border border-neutral-200 bg-white p-4 transition hover:border-black">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-neutral-400">{issue.number}</p>
                    <h3 className="text-sm font-semibold text-black group-hover:text-neutral-600 transition">{issue.title}</h3>
                    <p className="text-xs text-neutral-400">{issue.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
}
