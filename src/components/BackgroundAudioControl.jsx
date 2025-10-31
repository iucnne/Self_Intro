import PropTypes from 'prop-types'
import { useBackgroundAudio } from '../hooks/useBackgroundAudio.js'

function BackgroundAudioControl({ src }) {
  const { audioProps, isPlaying, toggle } = useBackgroundAudio({ src })

  return (
    <>
      <audio {...audioProps} />

      <button
        type="button"
        className={`audio-toggle ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-label={isPlaying ? '暫停背景音樂' : '播放背景音樂'}
      >
        <span className="audio-toggle__disc" aria-hidden="true" />
      </button>
    </>
  )
}

BackgroundAudioControl.propTypes = {
  src: PropTypes.string.isRequired,
}

export default BackgroundAudioControl
