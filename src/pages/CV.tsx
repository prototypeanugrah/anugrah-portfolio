import { motion } from 'framer-motion'
import { education, workExperience, researchExperience, projects } from '../utils/data'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'

const CV = () => {
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Place your CV in public folder
    link.download = 'Anugrah_Vaishnav_CV.pdf'
    link.click()
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-dark-950 via-dark-850 to-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold text-dark-50 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Curriculum Vitae
              </motion.h1>
              <motion.p 
                className="text-xl text-dark-400"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Professional experience, education, and research contributions
              </motion.p>
            </div>
            
            <motion.button
              onClick={downloadCV}
              className="btn btn-primary flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download mr-2"></i>
              Download PDF
            </motion.button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Education Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-3">
            <i className="fas fa-graduation-cap"></i>
            Education
          </h2>
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
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-50 mb-2">
                      {edu.degree}
                    </h3>
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-3">
            <i className="fas fa-briefcase"></i>
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Research Experience Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-3">
            <i className="fas fa-flask"></i>
            Research Experience
          </h2>
          <div className="space-y-8">
            {researchExperience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-3">
            <i className="fas fa-code"></i>
            Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default CV