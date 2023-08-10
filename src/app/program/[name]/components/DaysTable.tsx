import { useProgram } from '@/src/context/ProgramContext'

type Props = { movements: Movement[] }

export default function DaysTable({ movements }: Props) {
  const { programState } = useProgram()

  return (
    <div className='flex flex-col border-t col-span-4 gap-4 pt-4'>
      {Array.from(Array(programState.program.duration).keys()).map(week => (
        <div
          key={'week' + week}
          className='grid grid-cols-5'
        >
          <div>Week {week + 1}</div>
          {Array.from(Array(programState.program.workDaysNumber).keys()).map(day => (
            <div
              key={`${week}-${day}`}
              className='flex justify-center'
            >
              <div>Day {day + 1}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
