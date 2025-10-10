import { Parallax } from 'react-scroll-parallax'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Code, Cloud, Terminal, Lightning, Layout, Brain, GithubLogo } from '@phosphor-icons/react'

const About = () => {
  const skills = [
    { name: 'Enterprise Architecture', icon: Layout, color: '#64ffda' },
    { name: 'AI Integration', icon: Brain, color: '#bd93f9' },
    { name: 'Cloud Solutions', icon: Cloud, color: '#ff79c6' },
    { name: 'Mobile Development', icon: Terminal, color: '#50fa7b' },
    { name: 'Real-time Systems', icon: Code, color: '#f1fa8c' },
    { name: 'System Automation', icon: Lightning, color: '#ff5555' },
  ]

  return (
    <AboutSection id="about">
      <Parallax translateY={[-15, 15]}>
        <ContentWrapper>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle>About Me</SectionTitle>
            <AboutText>
              I&apos;m an enterprise full-stack engineer specializing in cross-platform development, cloud architecture, and scalable system design. 
              With expertise spanning from enterprise-grade automotive management systems to voice-controlled AI assistants, 
              I&apos;ve delivered solutions that have not only improved operational efficiency across multiple industries but have opened up multiple revenue streams.
            </AboutText>
            
            <SkillsGrid>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard>
                    <skill.icon size={32} color={skill.color} weight="thin" />
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                </motion.div>
              ))}
            </SkillsGrid>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <PortfolioSourceContainer>
              <PortfolioSourceLink 
                href="https://github.com/alisid-0/AliSiddiqui" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GithubLogo size={18} weight="bold" />
                View Portfolio Source Code
              </PortfolioSourceLink>
            </PortfolioSourceContainer>
          </motion.div>
        </ContentWrapper>
      </Parallax>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  min-height: 100vh;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    padding: 6rem 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 200;
  letter-spacing: 0.3em;
  background: linear-gradient(120deg, #ff6b6b, #4ecdc4, #45b7d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
  text-shadow: 0 0 30px rgba(255, 107, 107, 0.3);
  
  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 0.2em;
    margin-bottom: 2rem;
  }
`

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #8892b0;
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin-bottom: 4rem;
  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.55;
    margin-bottom: 2rem;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }
`

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 107, 107, 0.2);
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(15px) saturate(150%);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 107, 107, 0.4);
    box-shadow: 
      0 8px 30px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 0.6rem;
    
    svg {
      width: 28px !important;
      height: 28px !important;
    }
  }
`

const SkillName = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  color: #ccd6f6;
  text-align: center;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    letter-spacing: 0.15em;
  }
`

const PortfolioSourceContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
  width: 100%;
`

const PortfolioSourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  letter-spacing: 0.05em;
  
  &:hover {
    color: #64ffda;
    border-color: #64ffda;
    background: rgba(100, 255, 218, 0.05);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`

export default About 