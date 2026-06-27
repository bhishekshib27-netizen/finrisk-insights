import SectionHeader from "@/components/ui/SectionHeader";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const events = [
  { title: "Financial Crime Society Networking Night", date: "July 2026", location: "Curtin Mauritius", type: "in-person" },
  { title: "FinRisk Webinar: Understanding AML", date: "August 2026", location: "Online Event", type: "online" },
  { title: "MPC Meeting — Bank of Mauritius", date: "September 2026", location: "Port Louis", type: "in-person" },
];

export default function EventsPanel() {
  return (
    <section className="space-y-5">
      <SectionHeader title="Upcoming Events" subtitle="Finance & compliance" action={{ label: "View all", href: "/events" }} />
      <div className="space-y-3">
        {events.map((event, i) => (
          <div key={i} className="group flex cursor-pointer items-start justify-between gap-4 border border-neutral-200 bg-white p-5 transition hover:border-black hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="border border-neutral-200 bg-neutral-50 p-2.5">
                <Calendar size={14} className="text-black" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-black group-hover:text-neutral-600 transition">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                  <span className="flex items-center gap-1"><Calendar size={10} />{event.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={10} />{event.location}</span>
                  <span className={`border px-2 py-0.5 text-xs font-semibold ${event.type === "online" ? "border-green-200 bg-green-50 text-green-700" : "border-neutral-200 bg-neutral-50 text-neutral-500"}`}>
                    {event.type === "online" ? "Online" : "In Person"}
                  </span>
                </div>
              </div>
            </div>
            <ArrowUpRight size={15} className="mt-1 shrink-0 text-neutral-300 group-hover:text-black transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
