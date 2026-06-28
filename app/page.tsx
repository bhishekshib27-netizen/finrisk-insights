import Link from "next/link";
import FXRatesServer from "@/components/dashboard/FXRatesServer";
import MarketChartServer from "@/components/charts/MarketChartServer";
import AnimatedLayout from "@/components/dashboard/AnimatedLayout";
import NewsletterSignup from "@/components/newsletter/NewsletterSignup";
import SiteStats from "@/components/dashboard/SiteStats";
import { ArrowRight, BarChart2, BookOpen, Shield, Zap, ArrowUpRight, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-0">

      {/* HERO */}
      <AnimatedLayout delay={0}>
        <section className="relative overflow-hidden" style={{minHeight: "60vh", display: "flex", alignItems: "center"}}>
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
              FinRisk Insights is Mauritius's leading financial intelligence platform
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

      {/* WHAT WE DO */}
      <AnimatedLayout delay={0.15}>
        <section className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">What We Do</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Intelligence across every dimension
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <BarChart2 size={20} />, title: "Markets", description: "Live SEMDEX, FX rates, and economic indicators for Mauritius.", href: "/markets" },
                { icon: <BookOpen size={20} />, title: "Research", description: "In-depth reports on banking, regulation, and the Mauritian economy.", href: "/research" },
                { icon: <Shield size={20} />, title: "Regulation", description: "Real-time alerts from FSC, Bank of Mauritius, and FATF.", href: "/regulation" },
                { icon: <Zap size={20} />, title: "Insights", description: "Analysis and commentary from our editorial team.", href: "/insights" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="group border border-neutral-200 bg-white p-6 transition hover:border-black hover:shadow-md">
                  <div className="mb-4 text-black">{item.icon}</div>
                  <h3 className="font-bold text-black group-hover:text-neutral-600 transition">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500">{item.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-black group-hover:text-neutral-600 transition">
                    Explore <ArrowUpRight size={12} />
                  </div>
                </Link>
              ))}
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
              <Link href="/markets" className="text-xs font-semibold text-black hover:text-neutral-600 transition">
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
        <section className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Intelligence</p>
                <h2 className="mt-1 text-2xl font-bold text-black">Latest Insights</h2>
              </div>
              <Link href="/insights" className="text-xs font-semibold text-black hover:text-neutral-600 transition">
                View all →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { category: "Markets", title: "SEMDEX closes higher amid strong banking performance", date: "Jun 25, 2026", readTime: "4 min", slug: "semdex-closes-higher-banking-performance" },
                { category: "Compliance", title: "Key AML developments every compliance officer should know", date: "Jun 22, 2026", readTime: "6 min", slug: "aml-developments-compliance-officers" },
                { category: "Economy", title: "What the latest inflation figures mean for Mauritius", date: "Jun 18, 2026", readTime: "5 min", slug: "inflation-figures-mauritius" },
              ].map((item, i) => (
                <Link key={i} href={`/insights/${item.slug}`} className="group border border-neutral-200 bg-white p-5 transition hover:border-black hover:shadow-md">
                  <span className="inline-block border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-semibold text-neutral-600">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-black group-hover:text-neutral-600 transition leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
                    <span>{item.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} />{item.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* REGULATION */}
      <AnimatedLayout delay={0.3}>
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Compliance</p>
                <h2 className="mt-1 text-2xl font-bold text-black">Regulatory Updates</h2>
              </div>
              <Link href="/regulation" className="text-xs font-semibold text-black hover:text-neutral-600 transition">
                View all →
              </Link>
            </div>
            <div className="flex items-start gap-4 border border-l-4 border-neutral-200 border-l-black bg-white p-5">
              <div className="flex-1">
                <p className="text-sm font-medium text-black">Regulatory updates coming soon. Check back for FSC, Bank of Mauritius, and FATF alerts.</p>
                <p className="mt-1 text-xs text-neutral-400">Stay tuned</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* EVENTS */}
      <AnimatedLayout delay={0.35}>
        <section className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Calendar</p>
                <h2 className="mt-1 text-2xl font-bold text-black">Upcoming Events</h2>
              </div>
              <Link href="/events" className="text-xs font-semibold text-black hover:text-neutral-600 transition">
                View all →
              </Link>
            </div>
            <div className="border border-neutral-200 bg-white p-5 text-sm text-neutral-500">
              No upcoming events yet — check back soon.
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
        <section className="bg-blue-900">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The Financial Platform of Mauritius
            </h2>
            <p className="mt-4 text-neutral-400">
              Join finance professionals, compliance officers, and investors who rely on FinRisk Insights.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/sign-up" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100">
                Get Started Free <ArrowRight size={16} />
              </Link>
              <Link href="/markets" className="inline-flex items-center gap-2 border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
                Explore Markets
              </Link>
            </div>
          </div>
        </section>
      </AnimatedLayout>

    </div>
  );
}
