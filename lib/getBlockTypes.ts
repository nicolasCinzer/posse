export default async function getBlockTypes() {
  const response = await fetch(process.env.BLOCK_TYPES_URL as string)

  return response.json()
}
