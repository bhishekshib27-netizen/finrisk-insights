import { Shield, ExternalLink } from "lucide-react";
import { getAllRegulatoryUpdates } from "@/lib/api/regulatory";

export const revalidate = 3600;

export const metadata = {
  title: "Regulation | FinRisk Insights",
  description: "Regulatory updates from FSC, Bank of Mauritius, FATF and other bodies.",
};

const sources = [
  { name: "FSC Mauritius", href: "https://www.fscmauritius.org", description: "Financial Services Commission" },
  { name: "Bank of Mauritius", href: "https://www.bom.mu", description: "Central Bank" },
  { name: "FATF", href: "https://www.fatf-gafi.org", description: "Financial Action Task Force" },
  { name: "ESAAMLG", href: "https://www.esaamlg.org", description: "Regional AML Body" },
];

export default async function RegulationPage() {
  const updates = await getAllRegulatoryUpdates();

  return (
    <div className="space-y-0">

      {/* Navy Header */}
      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Compliance & Law</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Regulation</h1>
          <p className="mt-3 max-w-xl text-blue-200">
            Regulatory updates from the FSC, Bank of Mauritius, FATF, and other bodies — monitored and published here as they are issued.
          </p>
        </div>
      </div>

      {/* Updates List */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-900 mb-8">Latest Updates</p>
          <div className="space-y-3">
            {updates.map((item) => (
              
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 border border-neutral-200 border-l-4 border-l-blue-900 bg-white p-5 transition hover:shadow-sm"
              >
                <Shield size={14} className="mt-0.5 shrink-0 text-blue-900" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-black group-hover:text-blue-900 transition">{item.title}</p>
                  <div className="mt-1.5 flex items-center gap-2 text-xs text-neutral-400">
                    <span className="font-semibold text-neutral-500">{item.source}</span>
                    <span>·</span>
                    <span>{item.category}</span>
                    <span>·</span>
                    <span>{item.date}</span>
                  </div>
                </div>
                <ExternalLink size={13} className="mt-0.5 shrink-0 text-neutral-300 group-hover:text-blue-900 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Official Sources */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">Official Sources</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sources.map((src) => (
              <a key={src.name} href={src.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-neutral-200 bg-white p-4 transition hover:border-blue-900">
                <div>
                  <p className="text-sm font-semibold text-black group-hover:text-blue-900 transition">{src.name}</p>
                  <p className="text-xs text-neutral-400">{src.description}</p>
                </div>
                <ExternalLink size={13} className="text-neutral-300 group-hover:text-blue-900 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
