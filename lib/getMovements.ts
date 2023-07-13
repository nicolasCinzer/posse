export default async function getMovements() {
  const response = await fetch('http://localhost:3000/api/movements')

  return response.json()
}
