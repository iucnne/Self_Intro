import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

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
