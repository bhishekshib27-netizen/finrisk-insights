import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About | FinRisk Insights",
  description: "About FinRisk Insights — Mauritius\'s emerging financial intelligence platform.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0">

      {/* Hero */}
      <div className="relative overflow-hidden" style={{height: "300px"}}>
        <img src="/what-we-do-bg.jpg" alt="About FinRisk Insights" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{background: "linear-gradient(to right, rgba(10,25,60,0.88) 50%, rgba(10,25,60,0.5) 100%)"}} />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-5xl px-6 sm:px-12 w-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Who We Are</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">About FinRisk Insights</h1>
            <p className="mt-3 max-w-xl text-blue-100">Mauritius | Zimbabwe — Est. 2026</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-12 space-y-12">

        {/* Mission */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-900 mb-3">Our Mission</p>
            <h2 className="text-3xl font-bold tracking-tight text-black">Built to become the number one financial platform of Mauritius</h2>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              FinRisk Insights is Mauritius's emerging financial intelligence platform — delivering live market data, regulatory intelligence, AML and compliance analysis, research, and finance jobs, all in one place.
            </p>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              We built FinRisk because Mauritius has one of the most dynamic financial centres in Africa and the Indian Ocean region, yet there was no single platform bringing it all together for the professionals who work in it every day. That changes with FinRisk Insights.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "400+", label: "Subscribers" },
              { value: "10+", label: "Team members" },
              { value: "2026", label: "Founded" },
              { value: "2", label: "Countries" },
            ].map((stat, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-6 text-center hover:border-blue-900 transition">
                <p className="text-3xl font-bold text-black">{stat.value}</p>
                <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div className="border border-neutral-200 bg-white p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-900 mb-6">Founder</p>
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full text-white text-2xl font-bold" style={{background:"#1e3a8a"}}>
                BS
              </div>
              <div>
                <p className="font-bold text-black text-lg">Bhishek Shibdeen</p>
                <p className="text-sm text-blue-900 font-semibold mt-0.5">Founder & CEO</p>
                <p className="text-xs text-neutral-400 mt-1">Curtin University Mauritius</p>
                <p className="text-xs text-neutral-400">Business Law · Applied Finance</p>
              </div>
              <a href="https://www.linkedin.com/in/bhishekshibdeen" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-blue-900 px-4 py-2 text-xs font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white">
                LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>
            <div className="lg:col-span-2 space-y-4 text-neutral-500 leading-relaxed text-sm">
              <p>
                Bhishek Shibdeen is a Year 1 student of Business Law with a specialisation in Applied Finance at Curtin University Mauritius. He founded FinRisk Insights with a clear ambition — to build the number one financial intelligence platform in Mauritius.
              </p>
              <p>
                With a background spanning AML compliance simulation, financial risk analysis, and regulatory intelligence, Bhishek identified a gap in the Mauritius financial ecosystem: there was no dedicated platform aggregating live market data, regulatory alerts, compliance intelligence, and finance careers in one place.
              </p>
              <p>
                FinRisk Insights is his answer to that gap — built from the ground up, with a team of 10+ contributors across Mauritius and Zimbabwe, and a growing community of 400+ finance professionals.
              </p>
            </div>
          </div>
        </div>

        {/* What we cover */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">What We Cover</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Live Markets", desc: "SEMDEX, MUR FX rates, and key economic indicators updated hourly." },
              { title: "Regulatory Intelligence", desc: "FSC, Bank of Mauritius, FATF, and ESAAMLG updates and alerts." },
              { title: "AML & Compliance", desc: "In-depth analysis of AML/CFT developments for Mauritius practitioners." },
              { title: "Research & Insights", desc: "Articles, reports, and commentary on Mauritius finance and economy." },
              { title: "Finance Jobs", desc: "Curated finance, compliance, accounting, and legal roles in Mauritius." },
              { title: "The FinRisk Podcast", desc: "Conversations with finance professionals, economists, and regulators." },
            ].map((item, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-5 hover:border-blue-900 transition">
                <p className="font-bold text-black text-sm">{item.title}</p>
                <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border border-blue-900 p-8 text-center" style={{background:"#0f2654"}}>
          <h2 className="text-xl font-bold text-white mb-2">Join the FinRisk community</h2>
          <p className="text-blue-200 text-sm mb-6">Subscribe to the weekly Intelligence Briefing — free, no spam, unsubscribe anytime.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/newsletter" className="inline-flex items-center gap-2 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 transition hover:bg-blue-50">
              Subscribe Free <ArrowUpRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-blue-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white">
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
