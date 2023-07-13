import { NextResponse } from 'next/server'

const MOVEMENTS_URL: string = process.env.MOVEMENTS_URL as string

export async function GET() {
  const res = await fetch(MOVEMENTS_URL)

  const movements: Movement[] = await res.json()

  return NextResponse.json(movements)
}
