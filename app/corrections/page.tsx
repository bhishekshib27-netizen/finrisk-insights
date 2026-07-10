export const metadata = {
  title: "Corrections Policy | FinRisk Insights",
  description: "How FinRisk Insights handles errors and corrections.",
};

export default function CorrectionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 sm:px-12 py-10 space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Editorial</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black">Corrections Policy</h1>
        <p className="mt-2 text-sm text-neutral-400">Last updated: July 2026</p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
        <div>
          <h2 className="font-bold text-black text-base mb-2">1. Our Commitment</h2>
          <p>We aim to publish accurate information, and we take it seriously when we get something wrong. If you spot an error in anything we've published — a figure, a date, a name, or a broader factual claim — we want to know about it.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">2. How to Report an Error</h2>
          <p>Email <a href="mailto:hello@finriskinsight.com" className="text-blue-900 underline">hello@finriskinsight.com</a> with a link to the content in question and a description of the issue. We review every report we receive.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">3. What We Do</h2>
          <p>Factual errors are corrected as soon as they're verified. For significant corrections, we note the change and the date it was made at the bottom of the affected article. Minor corrections (typos, formatting) are fixed without a formal note.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">4. Data Updates</h2>
          <p>Market and regulatory data is inherently time-sensitive. Figures that change because the underlying reality changed (a rate decision, a new circular) are not corrections — they're updates. We distinguish between "this was wrong when published" and "this is now out of date" in how we handle each.</p>
        </div>
      </div>
    </div>
  );
}
