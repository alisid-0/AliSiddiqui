import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { ArrowUpRight } from '@phosphor-icons/react'
import firstChoiceImage from '../assets/firstchoice.png'
import butterChickenImage from '../assets/butter.png'
import upstreamInspectionsVideo from '../assets/videos/ui.mp4'

const Projects = () => {
  const projects = [
    {
      title: "Upstream Inspections Mobile App",
      description: "Cross-platform React Native field solution with offline-first inspection workflow and conflict resolution. Features OBD2 integration, biometric authentication, GPS tracking, and sophisticated SQLite sync algorithms for complete offline functionality.",
      tags: ["React Native", "Expo", "OBD2", "Biometric Auth", "SQLite", "Offline-First"],
      type: "video",
      videoUrl: upstreamInspectionsVideo,
      gradient: "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.1) 100%)",
      impact: "Enabled complete offline field operations",
      category: "Mobile Enterprise"
    },
    {
      title: "Upstream Mobility Platform",
      description: "Real-time analytics and tracking system with Guardian API integration. Features battery health testing, automated certification generation, role-based dashboards, and sales analytics with predictive modeling for 40% dealer efficiency improvement.",
      tags: ["React", "TypeScript", "Guardian API", "Real-time Analytics", "PDF Generation", "Predictive Modeling"],
      image: firstChoiceImage, // Placeholder - you can add a mobility image
      link: "#",
      gradient: "linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.1) 100%)",
      impact: "40% dealer efficiency improvement",
      category: "Enterprise Analytics"
    },
    {
      title: "JARVIS AI Assistant",
      description: "Voice-controlled AI assistant with Google Gemini integration, comprehensive Windows service architecture, and system automation including power management, window controls, and office automation.",
      tags: ["React Native", "Google Gemini AI", "Windows Services", "Voice Recognition", "System Automation"],
      image: butterChickenImage, // Placeholder - you can add a JARVIS image
      link: "#",
      gradient: "linear-gradient(135deg, rgba(240, 147, 251, 0.15) 0%, rgba(245, 87, 108, 0.1) 100%)",
      impact: "Personal productivity assistant",
      category: "AI Innovation"
    },
    {
      title: "Car-ID",
      description: "Enterprise-grade vehicle delivery tracking app that opened new revenue streams. Features user-based workflows for remarketers, inspectors, and delivery drivers with comprehensive liability tracking for vehicle condition management.",
      tags: ["React Native", "Enterprise", "Workflow Management", "Liability Tracking", "Revenue Generation"],
      image: firstChoiceImage, // Placeholder - you can add a Car-ID image
      link: "#",
      gradient: "linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, rgba(255, 69, 0, 0.1) 100%)",
      impact: "Opened new revenue streams",
      category: "Enterprise Revenue"
    },
    {
      title: "SipOfSilk Coffee Shop",
      description: "Serverless Firebase Functions-based platform with automated scaling. Features coffee menu management with spice level categorization, user authentication with RBAC, and brand-consistent design system with real-time persistence.",
      tags: ["React 18+", "Firebase Functions", "Firestore", "Serverless", "RBAC", "Cultural Branding"],
      image: butterChickenImage, // Placeholder - you can add a SipOfSilk image
      link: "#",
      gradient: "linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(39, 174, 96, 0.1) 100%)",
      impact: "Complete coffee shop management system",
      category: "Serverless Platform"
    }
  ]

  return (
    <ProjectsContainer id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectSection key={index} gradient={project.gradient}>
            <Parallax translateY={[-10, 10]}>
              <ProjectContent>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <ProjectCard
                    as={project.link ? "a" : "div"}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectInfo>
                      <ProjectHeader>
                        <ProjectCategory>{project.category}</ProjectCategory>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectImpact>{project.impact}</ProjectImpact>
                      </ProjectHeader>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      <TagContainer>
                        {project.tags.map((tag, i) => (
                          <Tag key={i}>{tag}</Tag>
                        ))}
                      </TagContainer>
                    </ProjectInfo>
                    
                    <ProjectMedia>
                      {project.type === 'video' ? (
                        <ProjectVideo autoPlay loop muted playsInline>
                          <source src={project.videoUrl} type="video/mp4" />
                        </ProjectVideo>
                      ) : (
                        <ProjectImageWrapper>
                          <ProjectImage src={project.image} alt={project.title} />
                          <ProjectOverlay>
                            <ArrowUpRight size={48} color="#ffffff" weight="thin" />
                          </ProjectOverlay>
                        </ProjectImageWrapper>
                      )}
                    </ProjectMedia>
                  </ProjectCard>
                </motion.div>
              </ProjectContent>
            </Parallax>
          </ProjectSection>
        ))}
      </motion.div>
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.div`
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`

const ProjectSection = styled.section`
  min-height: 100vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  @media (max-width: 1024px) {
    min-height: 80vh;
    padding: 4rem 2rem;
  }
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 2rem 1rem;
    margin-bottom: 1rem;
  }
`

const ProjectContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  z-index: 2;
  position: relative;
`


const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  background: ${props => props.gradient};
  border-radius: 24px;
  padding: 4rem;
  backdrop-filter: blur(25px) saturate(200%) brightness(110%);
  border: 2px solid rgba(255, 255, 255, 0.4);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(135deg, 
        rgba(255, 255, 255, 0.15) 0%, 
        transparent 30%, 
        transparent 70%, 
        rgba(255, 255, 255, 0.1) 100%),
      linear-gradient(45deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.08) 25%, 
        transparent 50%, 
        rgba(255, 255, 255, 0.08) 75%, 
        transparent 100%),
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.05) 20%, 
        rgba(255, 255, 255, 0.1) 50%, 
        rgba(255, 255, 255, 0.05) 80%, 
        transparent 100%),
      linear-gradient(0deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.03) 30%, 
        transparent 70%);
    pointer-events: none;
  }
  
  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.7),
      inset 0 -1px 0 rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(30px) saturate(220%) brightness(115%);
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
    border-radius: 16px;
  }
`

const ProjectMedia = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
  overflow: hidden;
  border-radius: 12px;

  @media (max-width: 1024px) {
    min-height: 400px;
  }

  @media (max-width: 768px) {
    min-height: 250px;
  }
`

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.1) 25%, 
        transparent 50%, 
        rgba(255, 255, 255, 0.05) 75%, 
        transparent 100%);
    pointer-events: none;
    z-index: 1;
  }
`

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ProjectCategory = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: rgba(100, 255, 218, 0.9);
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const ProjectTitle = styled.h3`
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: 0.2em;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 0.1em;
  }
`

const ProjectImpact = styled.span`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(80, 250, 123, 0.9);
  font-style: italic;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`

const TagContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }
`

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.1) 25%, 
        transparent 50%, 
        rgba(255, 255, 255, 0.05) 75%, 
        transparent 100%);
    pointer-events: none;
    z-index: 1;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`

export default Projects 