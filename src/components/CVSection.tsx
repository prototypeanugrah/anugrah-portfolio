import { motion } from 'framer-motion'
import { education, workExperience, researchExperience, projects } from '../utils/data'
import ExperienceCard from './ExperienceCard'
import ProjectCard from './ProjectCard'

const CVSection = () => {
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Place your CV in public folder
    link.download = 'Anugrah_Vaishnav_CV.pdf'
    link.click()
  }

  return (
    <section id="cv" className="py-20 bg-gradient-to-br from-dark-850 to-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Education Section */}
        <motion.div 
          id="education"
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-3">
            <i className="fas fa-graduation-cap"></i>
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="card p-6 border-l-4 border-primary-400"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Education Image or Logo */}
                  <div className="flex-shrink-0">
                    {(edu.imageUrl || edu.imagePlaceholder) ? (
                      <div className="w-full lg:w-48 h-32 lg:h-48">
                        {edu.imageUrl ? (
                          <div className="rounded-lg h-full overflow-hidden bg-dark-800">
                            <img 
                              src={edu.imageUrl} 
                              alt={edu.degree}
                              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                              onLoad={() => console.log(`✅ Image loaded successfully: ${edu.imageUrl}`)}
                              onError={(e) => {
                                console.error(`❌ Image failed to load: ${edu.imageUrl}`);
                                // Fallback to placeholder if image fails to load
                                e.currentTarget.style.display = 'none';
                                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                                if (nextElement) {
                                  nextElement.style.display = 'flex';
                                }
                              }}
                            />
                            {edu.imagePlaceholder && (
                              <div className="bg-gradient-to-br from-dark-800 to-dark-700 border-2 border-dashed border-dark-600 rounded-lg h-full flex flex-col items-center justify-center hover:border-primary-500 transition-colors duration-300" style={{ display: 'none' }}>
                                <i className={`${edu.imagePlaceholder.icon} text-4xl text-primary-400 mb-2`}></i>
                                <p className="text-dark-400 text-sm font-medium text-center">
                                  {edu.imagePlaceholder.text}
                                </p>
                                <p className="text-xs text-dark-500 mt-1">
                                  Image failed to load
                                </p>
                              </div>
                            )}
                          </div>
                        ) : edu.imagePlaceholder ? (
                          <div className="bg-gradient-to-br from-dark-800 to-dark-700 border-2 border-dashed border-dark-600 rounded-lg h-full flex flex-col items-center justify-center hover:border-primary-500 transition-colors duration-300">
                            <i className={`${edu.imagePlaceholder.icon} text-4xl text-primary-400 mb-2`}></i>
                            <p className="text-dark-400 text-sm font-medium text-center">
                              {edu.imagePlaceholder.text}
                            </p>
                            <p className="text-xs text-dark-500 mt-1">
                              Add image to /public/images/education/
                            </p>
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <div className="w-20 h-20 lg:w-48 lg:h-32 bg-dark-700 rounded-lg flex items-center justify-center">
                        <i className="fas fa-university text-3xl text-primary-400"></i>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-dark-50 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-400 font-semibold mb-2">
                        {edu.institution}
                      </p>
                      {edu.advisor && (
                        <p className="text-dark-400 italic text-sm mb-2">
                          Thesis Advisor: {edu.advisor}
                        </p>
                      )}
                      <p className="text-dark-300 mb-3">{edu.description}</p>
                      {edu.thesisLink && (
                        <motion.a
                          href={edu.thesisLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-small btn-secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-file-alt mr-2"></i>
                          View Thesis
                        </motion.a>
                      )}
                    </div>
                    <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white text-sm px-4 py-2 rounded-full font-semibold whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div 
          id="work-experience"
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-3">
            <i className="fas fa-briefcase"></i>
            Work Experience
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workExperience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Research Experience Section */}
        <motion.div 
          id="research-experience"
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-3">
            <i className="fas fa-flask"></i>
            Research Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {researchExperience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          id="projects"
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-3">
            <i className="fas fa-code"></i>
            Selected Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CVSection