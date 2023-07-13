import AddProgramForm from './components/AddProgramForm'
import getMovements from '@/lib/getMovements'
import getBlockTypes from '@/lib/getBlockTypes'

export default async function AddProgram() {
  // const movementsData: Promise<Movement> = await getMovements()
  // const movements = await movementsData

  // const blockTypesData: Promise<BlockType> = await getBlockTypes()
  // const blockTypes = await blockTypesData

  return (
    <main className='p-4'>
      <AddProgramForm
        movements={[{ id: 1, name: 'Bench Press' }]}
        blockTypes={[{ id: 1, name: 'Hypertrophy' }]}
      />
    </main>
  )
}
