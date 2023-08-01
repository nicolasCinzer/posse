import { Program } from './components'
import { getMovements, getBlockTypes } from '@/lib'

export const metadata = {
  title: 'Add Program'
}

export default async function AddProgram() {
  const movementsData: Promise<Movement[]> = getMovements()
  const movements = await movementsData

  const blockTypesData: Promise<BlockType[]> = getBlockTypes()
  const blockTypes = await blockTypesData

  return (
    <main className='p-4 flex flex-col gap-4'>
      <Program />
    </main>
  )
}
