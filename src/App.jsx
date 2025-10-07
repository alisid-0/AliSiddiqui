import { ParallaxProvider } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CursorEffect from './components/CursorEffect'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <ParallaxProvider>
      <Container>
        <CursorEffect />
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
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
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(189, 147, 249, 0.08) 0%, transparent 50%),
      linear-gradient(45deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.02) 25%, 
        transparent 50%, 
        rgba(255, 255, 255, 0.01) 75%, 
        transparent 100%);
    pointer-events: none;
    z-index: 0;
  }
`

export default App
