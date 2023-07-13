export default async function getPrograms() {
  const response = await fetch('http://localhost:3000/api/programs')

  return response.json()
}
