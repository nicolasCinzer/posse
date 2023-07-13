import { NextResponse } from 'next/server'

const PROGRAMS_URL: string = process.env.PROGRAMS_URL as string

export async function GET() {
  const res = await fetch(PROGRAMS_URL)

  const programs: Program[] = await res.json()

  return NextResponse.json(programs)
}
