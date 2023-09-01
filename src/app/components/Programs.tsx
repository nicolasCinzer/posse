import { Button } from '@/components/ui'
import ProgramsList from './ProgramsList'

type Props = {
  programs: Program[]
}

export default async function Programs({ programs }: Props) {
  return (
    <section className='grid grid-cols-2'>
      <h2 className='text-2xl px-2'>Programs</h2>
      <div className='flex justify-end items-center'>
        <Button
          reference='/add-program'
          buttonConfig='page'
        >
          Add Program
        </Button>
      </div>
      <ProgramsList programs={programs} />
    </section>
  )
}
