import { client } from './client'

export type SanityArticle = {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any[]
  publishedAt: string
  readTime?: string
  categories?: { title: string }[]
  author?: { name: string; role?: string }
}

export async function getAllPosts(): Promise<SanityArticle[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      "categories": categories[]->{ title },
      "author": author->{ name }
    }
  `)
}

export async function getPostBySlug(slug: string): Promise<SanityArticle | null> {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      "categories": categories[]->{ title },
      "author": author->{ name }
    }
  `, { slug })
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(`
    *[_type == "post"] {
      "slug": slug.current
    }
  `)
}
