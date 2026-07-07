import { ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Podcast | FinRisk Insights",
  description: "The FinRisk Podcast — conversations on Mauritius finance, regulation, and economic intelligence.",
};

export default function PodcastPage() {
  return (
    <div className="space-y-0">

      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{height: "320px"}}>
        <img src="/podcast-bg.jpg" alt="The FinRisk Podcast" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{background: "linear-gradient(to right, rgba(5,10,30,0.92) 50%, rgba(5,10,30,0.6) 100%)"}} />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-5xl px-6 sm:px-12 w-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Audio Intelligence</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">The FinRisk Podcast</h1>
            <p className="mt-3 max-w-xl text-blue-100">Conversations on Mauritius finance, regulation, markets, and economic intelligence.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-12 space-y-10">

        {/* Coming soon */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Coming Soon</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">Episodes launching soon</h2>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              The FinRisk Podcast is in production. We will be featuring finance professionals, compliance officers, economists, and regulators from Mauritius and beyond — covering the stories, trends, and decisions shaping the Mauritius financial landscape.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "AML & financial crime in Mauritius",
                "SEMDEX performance and investor outlook",
                "FSC regulatory updates and compliance",
                "Mauritius as an IFC — opportunities and risks",
                "Career paths in Mauritius finance",
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 bg-blue-900" />
                  <p className="text-sm text-neutral-600">{topic}</p>
                </div>
              ))}
            </div>
            <a href="/newsletter" className="mt-8 inline-flex items-center gap-2 bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
              Notify me at launch
            </a>
          </div>

          <div className="hidden lg:block">
            <img
              src="/podcast-bg.jpg"
              alt="Podcast"
              className="w-full object-cover"
              style={{height: "360px", objectPosition: "center"}}
            />
          </div>
        </div>

        {/* Be a guest */}
        <div className="border border-neutral-200 bg-neutral-50 p-8">
          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-900 mb-2">Be a Guest</p>
              <h2 className="text-xl font-bold text-black">Want to be on the show?</h2>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                We are looking for finance professionals, compliance officers, economists, and entrepreneurs from Mauritius and beyond to feature on the show.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <a href="/contact" className="inline-flex items-center gap-2 bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
                Apply to be a Guest <ArrowRight size={14} />
              </a>
              <p className="text-xs text-neutral-400">We review all applications and reach out within 5 business days.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
