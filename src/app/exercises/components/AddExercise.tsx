'use client'

import Button from '@/src/components/ui/Button'
import { useRouter } from 'next/navigation'

export default function AddExercise() {
  const router = useRouter()

  return <Button onClick={() => router.push(`/exercises/add-exercise`)}>Add Exercise</Button>
}
