import { getBlockTypes, getExercises, getMovements, getPrograms } from '@/lib'
import { Metadata } from 'next'
import { Button, UnderlineEffect } from '@/src/components/ui'
import { BlocksLength } from './components'
import getBlocks from '@/lib/getBlocks'
import BlocksForm from './components/BlocksForm'

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

export default async function Program({ params: { name } }: Props) {
  const programName = decodeURI(name)

  const [program]: Program[] = await getPrograms({ name })
  const movements: Movement[] = await getMovements()
  const blockTypes: BlockType[] = await getBlockTypes()
  const blocks: Block[] = await getBlocks({ programId: program.id })
  const exercises: Exercise[] = await getExercises({ queryType: 'all' })

  console.log(blocks)

  return (
    <main className='p-4 grid grid-cols-4 gap-4 no-scrollbar overflow-auto'>
      <h1 className='text-2xl group w-max col-span-2'>
        <UnderlineEffect>{programName}</UnderlineEffect>
      </h1>
      <h2 className='col-span-2 flex justify-end items-center text-xl'>{program.duration} Weeks</h2>
      <BlocksForm
        blocks={blocks}
        program={program}
        blockTypes={blockTypes}
        movements={movements}
      />
    </main>
  )
}

export async function generateStaticParams() {
  const programs: Program[] = await getPrograms({})

  return programs.map(program => ({ name: encodeURI(program.name) }))
}
