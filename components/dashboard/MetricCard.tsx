"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

export default function MetricCard({ title, value, change, positive = true }: MetricCardProps) {
  const isLive = change === "Live";
  const isStable = change === "Stable" || change === "No Change";
  const isPositive = positive && !isLive && !isStable;
  const isNegative = !positive && !isLive && !isStable;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="relative border border-neutral-200 bg-white p-6 transition hover:shadow-md"
    >
      <div className={`absolute left-0 top-0 h-0.5 w-full ${isPositive ? "bg-green-500" : isNegative ? "bg-red-400" : isLive ? "bg-black" : "bg-neutral-300"}`} />

      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{title}</p>
        {isLive && <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />}
        {isPositive && <TrendingUp size={16} className="text-green-600" />}
        {isNegative && <TrendingDown size={16} className="text-red-400" />}
        {isStable && <Minus size={16} className="text-neutral-400" />}
      </div>

      <p className="mt-3 font-mono text-3xl font-bold tracking-tight text-black">{value}</p>

      <div className="mt-2">
        {isLive && <span className="inline-flex items-center gap-1 bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600">● Live</span>}
        {isStable && <span className="inline-flex items-center gap-1 bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-500">— Stable</span>}
        {isPositive && <span className="inline-flex items-center gap-1 bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600">↑ {change}</span>}
        {isNegative && <span className="inline-flex items-center gap-1 bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-500">↓ {change}</span>}
      </div>
    </motion.div>
  );
}
