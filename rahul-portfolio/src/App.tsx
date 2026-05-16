import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Achievements from './components/sections/Achievements'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 6 + 'px'
      cursor.style.top = e.clientY - 6 + 'px'
      setTimeout(() => {
        follower.style.left = e.clientX - 18 + 'px'
        follower.style.top = e.clientY - 18 + 'px'
      }, 80)
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-void' : 'bg-gray-50'} transition-colors duration-500`}>
      {/* Custom cursor (desktop only) */}
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={followerRef} className="custom-cursor-follower hidden md:block" />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}
