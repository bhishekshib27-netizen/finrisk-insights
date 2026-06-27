import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowUpRight, Clock } from "lucide-react";

const insights = [
  { category: "Markets", title: "SEMDEX closes higher amid strong banking performance", date: "Jun 25, 2026", readTime: "4 min" },
  { category: "Compliance", title: "Key AML developments every compliance officer should know", date: "Jun 22, 2026", readTime: "6 min" },
  { category: "Economy", title: "What the latest inflation figures mean for Mauritius", date: "Jun 18, 2026", readTime: "5 min" },
];

const categoryColors: Record<string, string> = {
  Markets: "bg-green-50 text-green-700 border-green-200",
  Compliance: "bg-neutral-100 text-neutral-700 border-neutral-200",
  Economy: "bg-neutral-100 text-neutral-700 border-neutral-200",
};

export default function LatestInsights() {
  return (
    <section className="space-y-5">
      <SectionHeader title="Latest Insights" subtitle="Our latest financial intelligence" action={{ label: "View all", href: "/insights" }} />
      <div className="space-y-3">
        {insights.map((item, i) => (
          <div key={i} className="group flex cursor-pointer items-start justify-between gap-4 border border-neutral-200 bg-white p-5 transition hover:border-black hover:shadow-md">
            <div className="space-y-2">
              <span className={`inline-block border px-2.5 py-0.5 text-xs font-semibold ${categoryColors[item.category] ?? "bg-neutral-100 text-neutral-600 border-neutral-200"}`}>
                {item.category}
              </span>
              <h3 className="text-sm font-semibold leading-snug text-black group-hover:text-neutral-600 transition sm:text-base">{item.title}</h3>
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span>{item.date}</span>
                <span className="flex items-center gap-1"><Clock size={10} />{item.readTime} read</span>
              </div>
            </div>
            <ArrowUpRight size={16} className="mt-1 shrink-0 text-neutral-300 group-hover:text-black transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
