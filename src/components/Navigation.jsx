import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
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
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const NavItem = styled.li`
  text-align: right;
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
`

export default Navigation 