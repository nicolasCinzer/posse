export default async function addProgram(body: Partial<Program>) {
  const URL = 'http://localhost:3000/api/programs'

  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
