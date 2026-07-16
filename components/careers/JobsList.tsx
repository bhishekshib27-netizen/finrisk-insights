"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Clock, Building2, ArrowRight, Briefcase } from "lucide-react";

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

export default function JobsList({ jobs }: { jobs: Job[] }) {
  const [activeSector, setActiveSector] = useState("All");

  const sectors = ["All", "Finance", "Compliance", "Accounting", "Legal"];
  const counts = (s: string) => (s === "All" ? jobs.length : jobs.filter((j) => j.sector === s).length);
  const filtered = activeSector === "All" ? jobs : jobs.filter((j) => j.sector === activeSector);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {sectors.map((sector) => {
          const count = counts(sector);
          if (sector !== "All" && count === 0) return null;
          return (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={
                "border px-3 py-1.5 text-xs font-medium transition " +
                (activeSector === sector
                  ? "border-blue-900 bg-blue-900 text-white"
                  : "border-neutral-200 text-neutral-500 hover:border-black hover:text-black")
              }
            >
              {sector} <span className={activeSector === sector ? "text-blue-200" : "text-neutral-400"}>({count})</span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="border border-neutral-200 bg-neutral-50 p-10 text-center">
          <Briefcase size={20} className="mx-auto text-neutral-300" />
          <p className="mt-3 text-sm text-neutral-500">No open roles in {activeSector} right now — check back soon.</p>
        </div>
      ) : (
        <div className="divide-y divide-neutral-200 border border-neutral-200">
          {filtered.map((job) => (
            <Link
              key={job._id}
              href={`/careers/${job._id}`}
              className="group flex items-start justify-between gap-4 bg-white p-5 transition hover:bg-neutral-50"
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{job.sector} · {job.type} · {job.workStyle}</p>
                <h2 className="mt-1 text-base font-bold text-black group-hover:text-blue-900 transition">{job.title}</h2>
                <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1"><Building2 size={12} />{job.company}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} />{job.location}, Mauritius</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{job.postedLabel}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-500 line-clamp-1">{job.description}</p>
              </div>
              <span className="shrink-0 mt-1 inline-flex items-center gap-1 text-xs font-semibold text-blue-900 opacity-0 group-hover:opacity-100 transition">
                View details <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
