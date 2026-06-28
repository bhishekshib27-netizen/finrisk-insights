import { Calendar, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Events | FinRisk Insights",
  description: "Upcoming finance, compliance, and regulatory events in Mauritius.",
};

const sources = [
  { name: "FSC Mauritius", href: "https://www.fscmauritius.org", description: "FSC events & consultations" },
  { name: "Bank of Mauritius", href: "https://www.bom.mu", description: "MPC meetings & conferences" },
  { name: "SEM", href: "https://www.stockexchangeofmauritius.com", description: "Market events" },
  { name: "ESAAMLG", href: "https://www.esaamlg.org", description: "Regional AML workshops" },
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-10">

      <div className="border-b border-neutral-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Calendar</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Upcoming Events</h1>
        <p className="mt-3 max-w-xl text-neutral-500">
          Finance, compliance, and regulatory events in Mauritius and beyond — curated and updated as they are confirmed.
        </p>
      </div>

      <div className="border border-neutral-200 bg-neutral-50 p-8">
        <div className="flex items-start gap-4">
          <Calendar size={20} className="mt-0.5 shrink-0 text-neutral-400" />
          <div>
            <h2 className="font-bold text-black">No upcoming events yet</h2>
            <p className="mt-1 text-sm text-neutral-500">
              We are curating a calendar of finance, compliance, AML, and regulatory events across Mauritius. Check back soon or subscribe to our newsletter to be notified when events are added.
            </p>
            <a href="/newsletter" className="mt-4 inline-flex items-center gap-2 bg-blue-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800">
              Subscribe for updates
            </a>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Key Event Sources</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sources.map((src) => (
            <a key={src.name} href={src.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-neutral-200 bg-white p-4 transition hover:border-black">
              <div>
                <p className="text-sm font-semibold text-black">{src.name}</p>
                <p className="text-xs text-neutral-400">{src.description}</p>
              </div>
              <ExternalLink size={13} className="text-neutral-300 group-hover:text-black transition" />
            </a>
          ))}
        </div>
      </div>

      <div className="border border-neutral-200 bg-white p-8">
        <h2 className="font-bold text-black mb-1">Know of an event we should list?</h2>
        <p className="text-sm text-neutral-500 mb-4">
          If you are organising or know of a finance or compliance event in Mauritius, get in touch and we will add it to the calendar.
        </p>
        <a href="mailto:hello@finriskinsight.com?subject=Event Listing" className="inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold text-black transition hover:bg-blue-900 hover:text-white">
          Submit an Event <ExternalLink size={13} />
        </a>
      </div>

    </div>
  );
}
