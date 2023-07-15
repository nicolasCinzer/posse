import Link from 'next/link'

type Props = {
  exercise: Exercise
  movements: Movement[]
}

export default function ExerciseItem({ exercise, movements }: Props) {
  return (
    <li className='border px-4 py-2 grid grid-cols-3 gap-2 items-center'>
      <Link
        href={`/exercises/stats/${exercise.id}`}
        className='group text-acc-color transition duration-300 w-max'
      >
        {exercise.name}
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-acc-color'></span>
      </Link>
      <div className=''>
        <div className='w-max px-3 py-1 rounded-full bg-comp-color'>
          {movements.find(movement => movement.id === exercise.movementId)?.name || ''}
        </div>
      </div>
      <div className='flex justify-end'>{exercise.type}</div>
    </li>
  )
}
