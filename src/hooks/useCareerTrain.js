import { useCallback, useMemo, useState } from 'react'

export function useCareerTrain(stages) {
  const sanitizedStages = useMemo(() => stages ?? [], [stages])
  const resolvedInitial = useMemo(() => {
    const defaultIndex = sanitizedStages.findIndex((stage) => stage.status === 'current')
    return defaultIndex >= 0 ? defaultIndex : 0
  }, [sanitizedStages])
  const [currentIndex, setCurrentIndex] = useState(resolvedInitial)

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, sanitizedStages.length - 1))
  }, [sanitizedStages.length])

  const selectByIndex = useCallback(
    (index) => {
      if (index < 0 || index >= sanitizedStages.length) return
      setCurrentIndex(index)
    },
    [sanitizedStages.length],
  )

  const currentStage = sanitizedStages[currentIndex] ?? null

  return {
    stages: sanitizedStages,
    currentIndex,
    currentStage,
    goPrev,
    goNext,
    selectByIndex,
  }
}
