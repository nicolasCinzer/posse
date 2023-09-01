'use client'

import { useState } from 'react'
import { BlockTypeLength } from './'
import { useProgram, useBlockTypes } from '@/store'

type Props = {
  programId: number
  movement: Movement
  maxDuration: number
}

export default function MovementItem({ programId, movement, maxDuration }: Props) {
  const [totalBlockDuration] = useProgram(state => [state.totalBlocksDuration])
  const [blockTypes] = useBlockTypes(state => [state.blockTypes])
  const [weekAvailable, setWeekAvailable] = useState(maxDuration)

  const totalDuration = totalBlockDuration[movement.id as number]

  return (
    <article className='border rounded px-4 py-2 grid grid-cols-3 gap-2 col-span-4'>
      <div className='font-bold'>{movement.name}</div>
      <div className=''>{weekAvailable < 0 ? 'Weeks Excedeed!' : ''}</div>
      <div className='flex justify-end'>
        {totalDuration}/{maxDuration} Weeks Long
      </div>
      <ul className='col-span-3 flex justify-between border-t pt-4'>
        {blockTypes.map(blockType => (
          <BlockTypeLength
            key={blockType.id}
            programId={programId}
            movementId={movement.id as number}
            blockType={blockType}
            maxDuration={maxDuration}
            setWeekAvailable={setWeekAvailable}
          />
        ))}
      </ul>
    </article>
  )
}
