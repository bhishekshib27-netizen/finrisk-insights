import { ExternalLink, Newspaper } from "lucide-react";

export const metadata = {
  title: "Press & Media | FinRisk Insights",
  description: "FinRisk Insights in the press — media mentions, coverage, and resources for journalists.",
};

export default function PressPage() {
  return (
    <div className="space-y-0">

      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{height: "280px"}}>
        <img src="/press-bg.png" alt="FinRisk Insights" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{background: "linear-gradient(to right, rgba(5,15,45,0.85) 50%, rgba(5,15,45,0.5) 100%)"}} />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-5xl px-6 sm:px-12 w-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Press & Media</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">In the Press</h1>
            <p className="mt-3 max-w-xl text-blue-100">
              Media mentions, coverage, and resources for journalists writing about Mauritius finance and FinRisk Insights.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-12 space-y-12">

        {/* No coverage yet */}
        <div className="border border-neutral-200 bg-neutral-50 p-10 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center border border-neutral-200 bg-white">
            <Newspaper size={24} className="text-blue-900" />
          </div>
          <h2 className="text-lg font-bold text-black">Coverage coming soon</h2>
          <p className="mx-auto max-w-md text-sm text-neutral-500">
            We are building Mauritius's leading financial intelligence platform. Press coverage and media mentions will be listed here as they are published.
          </p>
        </div>

        {/* Press contact */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border border-neutral-200 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-900 mb-3">Press Contact</p>
            <h2 className="text-xl font-bold text-black mb-2">Media Enquiries</h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              For interviews, data requests, comment on Mauritius financial markets, or press enquiries about FinRisk Insights, contact us directly.
            </p>
            <a href="mailto:hello@finriskinsight.com?subject=Press Enquiry" className="inline-flex items-center gap-2 bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
              Contact Press Team <ExternalLink size={14} />
            </a>
          </div>

          <div className="border border-neutral-200 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-900 mb-3">About FinRisk Insights</p>
            <h2 className="text-xl font-bold text-black mb-2">Quick Facts</h2>
            <div className="space-y-3">
              {[
                { label: "Founded", value: "2026" },
                { label: "HQ", value: "Mauritius" },
                { label: "Presence", value: "Mauritius | Zimbabwe" },
                { label: "Focus", value: "Financial intelligence for Mauritius" },
                { label: "Subscribers", value: "400+" },
                { label: "Team", value: "10+ contributors" },
                { label: "Website", value: "finriskinsight.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-semibold text-black">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assets */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">Brand Assets</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Logo (PNG)", desc: "Navy globe logo, white background", action: "Download" },
              { title: "Brand Guidelines", desc: "Colours, typography, and usage rules", action: "Coming soon" },
              { title: "Founder Bio", desc: "Official biography and headshot", action: "Coming soon" },
            ].map((asset, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-5">
                <p className="font-bold text-black text-sm">{asset.title}</p>
                <p className="mt-1 text-xs text-neutral-400">{asset.desc}</p>
                <p className="mt-4 text-xs font-semibold text-blue-900">{asset.action}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
