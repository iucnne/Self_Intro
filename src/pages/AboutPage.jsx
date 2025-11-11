import { useMemo, useState } from 'react'
import { LIFE_TILES } from '../data/about.js'
import LifeTileModal from '../components/LifeTileModal.jsx'

function AboutPage() {
  const [activeTileKey, setActiveTileKey] = useState(null)
  const activeTile = useMemo(() => LIFE_TILES.find((tile) => tile.key === activeTileKey) ?? null, [activeTileKey])

  const handleTileOpen = (key) => {
    setActiveTileKey(key)
  }

  const handleTileClose = () => {
    setActiveTileKey(null)
  }

  return (
    <div className="page page--about">
      <div className="about-gallery">
        {LIFE_TILES.map((tile) => (
          <button
            key={tile.key}
            type="button"
            className={`about-card about-card--${tile.key}`}
            onClick={() => handleTileOpen(tile.key)}
            aria-haspopup="dialog"
            aria-expanded={activeTileKey === tile.key}
          >
            <span className="about-card__key">{tile.key}</span>
            <h2 className="about-card__title">{tile.title}</h2>
            <p className="about-card__description">{tile.subtitle}</p>
          </button>
        ))}
      </div>

      <LifeTileModal tile={activeTile} onClose={handleTileClose} />
    </div>
  )
}

export default AboutPage
