import { supabase, supabaseAdmin } from './client'

export async function getRatesFromDB() {
  const { data, error } = await supabase
    .from('market_rates')
    .select('pair, value, source, updated_at')

  if (error || !data) return null

  const map: Record<string, number> = {}
  data.forEach((row) => { map[row.pair] = row.value })
  return map
}

export async function refreshRatesFromBoM() {
  try {
    // Frankfurter API for live FX (free, no key needed)
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
