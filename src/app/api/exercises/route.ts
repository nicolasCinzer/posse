import { NextResponse } from 'next/server'

const EXERCISES_URL: string = process.env.EXERCISES_URL as string

const exercisePropsArray = ['name', 'movementId', 'type']

type SearchParams = {
  name?: string
  exerciseType?: string
  movement?: string
  queryType: 'all' | 'equal' | 'like'
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const objParams: SearchParams = Object.fromEntries(searchParams.entries()) as SearchParams

  let URLFetch = EXERCISES_URL

  if (objParams.queryType === 'equal') {
    let paramsModified: { [k: string]: string } = {}
    Object.keys(objParams).map(key => {
      if (exercisePropsArray.includes(key)) paramsModified[key] = objParams[key as keyof SearchParams] as string
    })

    const params = new URLSearchParams(paramsModified)

    URLFetch = `${URLFetch}?${decodeURI(params.toString())}`
  }

  if (objParams.queryType === 'like') {
    let paramsModified: { [k: string]: string } = {}
    Object.keys(objParams).map(key => {
      if (exercisePropsArray.includes(key)) paramsModified[`${key}_like`] = objParams[key as keyof SearchParams] as string
    })

    const params = new URLSearchParams(paramsModified)

    URLFetch = `${URLFetch}?${decodeURI(params.toString())}`
  }

  console.log(URLFetch)

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
