import { useEffect, useState } from 'react'
import About from './components/About'
import AnimatedBackground from './components/AnimatedBackground'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-slate-950 text-white transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <CustomCursor />
      <AnimatedBackground />
      <Navbar theme={theme} onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
