import { getFXRates, FXRates } from "@/lib/api/fx";
import { getIndexRates } from "@/lib/supabase/rates";
import MarketTicker from "@/components/dashboard/MarketTicker";

const fallback: FXRates = {
  USD_MUR: 45.12,
  EUR_MUR: 49.84,
  GBP_MUR: 58.33,
};

export default async function FXRatesServer() {
  let rates: FXRates = fallback;

  try {
    rates = await getFXRates();
  } catch {
    // silently fall back to static values
  }

  const indexRates = await getIndexRates();

  return <MarketTicker rates={rates} indexRates={indexRates} />;
}
