'use client'

import { useState } from 'react'
import { BlockTypeLength } from './'

type Props = {
  movement: Movement
  blockTypes: BlockType[]
  maxDuration: number
}

export default function MovementItem({ movement, blockTypes, maxDuration }: Props) {
  const [weekAvailable, setWeekAvailable] = useState(maxDuration)
  const [blockTypesState, setBlockTypesState] = useState<BlockTypeState[]>(blockTypes.map(item => ({ ...item, currentDuration: 0 })))

  return (
    <article className='border rounded px-4 py-2 grid grid-cols-3 gap-2 col-span-4'>
      <div className='font-bold'>{movement.name}</div>
      <div className=''>{weekAvailable < 0 ? 'Weeks Excedeed!' : ''}</div>
      <div className='flex justify-end'>{maxDuration} Weeks Long</div>
      <ul className='col-span-3 flex justify-between border-t pt-4'>
        {blockTypesState.map(blockType => (
          <BlockTypeLength
            key={blockType.id}
            movement={movement.name}
            blockType={blockType}
            maxDuration={maxDuration}
            blockTypesState={blockTypesState}
            setBlockTypesState={setBlockTypesState}
            setWeekAvailable={setWeekAvailable}
          />
        ))}
      </ul>
    </article>
  )
}
