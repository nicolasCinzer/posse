import { useState } from 'react'
import MovementItem from './MovementItem'
import { FaTrash } from 'react-icons/fa'
import Button from '@/src/components/ui/Button'

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
          {currentMovements.map(movement => (
            <li
              key={movement.id}
              className='flex gap-2 items-center'
            >
              <div>{movement.name}</div>
              <FaTrash
                className='text-sm'
                onClick={() => setCurrentMovements(currentMovements.filter(item => item.id !== movement.id))}
              />
            </li>
          ))}
        </ul>
        <Button>Add Movement</Button>
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
