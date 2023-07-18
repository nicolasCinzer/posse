import { ReactElement } from 'react'
import { Search, AddExercise, PresetsFilters } from './components'
import Link from 'next/link'

export default function ExercisesLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <main className='p-4 flex flex-col gap-4'>
        <section className='flex justify-between'>
          <Link
            href={'/exercises'}
            className='text-xl'
          >
            Exercises
          </Link>
          <AddExercise />
        </section>
        <Search />
        <PresetsFilters />
        {children}
      </main>
    </>
  )
}
