import { useProgram } from '@/store'
import DayItem from './DayItem'

type Props = { exercises: Exercise[] }

export default function DaysTable({ exercises }: Props) {
  const [program, currentWeek] = useProgram(state => [state.program, state.currentWeek])

  return (
    <section className='flex flex-col border-t py-4 col-span-4'>
      <h1 className='text-xl'>Week {currentWeek.toString()}</h1>
      <div className='flex gap-4 pt-4 overflow-y-auto pb-2 scroll-smooth'>
        {Array.from(Array(program.workDaysNumber).keys()).map(day => (
          <DayItem
            key={day}
            exercises={exercises}
            day={day}
          />
        ))}
      </div>
    </section>
  )
}
