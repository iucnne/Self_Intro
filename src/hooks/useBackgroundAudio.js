import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/**
 * 控制背景音樂播放的通用 Hook，負責 DOM audio 元素的建立、播放狀態同步與錯誤處理。
 */
export function useBackgroundAudio({ src, loop = true, preload = 'auto' } = {}) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = useCallback(async () => {
    const element = audioRef.current
    if (!element) return

    try {
      await element.play()
      setIsPlaying(true)
    } catch (error) {
      console.error('背景音樂播放失敗：', error)
      throw error
    }
  }, [])

  const pause = useCallback(() => {
    const element = audioRef.current
    if (!element) return

    element.pause()
    setIsPlaying(false)
  }, [])

  const toggle = useCallback(async () => {
    if (isPlaying) {
      pause()
      return
    }
    await play()
  }, [isPlaying, pause, play])

  // 元件卸載時確保音樂停止，避免音訊在背景持續播放。
  useEffect(() => pause, [pause])

  const audioProps = useMemo(
    () => ({
      ref: audioRef,
      src,
      loop,
      preload,
    }),
    [src, loop, preload],
  )

  return { audioProps, isPlaying, play, pause, toggle }
}
