import { useTypewriter } from '../hooks/useTypewriter'

interface TypeWriterProps {
  words: string[]
  className?: string
}

const TypeWriter = ({ words, className = '' }: TypeWriterProps) => {
  const { currentText, isTyping } = useTypewriter({ 
    words,
    typeSpeed: 100,
    pauseTime: 300
  })

  return (
    <span className={className}>
      {currentText}
      <span 
        className={`ml-1 w-0.5 h-8 bg-primary-400 inline-block ${
          isTyping ? 'animate-pulse' : 'animate-pulse opacity-100'
        }`}
        style={{
          animation: isTyping 
            ? 'pulse 1s infinite' 
            : 'pulse 1s infinite'
        }}
      >
        |
      </span>
    </span>
  )
}

export default TypeWriter