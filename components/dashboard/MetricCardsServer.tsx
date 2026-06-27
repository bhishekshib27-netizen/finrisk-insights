import { getFXRates } from "@/lib/api/fx";
import MetricCard from "@/components/dashboard/MetricCard";

export default async function MetricCardsServer() {
  let usdMur = 45.12;
  let eurMur = 49.84;

  try {
    const rates = await getFXRates();
    usdMur = rates.USD_MUR;
    eurMur = rates.EUR_MUR;
  } catch {
    // fallback to static values
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="SEMDEX"
        value="2,145.32"
        change="+0.42%"
        positive={true}
      />
      <MetricCard
        title="USD / MUR"
        value={usdMur.toFixed(2)}
        change="Live"
        positive={true}
      />
      <MetricCard
        title="EUR / MUR"
        value={eurMur.toFixed(2)}
        change="Live"
        positive={true}
      />
      <MetricCard
        title="Repo Rate"
        value="4.50%"
        change="Stable"
        positive={true}
      />
    </div>
  );
}