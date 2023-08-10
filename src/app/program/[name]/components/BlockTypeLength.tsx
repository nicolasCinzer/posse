import { Dispatch, SetStateAction, useEffect } from 'react'
import { Select } from '@/src/components/ui'
import { useProgram } from '@/src/context/ProgramContext'

type Props = {
  program: number
  movement: Movement
  blockType: BlockType
  maxDuration: number
  setWeekAvailable: Dispatch<SetStateAction<number>>
}

export default function BlockTypeLength({ program, movement, blockType, maxDuration, setWeekAvailable }: Props) {
  const {
    dispatch,
    programState: { blocks },
    REDUCER_ACTIONS
  } = useProgram()

  const updateDuration = (e: any) => {
    let totalDuration: number = 0
    let updatedBlock: Partial<Block>
    const alreadyLoadedBlock = blocks.filter(block => block.typeId === blockType.id && block.movementId === movement.id)[0]

    totalDuration = blocks
      .filter(block => block.movementId === movement.id && block.typeId !== blockType.id)
      .map(block => ({ ...block, duration: block.typeId === blockType.id ? parseInt(e.target.value) : block.duration }))
      .reduce((prev, curr) => {
        return prev + (curr.duration as number)
      }, 0)

    totalDuration += parseInt(e.target.value)

    if (alreadyLoadedBlock) {
      updatedBlock = { ...alreadyLoadedBlock, duration: parseInt(e.target.value) }
    } else {
      updatedBlock = { programId: program, duration: parseInt(e.target.value), typeId: blockType.id, movementId: movement.id }
    }

    dispatch({ type: REDUCER_ACTIONS.BLOCKS.UPDATE, payload: [updatedBlock] as Block[] })

    setWeekAvailable(maxDuration - totalDuration)
  }

  return (
    <li className='flex flex-col justify-start'>
      <div className=''>{blockType.name}</div>
      <div>
        Weeks
        <Select
          selectedValue={blocks.filter(block => block.typeId === blockType.id && block.movementId === movement.id)[0]?.duration}
          options={Array.from(Array(maxDuration + 1).keys())}
          onChange={updateDuration}
          bgColor='dom'
        />
      </div>
    </li>
  )
}
