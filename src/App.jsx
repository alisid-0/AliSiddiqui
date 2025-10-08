import { Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CursorEffect from './components/CursorEffect'
import Navigation from './components/Navigation'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  
  // Optimized smooth color transitions with reduced frequency
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.05) // ~20fps updates - much more performance friendly
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Generate smooth, continuous color transitions
  const generateSmoothColors = (time) => {
    // Use sine waves for smooth color transitions with slower, more subtle changes
    const primaryHue = (Math.sin(time * 0.1) * 60 + 200) % 360 // Blue to Purple range - slower
    const secondaryHue = (Math.sin(time * 0.15 + 2) * 80 + 250) % 360 // Purple to Pink range - slower
    const accentHue = (Math.sin(time * 0.08 + 4) * 40 + 180) % 360 // Teal to Blue range - slower
    
    // Convert HSL to RGB with consistent saturation and lightness
    const hslToRgba = (h, s, l, a) => {
      const c = (1 - Math.abs(2 * l - 1)) * s
      const x = c * (1 - Math.abs((h / 60) % 2 - 1))
      const m = l - c / 2
      
      let r, g, b
      if (h < 60) { r = c; g = x; b = 0 }
      else if (h < 120) { r = x; g = c; b = 0 }
      else if (h < 180) { r = 0; g = c; b = x }
      else if (h < 240) { r = 0; g = x; b = c }
      else if (h < 300) { r = x; g = 0; b = c }
      else { r = c; g = 0; b = x }
      
      return `rgba(${Math.round((r + m) * 255)}, ${Math.round((g + m) * 255)}, ${Math.round((b + m) * 255)}, ${a})`
    }

    return {
      primary: hslToRgba(primaryHue, 0.7, 0.6, 0.15),
      secondary: hslToRgba(secondaryHue, 0.6, 0.5, 0.12),
      accent: hslToRgba(accentHue, 0.8, 0.7, 0.1)
    }
  }

  const currentGradient = generateSmoothColors(time)

  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={
          <Container currentGradient={currentGradient}>
            <CursorEffect />
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Contact />
          </Container>
        } />
        <Route path="/project/:projectId" element={
          <Container currentGradient={currentGradient}>
            <CursorEffect />
            <ProjectDetail />
          </Container>
        } />
      </Routes>
    </ParallaxProvider>
  )
}

const Container = styled.div`
  background: linear-gradient(180deg, 
    #0a192f 0%, 
    #112240 20%, 
    #1a1a2e 40%, 
    #16213e 60%, 
    #0f3460 80%, 
    #000000 100%);
  color: #ffffff;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, ${props => props.currentGradient.primary} 0%, transparent 60%),
      radial-gradient(circle at 80% 70%, ${props => props.currentGradient.secondary} 0%, transparent 60%),
      radial-gradient(circle at 50% 50%, ${props => props.currentGradient.accent} 0%, transparent 70%),
      linear-gradient(45deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.02) 25%, 
        transparent 50%, 
        rgba(255, 255, 255, 0.01) 75%, 
        transparent 100%);
    pointer-events: none;
    z-index: 0;
    transition: background 0.3s ease-out;
  }
`

export default App
