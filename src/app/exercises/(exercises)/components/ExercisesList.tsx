import { ExerciseItem } from './'

type Props = {
  exercises: Exercise[]
  movements: Movement[]
}

export default function ExercisesList({ exercises, movements }: Props) {
  return (
    <ul className='flex flex-col gap-4 '>
      {exercises.map(exercise => (
        <ExerciseItem
          key={exercise.id}
          exercise={exercise}
          movements={movements}
        />
      ))}
    </ul>
  )
}
