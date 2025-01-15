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
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
`

export default App
