export type FXRates = {
  USD_MUR: number;
  EUR_MUR: number;
  GBP_MUR: number;
};

export type FXHistoricalPoint = {
  date: string;
  USD_MUR: number;
  EUR_MUR: number;
  GBP_MUR: number;
};

export type CommodityPrices = {
  gold: number | null;
  oil: number | null;
};

const fallbackRates: FXRates = {
  USD_MUR: 45.12,
  EUR_MUR: 49.84,
  GBP_MUR: 58.33,
};

const fallbackHistory: FXHistoricalPoint[] = [
  { date: "Jan 1", USD_MUR: 44.50, EUR_MUR: 48.90, GBP_MUR: 57.20 },
  { date: "Jan 15", USD_MUR: 44.65, EUR_MUR: 49.10, GBP_MUR: 57.45 },
  { date: "Feb 1", USD_MUR: 44.80, EUR_MUR: 49.20, GBP_MUR: 57.60 },
  { date: "Feb 15", USD_MUR: 44.70, EUR_MUR: 49.15, GBP_MUR: 57.50 },
  { date: "Mar 1", USD_MUR: 44.90, EUR_MUR: 49.30, GBP_MUR: 57.80 },
  { date: "Mar 15", USD_MUR: 45.00, EUR_MUR: 49.50, GBP_MUR: 58.00 },
  { date: "Apr 1", USD_MUR: 44.85, EUR_MUR: 49.40, GBP_MUR: 57.90 },
  { date: "Apr 15", USD_MUR: 45.05, EUR_MUR: 49.60, GBP_MUR: 58.10 },
  { date: "May 1", USD_MUR: 45.10, EUR_MUR: 49.70, GBP_MUR: 58.20 },
  { date: "May 15", USD_MUR: 45.08, EUR_MUR: 49.75, GBP_MUR: 58.25 },
  { date: "Jun 1", USD_MUR: 45.12, EUR_MUR: 49.80, GBP_MUR: 58.30 },
  { date: "Jun 15", USD_MUR: 45.12, EUR_MUR: 49.84, GBP_MUR: 58.33 },
];

export async function getFXRates(): Promise<FXRates> {
  try {
    const res = await fetch(
      "https://api.frankfurter.app/latest?from=MUR&to=USD,EUR,GBP",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return fallbackRates;
    const data = await res.json();
    return {
      USD_MUR: parseFloat((1 / data.rates.USD).toFixed(2)),
      EUR_MUR: parseFloat((1 / data.rates.EUR).toFixed(2)),
      GBP_MUR: parseFloat((1 / data.rates.GBP).toFixed(2)),
    };
  } catch {
    return fallbackRates;
  }
}

export async function getFXHistory(): Promise<FXHistoricalPoint[]> {
  try {
    const end = new Date();
    const start = new Date();
    start.setMonth(start.getMonth() - 6);
    const startStr = start.toISOString().split("T")[0];
    const endStr = end.toISOString().split("T")[0];
    const res = await fetch(
      `https://api.frankfurter.app/${startStr}..${endStr}?from=MUR&to=USD,EUR,GBP`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return fallbackHistory;
    const data = await res.json();
    const entries = Object.entries(data.rates) as [string, { USD: number; EUR: number; GBP: number }][];
    const sampled = entries.filter((_, i) => i % 14 === 0);
    if (sampled.length === 0) return fallbackHistory;
    return sampled.map(([date, rates]) => ({
      date: new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      USD_MUR: parseFloat((1 / rates.USD).toFixed(2)),
      EUR_MUR: parseFloat((1 / rates.EUR).toFixed(2)),
      GBP_MUR: parseFloat((1 / rates.GBP).toFixed(2)),
    }));
  } catch {
    return fallbackHistory;
  }
}

export async function getCommodityPrices(): Promise<CommodityPrices> {
  return { gold: 2345, oil: 82.40 };
}
