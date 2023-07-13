export default async function getBlockTypes() {
  const response = await fetch('http://localhost:3000/api/blocktypes')

  return response.json()
}
