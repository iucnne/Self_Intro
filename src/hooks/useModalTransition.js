import { useEffect, useState } from 'react'

/**
 * 管理進出場動畫狀態，讓 Modal 能依照 isOpen 流暢切換 CSS class。
 */
export function useModalTransition(isOpen, { duration = 260 } = {}) {
  const [isMounted, setIsMounted] = useState(isOpen)
  const [status, setStatus] = useState(isOpen ? 'entered' : 'exited')

  useEffect(() => {
    let timeoutId

    if (isOpen) {
      if (!isMounted) {
        setIsMounted(true)
      }

      // Trigger enter animation on the next frame so CSS transitions can pick up.
      requestAnimationFrame(() => setStatus('entering'))

      timeoutId = setTimeout(() => {
        setStatus('entered')
      }, duration)
    } else if (isMounted) {
      setStatus('exiting')
      timeoutId = setTimeout(() => {
        setStatus('exited')
        setIsMounted(false)
      }, duration)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isOpen, duration, isMounted])

  return { isMounted, status }
}
