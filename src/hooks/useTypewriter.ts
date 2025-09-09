import { useState, useEffect } from 'react'

interface UseTypewriterOptions {
  words: string[]
  typeSpeed?: number
  pauseTime?: number
}

export const useTypewriter = ({ 
  words, 
  typeSpeed = 100, 
  pauseTime = 300 
}: UseTypewriterOptions) => {
  const [currentText, setCurrentText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!words.length) return

    const timeoutId = setTimeout(() => {
      const currentWord = words[currentWordIndex]
      
      if (isTyping) {
        if (currentCharIndex < currentWord.length) {
          setCurrentText(prev => prev + currentWord[currentCharIndex])
          setCurrentCharIndex(prev => prev + 1)
        } else {
          // Word complete
          if (currentWordIndex < words.length - 1) {
            setCurrentText(prev => prev + ' ')
            setCurrentWordIndex(prev => prev + 1)
            setCurrentCharIndex(0)
            // Longer pause between words
            return setTimeout(() => {}, pauseTime)
          } else {
            // All words typed
            setIsTyping(false)
          }
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeoutId)
  }, [words, currentWordIndex, currentCharIndex, isTyping, typeSpeed, pauseTime])

  return { currentText, isTyping }
}