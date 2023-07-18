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

type ExerciseType = 'Basic' | 'Variant' | 'Accessory' | 'Other' | null

type Exercise = {
  id: number
  movementId?: number
  name: string
  type: ExerciseType
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

type ColorsAlias = 'dom' | 'acc' | 'comp'

type Colors = {
  bg?: ColorsAlias
  bgHover?: ColorsAlias
  text?: ColorsAlias
  textHover?: ColorsAlias
  border?: ColorsAlias
  borderHover?: ColorsAlias
}

type Button = {
  children: string
  onClick?: (e: any) => void
  style?: string
  colors?: Colors
  reference?: string
}

type Select = {
  options: number[] | string[] | (string | ExerciseTypeEnum)[]
  onChange?: (e: any) => void
  style?: string
  bgColor?: string
  id?: string
}
