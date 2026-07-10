import { FXRates } from "@/lib/api/fx";
import { IndexRate } from "@/lib/supabase/rates";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MarketTickerProps {
  rates: FXRates;
  indexRates: Record<string, IndexRate>;
}

export default function MarketTicker({ rates, indexRates }: MarketTickerProps) {
  const ticker = [
    { name: "SEMDEX", value: indexRates.SEMDEX.value, change: indexRates.SEMDEX.change, trend: indexRates.SEMDEX.trend },
    { name: "USD/MUR", value: rates.USD_MUR.toFixed(2), change: "Live", trend: "neutral" },
    { name: "EUR/MUR", value: rates.EUR_MUR.toFixed(2), change: "Live", trend: "neutral" },
    { name: "GBP/MUR", value: rates.GBP_MUR.toFixed(2), change: "Live", trend: "neutral" },
    { name: "Repo Rate", value: indexRates.REPO_RATE.value, change: indexRates.REPO_RATE.change, trend: indexRates.REPO_RATE.trend },
    { name: "Inflation", value: "3.2%", change: "-0.4%", trend: "down" },
    { name: "Gold", value: "$2,345", change: "+1.2%", trend: "up" },
    { name: "Oil (Brent)", value: "$82.40", change: "-0.6%", trend: "down" },
  ];

  const items = [...ticker, ...ticker];

  return (
    <div className="overflow-hidden border border-neutral-200 bg-white">
      <div className="flex items-center gap-2 border-b border-neutral-200 bg-black px-4 py-1.5">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
        <span className="text-xs font-semibold uppercase tracking-widest text-white">Live Markets</span>
      </div>
      <div className="relative flex overflow-hidden py-3">
        <div className="flex animate-ticker gap-12 whitespace-nowrap" style={{ willChange: "transform" }}>
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              {item.trend === "up" && <TrendingUp size={13} className="text-green-500" />}
              {item.trend === "down" && <TrendingDown size={13} className="text-red-400" />}
              {item.trend === "neutral" && <Minus size={13} className="text-neutral-300" />}
              <span className="text-sm font-semibold text-neutral-600">{item.name}</span>
              <span className="font-mono text-sm font-bold text-black">{item.value}</span>
              <span className={`text-xs font-semibold ${
                item.change === "Live" ? "text-green-600" :
                item.change === "Stable" ? "text-neutral-400" :
                item.change.startsWith("-") ? "text-red-400" : "text-green-600"
              }`}>{item.change}</span>
              <span className="ml-6 text-neutral-200">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
