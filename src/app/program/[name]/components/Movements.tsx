'use client'

import { useState } from 'react'
import { MdCheck, MdClose } from 'react-icons/md'

import { MovementItem } from './'
import { UnderlineEffect } from '@/src/components/ui'
import { useProgram, useMovements } from '@/store'

type Props = {
  maxDuration: number
  programId: number
}

export default function Movements({ maxDuration, programId }: Props) {
  const [updateMovements] = useProgram(state => [state.updateMovements])
  const [movements] = useMovements(state => [state.movements])

  const [currentMovements, setCurrentMovements] = useState<Movement[]>(movements)
  const [showHint, setShowHint] = useState(false)

  const handleChangeMovementTrained = (movement: Movement, action: 'ADD' | 'REMOVE') => {
    if (action === 'REMOVE') {
      setCurrentMovements(currentMovements.filter(item => item.id !== movement.id))
    }

    if (action === 'ADD') {
      setCurrentMovements([...currentMovements, movement])
    }

    updateMovements(movement.id as number, action)
  }

  const movementsContainers = (
    <section className='grid grid-cols-4 gap-4 col-span-4'>
      <h2 className='text-xl col-span-2'>Blocks Length by Movements</h2>
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
          more weeks in comparison to Deadlift because Bench Press is more muscular growth dependent.
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
                onClick={() => handleChangeMovementTrained(movement, 'REMOVE')}
              />
            ) : (
              <MdClose
                className='text-lg cursor-pointer'
                onClick={() => handleChangeMovementTrained(movement, 'ADD')}
              />
            )}
          </li>
        ))}
      </ul>
      {currentMovements.map(movement => (
        <MovementItem
          key={movement.id}
          programId={programId}
          movement={movement}
          maxDuration={maxDuration}
        />
      ))}
    </section>
  )

  return movementsContainers
}
