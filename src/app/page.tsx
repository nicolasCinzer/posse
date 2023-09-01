import { getMovements, getBlockTypes, getPrograms } from '@/lib'

import Programs from './components/Programs'

export default async function Home() {
  const movements: Movement[] = await getMovements()
  const blockTypes: BlockType[] = await getBlockTypes()
  const programs: Program[] = await getPrograms()

  return (
    <main className='p-4'>
      
      <Programs programs={programs} />
    </main>
  )
}
