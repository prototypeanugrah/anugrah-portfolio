import { motion } from 'framer-motion'
// import { personalInfo } from '../utils/data'
import { getAssetPath } from '../utils/assets'

const About = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: 'fas fa-code',
      items: ['Python', 'R', 'SQL', 'JavaScript', 'TypeScript']
    },
    {
      category: 'ML/AI Frameworks',
      icon: 'fas fa-robot',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
      category: 'Data Analysis',
      icon: 'fas fa-chart-line',
      items: ['Statistical Analysis', 'Data Visualization', 'Bioinformatics', 'Clinical Data Analysis']
    },
    {
      category: 'Tools & Platforms',
      icon: 'fas fa-tools',
      items: ['Git/GitHub', 'Docker', 'AWS/Cloud Platforms', 'Jupyter Notebooks', 'Streamlit']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-950 via-dark-850 to-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-dark-50 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-xl text-dark-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get to know more about my background, interests, and journey
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <motion.div
              className="lg:col-span-1 flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-80 lg:w-64 lg:h-64 bg-gradient-to-r from-dark-800 to-dark-700 border-4 border-dark-600 rounded-full flex items-center justify-center overflow-hidden shadow-xl">
                  {/* Replace with actual profile image: place your photo in public/profile.jpg */}
                  <img 
                    src={getAssetPath('/profile.jpg')} 
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
                    <i className="fas fa-user text-5xl text-primary-400 mb-3"></i>
                    <p className="text-dark-400 font-medium">Add profile.jpg to public folder</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-400 mb-6">
                Hello! I'm Anugrah Vaishnav
              </h2>
              
              <div className="space-y-4 text-dark-300 leading-relaxed text-lg">
                <p>
                  I'm a data science enthusiast passionate about building real-life AI application solutions. 
                  My journey spans computer vision, NLP, and biomedical data analysis, with hands-on experience 
                  in developing end-to-end machine learning systems. I completed my Master's in Computer Science 
                  at the University of Massachusetts Lowell, where I worked on advanced 3D reconstruction 
                  techniques under Dr. Yu Cao's guidance.
                </p>
                
                <p>
                  My experience includes working with cutting-edge technologies like multimodal LLMs, 
                  machine unlearning frameworks, and causal inference models. I've contributed to projects 
                  ranging from financial text analysis to medical image processing, always focusing on 
                  practical applications that solve real-world problems.
                </p>
                
                <p>
                  I'm actively seeking opportunities as an ML Engineer or Data Scientist where 
                  I can apply my technical expertise to build innovative AI solutions that make a 
                  meaningful impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-dark-850 to-dark-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold text-center text-dark-50 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <i className={`${skill.icon} text-3xl text-primary-400`}></i>
                </div>
                <h4 className="text-lg font-semibold text-primary-400 mb-4">
                  {skill.category}
                </h4>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      className="text-dark-300 py-1 border-b border-dark-700 last:border-b-0 hover:text-primary-400 transition-colors duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About