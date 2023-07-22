type SearchParams = {
  name?: string
  exerciseType?: string
  movement?: string
  queryType: 'all' | 'equal' | 'like'
}

export default async function getExercises(params: SearchParams) {
  const searchParams = new URLSearchParams(params)

  const URL = 'http://localhost:3000/api/exercises?' + searchParams
  const response = await fetch(URL, {
    next: {
      revalidate: 15
    }
  })

  return response.json()
}
