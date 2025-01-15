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
      title: "First Choice Floors",
      description: "A modern flooring company website built in one day, showcasing services and portfolio with a clean, professional design.",
      tags: ["React", "Tailwind CSS"],
      image: firstChoiceImage,
      link: "https://first-choice-flooring.vercel.app/",
      gradient: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)"
    },
    {
      title: "The Butter Chicken Spot",
      description: "A restaurant website for an up-and-coming establishment in St. Louis, MO, featuring their menu and brand identity.",
      tags: ["React", "Firebase", "3D Modeling"],
      image: butterChickenImage,
      link: "https://butter-chicken-spot.vercel.app/",
      gradient: "linear-gradient(135deg, #ff8c00 0%, #ff4500 100%)"
    },
    {
      title: "Upstream Inspections Portal",
      description: "A comprehensive redesign of the web portal for Upstream Inspections, focusing on improved user experience and modern interface.",
      tags: ["React", "UI/UX", "Portal Redesign"],
      type: "video",
      videoUrl: upstreamInspectionsVideo,
      gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)"
    }
  ]

  return (
    <ProjectsContainer>
      <SectionTitle>Featured Projects</SectionTitle>
      {projects.map((project, index) => (
        <ProjectSection key={index} gradient={project.gradient}>
          <Parallax translateY={[-20, 20]}>
            <ProjectContent>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <ProjectCard
                  as={project.link ? "a" : "div"}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectInfo>
                    <ProjectTitle>{project.title}</ProjectTitle>
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
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.div`
  min-height: 100vh;
`

const ProjectSection = styled.section`
  min-height: 100vh;
  background: ${props => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
`

const ProjectContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  padding: 4rem;
  font-weight: 200;
  letter-spacing: 0.3em;
  background: linear-gradient(120deg, #64ffda, #bd93f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
`

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 4rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`

const ProjectMedia = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
  overflow: hidden;
  border-radius: 12px;

  @media (max-width: 768px) {
    min-height: 300px;
  }
`

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  border-radius: 12px;
  overflow: hidden;
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
  background: rgba(0, 0, 0, 0.2);
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
`

const ProjectTitle = styled.h3`
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: 0.2em;
  color: #ffffff;
`

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
`

const TagContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
`

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`

export default Projects 