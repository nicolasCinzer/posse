import { Button } from '@/components/ui'

type Props = {
  programs: Program[]
}

export default function ProgramsList({ programs }: Props) {
  const list = (
    <ul className='flex mb-2 gap-4 items-center h-full whitespace-nowrap overflow-x-scroll'>
      {programs.map(program => (
        <li
          key={program.id}
          className='flex flex-col gap-1 items-center'
        >
          <Button
            reference={`/program/${program.name}`}
            style={`text-lg`}
            buttonConfig='page'
          >
            {program.name}
          </Button>
          <div className='text-acc-color text-sm'>{program.duration} Month</div>
        </li>
      ))}
    </ul>
  )

  const warningMessage = (
    <div className='flex flex-col justify-center items-center h-full text-xl text-acc-color gap-1'>
      <div className=''>Aun no creaste ningun programa!</div>
      <Button
        reference={`add-program`}
        buttonConfig='page'
      >
        Crea uno!
      </Button>
    </div>
  )

  const content = (
    <div className='bg-dom-color border-t border-b border-acc-color text-dom-color my-4 p-4 col-span-2'>
      {programs.length ? list : warningMessage}
    </div>
  )

  return content
}
