export const metadata = {
  title: "Testimonials | FinRisk Insights",
  description: "What finance professionals say about FinRisk Insights.",
};

const testimonials = [
  {
    name: "Denver Makama",
    title: "Financial Crime & Compliance | KYC/AML/CFT | Fraud Detection & EDD | Risk & Governance",
    quote: "The hardest part of AML is not identifying risk, it is the judgment calls that come after. I completed an AML advisory simulation by FinRisk Insights, and the moments that actually tested me were not technical — they were judgment calls: when to escalate vs. continue monitoring, how to balance growth targets with proportional controls, and when blanket KYC restrictions do more harm than good. Strong compliance frameworks are not about being overly restrictive — they are about being deliberate and consistent in how risk is assessed and managed.",
    source: "LinkedIn",
    sourceUrl: "https://www.linkedin.com/company/finrisk-insights",
    initials: "DM",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="space-y-0">

      {/* Navy Hero */}
      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-6 sm:px-12 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Trust & Credibility</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">What People Say</h1>
          <p className="mt-3 max-w-xl text-blue-200">
            Feedback from finance professionals, compliance officers, and practitioners who have used FinRisk Insights.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-12 space-y-10">

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-neutral-200 bg-white p-8 flex flex-col justify-between hover:border-blue-900 transition hover:shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm" style={{background:"#1e3a8a"}}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">{t.name}</p>
                    <p className="text-xs text-neutral-400 leading-tight mt-0.5">{t.title}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed italic">"{t.quote}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-400">via {t.source}</span>
                <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-900 hover:text-blue-700 transition">
                  View post →
                </a>
              </div>
            </div>
          ))}

          {/* Coming soon card */}
          <div className="border border-dashed border-neutral-200 bg-neutral-50 p-8 flex flex-col items-center justify-center text-center">
            <p className="font-bold text-neutral-400 text-sm">More testimonials coming soon</p>
            <p className="mt-2 text-xs text-neutral-400 max-w-xs">
              Are you a finance professional who has used FinRisk Insights? We would love to hear from you.
            </p>
            <a href="mailto:hello@finriskinsight.com?subject=Testimonial" className="mt-4 inline-flex items-center gap-2 border border-blue-900 px-4 py-2 text-xs font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white">
              Share your feedback
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border border-neutral-200 bg-neutral-50 p-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-black">400+</p>
              <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider">Subscribers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black">10+</p>
              <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider">Team Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black">2026</p>
              <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider">Founded</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
