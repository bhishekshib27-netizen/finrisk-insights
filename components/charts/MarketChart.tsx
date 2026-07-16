"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { semdexData } from "@/lib/data/markets";
import { FXHistoricalPoint } from "@/lib/api/fx";

const metrics = ["SEMDEX", "USD_MUR", "EUR_MUR", "GBP_MUR"] as const;
type Metric = (typeof metrics)[number];

const colors: Record<Metric, string> = {
  SEMDEX: "#0a0a0a",
  USD_MUR: "#16a34a",
  EUR_MUR: "#737373",
  GBP_MUR: "#404040",
};

const labels: Record<Metric, string> = {
  SEMDEX: "SEMDEX",
  USD_MUR: "USD/MUR",
  EUR_MUR: "EUR/MUR",
  GBP_MUR: "GBP/MUR",
};

type SEMDEXPoint = { date: string; SEMDEX: number };
type ChartPoint = FXHistoricalPoint | SEMDEXPoint;

interface MarketChartProps {
  fxHistory: FXHistoricalPoint[] | null;
}

export default function MarketChart({ fxHistory }: MarketChartProps) {
  const [active, setActive] = useState<Metric>("USD_MUR");

  const chartData: ChartPoint[] =
    active === "SEMDEX"
      ? semdexData
      : fxHistory ?? semdexData;

  const isLive = active !== "SEMDEX" && fxHistory !== null;

  return (
    <div className="border border-neutral-200 bg-white p-6">

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold text-black">Market Chart</h2>
          {isLive && (
            <span className="bg-green-50 border border-green-200 px-2 py-0.5 text-xs font-semibold text-green-600">
              Live
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {metrics.map((m) => (
            <button
              key={m}
              onClick={() => setActive(m)}
              className={`px-3 py-1 text-xs font-semibold transition ${
                active === m
                  ? "bg-blue-900 text-white"
                  : "border border-neutral-200 bg-neutral-50 text-neutral-500 hover:border-black hover:text-black"
              }`}
            >
              {labels[m]}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={chartData as any[]}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="date" stroke="#d4d4d4" tick={{ fill: "#737373", fontSize: 12 }} />
          <YAxis stroke="#d4d4d4" tick={{ fill: "#737373", fontSize: 12 }} domain={["auto", "auto"]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e5e5",
              borderRadius: "0px",
              color: "#0a0a0a",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey={active}
            stroke={colors[active]}
            strokeWidth={2}
            dot={{ fill: colors[active], r: 3, strokeWidth: 0 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="mt-4 text-xs text-neutral-400">
        {isLive ? "Source: Frankfurter API · Updated hourly" : "SEMDEX data is indicative · Source: SEM"}
      </p>
    </div>
  );
}
