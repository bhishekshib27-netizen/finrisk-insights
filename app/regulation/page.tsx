import { Shield, ExternalLink } from "lucide-react";

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

export default function RegulationPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-10">

      <div className="border-b border-neutral-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Compliance & Law</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Regulation</h1>
        <p className="mt-3 max-w-xl text-neutral-500">
          Regulatory updates from the FSC, Bank of Mauritius, FATF, and other bodies — coming soon. We will monitor and publish alerts here as they are issued.
        </p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Official Sources</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sources.map((src) => (
            <a key={src.name} href={src.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-neutral-200 bg-white p-4 transition hover:border-black">
              <div>
                <p className="text-sm font-semibold text-black">{src.name}</p>
                <p className="text-xs text-neutral-400">{src.description}</p>
              </div>
              <ExternalLink size={13} className="text-neutral-300 group-hover:text-black transition" />
            </a>
          ))}
        </div>
      </div>

      <div className="border border-neutral-200 bg-neutral-50 p-8">
        <div className="flex items-start gap-4">
          <Shield size={20} className="mt-0.5 shrink-0 text-neutral-400" />
          <div>
            <h2 className="font-bold text-black">Regulatory alerts coming soon</h2>
            <p className="mt-1 text-sm text-neutral-500">
              We are building a live feed of FSC circulars, Bank of Mauritius guidance notes, FATF updates, and AML/CFT developments. Check back regularly or subscribe to our newsletter to receive alerts by email.
            </p>
            <a href="/newsletter" className="mt-4 inline-flex items-center gap-2 bg-blue-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800">
              Subscribe for alerts
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
