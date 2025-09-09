import { motion } from 'framer-motion'

interface KeywordTagProps {
  keyword: string
  index?: number
}

const KeywordTag = ({ keyword, index = 0 }: KeywordTagProps) => {
  return (
    <motion.span
      className="keyword-tag"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
    >
      {keyword}
    </motion.span>
  )
}

export default KeywordTag