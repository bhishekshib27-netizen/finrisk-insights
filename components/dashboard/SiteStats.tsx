import { getSiteStats } from '@/lib/supabase/stats'

export default async function SiteStats() {
  const stats = await getSiteStats()

  const items = [
    { value: stats.subscribers, label: 'Subscribers' },
    { value: stats.reports, label: 'Reports' },
    { value: stats.episodes, label: 'Podcast Episodes' },
  ]

  return (
    <div className="mt-6 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-2xl font-bold text-black">
            {item.value > 0 ? item.value.toLocaleString() : '—'}
          </p>
          <p className="mt-1 text-xs text-neutral-400">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
