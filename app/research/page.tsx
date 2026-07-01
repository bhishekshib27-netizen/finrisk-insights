export const metadata = {
  title: "Research | FinRisk Insights",
  description: "Financial intelligence reports on Mauritius markets, regulation, and economy.",
};

export default function ResearchPage() {
  return (
    <div className="space-y-0">

      {/* Navy Hero */}
      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Research</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Research & Reports</h1>
          <p className="mt-3 max-w-xl text-blue-200">In-depth financial intelligence reports on Mauritius markets, regulation, and economy.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-8 sm:px-12 py-12 space-y-10">

        {/* Coming soon */}
        <div className="border border-neutral-200 bg-neutral-50 p-10 text-center space-y-4">
          <h2 className="text-lg font-bold text-black">Reports coming soon</h2>
          <p className="mx-auto max-w-md text-sm text-neutral-500">
            We are producing in-depth research reports on Mauritius financial markets, AML/CFT regulation, SEMDEX performance, and economic trends. Subscribe to be notified when our first report is published.
          </p>
          <a href="/newsletter" className="inline-flex items-center gap-2 bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
            Notify me
          </a>
        </div>

        {/* What we will cover */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">What we will cover</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { topic: "FX & Markets", desc: "MUR exchange rate dynamics, SEMDEX performance, and market outlook." },
              { topic: "AML & Compliance", desc: "Risk assessments, regulatory updates, and compliance frameworks for Mauritius." },
              { topic: "Banking Sector", desc: "Capital adequacy, NPL trends, and banking industry outlook." },
              { topic: "Economic Analysis", desc: "GDP, inflation, monetary policy, and economic forecasts." },
              { topic: "Regulatory Intelligence", desc: "FSC, Bank of Mauritius, and FATF developments analysed in depth." },
              { topic: "Global Business", desc: "GBC sector trends, IFC positioning, and international tax developments." },
            ].map((item, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-5 hover:border-blue-900 transition">
                <p className="font-bold text-black text-sm">{item.topic}</p>
                <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contribute CTA */}
        <div className="border border-neutral-200 bg-white p-8">
          <h2 className="font-bold text-black mb-1">Want to contribute research?</h2>
          <p className="text-sm text-neutral-500 mb-4">
            If you are a finance professional, economist, or compliance expert and want to contribute research to FinRisk Insights, get in touch.
          </p>
          <a href="mailto:hello@finriskinsight.com?subject=Research Contribution" className="inline-flex items-center gap-2 border border-blue-900 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white">
            Get in Touch
          </a>
        </div>

      </div>
    </div>
  );
}
