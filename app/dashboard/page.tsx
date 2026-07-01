import { auth, currentUser } from "@clerk/nextjs/server";
import { BookOpen, Bell, Calendar, ArrowUpRight, Shield, BarChart2, Briefcase, Mic } from "lucide-react";
import Link from "next/link";
import { getFXRates } from "@/lib/api/fx";

export const metadata = {
  title: "Dashboard | FinRisk Insights",
  description: "Your personal FinRisk Insights dashboard.",
};

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = userId ? await currentUser() : null;
  const firstName = user?.firstName ?? "there";

  let rates = { USD_MUR: 47.99, EUR_MUR: 54.67, GBP_MUR: 63.38 };
  try { rates = await getFXRates(); } catch {}

  const quickLinks = [
    { label: "Markets", desc: "Live SEMDEX & FX rates", href: "/markets", icon: <BarChart2 size={18} /> },
    { label: "Insights", desc: "Latest articles & analysis", href: "/insights", icon: <BookOpen size={18} /> },
    { label: "Regulation", desc: "FSC & BOM alerts", href: "/regulation", icon: <Shield size={18} /> },
    { label: "Careers", desc: "Finance jobs in Mauritius", href: "/careers", icon: <Briefcase size={18} /> },
    { label: "Events", desc: "Upcoming finance events", href: "/events", icon: <Calendar size={18} /> },
    { label: "Podcast", desc: "Coming soon", href: "/podcast", icon: <Mic size={18} /> },
  ];

  return (
    <div className="space-y-0">

      {/* Navy Header */}
      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">My Account</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Welcome back, {firstName}
          </h1>
          <p className="mt-2 text-blue-200">Your FinRisk Insights dashboard.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-10">

        {/* Live Market Snapshot */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Live Market Snapshot</p>
            <Link href="/markets" className="text-xs font-semibold text-blue-900 hover:text-blue-700 transition">Full Markets →</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { name: "USD / MUR", value: rates.USD_MUR.toFixed(2), change: "Live" },
              { name: "EUR / MUR", value: rates.EUR_MUR.toFixed(2), change: "Live" },
              { name: "GBP / MUR", value: rates.GBP_MUR.toFixed(2), change: "Live" },
            ].map((item, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-5 border-t-4 border-t-blue-900">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{item.name}</p>
                <p className="mt-2 font-mono text-2xl font-bold text-black">{item.value}</p>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Explore Platform</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item, i) => (
              <Link key={i} href={item.href} className="group flex items-center gap-4 border border-neutral-200 bg-white p-5 transition hover:border-blue-900 hover:shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 bg-neutral-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-black group-hover:text-blue-900 transition text-sm">{item.label}</p>
                  <p className="text-xs text-neutral-400">{item.desc}</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-neutral-300 group-hover:text-blue-900 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* Latest Articles */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Latest Insights</p>
            <Link href="/insights" className="text-xs font-semibold text-blue-900 hover:text-blue-700 transition">View all →</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { title: "SEMDEX closes higher amid strong banking performance", category: "Markets", href: "/insights/semdex-closes-higher-banking-performance" },
              { title: "Key AML developments every compliance officer should know", category: "Compliance", href: "/insights/key-aml-developments-every-compliance-officer-should-know" },
              { title: "What the latest inflation figures mean for Mauritius", category: "Economy", href: "/insights/what-the-latest-inflation-figures-mean-for-mauritius" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group border border-neutral-200 bg-white p-5 transition hover:border-blue-900 hover:shadow-sm">
                <span className="inline-block bg-blue-900 px-2 py-0.5 text-xs font-semibold text-white mb-2">{item.category}</span>
                <p className="text-sm font-bold text-black group-hover:text-blue-900 transition leading-snug">{item.title}</p>
                <p className="mt-3 text-xs font-semibold text-blue-900 group-hover:text-blue-700 transition">Read more →</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="border border-blue-900 p-8" style={{background:"#0f2654"}}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-white">Stay ahead of Mauritius finance</p>
              <p className="text-sm text-blue-200 mt-1">Get the FinRisk Intelligence Briefing delivered to your inbox every week.</p>
            </div>
            <Link href="/newsletter" className="shrink-0 inline-flex items-center gap-2 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 transition hover:bg-blue-50">
              Subscribe Free <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
