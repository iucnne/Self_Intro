import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { QUOTES } from '../data/quotes.js'

function QuoteRotator({ interval = 7000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const activeQuote = QUOTES[currentIndex]

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % QUOTES.length)
    }, interval)

    return () => clearInterval(timerId)
  }, [interval])

  return (
    <section className="quote-rotator" aria-live="polite">
      <p className="quote-rotator__text">
        {activeQuote.text}
        <span className="quote-rotator__author"> - {activeQuote.author}</span>
      </p>
    </section>
  )
}

QuoteRotator.propTypes = {
  interval: PropTypes.number,
}

export default QuoteRotator
