export default async function getBlockTypes() {
  const response = await fetch('http://localhost:3000/api/blocktypes', {
    next: {
      revalidate: 15
    }
  })

  return response.json()
}
