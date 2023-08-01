'use client'

import BlocksLength from './BlocksLenght'
import { Button } from '@/src/components/ui'
import { useRouter } from 'next/navigation'

type Props = {
  blocks: Block[]
  program: Program
  movements: Movement[]
  blockTypes: BlockType[]
}

export default function BlocksForm({ blocks, program, movements, blockTypes }: Props) {
  return (
    <>
      {!blocks.length ? (
        <>
          <BlocksLength
            maxDuration={program.duration}
            movements={movements}
            blockTypes={blockTypes}
          />
          <div className='col-span-4 flex gap-4 items-center justify-end'>
            <div>Already blocks lenght setted?</div>
            <Button buttonConfig='page'>Next step</Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
