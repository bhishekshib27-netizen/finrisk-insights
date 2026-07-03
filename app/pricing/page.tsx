import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Pricing | FinRisk Insights",
  description: "Free and Premium plans for FinRisk Insights — Mauritius financial intelligence platform.",
};

const free = [
  "Live SEMDEX & FX rates",
  "Full access to Insights & articles",
  "Finance Jobs in Mauritius",
  "Economic Calendar & Events",
  "Weekly Intelligence Briefing (newsletter)",
  "Regulatory updates",
];

const premium = [
  "Everything in Free",
  "In-depth Research Reports",
  "Early access to new content",
  "Priority regulatory alerts by email",
  "Exclusive AML & compliance analysis",
  "Direct access to the FinRisk team",
];

export default function PricingPage() {
  return (
    <div className="space-y-0">

      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-6 sm:px-12 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Pricing</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Simple, transparent pricing</h1>
          <p className="mt-3 max-w-xl mx-auto text-blue-200">Start free. Upgrade when you need deeper intelligence.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-12 space-y-12">

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="border border-neutral-200 bg-white p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Free</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-bold text-black">MUR 0</p>
                <p className="text-neutral-400 mb-1">/ month</p>
              </div>
              <p className="mt-2 text-sm text-neutral-500">Everything you need to stay informed on Mauritius finance.</p>
            </div>
            <div className="space-y-3 flex-1 mb-8">
              {free.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 shrink-0 text-blue-900" />
                  <p className="text-sm text-neutral-600">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/newsletter" className="inline-flex items-center justify-center gap-2 border border-blue-900 px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white">
              Get Started Free
            </Link>
          </div>

          <div className="border-2 border-blue-900 bg-white p-8 flex flex-col relative">
            <div className="absolute top-0 right-6 -translate-y-1/2">
              <span className="bg-blue-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Coming Soon</span>
            </div>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-900 mb-2">Premium</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-bold text-black">MUR 300</p>
                <p className="text-neutral-400 mb-1">/ month</p>
              </div>
              <p className="mt-2 text-sm text-neutral-500">For finance professionals who need deeper intelligence and research.</p>
            </div>
            <div className="space-y-3 flex-1 mb-8">
              {premium.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 shrink-0 text-blue-900" />
                  <p className="text-sm text-neutral-600">{item}</p>
                </div>
              ))}
            </div>
            <a href="mailto:hello@finriskinsight.com?subject=FinRisk Premium Interest" className="inline-flex items-center justify-center gap-2 bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
              Express Interest <ArrowUpRight size={16} />
            </a>
            <p className="mt-3 text-xs text-neutral-400 text-center">Premium launching soon. Express interest to be notified first.</p>
          </div>

        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">Frequently Asked Questions</p>
          <div className="divide-y divide-neutral-100 border border-neutral-200">
            {[
              { q: "Is FinRisk Insights really free?", a: "Yes. Markets, Insights, Careers, Events, and the weekly newsletter are completely free with no paywalls or hidden costs." },
              { q: "When will Premium launch?", a: "We are currently building the Premium tier. Express your interest and we will notify you the moment it launches." },
              { q: "What research reports will Premium include?", a: "In-depth reports on Mauritius financial markets, AML/CFT regulation, SEMDEX performance, FX outlook, and economic analysis." },
              { q: "Can I cancel anytime?", a: "Yes. Premium will be a monthly subscription with no long-term commitment. Cancel anytime." },
              { q: "Is there a discount for students or teams?", a: "We plan to offer student and team pricing. Get in touch to discuss your needs." },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <p className="font-bold text-black text-sm mb-2">{item.q}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-blue-900 p-8 text-center" style={{background:"#0f2654"}}>
          <h2 className="text-xl font-bold text-white mb-2">Start with Free today</h2>
          <p className="text-blue-200 text-sm mb-6">No credit card. No commitment. Just Mauritius financial intelligence.</p>
          <Link href="/newsletter" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50">
            Subscribe to Newsletter <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
