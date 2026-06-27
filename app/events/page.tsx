import { Calendar, MapPin, Clock, ExternalLink, Users } from "lucide-react";

export const metadata = {
  title: "Events | FinRisk Insights",
  description: "Upcoming finance, compliance, and regulatory events in Mauritius.",
};

const events = [
  { id: "1", title: "Financial Crime Society Networking Night", description: "An evening of networking for compliance professionals, AML officers, and financial crime specialists across Mauritius.", date: "July 15, 2026", time: "6:00 PM", location: "Curtin Mauritius, Moka", category: "Networking", type: "in-person", organiser: "Financial Crime Society", href: "#", featured: true },
  { id: "2", title: "FinRisk Webinar: Understanding AML in Mauritius", description: "A practical overview of AML obligations for compliance officers and financial institutions operating in Mauritius.", date: "August 5, 2026", time: "2:00 PM", location: "Online", category: "Webinar", type: "online", organiser: "FinRisk Insights", href: "#", featured: true },
  { id: "3", title: "MPC Meeting — Bank of Mauritius", description: "The Monetary Policy Committee meets to review the Key Rate and macroeconomic outlook.", date: "September 10, 2026", time: "9:00 AM", location: "Bank of Mauritius, Port Louis", category: "Regulatory", type: "in-person", organiser: "Bank of Mauritius", href: "https://www.bom.mu", featured: false },
  { id: "4", title: "FSC Financial Summit 2026", description: "The annual summit bringing together regulators, financial institutions, and industry leaders to discuss the future of financial services in Mauritius.", date: "October 2, 2026", time: "8:30 AM", location: "SVICC, Pailles", category: "Conference", type: "in-person", organiser: "FSC Mauritius", href: "https://www.fscmauritius.org", featured: false },
  { id: "5", title: "FinRisk Webinar: Reading Financial Statements", description: "A practical session on how to analyse bank and corporate financial statements for risk, performance, and red flags.", date: "October 20, 2026", time: "2:00 PM", location: "Online", category: "Webinar", type: "online", organiser: "FinRisk Insights", href: "#", featured: false },
  { id: "6", title: "ESAAMLG Typologies Workshop", description: "Regional workshop on emerging money laundering and terrorist financing typologies relevant to Eastern and Southern Africa.", date: "November 12, 2026", time: "9:00 AM", location: "Port Louis, Mauritius", category: "Workshop", type: "in-person", organiser: "ESAAMLG", href: "https://www.esaamlg.org", featured: false },
];

const categoryColors: Record<string, string> = {
  Networking: "bg-cyan-50 text-cyan-600",
  Webinar: "bg-violet-50 text-violet-600",
  Regulatory: "bg-blue-50 text-blue-600",
  Conference: "bg-amber-50 text-amber-600",
  Workshop: "bg-emerald-50 text-emerald-600",
};

export default function EventsPage() {
  const featured = events.filter((e) => e.featured);
  const upcoming = events.filter((e) => !e.featured);

  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-10">

      <div>
        <p className="text-xs uppercase tracking-widest text-cyan-600">Calendar</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Upcoming Events</h1>
        <p className="mt-3 text-slate-500">Finance, compliance, and regulatory events in Mauritius and beyond.</p>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-slate-900">Featured</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((event) => (
            <div key={event.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[event.category] ?? "bg-slate-100 text-slate-600"}`}>{event.category}</span>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${event.type === "online" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-600"}`}>{event.type === "online" ? "Online" : "In Person"}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition">{event.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{event.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar size={13} className="text-cyan-500" />
                  {event.date} at {event.time}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={13} className="text-cyan-500" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Users size={13} className="text-cyan-500" />
                  {event.organiser}
                </div>
              </div>
              <div className="mt-5">
                <a href={event.href} className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-700">
                  Register Now
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-slate-900">All Upcoming</h2>
        <div className="space-y-4">
          {upcoming.map((event) => (
            <div key={event.id} className="group flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center">
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[event.category] ?? "bg-slate-100 text-slate-600"}`}>{event.category}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${event.type === "online" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-600"}`}>{event.type === "online" ? "Online" : "In Person"}</span>
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-cyan-600 transition">{event.title}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar size={11} />{event.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{event.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={11} />{event.location}</span>
                </div>
              </div>
              <a href={event.href} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600">
                View Event
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
