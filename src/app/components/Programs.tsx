import Button from '@/components/ui/Button'
import ProgramsList from './ProgramsList'

type Props = {}

export default function Programs({}: Props) {
  return (
    <section className='grid grid-cols-2'>
      <h2 className='text-2xl px-2'>Programs</h2>
      <div className='flex justify-end items-center'>
        <Button reference='/add-program'>Agregar Programa</Button>
      </div>
      <ProgramsList
        programs={[
          { id: 1, name: 'Argentina Power', duration: 19 },
          { id: 2, name: 'Cali Power', duration: 20 },
          { id: 3, name: 'Cali Hypertrophy', duration: 10 },
          { id: 4, name: 'Cali Strongman', duration: 15 }
        ]}
      />
    </section>
  )
}
