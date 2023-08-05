'use client'
import { addBlock } from '@/lib'
import { Movements } from './'
import { Button } from '@/src/components/ui'
import { useRouter } from 'next/navigation'

type Props = {
  maxDuration: number
  program: Program
  movements: Movement[]
  blockTypes: BlockType[]
}

export default function BlocksLength({ maxDuration, program, movements, blockTypes }: Props) {
  const router = useRouter()

  movements.map(movement => {
    if (localStorage.getItem(movement.name)) {
      localStorage.removeItem(movement.name)
    }
  })

  const handleClick = async () => {
    let blocks: { [key: string]: { blocks: { id: number; name: string; currentDuration: number }[] } } = {}

    movements.map(movement => {
      const unparsedBlocks = localStorage.getItem(movement.name)

      if (unparsedBlocks) {
        blocks[movement.id.toString()] = JSON.parse(unparsedBlocks)
      }
    })

    let blocksPayload: Partial<Block>[] = []

    Object.keys(blocks).map(movement => {
      console.log(movement)

      const currentBlock = blocks[movement]

      currentBlock.blocks.map(block => {
        if (!block.currentDuration) return

        let payload: Partial<Block> = {
          programId: program.id,
          typeId: block.id,
          movementId: parseInt(movement),
          duration: block.currentDuration
        }

        blocksPayload.push(payload)
      })
    })

    await addBlock(blocksPayload)

    router.push(`/program/${program.name}`)
  }

  return (
    <>
      <section className='grid grid-cols-4 gap-4 col-span-4'>
        <Movements
          maxDuration={maxDuration}
          movements={movements}
          blockTypes={blockTypes}
        />
      </section>
      <div className='col-span-4 flex gap-4 items-center justify-end'>
        <div>Already blocks lenght setted?</div>
        <Button
          onClick={handleClick}
          buttonConfig='page'
        >
          Next step
        </Button>
      </div>
    </>
  )
}
