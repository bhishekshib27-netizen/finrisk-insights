import { getFXHistory } from "@/lib/api/fx";
import MarketChart from "@/components/charts/MarketChart";
import { semdexData } from "@/lib/data/markets";

export default async function MarketChartServer() {
  let fxHistory = null;

  try {
    fxHistory = await getFXHistory();
  } catch {
    // fallback to mock data
  }

  return <MarketChart fxHistory={fxHistory} />;
}