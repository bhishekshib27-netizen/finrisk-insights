"use client";

import { useState } from "react";
import { MapPin, Clock, Building2, ArrowUpRight, Briefcase } from "lucide-react";

type Job = {
  _id: string;
  title: string;
  company: string;
  sector: string;
  type: string;
  location: string;
  workStyle: string;
  description: string;
  requirements: string[];
  applyUrl: string;
  postedLabel: string;
};

const sectorStyles: Record<string, { badge: string; accent: string; avatar: string }> = {
  Compliance: { badge: "border-amber-200 bg-amber-50 text-amber-700", accent: "border-l-amber-400", avatar: "bg-amber-100 text-amber-700" },
  Finance: { badge: "border-blue-200 bg-blue-50 text-blue-700", accent: "border-l-blue-400", avatar: "bg-blue-100 text-blue-700" },
  Accounting: { badge: "border-green-200 bg-green-50 text-green-700", accent: "border-l-green-400", avatar: "bg-green-100 text-green-700" },
  Legal: { badge: "border-violet-200 bg-violet-50 text-violet-700", accent: "border-l-violet-400", avatar: "bg-violet-100 text-violet-700" },
  Other: { badge: "border-neutral-200 bg-neutral-50 text-neutral-600", accent: "border-l-neutral-300", avatar: "bg-neutral-100 text-neutral-600" },
};

function styleFor(sector: string) {
  return sectorStyles[sector] ?? sectorStyles.Other;
}

export default function JobsList({ jobs }: { jobs: Job[] }) {
  const [activeSector, setActiveSector] = useState("All");

  const sectors = ["All", "Finance", "Compliance", "Accounting", "Legal"];
  const filtered = activeSector === "All" ? jobs : jobs.filter((j) => j.sector === activeSector);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {sectors.map((sector) => (
          <button
            key={sector}
            onClick={() => setActiveSector(sector)}
            className={
              "border px-3 py-1 text-xs font-medium transition " +
              (activeSector === sector
                ? "border-blue-900 bg-blue-900 text-white"
                : "border-neutral-200 text-neutral-500 hover:border-black hover:text-black")
            }
          >
            {sector}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="border border-neutral-200 bg-neutral-50 p-10 text-center">
          <Briefcase size={20} className="mx-auto text-neutral-300" />
          <p className="mt-3 text-sm text-neutral-500">No open roles in {activeSector} right now — check back soon.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((job) => {
            const style = styleFor(job.sector);
            const initial = job.company.charAt(0);
            return (
              <div key={job._id} className={`border border-neutral-200 border-l-4 ${style.accent} bg-white p-6 transition hover:border-black hover:shadow-md`}>
                <div className="flex items-start gap-4">
                  <div className={`hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold ${style.avatar}`}>
                    {initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`border px-2 py-0.5 text-xs font-semibold ${style.badge}`}>{job.sector}</span>
                          <span className="border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-500">{job.type}</span>
                          <span className="border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-500">{job.workStyle}</span>
                        </div>
                        <h2 className="text-lg font-bold text-black">{job.title}</h2>
                        <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                          <span className="flex items-center gap-1"><Building2 size={13} />{job.company}</span>
                          <span className="flex items-center gap-1"><MapPin size={13} />{job.location}, Mauritius</span>
                          <span className="flex items-center gap-1"><Clock size={13} />{job.postedLabel}</span>
                        </div>
                        <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{job.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.requirements.map((req, i) => (
                            <span key={i} className="border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-500">{req}</span>
                          ))}
                        </div>
                      </div>
                      <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-1.5 bg-blue-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800">
                        Apply <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
