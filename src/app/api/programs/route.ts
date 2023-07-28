import { NextResponse } from 'next/server'

const PROGRAMS_URL: string = process.env.PROGRAMS_URL as string

export async function GET(request: Request) {
  let { searchParams } = new URL(request.url)

  const res = await fetch(`${PROGRAMS_URL}?${decodeURI(searchParams.toString())}`)

  const programs: Program[] = await res.json()

  return NextResponse.json(programs)
}

export async function POST(request: Request) {
  const { name, duration, workDaysNumber }: Partial<Program> = await request.json()

  if (!name) NextResponse.json({ message: 'Error: Program Name is required.' })

  const res = await fetch(PROGRAMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, duration, workDaysNumber })
  })

  const newProgram: Program = await res.json()

  return NextResponse.json(newProgram)
}
