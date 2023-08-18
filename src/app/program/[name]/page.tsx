import { getPrograms, getBlocks, getMovements, getBlockTypes, getExercises } from '@/lib'
import ProgramPanel from './components/ProgramPanel'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

type Props = { params: { name: string } }

export async function generateMetadata({ params: { name } }: Props): Promise<Metadata> {
  try {
    const programs: Program[] = await getPrograms({ name })

    return {
      title: programs[0]?.name,
      description: `This is the page of ${programs[0]?.name}`
    }
  } catch {
    return {
      title: 'Program not Found'
    }
  }
}

export default async function Program({ params: { name } }: Props) {
  const programName = decodeURI(name)

  const [program]: Program[] = await getPrograms({ name })
  const blocks: Block[] = await getBlocks({ programId: program.id })
  const movements: Movement[] = await getMovements()
  const blockTypes: BlockType[] = await getBlockTypes()
  const exercises: Exercise[] = await getExercises({ queryType: 'all' })

  return (
    <article className=' grid grid-cols-4 gap-4 col-span-4 no-scrollbar overflow-auto'>
      <ProgramPanel
        program={program}
        blockTypes={blockTypes}
        movements={movements}
        blocks={blocks}
        exercises={exercises}
      />
    </article>
  )
}

export async function generateStaticParams() {
  const programs: Program[] = await getPrograms({})

  return programs?.map(program => ({ name: encodeURI(program.name) }))
}
