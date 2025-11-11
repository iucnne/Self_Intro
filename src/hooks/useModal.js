import { useCallback, useState } from 'react'

/**
 * 簡化開關狀態管理的 Hook，提供 open/close/toggle 三種語意化方法。
 */
export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return { isOpen, open, close, toggle }
}
