import { Select } from '@/src/components/ui'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  blockType: BlockType
  maxDuration: number
  blockTypesState: BlockTypeState[]
  setBlockTypesState: Dispatch<SetStateAction<BlockTypeState[]>>
  setWeekAvailable: Dispatch<SetStateAction<number>>
}

export default function BlockTypeLength({ blockType, maxDuration, blockTypesState, setBlockTypesState, setWeekAvailable }: Props) {
  const updateDuration = (e: any) => {
    const durations = blockTypesState.filter(item => item.id !== blockType.id).map(item => item.currentDuration)
    durations.push(parseInt(e.target.value))

    const weeksOcuped = durations.reduce((prev, curr) => prev + curr, 0)

    setBlockTypesState(
      blockTypesState.map(item => {
        if (item.id === blockType.id) {
          return { ...item, currentDuration: parseInt(e.target.value) }
        }

        return item
      })
    )
    setWeekAvailable(maxDuration - weeksOcuped)
  }

  return (
    <li className='flex flex-col justify-start'>
      <div className=''>{blockType.name}</div>
      <div>
        Weeks
        <Select
          options={Array.from(Array(maxDuration + 1).keys())}
          onChange={updateDuration}
          bgColor='dom'
        />
      </div>
    </li>
  )
}
