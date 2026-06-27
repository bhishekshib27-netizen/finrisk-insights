import { auth } from "@clerk/nextjs/server";
import { Lock, Download, BookOpen, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Research | FinRisk Insights",
  description: "Financial intelligence reports on Mauritius markets, regulation, and economy.",
};

const reports = [
  { id: "1", title: "Mauritius Financial Stability Report 2024", description: "Comprehensive analysis of the Mauritian financial system, key risks, and regulatory outlook.", category: "Stability", date: "Dec 2024", pages: 48, premium: false, href: "#" },
  { id: "2", title: "IMF Article IV Consultation — Mauritius 2024", description: "IMF assessment of Mauritius economic policies and recommendations for sustainable growth.", category: "IMF", date: "Nov 2024", pages: 62, premium: false, href: "#" },
  { id: "3", title: "FinRisk FX Outlook Q1 2025", description: "In-depth analysis of MUR exchange rate dynamics and forecast for Q1 2025.", category: "FX", date: "Jan 2025", pages: 24, premium: true, href: "#" },
  { id: "4", title: "AML/CFT Risk Assessment Mauritius 2025", description: "Detailed risk assessment covering money laundering and terrorist financing vulnerabilities.", category: "Regulation", date: "Feb 2025", pages: 36, premium: true, href: "#" },
  { id: "5", title: "SEMDEX Sector Performance Deep Dive", description: "Sector-by-sector breakdown of Stock Exchange of Mauritius performance and outlook.", category: "Equities", date: "Mar 2025", pages: 30, premium: true, href: "#" },
  { id: "6", title: "Mauritius Banking Industry Outlook 2026", description: "Quarterly analysis of the Mauritian banking sector, capital adequacy, and NPL trends.", category: "Banking", date: "Q1 2026", pages: 42, premium: true, href: "#" },
];

const categoryColors: Record<string, string> = {
  Stability: "bg-blue-50 text-blue-600",
  IMF: "bg-emerald-50 text-emerald-600",
  FX: "bg-violet-50 text-violet-600",
  Regulation: "bg-rose-50 text-rose-600",
  Equities: "bg-amber-50 text-amber-600",
  Banking: "bg-cyan-50 text-cyan-600",
};

export default async function ResearchPage() {
  const { userId } = await auth();
  const isLoggedIn = !!userId;

  const free = reports.filter((r) => !r.premium);
  const premium = reports.filter((r) => r.premium);

  return (
    <div className="space-y-10">

      <div>
        <p className="text-xs uppercase tracking-widest text-cyan-600">Intelligence</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Research</h1>
        <p className="mt-3 text-slate-500">Financial intelligence reports on Mauritius markets, regulation, and economy.</p>
      </div>

      {!isLoggedIn && (
        <div className="flex flex-col gap-4 rounded-2xl border border-cyan-200 bg-cyan-50 p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <Lock size={20} className="mt-0.5 shrink-0 text-cyan-600" />
            <div>
              <p className="font-semibold text-cyan-900">Premium Research Available</p>
              <p className="mt-1 text-sm text-cyan-700">Sign up for free to access exclusive FinRisk research reports and analysis.</p>
            </div>
          </div>
          <a href="/sign-up" className="shrink-0 rounded-lg bg-cyan-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-700 sm:ml-auto">
            Get Free Access
          </a>
        </div>
      )}

      <div>
        <h2 className="mb-4 text-lg font-bold text-slate-900">Free Reports</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {free.map((report) => (
            <div key={report.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <div className="rounded-lg bg-cyan-50 p-2">
                  <BookOpen size={14} className="text-cyan-600" />
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[report.category] ?? "bg-slate-100 text-slate-600"}`}>{report.category}</span>
                <span className="text-xs text-slate-400">{report.date}</span>
                <span className="ml-auto text-xs text-slate-400">{report.pages} pages</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-cyan-600 transition sm:text-lg">{report.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{report.description}</p>
              <div className="mt-4 flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-700">
                  <Download size={14} />
                  Download Free
                </button>
                <a href={report.href} className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-cyan-600">
                  Preview <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-slate-900">Premium Reports</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {premium.map((report) => {
            const locked = !isLoggedIn;
            return (
              <div key={report.id} className={`group relative rounded-2xl border p-6 transition ${locked ? "border-slate-200 bg-slate-50" : "border-slate-200 bg-white shadow-sm hover:shadow-md"}`}>
                {locked && (
                  <div className="absolute right-4 top-4 rounded-full bg-slate-200 p-1.5">
                    <Lock size={13} className="text-slate-500" />
                  </div>
                )}
                <div className="mb-3 flex items-center gap-2">
                  <div className={`rounded-lg p-2 ${locked ? "bg-slate-200" : "bg-cyan-50"}`}>
                    <BookOpen size={14} className={locked ? "text-slate-400" : "text-cyan-600"} />
                  </div>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${locked ? "bg-slate-200 text-slate-500" : (categoryColors[report.category] ?? "bg-slate-100 text-slate-600")}`}>{report.category}</span>
                  <span className="text-xs text-slate-400">{report.date}</span>
                  <span className="ml-auto rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600">Premium</span>
                </div>
                <h3 className={`text-base font-semibold sm:text-lg ${locked ? "text-slate-400" : "text-slate-900 group-hover:text-cyan-600 transition"}`}>{report.title}</h3>
                <p className={`mt-2 text-sm ${locked ? "text-slate-400" : "text-slate-500"}`}>{report.description}</p>
                <div className="mt-4">
                  {locked ? (
                    <a href="/sign-up" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-cyan-300 hover:text-cyan-600">
                      <Lock size={13} />
                      Sign up to access
                    </a>
                  ) : (
                    <button className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-700">
                      <Download size={14} />
                      Download Report
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
