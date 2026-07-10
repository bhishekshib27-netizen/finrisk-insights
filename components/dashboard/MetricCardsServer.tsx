import { getFXRates } from "@/lib/api/fx";
import { getIndexRates } from "@/lib/supabase/rates";
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

  const indexRates = await getIndexRates();

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="SEMDEX"
        value={indexRates.SEMDEX.value}
        change={indexRates.SEMDEX.change}
        positive={indexRates.SEMDEX.trend !== "down"}
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
        value={indexRates.REPO_RATE.value}
        change={indexRates.REPO_RATE.change}
        positive={true}
      />
    </div>
  );
}