import { Dispatch, SetStateAction } from 'react'
import { Select } from '@/src/components/ui'
import { useProgram } from '@/store'

type Props = {
  programId: number
  movementId: number
  blockType: BlockType
  maxDuration: number
  setWeekAvailable: Dispatch<SetStateAction<number>>
}

export default function BlockTypeLength({ programId, movementId, blockType, maxDuration, setWeekAvailable }: Props) {
  const [blocks, updateBlock] = useProgram(state => [state.blocks, state.updateBlock])

  const updateDuration = (e: any) => {
    let updatedBlock: Block
    const alreadyLoadedBlock = blocks.filter(block => block.typeId === blockType.id && block.movementId === movementId)[0]

    if (alreadyLoadedBlock) {
      updatedBlock = { ...alreadyLoadedBlock, duration: parseInt(e.target.value) }
    } else {
      updatedBlock = { programId: programId, duration: parseInt(e.target.value), typeId: blockType.id as number, movementId: movementId }
    }

    const totalBlockDuration = updateBlock(updatedBlock)

    setWeekAvailable(maxDuration - totalBlockDuration[movementId])
  }

  return (
    <li className='flex flex-col justify-start'>
      <div className=''>{blockType.name}</div>
      <div>
        Weeks
        <Select
          selectedValue={blocks.filter(block => block.typeId === blockType.id && block.movementId === movementId)[0]?.duration}
          options={Array.from(Array(maxDuration + 1).keys())}
          onChange={updateDuration}
          bgColor='dom'
        />
      </div>
    </li>
  )
}
