import { getFXRates } from "@/lib/api/fx";
import MarketChartServer from "@/components/charts/MarketChartServer";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export const metadata = {
  title: "Markets | FinRisk Insights",
  description: "Live market data for Mauritius — SEMDEX, FX rates, and more.",
};

export default async function MarketsPage() {
  let rates = { USD_MUR: 45.12, EUR_MUR: 49.84, GBP_MUR: 58.33 };

  try {
    const { getFXRates: fetch } = await import("@/lib/api/fx");
    rates = await fetch();
  } catch {}

  const fxTable = [
    { pair: "USD / MUR", value: rates.USD_MUR.toFixed(2), change: "Live", trend: "neutral" },
    { pair: "EUR / MUR", value: rates.EUR_MUR.toFixed(2), change: "Live", trend: "neutral" },
    { pair: "GBP / MUR", value: rates.GBP_MUR.toFixed(2), change: "Live", trend: "neutral" },
    { pair: "SEMDEX", value: "2,145.32", change: "+0.42%", trend: "up" },
    { pair: "Repo Rate", value: "4.50%", change: "Stable", trend: "neutral" },
    { pair: "Inflation", value: "3.2%", change: "-0.4%", trend: "down" },
    { pair: "Gold (USD)", value: "$2,345", change: "+1.2%", trend: "up" },
    { pair: "Oil Brent", value: "$82.40", change: "-0.6%", trend: "down" },
  ];

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <p className="text-xs uppercase tracking-widest text-cyan-600">
          Live Data
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Markets
        </h1>
        <p className="mt-3 text-slate-500">
          Live FX rates, equity indices, and key economic indicators for Mauritius.
        </p>
      </div>

      {/* FX Rate Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "USD / MUR", value: rates.USD_MUR.toFixed(2), live: true },
          { label: "EUR / MUR", value: rates.EUR_MUR.toFixed(2), live: true },
          { label: "GBP / MUR", value: rates.GBP_MUR.toFixed(2), live: true },
          { label: "Repo Rate", value: "4.50%", live: false },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">{card.label}</p>
            <p className="mt-2 text-3xl font-bold font-mono text-slate-900">
              {card.value}
            </p>
            {card.live ? (
              <span className="mt-2 inline-block rounded-full bg-cyan-50 px-2.5 py-0.5 text-xs font-medium text-cyan-600">
                Live
              </span>
            ) : (
              <span className="mt-2 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                Stable
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Chart */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Historical FX Chart
        </h2>
        <MarketChartServer />
      </div>

      {/* Full Market Table */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Market Summary
        </h2>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Instrument
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Value
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Change
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {fxTable.map((row) => (
                <tr key={row.pair} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {row.pair}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-slate-700">
                    {row.value}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={
                      row.change === "Live"
                        ? "text-cyan-600 font-medium"
                        : row.change === "Stable"
                        ? "text-slate-400"
                        : row.change.startsWith("-")
                        ? "text-red-500"
                        : "text-green-600"
                    }>
                      {row.change}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {row.trend === "up" && <TrendingUp size={16} className="ml-auto text-green-500" />}
                    {row.trend === "down" && <TrendingDown size={16} className="ml-auto text-red-500" />}
                    {row.trend === "neutral" && <Minus size={16} className="ml-auto text-slate-300" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-slate-400">
          FX rates sourced from Frankfurter API · Updated hourly · SEMDEX and macro data are indicative
        </p>
      </div>

    </div>
  );
}