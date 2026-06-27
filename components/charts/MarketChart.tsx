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
  SEMDEX: "#0891b2",
  USD_MUR: "#7c3aed",
  EUR_MUR: "#059669",
  GBP_MUR: "#d97706",
};

const labels: Record<Metric, string> = {
  SEMDEX: "SEMDEX",
  USD_MUR: "USD/MUR",
  EUR_MUR: "EUR/MUR",
  GBP_MUR: "GBP/MUR",
};

interface MarketChartProps {
  fxHistory: FXHistoricalPoint[] | null;
}

export default function MarketChart({ fxHistory }: MarketChartProps) {
  const [active, setActive] = useState<Metric>("USD_MUR");

  // Use live FX data for FX metrics, mock data for SEMDEX
  const chartData =
    active === "SEMDEX"
      ? semdexData
      : fxHistory ?? semdexData;

  const isLive = active !== "SEMDEX" && fxHistory !== null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Market Chart
          </h2>
          {isLive && (
            <span className="rounded-full bg-cyan-50 px-2 py-0.5 text-xs font-medium text-cyan-600">
              Live
            </span>
          )}
        </div>

        {/* Toggle buttons */}
        <div className="flex gap-2">
          {metrics.map((m) => (
            <button
              key={m}
              onClick={() => setActive(m)}
              className={`rounded-lg px-3 py-1 text-xs font-medium transition ${
                active === m
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {labels[m]}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />

          <XAxis
            dataKey="date"
            stroke="#cbd5e1"
            tick={{ fill: "#64748b", fontSize: 12 }}
          />

          <YAxis
            stroke="#cbd5e1"
            tick={{ fill: "#64748b", fontSize: 12 }}
            domain={["auto", "auto"]}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              color: "#0f172a",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />

          <Line
            type="monotone"
            dataKey={active}
            stroke={colors[active]}
            strokeWidth={2.5}
            dot={{ fill: colors[active], r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Footer */}
      <p className="mt-4 text-xs text-slate-400">
        {isLive
          ? "Source: Frankfurter API · Updated hourly"
          : "SEMDEX data is indicative · Source: SEM"}
      </p>

    </div>
  );
}