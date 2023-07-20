import { NextResponse } from 'next/server'

const EXERCISES_URL: string = process.env.EXERCISES_URL as string

type Props = {
  params: {
    name?: string
    exerciseType?: string
    movement?: string
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const objParams = Object.fromEntries(searchParams.entries())

  let paramsModified: { [k: string]: string } = {}
  Object.keys(objParams).map(key => {
    paramsModified[`${key}_like`] = objParams[key]
  })

  const params = new URLSearchParams(paramsModified)

  const URLFetch = `${EXERCISES_URL}?${params.toString().replaceAll(/%2520/g, '%20')}`

  const res = await fetch(URLFetch)

  const exercise: Exercise[] = await res.json()

  return NextResponse.json(exercise)
}

export async function POST(request: Request) {
  const { name, movementId, type }: Partial<Exercise> = await request.json()

  if (!name) NextResponse.json({ message: 'Error: Exercise Name is required.' })

  const res = await fetch(EXERCISES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, movementId, type })
  })

  const newExercise: Exercise = await res.json()

  return NextResponse.json(newExercise)
}
