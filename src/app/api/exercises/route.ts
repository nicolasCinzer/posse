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

  const URLFetch = `${EXERCISES_URL}?${params}`
  console.log(URLFetch)

  const res = await fetch(URLFetch)

  const exercise: Exercise[] = await res.json()

  return NextResponse.json(exercise)
}
