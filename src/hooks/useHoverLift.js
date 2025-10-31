import { useCallback } from 'react'
import { gsap } from 'gsap'

// 提供滑入上浮效果的共用邏輯，避免在各元件重複撰寫 GSAP 動畫。
export function useHoverLift(offset = -6, duration = 0.2) {
  const handleEnter = useCallback(
    (event) => {
      gsap.to(event.currentTarget, {
        y: offset,
        duration,
        ease: 'power1.out',
      })
    },
    [offset, duration],
  )

  const handleLeave = useCallback(
    (event) => {
      gsap.to(event.currentTarget, {
        y: 0,
        duration,
        ease: 'power1.in',
      })
    },
    [duration],
  )

  return { handleEnter, handleLeave }
}
