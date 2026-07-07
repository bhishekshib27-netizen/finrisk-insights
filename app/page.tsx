import Link from "next/link";
import FXRatesServer from "@/components/dashboard/FXRatesServer";
import MarketChartServer from "@/components/charts/MarketChartServer";
import AnimatedLayout from "@/components/dashboard/AnimatedLayout";
import NewsletterSignup from "@/components/newsletter/NewsletterSignup";
import SiteStats from "@/components/dashboard/SiteStats";
import { ArrowRight, BarChart2, BookOpen, Shield, Zap, ArrowUpRight, Clock } from "lucide-react";

export const revalidate = 60;

export default function Home() {
  return (
    <div className="space-y-0">

      {/* HERO */}
      <AnimatedLayout delay={0}>
        <section className="relative overflow-hidden" style={{minHeight: "50vh", display: "flex", alignItems: "center"}}>
          <div className="absolute inset-0 z-0">
            <img src="/hero-bg.jpg" alt="Mauritius" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0" style={{background: "linear-gradient(to right, rgba(5,15,40,0.75) 0%, rgba(5,15,40,0.4) 100%)"}} />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl px-8 py-12 sm:px-12 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{color: "#93c5fd"}}>
              Est. 2026 — Mauritius
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl xl:text-7xl">
              FinRisk Insights
              <span className="block text-white opacity-80">The Financial Platform</span>
              <span className="block text-white opacity-80">of Mauritius</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg" style={{color: "#e2e8f0"}}>
              Live markets, regulatory intelligence, research, and finance jobs — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/markets" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition" style={{background: "#1e3a8a"}}>
                Explore Markets <ArrowRight size={16} />
              </Link>
              <Link href="/research" className="inline-flex items-center gap-2 border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
                Browse Research
              </Link>
            </div>
          </div>
        </section>
      </AnimatedLayout>

            {/* ABOUT */}
      <AnimatedLayout delay={0.1}>
        <section className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-4xl px-8 py-20 sm:px-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Who We Are</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl leading-tight">
              FinRisk Insights is Mauritius's emerging financial intelligence platform
            </h2>
            <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              We deliver live market data, regulatory updates, research reports, and economic analysis — built for finance professionals, compliance officers, regulators, and investors.
            </p>
            <p className="mt-6 text-sm font-bold tracking-widest text-blue-900 uppercase">
              Mauritius &nbsp;|&nbsp; Zimbabwe
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-neutral-200 pt-10 max-w-md mx-auto">
              <div>
                <p className="text-3xl font-bold text-black">400+</p>
                <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider">Subscribers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">3</p>
                <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider">Reports</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">2026</p>
                <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider">Founded</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedLayout>

            {/* PARTNERS */}
      <AnimatedLayout delay={0.12}>
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-8 sm:px-12 py-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 text-center mb-6">Our Partners</p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <a href="https://www.wallstreetoasis.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 opacity-60 hover:opacity-100 transition">
                <img src="/partner-wso.png" alt="Wall Street Oasis" className="h-10 w-10 object-contain" />
                <div>
                  <p className="font-bold text-black text-sm group-hover:text-blue-900 transition">Wall Street Oasis</p>
                  <p className="text-xs text-neutral-400">wallstreetoasis.com</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* WHAT WE DO */}
      <AnimatedLayout delay={0.15}>
        <section className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

              {/* Left - Image */}
              <div className="hidden lg:block" style={{minHeight: "480px"}}>
                <img
                  src="/what-we-do-bg.jpg"
                  alt="Financial district"
                  className="w-full h-full object-cover object-center" style={{minHeight: "480px"}}
                />
              </div>

              {/* Right - Content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">What We Do</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Intelligence across every dimension
                </h2>
                <div className="mt-8 divide-y divide-neutral-100">
                  {[
                    { title: "Markets", description: "Live SEMDEX, FX rates, and economic indicators for Mauritius.", href: "/markets" },
                    { title: "Research", description: "In-depth reports on banking, regulation, and the Mauritian economy.", href: "/research" },
                    { title: "Regulation", description: "Real-time alerts from FSC, Bank of Mauritius, and FATF.", href: "/regulation" },
                    { title: "Insights", description: "Analysis and commentary from our editorial team.", href: "/insights" },
                    { title: "Careers", description: "Curated finance, compliance, and accounting jobs in Mauritius.", href: "/careers" },
                  ].map((item, i) => (
                    <Link key={i} href={item.href} className="group flex items-center justify-between py-4 transition hover:bg-neutral-50 px-2 -mx-2">
                      <div>
                        <h3 className="font-bold text-black group-hover:text-blue-900 transition">{item.title}</h3>
                        <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
                      </div>
                      <span className="ml-6 shrink-0 text-neutral-300 group-hover:text-blue-900 transition text-lg">→</span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* LIVE MARKETS */}
      <AnimatedLayout delay={0.2}>
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Live Data</p>
                <h2 className="mt-1 text-2xl font-bold text-black">Market Overview</h2>
              </div>
              <Link href="/markets" className="text-xs font-semibold text-blue-200 hover:text-white transition">
                Full Markets →
              </Link>
            </div>
            <FXRatesServer />
            <div className="mt-6">
              <MarketChartServer />
            </div>
          </div>
        </section>
      </AnimatedLayout>

                        {/* LATEST INSIGHTS */}
      <AnimatedLayout delay={0.25}>
        <LatestInsights />
      </AnimatedLayout>

      {/* REGULATION */}
      <AnimatedLayout delay={0.3}>
        <section className="border-b border-blue-950" style={{background:"#0f2654"}}>
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Compliance</p>
                <h2 className="mt-1 text-2xl font-bold text-white">Regulatory Updates</h2>
              </div>
              <Link href="/regulation" className="text-xs font-semibold text-blue-300 hover:text-white transition">
                View all →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { source: "FSC Mauritius", label: "Financial Services Commission", color: "bg-blue-800" },
                { source: "Bank of Mauritius", label: "Central Bank Updates", color: "bg-blue-800" },
                { source: "FATF", label: "Financial Action Task Force", color: "bg-blue-800" },
              ].map((item, i) => (
                <div key={i} className="border border-blue-800 p-6" style={{background:"rgba(255,255,255,0.05)"}}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">{item.source}</p>
                  <p className="mt-2 text-sm text-blue-100">{item.label}</p>
                  <p className="mt-4 text-xs text-blue-400">Updates coming soon</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-blue-400">
              We are monitoring FSC circulars, Bank of Mauritius guidance notes, and FATF developments. Subscribe to receive alerts by email.
            </p>
          </div>
        </section>
      </AnimatedLayout>

            {/* EVENTS */}
      <AnimatedLayout delay={0.35}>
        <section className="border-b border-neutral-200 bg-white overflow-hidden">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

              {/* Left - Content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Calendar</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">Upcoming Events</h2>
                <p className="mt-3 text-neutral-500 text-sm">Finance, compliance, and regulatory events in Mauritius — curated and updated as they are confirmed.</p>
                <div className="mt-8 divide-y divide-neutral-100">
                  {[
                    { type: "Conference", org: "FSC Mauritius", desc: "Annual regulatory summit and industry briefings." },
                    { type: "MPC Meeting", org: "Bank of Mauritius", desc: "Monetary Policy Committee rate decisions." },
                    { type: "Workshop", org: "ESAAMLG", desc: "Regional AML/CFT typologies and compliance workshops." },
                    { type: "Networking", org: "FinRisk Insights", desc: "Finance professionals networking evenings in Mauritius." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 py-4">
                      <span className="mt-0.5 shrink-0 inline-block bg-blue-900 px-2 py-0.5 text-xs font-semibold text-white">{item.type}</span>
                      <div>
                        <p className="font-bold text-black text-sm">{item.org}</p>
                        <p className="mt-0.5 text-xs text-neutral-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-neutral-400">
                  No confirmed dates yet — <Link href="/newsletter" className="text-blue-900 underline">subscribe</Link> to be notified when events are added.
                </p>
              </div>

              {/* Right - Image */}
              <div className="hidden lg:block">
                <img
                  src="/events-bg.jpg"
                  alt="Events"
                  className="w-full object-cover object-center"
                  style={{height: "480px"}}
                />
              </div>

            </div>
          </div>
        </section>
      </AnimatedLayout>

            {/* NEWSLETTER */}
      <AnimatedLayout delay={0.4}>
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Weekly Briefing</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">
                  Stay ahead of Mauritius finance
                </h2>
                <p className="mt-3 text-neutral-500">
                  Get the FinRisk Intelligence Briefing every week — markets, regulation, research, and events delivered to your inbox.
                </p>
                <div className="mt-6 space-y-2">
                  {["Live market updates", "Regulatory alerts", "Exclusive research", "Upcoming events"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="h-1.5 w-1.5 shrink-0 bg-blue-900" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </AnimatedLayout>

                  {/* FOOTER CTA */}
      <AnimatedLayout delay={0.45}>
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-12 py-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              {/* Left - Image */}
              <div className="hidden lg:block">
                <img
                  src="/contact-bg.jpg"
                  alt="Contact FinRisk Insights"
                  className="w-full object-cover object-center"
                  style={{height: "320px"}}
                />
              </div>

              {/* Right - Content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900 mb-3">Get in Touch</p>
                <h2 className="text-3xl font-bold text-black sm:text-4xl">Contact Us</h2>
                <p className="mt-4 text-neutral-500 text-sm leading-relaxed">
                  We are a small team — we read and respond to every message personally within 48 hours.
                </p>
                <div className="mt-6 space-y-2">
                  {["Press & Media enquiries", "Post a job listing", "Partnerships & sponsorships", "Podcast guest applications", "General questions"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="h-1.5 w-1.5 shrink-0 bg-blue-900" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                    Contact Us →
                  </Link>
                  <a href="mailto:hello@finriskinsight.com" className="inline-flex items-center justify-center gap-2 border border-blue-900 px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white">
                    hello@finriskinsight.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimatedLayout>

    </div>
  );
}
