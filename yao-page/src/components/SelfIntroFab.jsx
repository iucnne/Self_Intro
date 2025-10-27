import PropTypes from 'prop-types'
import documentIcon from '../IMG/document.png'

function SelfIntroFab({ label = 'Self-Intro', isExpanded = false, onClick }) {
  return (
    <button
      type='button'
      className='intro-fab'
      onClick={onClick}
      aria-haspopup='dialog'
      aria-expanded={isExpanded}
      aria-label='Open self introduction'
    >
      <span className='intro-fab__icon' aria-hidden='true'>
        <img src={documentIcon} alt='' />
      </span>
      <span className='intro-fab__label'>{label}</span>
    </button>
  )
}

SelfIntroFab.propTypes = {
  label: PropTypes.string,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default SelfIntroFab
