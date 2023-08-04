import { getBlockTypes, getExercises, getMovements, getPrograms, getBlocks } from '@/lib'
import { BlocksLength } from './components'

type Props = { params: { name: string } }

export default async function SetBlocks({ params: { name } }: Props) {
  const [program]: Program[] = await getPrograms({ name })
  const movements: Movement[] = await getMovements()
  const blockTypes: BlockType[] = await getBlockTypes()

  return (
    <>
      <BlocksLength
        maxDuration={program.duration}
        blockTypes={blockTypes}
        movements={movements}
      />
    </>
  )
}
