'use client'

import { useState } from 'react'
import { MovementItem } from './'
import { MdCheck, MdClose } from 'react-icons/md'
import { UnderlineEffect } from '@/src/components/ui'

type Props = {
  maxDuration: number
  movements: Movement[]
  blockTypes: BlockType[]
}

export default function Movements({ maxDuration, movements, blockTypes }: Props) {
  const [currentMovements, setCurrentMovements] = useState<Movement[]>(movements)
  const [showHint, setShowHint] = useState(false)

  const movementsContainers = (
    <>
      <h2 className='text-xl col-span-2'>Set Blocks Lenght</h2>
      <div className='flex justify-end items-center col-span-2'>
        <button
          className='group'
          onClick={() => setShowHint(!showHint)}
        >
          <UnderlineEffect>Hint</UnderlineEffect>
        </button>
      </div>
      {showHint ? (
        <div className='col-span-4 bg-acc-color text-dom-color py-2 px-4 rounded'>
          After knowing how many weeks the program will last, you want to set many weeks for every movement at every type block. In some cases, one
          movement gonna take more weeks of some block type training in relation to others. For example, may hypertrophy for Bench Press will take
          more week in comparison to Deadlift because we Bench Press is more muscular growth dependent.
        </div>
      ) : (
        <></>
      )}
      <ul className='flex gap-4 col-span-4'>
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
