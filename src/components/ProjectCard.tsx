import { motion } from 'framer-motion'
import { Project } from '../types'
import KeywordTag from './KeywordTag'

interface ProjectCardProps {
  project: Project
  index?: number
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      className="card p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.1 } }}
      viewport={{ once: true }}
    >
      {/* Header with fixed height */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-dark-50 mb-2 min-h-[3.5rem] flex items-start">
            {project.title}
          </h3>
        </div>
        <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white text-sm px-4 py-2 rounded-full font-semibold whitespace-nowrap">
          {project.type}
        </span>
      </div>

      {/* Keywords with fixed height */}
      <div className="flex flex-wrap gap-2 mb-4 min-h-[3rem] items-start">
        {project.keywords.map((keyword, keywordIndex) => (
          <KeywordTag 
            key={keyword} 
            keyword={keyword} 
            index={keywordIndex} 
          />
        ))}
      </div>

      {/* Project Image with fixed height */}
      <div className="mb-4">
        {project.imageUrl ? (
          <div className="rounded-lg h-48 overflow-hidden bg-dark-800">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              onLoad={() => console.log(`✅ Image loaded successfully: ${project.imageUrl}`)}
              onError={(e) => {
                console.error(`❌ Image failed to load: ${project.imageUrl}`);
                // Fallback to placeholder if image fails to load
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
            {project.imagePlaceholder && (
              <div className="bg-gradient-to-br from-dark-800 to-dark-700 border-2 border-dashed border-dark-600 rounded-lg h-48 flex flex-col items-center justify-center hover:border-primary-500 transition-colors duration-300" style={{ display: 'none' }}>
                <i className={`${project.imagePlaceholder.icon} text-4xl text-primary-400 mb-2`}></i>
                <p className="text-dark-400 text-sm font-medium">
                  {project.imagePlaceholder.text}
                </p>
                <p className="text-xs text-dark-500 mt-1">
                  Image failed to load
                </p>
              </div>
            )}
          </div>
        ) : project.imagePlaceholder ? (
          <div className="bg-gradient-to-br from-dark-800 to-dark-700 border-2 border-dashed border-dark-600 rounded-lg h-48 flex flex-col items-center justify-center hover:border-primary-500 transition-colors duration-300">
            <i className={`${project.imagePlaceholder.icon} text-4xl text-primary-400 mb-2`}></i>
            <p className="text-dark-400 text-sm font-medium">
              {project.imagePlaceholder.text}
            </p>
            <p className="text-xs text-dark-500 mt-1">
              Add image to /public/images/projects/
            </p>
          </div>
        ) : null}
      </div>

      {/* Description - flexible content */}
      <div className="space-y-3 flex-1 mb-4">
        {project.description.map((item, itemIndex) => (
          <div key={itemIndex} className="flex items-start">
            <span className="text-primary-400 mr-3 mt-2 text-sm font-bold">→</span>
            <p 
              className="text-dark-300 leading-relaxed flex-1"
              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-400">$1</strong>') }}
            />
          </div>
        ))}
      </div>

      {/* Links - positioned at bottom left */}
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.links.map((link, linkIndex) => (
            <motion.a
              key={linkIndex}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-small btn-secondary"
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`fab fa-${link.type === 'github' ? 'github' : link.type === 'pypi' ? 'python' : 'external-link-alt'} mr-2`}></i>
              {link.label}
            </motion.a>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard