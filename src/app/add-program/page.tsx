import AddProgramForm from './components/AddProgramForm'
import getMovements from '@/lib/getMovements'
import getBlockTypes from '@/lib/getBlockTypes'

export default async function AddProgram() {
  const movementsData: Promise<Movement[]> = getMovements()
  const movements = await movementsData

  const blockTypesData: Promise<BlockType[]> = getBlockTypes()
  const blockTypes = await blockTypesData

  return (
    <main className='p-4 flex flex-col gap-4'>
      <AddProgramForm
        movements={movements}
        blockTypes={blockTypes}
      />
    </main>
  )
}
