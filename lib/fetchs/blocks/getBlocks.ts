export default async function getBlocks(body: { programId: number }) {
  const response = await fetch('http://localhost:3000/api/blocks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    next: {
      revalidate: 15
    }
  })

  return response.json()
}
