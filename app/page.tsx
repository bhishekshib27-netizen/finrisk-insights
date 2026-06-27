import Link from "next/link";
import FXRatesServer from "@/components/dashboard/FXRatesServer";
import MarketChartServer from "@/components/charts/MarketChartServer";
import AnimatedLayout from "@/components/dashboard/AnimatedLayout";
import NewsletterSignup from "@/components/newsletter/NewsletterSignup";
import { ArrowRight, BarChart2, BookOpen, Shield, Zap, ArrowUpRight, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-0">

      {/* HERO */}
      <AnimatedLayout delay={0}>
        <section className="border-b border-neutral-200 bg-white px-8 py-20 md:px-12 md:py-32">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
              Est. 2024 — Mauritius
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-black sm:text-6xl xl:text-7xl">
              FinRisk Insights
              <span className="block text-neutral-400">The Financial Platform</span>
              <span className="block text-neutral-400">of Mauritius</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-500">
              The Financial Platform of Mauritius
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/markets" className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Explore Markets <ArrowRight size={16} />
              </Link>
              <Link href="/research" className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 text-sm font-semibold text-black transition hover:border-black">
                Browse Research
              </Link>
            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* ABOUT */}
      <AnimatedLayout delay={0.1}>
        <section className="border-b border-neutral-200 bg-neutral-50 px-8 py-16 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Who We Are</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  About FinRisk Insights
                </h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-neutral-600">
                  FinRisk Insights is Mauritius's emerging financial intelligence platform, built for finance professionals, compliance officers, regulators, and investors. We deliver live market data, regulatory updates, research reports, and economic analysis — all in one place. Our mission is to make professional-grade financial intelligence accessible to everyone in Mauritius.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
                  <div>
                    <p className="text-2xl font-bold text-black">1,200+</p>
                    <p className="mt-1 text-xs text-neutral-400">Subscribers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-black">48</p>
                    <p className="mt-1 text-xs text-neutral-400">Reports</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-black">12</p>
                    <p className="mt-1 text-xs text-neutral-400">Podcast Episodes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* WHAT WE DO */}
      <AnimatedLayout delay={0.15}>
        <section className="border-b border-neutral-200 bg-white px-8 py-16 md:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-600">What We Do</p>
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
        <section className="border-b border-neutral-200 bg-neutral-50 px-8 py-16 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Live Data</p>
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
        <section className="border-b border-neutral-200 bg-white px-8 py-16 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Intelligence</p>
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
        <section className="border-b border-neutral-200 bg-neutral-50 px-8 py-16 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Compliance</p>
                <h2 className="mt-1 text-2xl font-bold text-black">Regulatory Updates</h2>
              </div>
              <Link href="/regulation" className="text-xs font-semibold text-black hover:text-neutral-600 transition">
                View all →
              </Link>
            </div>

            <div className="space-y-3">
              {[
                { text: "FSC issues updated guidance on AML/CFT compliance.", date: "Jun 2026", type: "warning" },
                { text: "Bank of Mauritius maintains the Key Rate at 4.50%.", date: "Jun 2026", type: "info" },
                { text: "New consultation paper released on virtual assets.", date: "May 2026", type: "positive" },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 border border-l-4 bg-white p-5 ${item.type === "warning" ? "border-amber-100 border-l-amber-400" : item.type === "positive" ? "border-green-100 border-l-green-500" : "border-neutral-200 border-l-black"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black">{item.text}</p>
                    <p className="mt-1 text-xs text-neutral-400">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* EVENTS */}
      <AnimatedLayout delay={0.35}>
        <section className="border-b border-neutral-200 bg-white px-8 py-16 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Calendar</p>
                <h2 className="mt-1 text-2xl font-bold text-black">Upcoming Events</h2>
              </div>
              <Link href="/events" className="text-xs font-semibold text-black hover:text-neutral-600 transition">
                View all →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Financial Crime Society Networking Night", date: "Jul 15, 2026", location: "Curtin Mauritius", type: "in-person" },
                { title: "FinRisk Webinar: Understanding AML", date: "Aug 5, 2026", location: "Online", type: "online" },
                { title: "MPC Meeting — Bank of Mauritius", date: "Sep 10, 2026", location: "Port Louis", type: "in-person" },
              ].map((event, i) => (
                <Link key={i} href="/events" className="group border border-neutral-200 bg-white p-5 transition hover:border-black hover:shadow-md">
                  <span className={`inline-block border px-2 py-0.5 text-xs font-semibold ${event.type === "online" ? "border-green-200 bg-green-50 text-green-700" : "border-neutral-200 bg-neutral-50 text-neutral-600"}`}>
                    {event.type === "online" ? "Online" : "In Person"}
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-black group-hover:text-neutral-600 transition leading-snug">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400">{event.date} · {event.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* NEWSLETTER */}
      <AnimatedLayout delay={0.4}>
        <section className="border-b border-neutral-200 bg-neutral-50 px-8 py-16 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Weekly Briefing</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">
                  Stay ahead of Mauritius finance
                </h2>
                <p className="mt-3 text-neutral-500">
                  Get the FinRisk Intelligence Briefing every week — markets, regulation, research, and events delivered to your inbox.
                </p>
                <div className="mt-6 space-y-2">
                  {["Live market updates", "Regulatory alerts", "Exclusive research", "Upcoming events"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="h-1.5 w-1.5 shrink-0 bg-green-500" />
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
        <section className="bg-black px-8 py-16 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The Financial Platform of Mauritius
            </h2>
            <p className="mt-4 text-neutral-400">
              Join thousands of finance professionals, compliance officers, and investors who rely on FinRisk Insights.
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
