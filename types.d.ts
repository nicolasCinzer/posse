type BlockType = {
  id: number
  name: string
}

type BlockTypeState = BlockType & {
  currentDuration: number
}

type Movement = {
  id: number
  name: string
}

type Program = {
  id: number
  name: string
  duration: number
}

type Block = {
  id: number
  typeId: number
  movementId: number
  duration: number
}

type Exercise = {
  id: number
  movementId?: number
  name: string
  type: 'Basic' | 'Variant' | 'Accessory' | 'Other' | null
}

type Mesocycle = {
  id: number
  blockID: number
  duration: number
}

type PRs = {
  id: number
  exerciseId: number
  series: number
  weight: number
  reps: number
  unit: 'LBS' | 'KGs'
  comments: string
}

type RutineDay = {
  id: number
  blockId: number
  mesocycleId: number
  week: number
  day: number
}

type RutineDayExercise = {
  id: number
  rutineDayId: number
  exerciseId: number
  series: number
  weight: number
  reps: number
  unit: 'LBS' | 'KGs'
  comments: string
}

type Button = {
  children: string
  onClick?: (e: any) => void
  style?: string
  reference?: string
}

type Select = {
  options: number[] | string[]
  onChange?: (e: any) => void
  style?: string
  id?: string
}
