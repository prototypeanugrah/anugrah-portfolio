import { useState, useEffect } from 'react'

interface CharacterTypeWriterProps {
  text: string
  speed?: number
  className?: string
}

const CharacterTypeWriter = ({ text, speed = 150, className = '' }: CharacterTypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return <span className={className}>{displayedText}</span>
}

export default CharacterTypeWriter