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
