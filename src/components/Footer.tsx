import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 border-t border-dark-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-dark-400">
            &copy; {currentYear} Anugrah Vaishnav. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer