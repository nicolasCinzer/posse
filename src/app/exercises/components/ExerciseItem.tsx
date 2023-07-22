import { UnderlineEffect } from '@/src/components/ui'
import Link from 'next/link'

type Props = {
  exercise: Exercise
  movements: Movement[]
}

export default function ExerciseItem({ exercise, movements }: Props) {
  return (
    <li className='border px-4 py-2 grid grid-cols-3 gap-2 items-center'>
      <Link
        href={`/exercises/stats/${exercise.name}`}
        className='group text-acc-color transition duration-300 w-max'
      >
        <UnderlineEffect>{exercise.name}</UnderlineEffect>
      </Link>
      <div>
        {exercise.movementId ? (
          <div className='w-max px-3 py-1 rounded-full bg-comp-color'>
            {movements.find(movement => movement.id === exercise.movementId)?.name || ''}
          </div>
        ) : (
          <div className='w-max px-3 py-1 bg-dom-color text-dom-color'>a</div>
        )}
      </div>
      <div className='flex justify-end'>{exercise.type}</div>
    </li>
  )
}
