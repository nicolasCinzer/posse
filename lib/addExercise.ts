export default async function addExercise(body: Partial<Exercise>) {
  const URL = 'http://localhost:3000/api/exercises'

  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
