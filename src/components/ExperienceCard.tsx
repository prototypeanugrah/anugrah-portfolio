import { motion } from 'framer-motion'
import { Experience } from '../types'
import KeywordTag from './KeywordTag'

interface ExperienceCardProps {
  experience: Experience
  index?: number
}

const ExperienceCard = ({ experience, index = 0 }: ExperienceCardProps) => {
  return (
    <motion.div
      className="card p-6 border-l-4 border-primary-400 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
      viewport={{ once: true }}
    >
      {/* Company Logo - Top of block for work experience */}
      {experience.type === 'work' && (
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-dark-700 rounded-lg flex items-center justify-center overflow-hidden">
            {experience.imageUrl ? (
              <img 
                src={experience.imageUrl} 
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                onLoad={() => console.log(`✅ Company logo loaded successfully: ${experience.imageUrl}`)}
                onError={(e) => {
                  console.error(`❌ Company logo failed to load: ${experience.imageUrl}`);
                  // Fallback to building icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
            ) : null}
            <div className={`w-full h-full flex items-center justify-center ${experience.imageUrl ? 'hidden' : 'flex'}`}>
              <i className="fas fa-building text-4xl text-primary-400"></i>
            </div>
          </div>
        </div>
      )}

      {/* Header with duration in top right */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1 pr-4">
          <h3 className="text-lg font-semibold text-dark-50 mb-2 leading-tight">
            {experience.title}
          </h3>
          <p className="text-primary-400 font-semibold mb-1">
            {experience.company}
          </p>
          {experience.institution && (
            <p className="text-primary-400 font-semibold mb-1">
              {experience.institution}
            </p>
          )}
          {experience.advisor && (
            <p className="text-dark-400 italic text-sm mb-2">
              Advisor: {experience.advisor}
            </p>
          )}
        </div>
        <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap flex-shrink-0">
          {experience.duration}
        </span>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2 mb-4">
        {experience.keywords.map((keyword, keywordIndex) => (
          <KeywordTag 
            key={keyword} 
            keyword={keyword} 
            index={keywordIndex} 
          />
        ))}
      </div>

      {/* Research Project Image - Only for research experience */}
      {experience.type === 'research' && (experience.imageUrl || experience.imagePlaceholder) && (
        <div className="mb-4">
          {experience.imageUrl ? (
            <div className="rounded-lg h-48 overflow-hidden bg-dark-800">
              <img 
                src={experience.imageUrl} 
                alt={experience.title}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                onLoad={() => console.log(`✅ Image loaded successfully: ${experience.imageUrl}`)}
                onError={(e) => {
                  console.error(`❌ Image failed to load: ${experience.imageUrl}`);
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
              {experience.imagePlaceholder && (
                <div className="bg-gradient-to-br from-dark-800 to-dark-700 border-2 border-dashed border-dark-600 rounded-lg h-48 flex flex-col items-center justify-center hover:border-primary-500 transition-colors duration-300" style={{ display: 'none' }}>
                  <i className={`${experience.imagePlaceholder.icon} text-4xl text-primary-400 mb-2`}></i>
                  <p className="text-dark-400 text-sm font-medium">
                    {experience.imagePlaceholder.text}
                  </p>
                  <p className="text-xs text-dark-500 mt-1">
                    Image failed to load
                  </p>
                </div>
              )}
            </div>
          ) : experience.imagePlaceholder ? (
            <div className="bg-gradient-to-br from-dark-800 to-dark-700 border-2 border-dashed border-dark-600 rounded-lg h-48 flex flex-col items-center justify-center hover:border-primary-500 transition-colors duration-300">
              <i className={`${experience.imagePlaceholder.icon} text-4xl text-primary-400 mb-2`}></i>
              <p className="text-dark-400 text-sm font-medium">
                {experience.imagePlaceholder.text}
              </p>
              <p className="text-xs text-dark-500 mt-1">
                Add image to /public/images/research/
              </p>
            </div>
          ) : null}
        </div>
      )}

      {/* Description */}
      <div className="space-y-3 flex-1">
        {experience.description.map((item, itemIndex) => (
          <div key={itemIndex} className="flex items-start">
            <span className="text-primary-400 mr-3 mt-2 text-sm font-bold">→</span>
            <p 
              className="text-dark-300 leading-relaxed flex-1"
              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-400">$1</strong>') }}
            />
          </div>
        ))}
        
        {/* Thesis Link */}
        {experience.thesisLink && (
          <div className="mt-4">
            <motion.a
              href={experience.thesisLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-small btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-file-alt mr-2"></i>
              View Thesis
            </motion.a>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ExperienceCard