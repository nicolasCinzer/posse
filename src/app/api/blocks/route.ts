import { NextResponse } from 'next/server'

const BLOCKS_URL: string = process.env.BLOCKS_URL as string

export async function GET() {
  const res = await fetch(BLOCKS_URL)

  const blocks: Block[] = await res.json()

  return NextResponse.json(blocks)
}

export async function POST(request: Request) {
  const { programId } = await request.json()

  const res = await fetch(`${BLOCKS_URL}?programId=${programId}`)

  const blocks: Block[] = await res.json()

  return NextResponse.json(blocks)
}
