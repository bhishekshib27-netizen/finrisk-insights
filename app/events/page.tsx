import { Calendar, ExternalLink } from "lucide-react";
import { getUpcomingEvents } from "@/lib/data/events";

export const metadata = {
  title: "Events | FinRisk Insights",
  description: "Upcoming finance, compliance, and regulatory events in Mauritius.",
};



const pastEvents = [
  {
    date: "20 May 2026",
    title: "78th MPC Meeting — Key Rate raised to 4.75%",
    org: "Bank of Mauritius",
    type: "Monetary Policy",
    outcome: "Rate raised +25bps to 4.75%",
    url: "https://www.bom.mu/monetary-policy/minutes-monetary-policy-committee-meetings/minutes-monetary-policy-committee/minutes-78th-monetary",
  },
  {
    date: "11 Feb 2026",
    title: "77th MPC Meeting — Key Rate held at 4.50%",
    org: "Bank of Mauritius",
    type: "Monetary Policy",
    outcome: "Rate held at 4.50%",
    url: "https://www.bom.mu/monetary-policy/minutes-monetary-policy-committee-meetings/minutes-monetary-policy-committee/minutes-77th-monetary",
  },
];

const sources = [
  { name: "FSC Mauritius", href: "https://www.fscmauritius.org", description: "FSC events & consultations" },
  { name: "Bank of Mauritius", href: "https://www.bom.mu", description: "MPC meetings & conferences" },
  { name: "SEM", href: "https://www.stockexchangeofmauritius.com", description: "Market events" },
  { name: "ESAAMLG", href: "https://www.esaamlg.org", description: "Regional AML workshops" },
];

const typeColors: Record<string, string> = {
  "Monetary Policy": "bg-blue-900 text-white",
  "Compliance": "bg-amber-700 text-white",
  "Conference": "bg-green-700 text-white",
};

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  return (
    <div className="space-y-0">

      {/* Navy Hero */}
      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-6 sm:px-12 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Calendar</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Economic Calendar</h1>
          <p className="mt-3 max-w-xl text-blue-200">
            Key finance, compliance, and regulatory events in Mauritius — MPC meetings, FSC consultations, and more.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-12 space-y-12">

        {/* Upcoming */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">Upcoming Events</p>
          <div className="space-y-4">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-6 hover:border-blue-900 transition hover:shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 text-center border border-blue-900 px-4 py-3 min-w-[64px]" style={{background:"#0f2654"}}>
                    <p className="text-2xl font-bold text-white leading-none">{event.day}</p>
                    <p className="text-xs font-semibold text-blue-300 mt-1">{event.month}</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 text-xs font-semibold ${typeColors[event.type] ?? "bg-neutral-900 text-white"}`}>
                        {event.type}
                      </span>
                      <span className="text-xs text-neutral-400">{event.org}</span>
                      <span className="text-xs text-neutral-400">· {event.location}</span>
                    </div>
                    <h3 className="font-bold text-black text-base">{event.title}</h3>
                    <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{event.desc}</p>
                  </div>
                  <a href={event.url} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-blue-900 hover:text-blue-700 transition">
                    Details <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">Past Events</p>
          <div className="divide-y divide-neutral-100 border border-neutral-200">
            {pastEvents.map((event, i) => (
              <div key={i} className="flex items-center justify-between p-5 hover:bg-neutral-50 transition">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-neutral-400 w-24 shrink-0">{event.date}</span>
                  <div>
                    <p className="text-sm font-semibold text-black">{event.title}</p>
                    <p className="text-xs text-neutral-400">{event.org}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 hidden sm:block">{event.outcome}</span>
                  <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-900 hover:text-blue-700 transition">
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Key Event Sources</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sources.map((src) => (
              <a key={src.name} href={src.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-neutral-200 bg-white p-4 transition hover:border-blue-900">
                <div>
                  <p className="text-sm font-semibold text-black group-hover:text-blue-900 transition">{src.name}</p>
                  <p className="text-xs text-neutral-400">{src.description}</p>
                </div>
                <ExternalLink size={13} className="text-neutral-300 group-hover:text-blue-900 transition" />
              </a>
            ))}
          </div>
        </div>

        {/* Submit CTA */}
        <div className="border border-neutral-200 bg-white p-8">
          <h2 className="font-bold text-black mb-1">Know of an event we should list?</h2>
          <p className="text-sm text-neutral-500 mb-4">
            If you are organising or know of a finance or compliance event in Mauritius, get in touch and we will add it to the calendar.
          </p>
          <a href="mailto:hello@finriskinsight.com?subject=Event Listing" className="inline-flex items-center gap-2 border border-blue-900 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white">
            Submit an Event <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </div>
  );
}
