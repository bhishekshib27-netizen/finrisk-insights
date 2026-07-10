export const metadata = {
  title: "Editorial Standards | FinRisk Insights",
  description: "How FinRisk Insights reports, sources, and publishes financial and regulatory content.",
};

export default function EditorialStandardsPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 sm:px-12 py-10 space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Editorial</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black">Editorial Standards</h1>
        <p className="mt-2 text-sm text-neutral-400">Last updated: July 2026</p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
        <div>
          <h2 className="font-bold text-black text-base mb-2">1. Who We Are</h2>
          <p>FinRisk Insights is an independent, early-stage financial intelligence platform covering markets, regulation, and compliance in Mauritius. We are a small, growing team — we believe transparency about our size and stage matters as much as transparency about our sourcing.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">2. Independence</h2>
          <p>FinRisk Insights is editorially independent. We are not owned or controlled by any bank, regulator, government body, or financial institution we cover. Where we have a partnership or commercial relationship with an organisation referenced in our content, we disclose it.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">3. Sourcing</h2>
          <p>Regulatory updates are sourced directly from primary sources — the FSC, Bank of Mauritius, FATF, ESAAMLG, and other official bodies — and linked to their original publication wherever possible. Market data is sourced from the providers disclosed on our Methodology page. Where we report on a topic without primary-source access, we say so.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">4. Accuracy</h2>
          <p>We aim to publish accurate information and to correct errors quickly and visibly when we get something wrong. See our Corrections Policy for how we handle mistakes.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">5. What We Don't Do</h2>
          <p>We do not give personalised financial, investment, legal, or regulatory advice. We do not accept payment in exchange for favourable coverage. We do not publish sponsored content without clearly labelling it as such.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">6. Contact</h2>
          <p>Questions about our editorial approach can be sent to <a href="mailto:hello@finriskinsight.com" className="text-blue-900 underline">hello@finriskinsight.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
