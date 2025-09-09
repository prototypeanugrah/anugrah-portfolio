import { motion } from 'framer-motion'
import TypeWriter from '../components/TypeWriter'
import { personalInfo, socialLinks } from '../utils/data'
import profileImage from '../assets/images/profile.jpg'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-6xl font-extrabold text-dark-50 leading-tight">
                <TypeWriter words={['Hello,', "I'm", 'Anugrah', 'Vaishnav']} />
              </h1>
              
              <motion.h2 
                className="text-2xl lg:text-3xl font-semibold text-accent-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {personalInfo.title}
              </motion.h2>
              
              <motion.p 
                className="text-lg text-dark-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                {personalInfo.description}
              </motion.p>

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
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 rounded-full bg-gradient-to-r from-dark-800 to-dark-700 border-4 border-dark-600 flex items-center justify-center overflow-hidden shadow-2xl"
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
                  {/* Replace with actual profile image: place your photo in public/profile.jpg */}
                  <img 
                    src={profileImage} 
                    alt="Anugrah Vaishnav"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
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

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-dark-850 to-dark-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold text-center text-dark-50 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Recent Highlights
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400"></div>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">
                Enhanced 3D Reconstruction in Colonoscopy
              </h4>
              <p className="text-dark-300 mb-2">
                University of Massachusetts Lowell - Fine-tuned DepthAnything V2 for monocular depth estimation
              </p>
              <span className="text-dark-400 text-sm italic">Advised by Dr. Yu Cao</span>
            </motion.div>

            <motion.div
              className="card p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400"></div>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">
                COVID-19 Antidepressants Research
              </h4>
              <p className="text-dark-300 mb-2">
                Causal inference study on antidepressants effect on COVID-19 outcomes using machine learning
              </p>
              <span className="text-dark-400 text-sm italic">Advised by Dr. Rachel Melamed</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home