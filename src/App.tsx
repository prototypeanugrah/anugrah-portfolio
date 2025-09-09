import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CertificationsSection from './components/CertificationsSection'
import CVSection from './components/CVSection'

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutSection />
        <CVSection />
        <CertificationsSection />
      </motion.main>
      <Footer />
    </div>
  )
}

export default App