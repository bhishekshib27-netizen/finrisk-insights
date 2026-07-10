export const metadata = {
  title: "Methodology | FinRisk Insights",
  description: "How FinRisk Insights sources and verifies market data, regulatory updates, and analysis.",
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 sm:px-12 py-10 space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Editorial</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black">Methodology</h1>
        <p className="mt-2 text-sm text-neutral-400">Last updated: July 2026</p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
        <div>
          <h2 className="font-bold text-black text-base mb-2">1. Market Data</h2>
          <p>Foreign exchange rates are pulled live from our FX data provider and refresh automatically. SEMDEX and Repo Rate figures are currently updated manually following official announcements from the Stock Exchange of Mauritius and the Bank of Mauritius respectively — we are working toward fully automated feeds for both and will update this page when that changes.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">2. Regulatory Updates</h2>
          <p>Our regulatory feed draws from FSC, Bank of Mauritius, FATF, and ESAAMLG. Where a live feed exists (such as FSC's RSS feed) we use it directly; otherwise, updates are added manually as official bodies publish them, and each entry links to the original source page.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">3. Articles and Analysis</h2>
          <p>Insights articles are written or reviewed by our editorial team before publication. Where an article draws on a specific report, regulation, or dataset, we link to it directly rather than restating it without attribution.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">4. Job Listings</h2>
          <p>Careers listings are sourced from publicly posted roles at named employers, or submitted directly by employers via our Contact form. We link to the original posting for applicants to apply through the employer's own channel.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">5. Limitations</h2>
          <p>As an early-stage platform, some of our data (notably SEMDEX and the Repo Rate) is not yet fully real-time. We disclose this rather than presenting manually-updated figures as live feeds, and we prioritise accuracy over update speed.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">6. Questions</h2>
          <p>If you have questions about how a specific figure or update was sourced, contact us at <a href="mailto:hello@finriskinsight.com" className="text-blue-900 underline">hello@finriskinsight.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
