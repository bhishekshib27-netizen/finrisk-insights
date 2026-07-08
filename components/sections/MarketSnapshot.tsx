const markets = [
  {
    title: "SEMDEX",
    value: "2,430.82",
    change: "+0.82%",
  },
  {
    title: "USD/MUR",
    value: "46.18",
    change: "+0.12%",
  },
  {
    title: "EUR/MUR",
    value: "52.84",
    change: "-0.08%",
  },
  {
    title: "Repo Rate",
    value: "4.75%",
    change: "BoM",
  },
];

export default function MarketSnapshot() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Market Snapshot
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {markets.map((market) => (
          <div
            key={market.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <p className="text-sm text-slate-500">
              {market.title}
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              {market.value}
            </h3>

            <p className="mt-3 text-sm font-medium text-green-600">
              {market.change}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}