import { NextResponse } from 'next/server'

const BLOCK_TYPES_URL: string = process.env.BLOCK_TYPES_URL as string

export async function GET() {
  const res = await fetch(BLOCK_TYPES_URL)

  const blockTypes: BlockType[] = await res.json()

  return NextResponse.json(blockTypes)
}

export async function POST(request: Request) {
  const { name }: Partial<BlockType> = await request.json()

  if (!name) return NextResponse.json({ message: 'Missing Block Type Name!' })

  const res = await fetch(BLOCK_TYPES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name
    })
  })

  const newBlockType: BlockType = await res.json()

  return NextResponse.json(newBlockType)
}
