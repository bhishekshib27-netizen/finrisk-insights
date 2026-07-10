import { supabase, supabaseAdmin } from './client'

export async function getRatesFromDB() {
  if (!supabase) return null

  const { data, error } = await supabase
    .from('market_rates')
    .select('pair, value, source, updated_at')

  if (error || !data) return null

  const map: Record<string, number> = {}
  data.forEach((row) => { map[row.pair] = row.value })
  return map
}

export async function refreshRatesFromBoM() {
  if (!supabaseAdmin) return false

  try {
    const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=MUR,EUR,GBP')
    const json = await res.json()

    const usdMur = json.rates?.MUR ?? null
    const eurMur = usdMur ? (usdMur / json.rates?.EUR) : null
    const gbpMur = usdMur ? (usdMur / json.rates?.GBP) : null

    if (!usdMur) return false

    const updates = [
      { pair: 'USD_MUR', value: usdMur, source: 'frankfurter' },
      { pair: 'EUR_MUR', value: eurMur, source: 'frankfurter' },
      { pair: 'GBP_MUR', value: gbpMur, source: 'frankfurter' },
    ]

    for (const update of updates) {
      await supabaseAdmin
        .from('market_rates')
        .upsert({ ...update, updated_at: new Date().toISOString() }, { onConflict: 'pair' })
    }

    return true
  } catch {
    return false
  }
}

export type IndexRate = {
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
};

const fallbackRates: Record<string, IndexRate> = {
  SEMDEX: { value: "2,145.32", change: "+0.42%", trend: "up" },
  REPO_RATE: { value: "4.75%", change: "Stable", trend: "neutral" },
};

export async function getIndexRates(): Promise<Record<string, IndexRate>> {
  if (!supabase) return fallbackRates;

  try {
    const { data, error } = await supabase
      .from('market_rates')
      .select('pair, value, change_label, trend')
      .in('pair', ['SEMDEX', 'REPO_RATE']);

    if (error || !data || data.length === 0) return fallbackRates;

    const result: Record<string, IndexRate> = { ...fallbackRates };
    for (const row of data) {
      const suffix = row.pair === 'REPO_RATE' ? '%' : '';
      const rawValue = row.pair === 'SEMDEX'
        ? Number(row.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        : Number(row.value).toFixed(2);
      result[row.pair] = {
        value: `${rawValue}${suffix}`,
        change: row.change_label ?? 'Live',
        trend: (row.trend ?? 'neutral') as "up" | "down" | "neutral",
      };
    }
    return result;
  } catch {
    return fallbackRates;
  }
}
