export default async function getMovements() {
  const response = await fetch(process.env.MOVEMENTS_URL as string)

  return response.json()
}
