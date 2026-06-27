import { ArrowUpRight, Target, Eye, Heart, Users, BookOpen, BarChart2, Shield, Mic } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About | FinRisk Insights",
  description: "Learn about FinRisk Insights — Mauritius's emerging financial intelligence platform.",
};

const values = [
  { icon: <Target size={20} />, title: "Mission", description: "To make professional-grade financial intelligence accessible to everyone in Mauritius — from seasoned bankers to young finance professionals just starting out." },
  { icon: <Eye size={20} />, title: "Vision", description: "To become the most trusted source of financial intelligence in Mauritius and the wider Indian Ocean region." },
  { icon: <Heart size={20} />, title: "Values", description: "Accuracy, independence, and accessibility. We are not affiliated with any financial institution. Our analysis is our own." },
];

const pillars = [
  { icon: <BarChart2 size={18} />, title: "Markets", description: "Live SEMDEX, FX rates, repo rate, and economic indicators.", href: "/markets" },
  { icon: <BookOpen size={18} />, title: "Research", description: "In-depth reports on banking, regulation, and the Mauritian economy.", href: "/research" },
  { icon: <Shield size={18} />, title: "Regulation", description: "Real-time alerts from FSC, Bank of Mauritius, FATF, and ESAAMLG.", href: "/regulation" },
  { icon: <Mic size={18} />, title: "Podcast", description: "Conversations with finance professionals, regulators, and economists.", href: "/podcast" },
];

const team = [
  { name: "FinRisk Editorial Team", role: "Markets & Research", description: "Our editorial team covers Mauritius financial markets, economic analysis, and investment intelligence." },
  { name: "FinRisk Regulatory Desk", role: "Compliance & Regulation", description: "Specialists in FSC, Bank of Mauritius, FATF, and AML/CFT developments across the financial sector." },
  { name: "FinRisk Economics Desk", role: "Macroeconomics", description: "Focused on monetary policy, inflation, exchange rates, and the broader Mauritian economic outlook." },
];

const milestones = [
  { year: "2024", event: "FinRisk Insights founded in Mauritius" },
  { year: "2024", event: "First research report published" },
  { year: "2025", event: "Podcast launched — The FinRisk Podcast" },
  { year: "2025", event: "1,000 newsletter subscribers reached" },
  { year: "2026", event: "Platform redesigned as a full intelligence hub" },
  { year: "2026", event: "Live market data and regulatory alerts launched" },
];

export default function AboutPage() {
  return (
    <div className="space-y-0">

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-white px-8 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600">About Us</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Mauritius's emerging financial intelligence platform
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed">
            FinRisk Insights is Mauritius's emerging financial intelligence platform, built for finance professionals, compliance officers, regulators, and investors. We deliver live market data, regulatory updates, research reports, and economic analysis — all in one place. Our mission is to make professional-grade financial intelligence accessible to everyone in Mauritius.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/research" className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
              Browse Research <ArrowUpRight size={16} />
            </Link>
            <Link href="/newsletter" className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 text-sm font-semibold text-black transition hover:border-black">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-8 py-12 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "1,200+", label: "Newsletter Subscribers" },
              { value: "48", label: "Research Reports" },
              { value: "12", label: "Podcast Episodes" },
              { value: "2024", label: "Year Founded" },
            ].map((stat, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-6 text-center">
                <p className="text-3xl font-bold text-black">{stat.value}</p>
                <p className="mt-1 text-xs text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="border-b border-neutral-200 bg-white px-8 py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600">What Drives Us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">Mission, Vision & Values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-6">
                <div className="mb-4 text-black">{v.icon}</div>
                <h3 className="font-bold text-black">{v.title}</h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-8 py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Coverage</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">What We Cover</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Link key={i} href={p.href} className="group border border-neutral-200 bg-white p-5 transition hover:border-black hover:shadow-md">
                <div className="mb-3 text-black">{p.icon}</div>
                <h3 className="font-bold text-black group-hover:text-neutral-600 transition">{p.title}</h3>
                <p className="mt-2 text-xs text-neutral-500">{p.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-black">
                  Explore <ArrowUpRight size={11} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-neutral-200 bg-white px-8 py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Our Team</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">The People Behind FinRisk</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {team.map((member, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-neutral-200 bg-neutral-50">
                  <Users size={20} className="text-black" />
                </div>
                <h3 className="font-bold text-black">{member.name}</h3>
                <p className="text-xs font-semibold text-green-600">{member.role}</p>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-8 py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Our Journey</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">Milestones</h2>
          <div className="mt-10 space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-6 border-b border-neutral-200 py-5 last:border-0">
                <div className="w-16 shrink-0">
                  <p className="text-sm font-bold text-black">{m.year}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-green-500" />
                  <p className="text-sm text-neutral-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-8 py-16 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white">Join the FinRisk Community</h2>
          <p className="mt-4 text-neutral-400">Get access to live markets, research, and regulatory intelligence — free forever.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/sign-up" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100">
              Get Started Free <ArrowUpRight size={16} />
            </Link>
            <Link href="/newsletter" className="inline-flex items-center gap-2 border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
