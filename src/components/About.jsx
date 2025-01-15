import { Parallax } from 'react-scroll-parallax'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Terminal, Lightning, Layout } from '@phosphor-icons/react'

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Layout, color: '#64ffda' },
    { name: 'Backend', icon: Database, color: '#bd93f9' },
    { name: 'Cloud', icon: Cloud, color: '#ff79c6' },
    { name: 'DevOps', icon: Terminal, color: '#50fa7b' },
    { name: 'API Design', icon: Code, color: '#f1fa8c' },
    { name: 'Performance', icon: Lightning, color: '#ff5555' },
  ]

  return (
    <AboutSection>
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
              I'm a passionate full-stack developer with a keen eye for design and a love for clean, efficient code. 
              My journey in software development has led me to work with modern technologies and best practices, 
              always striving to create exceptional digital experiences.
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
        </ContentWrapper>
      </Parallax>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #0a192f 0%, #112240 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
  position: relative;
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
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
  background: linear-gradient(120deg, #64ffda, #bd93f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
`

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #8892b0;
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin-bottom: 4rem;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
`

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }
`

const SkillName = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  color: #ccd6f6;
`

export default About 