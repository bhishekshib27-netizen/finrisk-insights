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
  author?: { name: string; slug?: string; role?: string }
}

export async function getAllPosts(): Promise<SanityArticle[]> {
  if (!client) return []
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, body, publishedAt, _createdAt,
      "categories": categories[]->{ title },
      "author": author->{ name, "slug": slug.current, role }
    }
  `)
}

export async function getPostBySlug(slug: string): Promise<SanityArticle | null> {
  if (!client) return null
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, body, publishedAt, _createdAt,
      "categories": categories[]->{ title },
      "author": author->{ name, "slug": slug.current, role }
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
  active?: boolean
}

// Job posts are hidden from the site 14 days after they were posted, so
// stale listings don't clutter the careers page. The underlying Sanity
// document is never touched — this only affects what the site shows.
const JOB_EXPIRY_DAYS = 14

function jobCutoffIso(): string {
  return new Date(Date.now() - JOB_EXPIRY_DAYS * 24 * 60 * 60 * 1000).toISOString()
}

export function isJobExpired(postedAt: string): boolean {
  const ageMs = Date.now() - new Date(postedAt).getTime()
  return ageMs > JOB_EXPIRY_DAYS * 24 * 60 * 60 * 1000
}

export async function getAllJobs(): Promise<SanityJob[]> {
  if (!client) return []
  return client.fetch(
    `*[_type == "job" && active == true && postedAt > $cutoff] | order(postedAt desc) {
      _id, title, company, sector, type, location, workStyle, description, requirements, applyUrl, postedAt
    }`,
    { cutoff: jobCutoffIso() }
  )
}

export async function getJobById(id: string): Promise<SanityJob | null> {
  if (!client) return null
  return client.fetch(
    `*[_type == "job" && _id == $id][0] {
      _id, title, company, sector, type, location, workStyle, description, requirements, applyUrl, postedAt, active
    }`,
    { id }
  )
}

export async function getAllJobIds(): Promise<{ id: string }[]> {
  if (!client) return []
  return client.fetch(
    `*[_type == "job" && active == true && postedAt > $cutoff] { "id": _id }`,
    { cutoff: jobCutoffIso() }
  )
}

export type SanityAuthor = {
  _id: string
  name: string
  slug: string
  role?: string
  bio?: string
  photo?: any
  linkedIn?: string
}

export async function getAuthorBySlug(slug: string): Promise<SanityAuthor | null> {
  if (!client) return null
  return client.fetch(
    `*[_type == "author" && slug.current == $slug][0] {
      _id, name, "slug": slug.current, role, bio, photo, linkedIn
    }`,
    { slug }
  )
}

export async function getPostsByAuthor(authorId: string): Promise<SanityArticle[]> {
  if (!client) return []
  return client.fetch(
    `*[_type == "post" && author._ref == $authorId] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, _createdAt,
      "categories": categories[]->{ title }
    }`,
    { authorId }
  )
}
