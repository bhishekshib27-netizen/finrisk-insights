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

export async function getFXRates(): Promise<FXRates> {
  const res = await fetch(
    "https://api.frankfurter.app/latest?from=MUR&to=USD,EUR,GBP",
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch FX rates");
  const data = await res.json();
  return {
    USD_MUR: parseFloat((1 / data.rates.USD).toFixed(2)),
    EUR_MUR: parseFloat((1 / data.rates.EUR).toFixed(2)),
    GBP_MUR: parseFloat((1 / data.rates.GBP).toFixed(2)),
  };
}

export async function getFXHistory(): Promise<FXHistoricalPoint[]> {
  const end = new Date();
  const start = new Date();
  start.setMonth(start.getMonth() - 6);
  const startStr = start.toISOString().split("T")[0];
  const endStr = end.toISOString().split("T")[0];
  const res = await fetch(
    `https://api.frankfurter.app/${startStr}..${endStr}?from=MUR&to=USD,EUR,GBP`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch FX history");
  const data = await res.json();
  const entries = Object.entries(data.rates) as [string, { USD: number; EUR: number; GBP: number }][];
  const sampled = entries.filter((_, i) => i % 14 === 0);
  return sampled.map(([date, rates]) => ({
    date: new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    USD_MUR: parseFloat((1 / rates.USD).toFixed(2)),
    EUR_MUR: parseFloat((1 / rates.EUR).toFixed(2)),
    GBP_MUR: parseFloat((1 / rates.GBP).toFixed(2)),
  }));
}

export async function getCommodityPrices(): Promise<CommodityPrices> {
  try {
    const goldRes = await fetch(
      "https://api.frankfurter.app/latest?from=XAU&to=USD",
      { next: { revalidate: 3600 } }
    );
    const goldData = await goldRes.json();
    const goldUSD = goldData?.rates?.USD ?? null;
    return {
      gold: goldUSD ? parseFloat(goldUSD.toFixed(2)) : null,
      oil: 82.40,
    };
  } catch {
    return { gold: null, oil: 82.40 };
  }
}
