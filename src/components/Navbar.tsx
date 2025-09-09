import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'work-experience', 'research-experience', 'projects', 'certifications']
      const scrollPosition = window.scrollY + 150

      let currentSection = 'home'
      
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop - 100
          
          if (scrollPosition >= offsetTop) {
            currentSection = section
          }
        }
      })
      
      setActiveSection(currentSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'work-experience', label: 'Work Experience' },
    { id: 'research-experience', label: 'Research Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' }
  ]

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-950/98 backdrop-blur-md border-b border-dark-700' 
          : 'bg-dark-950/95 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - on the far left */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-primary-400 hover:text-accent-400 transition-colors duration-300 flex-shrink-0"
          >
            Anugrah Vaishnav
          </button>

          {/* Desktop Navigation - starts after the logo */}
          <div className="hidden md:flex space-x-6 ml-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-primary-400 bg-primary-400/10' 
                    : 'text-dark-300 hover:text-primary-400 hover:bg-dark-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button - on the far right */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-300 hover:text-primary-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span 
                  className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`} 
                />
                <span 
                  className={`block h-0.5 w-6 bg-current rounded transition-opacity duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`} 
                />
                <span 
                  className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="pb-4 space-y-1 bg-dark-800/50 rounded-lg mt-2 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full px-4 py-3 text-center font-medium rounded-md transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-primary-400 bg-primary-400/10' 
                    : 'text-dark-300 hover:text-primary-400 hover:bg-dark-700/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar