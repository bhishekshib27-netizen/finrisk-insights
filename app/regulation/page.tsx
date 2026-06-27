import { Shield, ExternalLink, AlertCircle, CheckCircle, Clock } from "lucide-react";

export const metadata = {
  title: "Regulation | FinRisk Insights",
  description: "Latest regulatory updates from FSC, Bank of Mauritius, and FATF.",
};

const alerts = [
  { id: "1", title: "FSC issues updated AML/CFT guidance for investment firms", body: "The FSC has published revised AML/CFT guidelines for all licensed investment firms. Firms must update compliance frameworks by Q3 2026.", source: "FSC Mauritius", date: "June 20, 2026", status: "action-required", category: "AML/CFT", href: "https://www.fscmauritius.org" },
  { id: "2", title: "Bank of Mauritius maintains Key Rate at 4.50%", body: "The MPC met on June 10, 2026 and resolved to maintain the Key Rate at 4.50%, citing stable inflation expectations and resilient domestic demand.", source: "Bank of Mauritius", date: "June 10, 2026", status: "informational", category: "Monetary Policy", href: "https://www.bom.mu" },
  { id: "3", title: "New consultation paper on virtual asset service providers", body: "The FSC has released a consultation paper on an updated regulatory framework for VASPs. Public comments open until July 31, 2026.", source: "FSC Mauritius", date: "June 5, 2026", status: "consultation", category: "Virtual Assets", href: "https://www.fscmauritius.org" },
  { id: "4", title: "FATF removes Mauritius from enhanced monitoring list", body: "The FATF has confirmed Mauritius has been fully removed from its list of jurisdictions under increased monitoring.", source: "FATF", date: "May 28, 2026", status: "positive", category: "FATF", href: "https://www.fatf-gafi.org" },
  { id: "5", title: "BOM issues guidance on cyber resilience for banks", body: "All commercial banks must implement enhanced cyber resilience frameworks by December 2026, including mandatory incident reporting within 24 hours.", source: "Bank of Mauritius", date: "May 15, 2026", status: "action-required", category: "Cybersecurity", href: "https://www.bom.mu" },
  { id: "6", title: "FSC Annual Report 2025 published", body: "The FSC Annual Report 2025 highlights growth in the global business sector, licensing activity, and enforcement actions taken during the year.", source: "FSC Mauritius", date: "May 10, 2026", status: "informational", category: "Annual Report", href: "https://www.fscmauritius.org" },
];

const sources = [
  { name: "FSC Mauritius", href: "https://www.fscmauritius.org", description: "Financial Services Commission" },
  { name: "Bank of Mauritius", href: "https://www.bom.mu", description: "Central Bank" },
  { name: "FATF", href: "https://www.fatf-gafi.org", description: "Financial Action Task Force" },
  { name: "ESAAMLG", href: "https://www.esaamlg.org", description: "Regional AML Body" },
];

const categoryColors: Record<string, string> = {
  "AML/CFT": "bg-rose-50 text-rose-600",
  "Monetary Policy": "bg-blue-50 text-blue-600",
  "Virtual Assets": "bg-violet-50 text-violet-600",
  "FATF": "bg-emerald-50 text-emerald-600",
  "Cybersecurity": "bg-amber-50 text-amber-600",
  "Annual Report": "bg-cyan-50 text-cyan-600",
};

function StatusBadge({ status }: { status: string }) {
  if (status === "action-required") {
    return (
      <span className="flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
        <AlertCircle size={12} />
        Action Required
      </span>
    );
  }
  if (status === "consultation") {
    return (
      <span className="flex items-center gap-1.5 rounded-full border border-amber-100 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600">
        <Clock size={12} />
        Open Consultation
      </span>
    );
  }
  if (status === "positive") {
    return (
      <span className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
        <CheckCircle size={12} />
        Positive Update
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-500">
      <Clock size={12} />
      Informational
    </span>
  );
}

export default function RegulationPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs uppercase tracking-widest text-cyan-600">Compliance and Law</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Regulation</h1>
        <p className="mt-3 text-slate-500">Latest regulatory updates from the FSC, Bank of Mauritius, FATF, and other bodies.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sources.map((src) => (
          <a key={src.name} href={src.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-cyan-200 hover:shadow-md">
            <div>
              <p className="text-sm font-semibold text-slate-900 group-hover:text-cyan-600 transition">{src.name}</p>
              <p className="text-xs text-slate-400">{src.description}</p>
            </div>
            <ExternalLink size={14} className="text-slate-300 group-hover:text-cyan-500 transition" />
          </a>
        ))}
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-slate-900">Regulatory Alerts</h2>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <StatusBadge status={alert.status} />
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[alert.category] ?? "bg-slate-100 text-slate-600"}`}>{alert.category}</span>
                <span className="ml-auto text-xs text-slate-400">{alert.date}</span>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">{alert.title}</h3>
              <p className="text-sm text-slate-500">{alert.body}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Shield size={13} className="text-slate-400" />
                  <span className="text-xs text-slate-400">{alert.source}</span>
                </div>
                <a href={alert.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition">
                  View source
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
