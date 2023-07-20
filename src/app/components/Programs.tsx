import Button from '@/components/ui/Button'
import ProgramsList from './ProgramsList'
import getPrograms from '@/lib/getPrograms'

type Props = {}

export default async function Programs({}: Props) {
  const programsData: Promise<Program[]> = getPrograms()
  const programs = await programsData

  return (
    <section className='grid grid-cols-2'>
      <h2 className='text-2xl px-2'>Programs</h2>
      <div className='flex justify-end items-center'>
        <Button
          reference='/add-program'
          buttonConfig='page'
        >
          Agregar Programa
        </Button>
      </div>
      <ProgramsList programs={programs} />
    </section>
  )
}
