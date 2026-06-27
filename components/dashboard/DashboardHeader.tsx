export default function DashboardHeader() {
  return (
    <div className="border border-neutral-200 bg-white px-8 py-10 md:px-12 md:py-14">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
            FinRisk Insights — Mauritius
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl xl:text-6xl">
            Financial Intelligence
            <span className="block text-neutral-400">for Mauritius</span>
          </h1>

          <p className="mt-4 max-w-lg text-base text-neutral-500">
            Live markets, regulatory updates, research and analysis — all in one place.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/markets" className="bg-black px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
              View Markets
            </a>
            <a href="/research" className="border border-neutral-300 bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-50">
              Browse Research
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <div className="border border-green-200 bg-green-50 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-green-600">Today's Status</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <p className="text-lg font-bold text-green-700">Markets Open</p>
            </div>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Last Updated</p>
            <p className="mt-1 text-sm font-semibold text-black">Today, 12:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
