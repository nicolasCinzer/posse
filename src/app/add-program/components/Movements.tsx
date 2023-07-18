'use client'

import { useState } from 'react'
import { MovementItem } from './'
import { MdCheck, MdClose } from 'react-icons/md'

type Props = {
  maxDuration: number
  movements: Movement[]
  blockTypes: BlockType[]
}

export default function Movements({ maxDuration, movements, blockTypes }: Props) {
  const [currentMovements, setCurrentMovements] = useState<Movement[]>(movements)

  const movementsContainers = (
    <>
      <h2 className='text-xl'>Set Blocks Lenght</h2>
      <div className='flex justify-between'>
        <ul className='flex gap-4'>
          {movements.map(movement => (
            <li
              key={movement.id}
              className={`flex gap-2 items-center px-2 rounded-xl bg-comp-color text-acc-color`}
            >
              <div>{movement.name}</div>
              {currentMovements.map(item => item.id).includes(movement.id) ? (
                <MdCheck
                  className='text-lg cursor-pointer'
                  onClick={() => setCurrentMovements(currentMovements.filter(item => item.id !== movement.id))}
                />
              ) : (
                <MdClose
                  className='text-lg cursor-pointer'
                  onClick={() => setCurrentMovements([...currentMovements, movement])}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      {currentMovements.map(movement => (
        <MovementItem
          key={movement.id}
          movement={movement}
          blockTypes={blockTypes}
          maxDuration={maxDuration}
        />
      ))}
    </>
  )

  return movementsContainers
}
