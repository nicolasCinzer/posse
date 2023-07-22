import { useMemo } from 'react'
import { Metadata } from 'next'
import { getExercises } from '@/lib'
import { UnderlineEffect } from '@/src/components/ui'

type Props = { params: { name: string } }

export async function generateMetadata({ params: { name } }: Props): Promise<Metadata> {
  try {
    const [exercise]: Exercise[] = await getExercises({
      name,
      queryType: 'equal'
    })

    return {
      title: exercise.name,
      description: `This is the page of ${exercise.name}`
    }
  } catch (e) {
    return {
      title: 'Exercise not Found'
    }
  }
}

export default function ExerciseStats({ params: { name } }: Props) {
  const exerciseName = useMemo(() => decodeURI(name), [name])

  return (
    <main className='p-4'>
      <div className='group w-max'>
        <UnderlineEffect>
          <h1 className='text-2xl group-hover:font-bold transition-all duration-500'>{exerciseName}</h1>
        </UnderlineEffect>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const exercises: Exercise[] = await getExercises({ queryType: 'all' })

  return exercises.map(exercise => ({ name: encodeURI(exercise.name) }))
}
