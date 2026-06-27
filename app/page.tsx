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
        <section className="relative border-b border-neutral-800 overflow-hidden bg-black">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            {([[120,80],[140,80],[160,80],[180,80],[110,90],[130,90],[150,90],[170,90],[190,90],[100,100],[120,100],[140,100],[160,100],[180,100],[200,100],[90,110],[110,110],[130,110],[150,110],[170,110],[190,110],[210,110],[80,120],[100,120],[120,120],[140,120],[160,120],[180,120],[200,120],[220,120],[80,130],[100,130],[120,130],[140,130],[160,130],[180,130],[200,130],[90,140],[110,140],[130,140],[150,140],[170,140],[190,140],[100,150],[120,150],[140,150],[160,150],[110,160],[130,160],[150,160],[120,170],[140,170],[430,60],[450,60],[470,60],[490,60],[510,60],[530,60],[550,60],[570,60],[590,60],[610,60],[420,70],[440,70],[460,70],[480,70],[500,70],[520,70],[540,70],[560,70],[580,70],[600,70],[620,70],[640,70],[430,80],[450,80],[470,80],[490,80],[510,80],[530,80],[550,80],[570,80],[590,80],[610,80],[630,80],[650,80],[670,80],[690,80],[710,80],[440,90],[460,90],[480,90],[500,90],[520,90],[540,90],[560,90],[580,90],[600,90],[620,90],[640,90],[660,90],[680,90],[700,90],[720,90],[740,90],[760,90],[780,90],[800,90],[820,90],[840,90],[860,90],[880,90],[450,100],[470,100],[490,100],[510,100],[530,100],[550,100],[570,100],[590,100],[610,100],[630,100],[650,100],[670,100],[690,100],[710,100],[730,100],[750,100],[770,100],[790,100],[810,100],[830,100],[850,100],[870,100],[890,100],[910,100],[930,100],[950,100],[970,100],[990,100],[460,110],[480,110],[500,110],[520,110],[540,110],[560,110],[580,110],[600,110],[620,110],[640,110],[660,110],[680,110],[700,110],[720,110],[740,110],[760,110],[780,110],[800,110],[820,110],[840,110],[860,110],[880,110],[900,110],[920,110],[940,110],[960,110],[980,110],[1000,110],[1020,110],[1040,110],[470,120],[490,120],[510,120],[530,120],[550,120],[570,120],[590,120],[610,120],[630,120],[650,120],[670,120],[690,120],[710,120],[730,120],[750,120],[770,120],[790,120],[810,120],[830,120],[850,120],[870,120],[890,120],[910,120],[930,120],[950,120],[970,120],[990,120],[1010,120],[1030,120],[1050,120],[480,130],[500,130],[520,130],[540,130],[560,130],[580,130],[600,130],[620,130],[640,130],[660,130],[680,130],[700,130],[720,130],[740,130],[760,130],[780,130],[800,130],[820,130],[840,130],[860,130],[880,130],[900,130],[920,130],[940,130],[960,130],[980,130],[1000,130],[490,140],[510,140],[530,140],[550,140],[570,140],[590,140],[610,140],[630,140],[650,140],[670,140],[690,140],[710,140],[730,140],[750,140],[770,140],[790,140],[810,140],[830,140],[850,140],[870,140],[890,140],[910,140],[930,140],[950,140],[970,140],[500,150],[520,150],[540,150],[560,150],[580,150],[600,150],[620,150],[640,150],[660,150],[680,150],[700,150],[720,150],[740,150],[760,150],[780,150],[800,150],[820,150],[840,150],[860,150],[880,150],[900,150],[920,150],[940,150],[510,160],[530,160],[550,160],[570,160],[590,160],[610,160],[630,160],[650,160],[670,160],[690,160],[710,160],[730,160],[750,160],[770,160],[790,160],[810,160],[830,160],[850,160],[870,160],[890,160],[910,160],[520,170],[540,170],[560,170],[580,170],[600,170],[620,170],[640,170],[660,170],[680,170],[700,170],[720,170],[740,170],[760,170],[780,170],[800,170],[820,170],[840,170],[530,180],[550,180],[570,180],[590,180],[610,180],[630,180],[650,180],[670,180],[690,180],[710,180],[730,180],[750,180],[770,180],[790,180],[540,190],[560,190],[580,190],[600,190],[620,190],[640,190],[660,190],[680,190],[700,190],[720,190],[740,190],[760,190],[550,200],[570,200],[590,200],[610,200],[630,200],[650,200],[670,200],[690,200],[710,200],[730,200],[560,210],[580,210],[600,210],[620,210],[640,210],[660,210],[680,210],[700,210],[570,220],[590,220],[610,220],[630,220],[650,220],[670,220],[690,220],[580,230],[600,230],[620,230],[640,230],[660,230],[590,240],[610,240],[630,240],[600,250],[620,250],[870,190],[890,190],[910,190],[930,190],[950,190],[970,190],[990,190],[880,200],[900,200],[920,200],[940,200],[960,200],[980,200],[890,210],[910,210],[930,210],[950,210],[970,210],[900,220],[920,220],[940,220],[960,220],[910,230],[930,230],[950,230],[920,240],[940,240]] as [number,number][]).map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="2" fill="white" opacity="0.12" />
            ))}
          </svg>
          <div className="relative mx-auto max-w-5xl px-8 py-20 sm:px-12 md:py-36">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
              Est. 2026 — Mauritius
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl xl:text-7xl">
              FinRisk Insights
              <span className="block text-neutral-500">The Financial Platform</span>
              <span className="block text-neutral-500">of Mauritius</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-400">
              Live markets, regulatory intelligence, research, and finance jobs — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/markets" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
                Explore Markets <ArrowRight size={16} />
              </Link>
              <Link href="/research" className="inline-flex items-center gap-2 border border-neutral-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-white">
                Browse Research
              </Link>
            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* ABOUT */}
      <AnimatedLayout delay={0.1}>
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Who We Are</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  About FinRisk Insights
                </h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-neutral-600">
                  FinRisk Insights is Mauritius's emerging financial intelligence platform, built for finance professionals, compliance officers, regulators, and investors. We deliver live market data, regulatory updates, research reports, and economic analysis — all in one place.
                </p>
                <SiteStats />
              </div>
            </div>
          </div>
        </section>
      </AnimatedLayout>

      {/* WHAT WE DO */}
      <AnimatedLayout delay={0.15}>
        <section className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
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
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
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
        <section className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
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
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Compliance</p>
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
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Calendar</p>
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
        <section className="bg-black">
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
