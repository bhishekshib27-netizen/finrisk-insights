import { supabase } from './client'
import { client } from '@/lib/sanity/client'

export async function getSiteStats() {
  try {
    // Episode count from Supabase
    const { count: episodeCount } = await supabase!
      .from('podcast_episodes')
      .select('*', { count: 'exact', head: true })
      .eq('active', true)

    // Report/post count from Sanity
    let reportCount = 0
    if (client) {
      reportCount = await client.fetch(`count(*[_type == "post"])`)
    }

    return {
      subscribers: 400, // LinkedIn audience — update manually as it grows
      reports: reportCount ?? 0,
      episodes: episodeCount ?? 0,
    }
  } catch {
    return { subscribers: 400, reports: 0, episodes: 0 }
  }
}
