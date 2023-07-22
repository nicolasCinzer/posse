import { useMemo } from 'react'
import { getPrograms } from '@/lib'
import { Metadata } from 'next'

type Props = { params: { name: string } }

export async function generateMetadata({ params: { name } }: Props): Promise<Metadata> {
  try {
    const [program]: Program[] = await getPrograms({ name })

    return {
      title: program.name,
      description: `This is the page of ${program.name}`
    }
  } catch {
    return {
      title: 'program not Found'
    }
  }
}

export default function Program({ params: { name } }: Props) {
  const programName = useMemo(() => decodeURI(name), [name])

  return <div>{programName}</div>
}

export async function generateStaticParams() {
  const programs: Program[] = await getPrograms({})

  return programs.map(program => ({ name: encodeURI(program.name) }))
}
