type Props = {
  name?: string
}

export default async function getPrograms(params: Props) {
  const searchParams = new URLSearchParams(params)

  const response = await fetch('http://localhost:3000/api/programs?' + searchParams, {
    next: {
      revalidate: 15
    }
  })

  return response.json()
}
