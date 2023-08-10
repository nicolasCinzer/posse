'use client'

import { useEffect, useState } from 'react'
import { BlockTypeLength } from './'
import { useProgram } from '@/src/context/ProgramContext'

type Props = {
  program: Program
  movement: Movement
  blockTypes: BlockType[]
  maxDuration: number
}

export default function MovementItem({ program, movement, blockTypes, maxDuration }: Props) {
  const {
    programState: { blocks }
  } = useProgram()
  const [weekAvailable, setWeekAvailable] = useState(maxDuration)

  const totalDuration = blocks
    .filter(block => block.movementId === movement.id)
    .reduce((prev, curr) => {
      return prev + (curr.duration as number)
    }, 0)

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
            program={program.id}
            movement={movement}
            blockType={blockType}
            maxDuration={maxDuration}
            setWeekAvailable={setWeekAvailable}
          />
        ))}
      </ul>
    </article>
  )
}
