import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, Download, ArrowUpRight, Lock } from "lucide-react";

const reports = [
  { title: "Mauritius Banking Industry Outlook 2026", description: "Quarterly analysis of the Mauritian banking sector.", category: "Banking", date: "Q1 2026", premium: false },
  { title: "FX Outlook: MUR Dynamics Q2 2026", description: "In-depth look at rupee exchange rate trends and drivers.", category: "FX", date: "Apr 2026", premium: true },
];

export default function ResearchPanel() {
  return (
    <section className="space-y-5">
      <SectionHeader title="Featured Research" subtitle="Latest reports" action={{ label: "View all", href: "/research" }} />
      <div className="space-y-3">
        {reports.map((report, i) => (
          <div key={i} className="group relative border border-neutral-200 bg-white p-5 transition hover:border-black hover:shadow-md">
            <div className="mb-3 flex items-center gap-2">
              <BookOpen size={13} className="text-neutral-400" />
              <span className="border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-semibold text-neutral-600">{report.category}</span>
              <span className="text-xs text-neutral-400">{report.date}</span>
              {report.premium && (
                <span className="ml-auto flex items-center gap-1 border border-black bg-black px-2 py-0.5 text-xs font-semibold text-white">
                  <Lock size={10} /> Premium
                </span>
              )}
            </div>
            <h3 className="text-sm font-bold text-black group-hover:text-neutral-600 transition sm:text-base">{report.title}</h3>
            <p className="mt-1 text-xs text-neutral-500">{report.description}</p>
            <div className="mt-3 border-t border-neutral-100 pt-3">
              {report.premium ? (
                <a href="/research" className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:text-neutral-600 transition">
                  <ArrowUpRight size={13} /> Access Report
                </a>
              ) : (
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-700 transition">
                  <Download size={13} /> Download Free
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
