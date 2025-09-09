import { motion } from 'framer-motion'

const AboutSection = () => {

  const techStack = [
    { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-400', type: 'fontawesome' },
    { name: 'SQL', icon: 'fas fa-database', color: 'text-blue-300', type: 'fontawesome' },
    { name: 'PyTorch', icon: 'fas fa-fire', color: 'text-orange-400', type: 'fontawesome' },
    { name: 'Spark', icon: 'fas fa-bolt', color: 'text-yellow-400', type: 'fontawesome' },
    { name: 'R', icon: 'fab fa-r-project', color: 'text-blue-400', type: 'fontawesome' },
    { name: 'TensorFlow', icon: '/images/tech-stack/tf.png', color: 'text-orange-400', type: 'image' },
    { name: 'Scikit-learn', icon: '/images/tech-stack/sklearn.png', color: 'text-blue-300', type: 'image' },
    { name: 'Pandas', icon: '/images/tech-stack/pandas.png', color: 'text-blue-400', type: 'image' },
    { name: 'Jupyter', icon: '/images/tech-stack/jupyter.png', color: 'text-blue-500', type: 'image' },
    { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-400', type: 'fontawesome' },
    { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-400', type: 'fontawesome' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-500', type: 'fontawesome' },
    { name: 'Linux', icon: 'fab fa-linux', color: 'text-yellow-300', type: 'fontawesome' },
    { name: 'C/C++', icon: 'fas fa-code', color: 'text-blue-400', type: 'fontawesome' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-400', type: 'fontawesome' },
  ]

  // Configuration: Number of items to show in the first row
  const firstRowItemCount = 10

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-850 to-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-50 mb-6">
            What I do & my Skills
          </h2>
          {/* <p className="text-xl text-dark-400 max-w-3xl mx-auto">
            I am a ML and NLP enthusiast with a strong software development background. 
            I am dedicated to solving challenging problems, staying updated with the latest trends, 
            and creating impactful solutions. I am active competitive programmer and I like to solve 
            Data Structures problem across multiple online platforms.
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Enhanced Static Image */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-lg">
              {/* Background gradient circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-blue-400/10 to-emerald-400/20 rounded-full blur-3xl scale-110 opacity-60"></div>
              
              {/* Decorative floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-primary-400/20 to-blue-400/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main image container with glassmorphism effect */}
              <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                <img 
                  src="/images/tech-stack/man-working-on-laptop.svg" 
                  alt="Person working on laptop" 
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                />
                
                {/* Inner glow effect */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary-400/5 via-transparent to-blue-400/5 rounded-xl pointer-events-none"></div>
              </div>
              
              {/* Floating tech icons */}
              <motion.div 
                className="absolute top-8 right-8 text-2xl text-primary-400/70"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              >
                <i className="fab fa-python"></i>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-12 left-8 text-xl text-blue-400/70"
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <i className="fas fa-database"></i>
              </motion.div>
              
              <motion.div 
                className="absolute top-20 left-12 text-lg text-emerald-400/70"
                animate={{ 
                  y: [0, -6, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              >
                <i className="fab fa-git-alt"></i>
              </motion.div>
              
              {/* Subtle particle effects */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
                  style={{
                    left: `${15 + i * 20}%`,
                    top: `${20 + (i % 2) * 60}%`
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.8
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* About Me Text */}
            <div>
              <p className="text-lg text-dark-300 leading-relaxed mb-6">
                I am an ML and Data Science enthusiast with a strong software development background. 
                I am dedicated to solving challenging problems, staying updated with the latest trends, 
                and creating impactful solutions. I am active competitive programmer actively participating in hackathons.
              </p>
            </div>

            {/* Tech Stack Icons - More Compact */}
            <div>
              <h3 className="text-xl font-semibold text-primary-400 mb-4 flex items-center gap-2">
                <i className="fas fa-layer-group"></i>
                Tech Stack
              </h3>
              <div className="space-y-3">
                {/* First Row - configurable number of items, center aligned */}
                <div className="flex justify-center gap-3">
                  {techStack.slice(0, firstRowItemCount).map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      viewport={{ once: true }}
                    >
                      <div className={`text-2xl mb-1 ${tech.color} group-hover:scale-110 transition-all duration-300 flex items-center justify-center`}>
                        {tech.type === 'image' ? (
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              // Fallback to a generic icon if image fails to load
                              const img = e.currentTarget as HTMLImageElement;
                              const fallback = img.nextElementSibling as HTMLElement;
                              img.style.display = 'none';
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                        ) : (
                          <i className={tech.icon}></i>
                        )}
                        {tech.type === 'image' && (
                          <i className="fas fa-cube hidden" style={{display: 'none'}}></i>
                        )}
                      </div>
                      <span className="text-xs text-dark-300 text-center group-hover:text-dark-50 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Second Row - remaining items, center aligned */}
                {techStack.length > firstRowItemCount && (
                  <div className="flex justify-center gap-3">
                    {techStack.slice(firstRowItemCount).map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="flex flex-col items-center group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (firstRowItemCount + index) * 0.03 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        viewport={{ once: true }}
                      >
                        <div className={`text-2xl mb-1 ${tech.color} group-hover:scale-110 transition-all duration-300 flex items-center justify-center`}>
                          {tech.type === 'image' ? (
                            <img 
                              src={tech.icon} 
                              alt={tech.name} 
                              className="w-8 h-8 object-contain"
                              onError={(e) => {
                                // Fallback to a generic icon if image fails to load
                                const img = e.currentTarget as HTMLImageElement;
                                const fallback = img.nextElementSibling as HTMLElement;
                                img.style.display = 'none';
                                if (fallback) fallback.style.display = 'block';
                              }}
                            />
                          ) : (
                            <i className={tech.icon}></i>
                          )}
                          {tech.type === 'image' && (
                            <i className="fas fa-cube hidden" style={{display: 'none'}}></i>
                          )}
                        </div>
                        <span className="text-xs text-dark-300 text-center group-hover:text-dark-50 transition-colors duration-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-primary-400 text-lg">⚡</span>
                <p className="text-dark-300">Writing clean, efficient and optimized code in Python.</p>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-primary-400 text-lg">⚡</span>
                <p className="text-dark-300">Researching machine learning algorithms to improve their accuracy with proper training and finetuning models.</p>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary-400 text-lg">⚡</span>
                <p className="text-dark-300">Active competitive programmer solving Data Structures & Algorithms problems to improve reasoning and thinking abilities.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection