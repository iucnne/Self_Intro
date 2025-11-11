import { useCallback, useEffect, useMemo, useState } from 'react'

const OBSERVER_ROOT_MARGIN = '-45% 0px -45% 0px'
const OBSERVER_THRESHOLD = [0.2, 0.35, 0.6]

/**
 * 監聽各區塊的進入狀態並回傳目前最醒目的區塊，供導覽列或其他元件同步狀態。
 * 也一併提供平滑捲動函式，統一封裝 scrollIntoView 的行為。
 */
export function useSectionObserver(sections = []) {
  const sectionKeys = useMemo(() => sections.map((section) => section.key), [sections])
  const [activeKey, setActiveKey] = useState(sectionKeys[0] ?? null)

  useEffect(() => {
    if (!sectionKeys.length) {
      setActiveKey(null)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveKey(visibleEntry.target.id)
        }
      },
      {
        rootMargin: OBSERVER_ROOT_MARGIN,
        threshold: OBSERVER_THRESHOLD,
      },
    )

    const observedElements = sectionKeys
      .map((key) => document.getElementById(key))
      .filter(Boolean)

    observedElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sectionKeys])

  const scrollToSection = useCallback((key) => {
    if (!key) return
    const element = document.getElementById(key)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return { activeKey, scrollToSection }
}
