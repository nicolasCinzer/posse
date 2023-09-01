export default async function addBlock(body: Block[]) {
  const URL = 'http://localhost:3000/api/blocks'

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  return response.json()
}
