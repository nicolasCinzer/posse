import { BlockList } from 'net'
import { NextResponse } from 'next/server'

const BLOCKS_URL: string = process.env.BLOCKS_URL as string

export async function GET() {
  const res = await fetch(BLOCKS_URL)

  const blocks: Block[] = await res.json()

  return NextResponse.json(blocks)
}

export async function POST(request: Request) {
  const req: Block[] | { programId: number } = await request.json()

  if (Array.isArray(req)) {
    let pushedBlocks: Block[] = []

    req.map(block => {
      fetch(BLOCKS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(block)
      })
    })

    return NextResponse.json('Blocks Added')
  }

  if ('programId' in req) {
    const { programId } = req
    const res = await fetch(`${BLOCKS_URL}?programId=${programId}`)

    const blocks: Block[] = await res.json()

    return NextResponse.json(blocks)
  }
}
