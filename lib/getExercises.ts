type SearchParams = {
  name?: string
  exerciseType?: string
  movement?: string
}

export default async function getExercises(params: SearchParams) {
  const searchParams = new URLSearchParams(params)

  const URL = 'http://localhost:3000/api/exercises?' + searchParams
  const response = await fetch(URL)

  return response.json()
}
