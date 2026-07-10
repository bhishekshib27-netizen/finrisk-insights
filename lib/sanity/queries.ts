import { client } from './client'

export type SanityArticle = {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any[]
  publishedAt: string
  _createdAt: string
  categories?: { title: string }[]
  author?: { name: string }
}

export async function getAllPosts(): Promise<SanityArticle[]> {
  if (!client) return []
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, body, publishedAt, _createdAt,
      "categories": categories[]->{ title },
      "author": author->{ name }
    }
  `)
}

export async function getPostBySlug(slug: string): Promise<SanityArticle | null> {
  if (!client) return null
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, body, publishedAt, _createdAt,
      "categories": categories[]->{ title },
      "author": author->{ name }
    }
  `, { slug })
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  if (!client) return []
  return client.fetch(`*[_type == "post"] { "slug": slug.current }`)
}

export type SanityJob = {
  _id: string
  title: string
  company: string
  sector: string
  type: string
  location: string
  workStyle: string
  description: string
  requirements: string[]
  applyUrl: string
  postedAt: string
}

export async function getAllJobs(): Promise<SanityJob[]> {
  if (!client) return []
  return client.fetch(`
    *[_type == "job" && active == true] | order(postedAt desc) {
      _id, title, company, sector, type, location, workStyle, description, requirements, applyUrl, postedAt
    }
  `)
}

export async function getJobById(id: string): Promise<SanityJob | null> {
  if (!client) return null
  return client.fetch(
    `*[_type == "job" && _id == $id][0] {
      _id, title, company, sector, type, location, workStyle, description, requirements, applyUrl, postedAt
    }`,
    { id }
  )
}

export async function getAllJobIds(): Promise<{ id: string }[]> {
  if (!client) return []
  return client.fetch(`*[_type == "job" && active == true] { "id": _id }`)
}
