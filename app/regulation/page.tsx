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

      {/* Split: Gavel photo + Coming soon */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <img
                src="/category-compliance.jpg"
                alt="Regulation"
                className="w-full object-cover"
                style={{height: "380px", objectPosition: "center"}}
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Regulatory Alerts</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">Coming soon</h2>
              <p className="mt-4 text-neutral-500 leading-relaxed">
                We are building a live feed of FSC circulars, Bank of Mauritius guidance notes, FATF updates, and AML/CFT developments. Check back regularly or subscribe to receive alerts by email.
              </p>
              <a href="/newsletter" className="mt-6 inline-flex items-center gap-2 bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
                Subscribe for alerts
              </a>
            </div>

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
