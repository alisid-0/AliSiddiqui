import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <NavContainer>
      <NavList>
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <NavItem key={section}>
            <NavButton
              onClick={() => scrollToSection(section)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section}
            </NavButton>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 100;
  mix-blend-mode: difference;
  
  @media (max-width: 768px) {
    top: auto;
    bottom: 2rem;
    right: 50%;
    transform: translateX(50%);
    mix-blend-mode: normal;
  }
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.5rem;
    background: rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
    border-radius: 25px;
    backdrop-filter: blur(10px);
  }
`

const NavItem = styled.li`
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`

const NavButton = styled(motion.button)`
  background: none;
  border: none;
  color: #64ffda;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.5rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.5rem;
    color: #ffffff;
    opacity: 0.8;
    
    &:hover {
      opacity: 1;
      color: #64ffda;
    }
  }
`

export default Navigation 