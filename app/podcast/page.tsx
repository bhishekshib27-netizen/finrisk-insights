import { Mic, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Podcast | FinRisk Insights",
  description: "The FinRisk Podcast — conversations on Mauritius finance, regulation, and economic intelligence.",
};

export default function PodcastPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-10">

      <div className="border-b border-neutral-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Audio Intelligence</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">The FinRisk Podcast</h1>
        <p className="mt-3 max-w-xl text-neutral-500">
          Conversations on Mauritius finance, regulation, markets, and economic intelligence.
        </p>
      </div>

      <div className="border border-neutral-200 bg-neutral-50 p-10 text-center space-y-4">
        <div className="mx-auto flex h-16 w-16 items-center justify-center border border-neutral-200 bg-white">
          <Mic size={28} className="text-neutral-400" />
        </div>
        <h2 className="text-lg font-bold text-black">Episodes coming soon</h2>
        <p className="mx-auto max-w-md text-sm text-neutral-500">
          The FinRisk Podcast is in production. We will be featuring finance professionals, compliance officers, economists, and regulators from Mauritius and beyond. Subscribe to be notified when we launch.
        </p>
        <a href="/newsletter" className="inline-flex items-center gap-2 bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
          Notify me at launch
        </a>
      </div>

      <div className="border border-neutral-200 bg-white p-8">
        <h2 className="font-bold text-black mb-1">Want to be a guest?</h2>
        <p className="text-sm text-neutral-500 mb-4">
          We are looking for finance professionals, compliance officers, economists, and entrepreneurs from Mauritius and beyond to feature on the show.
        </p>
        <a href="mailto:hello@finriskinsight.com?subject=FinRisk Podcast Guest" className="inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold text-black transition hover:bg-blue-900 hover:text-white">
          Get in Touch <ExternalLink size={13} />
        </a>
      </div>

    </div>
  );
}
