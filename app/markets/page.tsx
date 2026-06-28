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
    rates = await getFXRates();
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
    <div className="space-y-0">

      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{height: "280px"}}>
        <img src="/category-markets.jpg" alt="Markets" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{background: "linear-gradient(to right, rgba(10,25,60,0.85) 50%, rgba(10,25,60,0.5) 100%)"}} />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-5xl px-8 sm:px-12 w-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Live Data</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Markets</h1>
            <p className="mt-3 max-w-xl text-blue-100">Live FX rates, equity indices, and key economic indicators for Mauritius.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-10">

      {/* FX Rate Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "USD / MUR", value: rates.USD_MUR.toFixed(2), live: true, accent: "border-t-blue-900" },
          { label: "EUR / MUR", value: rates.EUR_MUR.toFixed(2), live: true, accent: "border-t-blue-700" },
          { label: "GBP / MUR", value: rates.GBP_MUR.toFixed(2), live: true, accent: "border-t-blue-500" },
          { label: "Repo Rate", value: "4.50%", live: false, accent: "border-t-blue-300" },
        ].map((card) => (
          <div key={card.label} className={`relative border border-neutral-200 bg-white p-6 border-t-4 ${card.accent}`}>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{card.label}</p>
            <p className="mt-3 font-mono text-3xl font-bold text-black">{card.value}</p>
            {card.live ? (
              <span className="mt-2 inline-flex items-center gap-1 bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
                ● Live
              </span>
            ) : (
              <span className="mt-2 inline-block bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-500">
                Stable
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Chart */}
      <div>
        <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">
          Historical FX Chart
        </h2>
        <MarketChartServer />
      </div>

      {/* Market Summary Table */}
      <div>
        <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">
          Market Summary
        </h2>
        <div className="overflow-hidden border border-neutral-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr style={{background:"#1e3a8a"}}>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-white">Instrument</th>
                <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-white">Value</th>
                <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-white">Change</th>
                <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-white">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {fxTable.map((row) => (
                <tr key={row.pair} className="hover:bg-blue-50 transition even:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-black">{row.pair}</td>
                  <td className="px-6 py-4 text-right font-mono font-bold text-blue-900">{row.value}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-xs font-semibold ${
                      row.change === "Live" ? "text-blue-600" :
                      row.change === "Stable" ? "text-neutral-400" :
                      row.change.startsWith("-") ? "text-red-500" : "text-green-600"
                    }`}>{row.change}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {row.trend === "up" && <TrendingUp size={16} className="ml-auto text-green-500" />}
                    {row.trend === "down" && <TrendingDown size={16} className="ml-auto text-red-400" />}
                    {row.trend === "neutral" && <Minus size={16} className="ml-auto text-neutral-300" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-neutral-400">
          FX rates sourced from Open Exchange Rates API · Updated hourly · SEMDEX and macro data are indicative
        </p>
      </div>

      </div>
    </div>
  );
}
