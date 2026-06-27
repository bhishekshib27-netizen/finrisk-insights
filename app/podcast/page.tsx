import { Mic, Play, Clock, Calendar, ExternalLink, Headphones } from "lucide-react";

export const metadata = {
  title: "Podcast | FinRisk Insights",
  description: "The FinRisk Podcast — conversations on Mauritius finance, regulation, and economic intelligence.",
};

const episodes = [
  {
    id: "1",
    number: "EP 012",
    title: "What the FATF removal means for Mauritius as an IFC",
    description: "We break down the implications of Mauritius being removed from the FATF grey list and what it means for the international financial centre, foreign investment, and correspondent banking relationships.",
    guest: "Dr. Roshan Seetohul",
    guestRole: "Head of Compliance, SBM Group",
    date: "June 20, 2026",
    duration: "48 min",
    featured: true,
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "2",
    number: "EP 011",
    title: "Reading the MPC — what rate decisions tell us about the economy",
    description: "A deep dive into how the Monetary Policy Committee of the Bank of Mauritius makes decisions, and what the Key Rate signals about inflation, growth, and the rupee.",
    guest: "Ashwin Joomun",
    guestRole: "Economist, Bank of Mauritius",
    date: "June 6, 2026",
    duration: "52 min",
    featured: true,
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "3",
    number: "EP 010",
    title: "AML compliance in practice — lessons from the front line",
    description: "A compliance officer shares real-world lessons from implementing AML/CFT frameworks at a Mauritian bank, including common pitfalls and what regulators are actually looking for.",
    guest: "Priya Ramkhelawon",
    guestRole: "MLRO, MCB Group",
    date: "May 23, 2026",
    duration: "44 min",
    featured: false,
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "4",
    number: "EP 009",
    title: "The future of fintech regulation in Mauritius",
    description: "We explore how the FSC is approaching fintech regulation, virtual assets, and what the regulatory roadmap looks like for digital financial services in Mauritius.",
    guest: "Kavish Dreepaul",
    guestRole: "Director, FSC Mauritius",
    date: "May 9, 2026",
    duration: "39 min",
    featured: false,
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "5",
    number: "EP 008",
    title: "SEMDEX unpacked — how to read the stock exchange",
    description: "A practical guide to understanding the Stock Exchange of Mauritius, how SEMDEX is calculated, and what drives performance in the local equity market.",
    guest: "Nisha Foolchand",
    guestRole: "Research Analyst, Axys Group",
    date: "Apr 25, 2026",
    duration: "41 min",
    featured: false,
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "6",
    number: "EP 007",
    title: "Global Business in Mauritius — threats and opportunities",
    description: "We examine the global business sector, its contribution to the Mauritian economy, and how evolving international tax standards are reshaping the landscape.",
    guest: "Bertrand Casteres",
    guestRole: "Partner, PwC Mauritius",
    date: "Apr 11, 2026",
    duration: "55 min",
    featured: false,
    spotifyUrl: "#",
    appleUrl: "#",
  },
];

const platforms = [
  { name: "Spotify", href: "#", color: "bg-green-500" },
  { name: "Apple Podcasts", href: "#", color: "bg-black" },
  { name: "Google Podcasts", href: "#", color: "bg-neutral-700" },
  { name: "YouTube", href: "#", color: "bg-red-500" },
];

export default function PodcastPage() {
  const featured = episodes.filter((e) => e.featured);
  const rest = episodes.filter((e) => !e.featured);

  return (
    <div className="space-y-12">

      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Audio Intelligence</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">The FinRisk Podcast</h1>
        <p className="mt-2 text-neutral-500">Conversations on Mauritius finance, regulation, markets, and economic intelligence.</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {platforms.map((p) => (
          <a key={p.name} href={p.href} className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-80 ${p.color}`}>
            <Headphones size={14} />
            {p.name}
          </a>
        ))}
      </div>

      <div>
        <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">Featured Episodes</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((ep) => (
            <div key={ep.id} className="group border border-neutral-200 bg-white p-6 transition hover:border-black hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <span className="border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-bold text-neutral-500">{ep.number}</span>
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <span className="flex items-center gap-1"><Calendar size={11} />{ep.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{ep.duration}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-black group-hover:text-neutral-600 transition">{ep.title}</h3>
              <p className="mt-2 text-sm text-neutral-500 line-clamp-3">{ep.description}</p>

              <div className="mt-4 flex items-center gap-3 border-t border-neutral-100 pt-4">
                <div className="flex h-8 w-8 items-center justify-center border border-neutral-200 bg-neutral-50">
                  <Mic size={13} className="text-neutral-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-black">{ep.guest}</p>
                  <p className="text-xs text-neutral-400">{ep.guestRole}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a href={ep.spotifyUrl} className="inline-flex items-center gap-1.5 bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800">
                  <Play size={12} /> Play Episode
                </a>
                <a href={ep.spotifyUrl} className="inline-flex items-center gap-1.5 border border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-600 transition hover:border-black hover:text-black">
                  <ExternalLink size={12} /> Spotify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">All Episodes</h2>
        <div className="space-y-3">
          {rest.map((ep) => (
            <div key={ep.id} className="group flex flex-col gap-4 border border-neutral-200 bg-white p-5 transition hover:border-black hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 bg-neutral-50">
                  <Play size={14} className="text-neutral-500" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-neutral-400">{ep.number}</span>
                    <span className="flex items-center gap-1 text-xs text-neutral-400"><Clock size={10} />{ep.duration}</span>
                    <span className="flex items-center gap-1 text-xs text-neutral-400"><Calendar size={10} />{ep.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-black group-hover:text-neutral-600 transition">{ep.title}</h3>
                  <p className="text-xs text-neutral-400">{ep.guest} — {ep.guestRole}</p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <a href={ep.spotifyUrl} className="inline-flex items-center gap-1.5 bg-black px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-neutral-800">
                  <Play size={11} /> Play
                </a>
                <a href={ep.appleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-600 transition hover:border-black hover:text-black">
                  <ExternalLink size={11} /> Apple
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-black bg-black p-8 text-center">
        <Mic size={24} className="mx-auto mb-4 text-green-400" />
        <h2 className="text-xl font-bold text-white">Want to be a guest?</h2>
        <p className="mt-2 text-sm text-neutral-400">We feature finance professionals, regulators, economists, and entrepreneurs from Mauritius and beyond.</p>
        <a href="mailto:podcast@finriskinsights.mu" className="mt-6 inline-flex items-center gap-2 border border-white px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
          Get in Touch
          <ExternalLink size={14} />
        </a>
      </div>

    </div>
  );
}
