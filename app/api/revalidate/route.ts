import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

export async function POST(req: Request) {
  try {
    const rawBody = await req.text()
    const signature = req.headers.get(SIGNATURE_HEADER_NAME)
    const secret = process.env.SANITY_WEBHOOK_SECRET

    if (!signature || !secret) {
      return NextResponse.json({ error: 'Missing signature or secret' }, { status: 401 })
    }

    const valid = await isValidSignature(rawBody, signature, secret)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const body = JSON.parse(rawBody)
    const type = body?._type

    if (type === 'job') {
      revalidatePath('/careers')
      revalidatePath('/careers/[id]', 'page')
    } else if (type === 'post') {
      revalidatePath('/insights')
      revalidatePath('/insights/[slug]', 'page')
      revalidatePath('/')
    } else if (type === 'author') {
      revalidatePath('/authors/[slug]', 'page')
    }

    return NextResponse.json({ revalidated: true, type, time: new Date().toISOString() })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
