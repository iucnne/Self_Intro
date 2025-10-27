import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/**
 * 控制背景音樂播放的共用 hook。
 *
 * @param {Object} config
 * @param {string} config.src - 音訊來源路徑。
 * @param {boolean} [config.loop=true] - 是否循環播放。
 * @param {'auto' | 'metadata' | 'none'} [config.preload='auto'] - audio preload 行為。
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

  useEffect(() => {
    return () => {
      pause()
    }
  }, [pause])

  const audioProps = useMemo(
    () => ({
      ref: audioRef,
      src,
      loop,
      preload,
    }),
    [src, loop, preload],
  )

  return {
    audioProps,
    isPlaying,
    play,
    pause,
    toggle,
  }
}
