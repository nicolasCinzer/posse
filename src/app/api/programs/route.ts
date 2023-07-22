import { NextResponse } from 'next/server'

const PROGRAMS_URL: string = process.env.PROGRAMS_URL as string

export async function GET(request: Request) {
  let { searchParams } = new URL(request.url)

  const res = await fetch(`${PROGRAMS_URL}?${decodeURI(searchParams.toString())}`)

  const programs: Program[] = await res.json()

  return NextResponse.json(programs)
}
