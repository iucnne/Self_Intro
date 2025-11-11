import { useId, useState } from 'react'
import PropTypes from 'prop-types'
import { useHoverLift } from '../hooks/useHoverLift.js'

/**
 * 膠囊式導覽列元件。
 *
 * @param {Object} props
 * @param {string} props.brandLabel - 導覽列左側的品牌文字。
 * @param {Array<{ key: string, label: string }>} props.navItems - 導覽列的清單項目。
 * @param {string} props.ctaLabel - 導覽列右側的 CTA 按鈕文字。
 * @param {string} [props.activeKey] - 目前作用中的導覽鍵值。
 * @param {Function} [props.onSelect] - 點擊導覽時觸發的回呼。
*/
function Navbar({ brandLabel, navItems, ctaLabel, activeKey, onSelect }) {
  const { handleEnter, handleLeave } = useHoverLift()
  const [isCtaHover, setIsCtaHover] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  const handleCtaEnter = (event) => {
    handleEnter(event)
    setIsCtaHover(true)
  }

  const handleCtaLeave = (event) => {
    handleLeave(event)
    setIsCtaHover(false)
  }

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleNavClick = (key) => {
    onSelect?.(key)
    setIsMenuOpen(false)
  }

  const navClasses = `nav-pill ${isMenuOpen ? 'is-open' : ''}`

  return (
    <header className="nav-container">
      <nav className={navClasses}>
        <div className="nav-pill__brand-row">
          <span className="nav-brand" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            {brandLabel}
          </span>

          <button
            type="button"
            className="nav-toggle"
            onClick={handleToggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="nav-pill__menu" id={menuId}>
          {/* 透過資料陣列渲染導覽項目，方便日後新增或調整順序 */}
          <ul className="nav-list">
            {navItems.map(({ key, label }) => {
              const isActive = key === activeKey
              return (
                <li
                  key={key}
                  className={isActive ? 'is-active' : ''}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <button type="button" onClick={() => handleNavClick(key)} aria-current={isActive ? 'page' : undefined}>
                    {label}
                  </button>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            className={`cta-button ${isCtaHover ? 'is-hovering' : ''}`}
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
          >
            <span className="cta-button__label">{ctaLabel}</span>
            <span className="cta-button__email">longsing3510@gmail.com</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  brandLabel: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  ctaLabel: PropTypes.string.isRequired,
  activeKey: PropTypes.string,
  onSelect: PropTypes.func,
}

export default Navbar
