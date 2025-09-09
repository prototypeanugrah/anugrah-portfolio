import { motion } from 'framer-motion'
import CharacterTypeWriter from './CharacterTypeWriter'
import { personalInfo, socialLinks } from '../utils/data'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-850 to-dark-900"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#60a5fa" opacity="0.1"/>
              <circle cx="75" cy="75" r="1" fill="#22d3ee" opacity="0.1"/>
              <circle cx="25" cy="75" r="1" fill="#60a5fa" opacity="0.1"/>
              <circle cx="75" cy="25" r="1" fill="#22d3ee" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grain)"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Hero Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-dark-50 leading-tight">
                <CharacterTypeWriter text="Hi all, I'm Anugrah! 👋" speed={100} />
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl font-medium text-dark-300">
                  Master of Science in Computer Science
                </p>
                <p className="text-lg lg:text-xl text-dark-400">
                  University of Massachusetts
                </p>
                <p className="text-lg lg:text-xl text-dark-400">
                  Lowell
                </p>
                <p className="text-lg text-primary-400 mt-3">
                  Currently looking for full-time opportunities in Data Science and Machine Learning Engineer roles
                </p>
              </div>
            </div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target={social.platform !== 'email' ? '_blank' : undefined}
                  rel={social.platform !== 'email' ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 bg-dark-800 border border-dark-700 rounded-full flex items-center justify-center text-dark-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:border-transparent transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 + (index * 0.1) }}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </motion.a>
              ))}
            </motion.div>

            {/* Action Button */}
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/cv.pdf'
                  link.download = 'Anugrah_Vaishnav_CV.pdf'
                  link.click()
                }}
                className="btn btn-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download mr-2"></i>
                Download CV
              </motion.button>
            </div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-96 h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-r from-dark-800 to-dark-700 border-4 border-dark-600 flex items-center justify-center overflow-hidden shadow-2xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Profile Image */}
                <img 
                  src="/profile.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="text-center" style={{ display: 'none' }}>
                  <i className="fas fa-user text-6xl text-primary-400 mb-4"></i>
                  <p className="text-dark-400 font-medium">Add profile.jpg to public folder</p>
                </div>
              </motion.div>
              
              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-primary-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -inset-8 border border-accent-400/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection