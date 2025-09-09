import { motion } from 'framer-motion'

const CertificationsSection = () => {
  const certifications = [
    {
      id: 'google-data-analytics',
      title: 'Google Data Analytics Certificate from Google',
      provider: 'Coursera',
      logo: '/images/certificate-icons/coursera.png',
      description: 'Comprehensive program covering Google Data Analytics tools and techniques.',
      links: [
        { type: 'certificate', url: 'https://coursera.org/share/b7da2a332f47cfceb70be7b4c11c2639'}
      ]
    },
    {
      id: 'frontend-dev',
      title: 'Natural Language Processing with Classification and Vector Spaces',
      provider: 'DeepLearning.AI', 
      logo: '/images/certificate-icons/deeplearning-ai.png',
      description: 'Comprehensive program covering Natural Language Processing tools and techniques.',
      links: [
        { type: 'certificate', url: 'https://coursera.org/share/c01f3f98e0904ad10f02f2f74c961451' }
      ]
    },
    // {
    //   id: 'stanford-ml',
    //   title: 'Machine Learning by Stanford University from Coursera',
    //   provider: 'Coursera',
    //   logo: '/icons/coursera.svg',
    //   description: 'Andrew Ng\'s comprehensive machine learning course covering algorithms, neural networks, and practical applications.',
    //   links: [
    //     { type: 'certificate', url: 'https://coursera.org/share/67f08a1d90e4f7662b3b870446e3c83d' }
    //   ]
    // }
  ]

  return (
    <section id="certifications" className="py-20 bg-dark-950">
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
            Certifications
          </h2>
          {/* <p className="text-xl text-dark-400 max-w-3xl mx-auto">
            Few certifications/courses, I undertook to develop relevant skillset and build my profile.
          </p> */}
        </motion.div>

        {/* Certifications Grid */}
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-dark-800 rounded-2xl p-8 border border-dark-700 hover:border-primary-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-6">
                {/* Logo */}
                <motion.div
                  className="flex-shrink-0 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src={cert.logo} 
                    alt={`${cert.provider} logo`}
                    className="w-14 h-14 object-contain"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl lg:text-2xl font-semibold text-dark-50 mb-3 leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {cert.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-dark-300 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {cert.description}
                  </motion.p>

                  {/* Bottom row with provider badge and view certificate button */}
                  <div className="flex items-center justify-between">
                    {/* Provider Badge */}
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <i className="fas fa-certificate"></i>
                      {cert.provider}
                    </motion.div>

                    {/* View Certificate Button */}
                    <motion.a
                      href={cert.links[0]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-dark-700 hover:bg-dark-600 text-dark-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg border border-dark-600 hover:border-primary-400/50"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      View Certificate
                    </motion.a>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="hidden lg:block flex-shrink-0">
                  <motion.div
                    className="w-1 h-full bg-gradient-to-b from-primary-400 to-accent-400 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 text-dark-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400"></div>
            <i className="fas fa-graduation-cap text-2xl text-primary-400"></i>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificationsSection