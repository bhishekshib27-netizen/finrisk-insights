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
  USD_MUR: 47.99,
  EUR_MUR: 54.67,
  GBP_MUR: 63.38,
};

const fallbackHistory: FXHistoricalPoint[] = [
  { date: "Jan 1", USD_MUR: 45.50, EUR_MUR: 51.90, GBP_MUR: 59.20 },
  { date: "Jan 15", USD_MUR: 45.80, EUR_MUR: 52.10, GBP_MUR: 59.45 },
  { date: "Feb 1", USD_MUR: 46.20, EUR_MUR: 52.50, GBP_MUR: 60.10 },
  { date: "Feb 15", USD_MUR: 46.50, EUR_MUR: 52.80, GBP_MUR: 60.50 },
  { date: "Mar 1", USD_MUR: 46.80, EUR_MUR: 53.10, GBP_MUR: 61.00 },
  { date: "Mar 15", USD_MUR: 47.00, EUR_MUR: 53.40, GBP_MUR: 61.50 },
  { date: "Apr 1", USD_MUR: 47.20, EUR_MUR: 53.60, GBP_MUR: 62.00 },
  { date: "Apr 15", USD_MUR: 47.40, EUR_MUR: 53.80, GBP_MUR: 62.40 },
  { date: "May 1", USD_MUR: 47.60, EUR_MUR: 54.00, GBP_MUR: 62.80 },
  { date: "May 15", USD_MUR: 47.80, EUR_MUR: 54.30, GBP_MUR: 63.10 },
  { date: "Jun 1", USD_MUR: 47.90, EUR_MUR: 54.50, GBP_MUR: 63.25 },
  { date: "Jun 15", USD_MUR: 47.99, EUR_MUR: 54.67, GBP_MUR: 63.38 },
];

export async function getFXRates(): Promise<FXRates> {
  try {
    const res = await fetch(
      "https://open.er-api.com/v6/latest/USD",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return fallbackRates;
    const data = await res.json();
    const usdMur = data.rates.MUR;
    const eurUsd = data.rates.EUR;
    const gbpUsd = data.rates.GBP;
    return {
      USD_MUR: parseFloat(usdMur.toFixed(2)),
      EUR_MUR: parseFloat((usdMur / eurUsd).toFixed(2)),
      GBP_MUR: parseFloat((usdMur / gbpUsd).toFixed(2)),
    };
  } catch {
    return fallbackRates;
  }
}

export async function getFXHistory(): Promise<FXHistoricalPoint[]> {
  return fallbackHistory;
}

export async function getCommodityPrices(): Promise<CommodityPrices> {
  return { gold: 2345, oil: 82.40 };
}
