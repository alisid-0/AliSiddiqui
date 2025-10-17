import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import firstChoiceImage from '../assets/firstchoice.png'
import butterChickenImage from '../assets/butter.png'
import upstreamInspectionsImage1 from '../assets/upstreaminspectionsmobileapp/IMG_7993.PNG'
import upstreamInspectionsImage2 from '../assets/upstreaminspectionsmobileapp/IMG_7994.PNG'
import upstreamMobilityImage1 from '../assets/upstreammobility/Screenshot 2025-10-07 151533.png'
import upstreamMobilityImage2 from '../assets/upstreammobility/Screenshot 2025-10-07 151606.png'
import upstreamMobilityImage3 from '../assets/upstreammobility/Screenshot 2025-10-07 152134.png'
import sipOfSilkImage from '../assets/sipofsilk/Screenshot 2025-10-07 151211.png'
import jarvisImage from '../assets/JARVIS/Screenshot 2025-10-07 203902.png'
import windsweptImage from '../assets/Windswept/Screenshot 2025-10-17 165606.png'

const Projects = () => {
  const projects = [
    {
      id: "upstream-inspections",
      title: "Upstream Inspections Mobile App",
      description: "Cross-platform React Native field solution with offline-first inspection workflow and conflict resolution. Features OBD2 integration, biometric authentication, GPS tracking, and sophisticated SQLite sync algorithms for complete offline functionality.",
      summary: "Cross-platform React Native field solution with offline-first inspection workflow and conflict resolution. Features OBD2 integration, biometric authentication...",
      tags: ["React Native", "Expo", "OBD2", "Biometric Auth", "SQLite", "Offline-First", "GPS Tracking", "JavaScript"],
      images: [upstreamInspectionsImage1, upstreamInspectionsImage2],
      scaleX: 1,
      scaleY: 1,
      link: "#",
      gradient: "transparent",
      impact: "Enabled complete offline field operations",
      category: "Mobile Enterprise",
      layout: "portrait", // Special layout flag for 2-column design
      detailedDescription: `Upstream Inspections Mobile App is a comprehensive field inspection solution built with React Native and Expo. The application provides complete offline functionality, allowing field technicians to conduct inspections without internet connectivity.

Key Features:
• Offline-first architecture with sophisticated SQLite sync algorithms
• OBD2 integration for vehicle diagnostics and data collection
• Biometric authentication for secure access
• GPS tracking for location-based inspections
• Conflict resolution system for data synchronization
• Real-time data capture and validation

The app revolutionized field operations by enabling technicians to work in remote locations with limited connectivity, significantly improving productivity and data accuracy. The offline-first approach ensures continuous operation regardless of network conditions.`,
      techStack: [
        "React Native", "Expo", "TypeScript", "SQLite", "expo-sqlite", 
        "expo-camera", "expo-image-manipulator", "expo-local-authentication", "expo-secure-store", 
        "React Navigation", "CryptoJS", "axios", "Azure Functions", "Azure Blob Storage", "Azure SQL Server"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    {
      id: "sipofsilk",
      title: "SipOfSilk Coffee Shop",
      description: "Serverless Firebase Functions-based platform with automated scaling. Features coffee menu management with spice level categorization, user authentication with RBAC, and brand-consistent design system with real-time persistence.",
      summary: "Serverless Firebase Functions-based platform with automated scaling. Features coffee menu management with spice level categorization, user authentication with RBAC...",
      tags: ["React 18+", "Firebase", "Firestore", "Serverless", "RBAC", "Cultural Branding", "Material-UI"],
      images: [sipOfSilkImage],
      scaleX: 1.1,
      scaleY: 1.1,
      link: "#",
      gradient: "transparent",
      impact: "Complete coffee shop management system",
      category: "Serverless Platform",
      detailedDescription: `SipOfSilk Coffee Shop is a comprehensive serverless platform built with Firebase Functions and Firestore. The application provides complete coffee shop management with cultural branding and automated scaling capabilities.

Key Features:
• Serverless architecture with Firebase Functions for automated scaling
• Coffee menu management with spice level categorization
• Role-based access control (RBAC) for different user types
• Brand-consistent design system reflecting cultural heritage
• Real-time data persistence with Firestore
• Inventory management and order tracking

The platform represents a complete coffee shop management solution that scales automatically based on demand while maintaining cultural authenticity in design and functionality.`,
      techStack: [
        "React 18+", "Firebase Functions", "Firestore", "Firebase Auth", 
        "Material-UI", "JavaScript", "Node.js"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    {
      id: "upstream-mobility",
      title: "Upstream Mobility Platform",
      description: "Real-time analytics and tracking system with Guardian API integration. Features battery health testing, automated certification generation, role-based dashboards, and sales analytics with predictive modeling for 40% dealer efficiency improvement.",
      summary: "Real-time analytics and tracking system with Guardian API integration. Features battery health testing, automated certification generation, role-based dashboards...",
      tags: ["React", "TypeScript", "Real-time Analytics", "PDF Generation", "Predictive Modeling", "Guardian API"],
      images: [upstreamMobilityImage1, upstreamMobilityImage2, upstreamMobilityImage3],
      scaleX: 1.1,
      scaleY: 1.1,
      link: "#",
      gradient: "transparent",
      impact: "40% dealer efficiency improvement",
      category: "Enterprise Analytics",
      detailedDescription: `Upstream Mobility Platform is a comprehensive analytics and tracking system designed for automotive dealerships. The platform integrates with Guardian API to provide real-time insights into vehicle performance, battery health, and dealer operations.

Key Features:
• Real-time analytics dashboard with customizable metrics
• Battery health testing and performance monitoring
• Automated certification generation for compliance
• Role-based access control for different user types
• Sales analytics with predictive modeling capabilities
• Integration with Guardian API for vehicle data

The platform achieved a 40% improvement in dealer efficiency by providing actionable insights and automating previously manual processes. The predictive modeling capabilities help dealers make informed decisions about inventory and sales strategies.`,
      techStack: [
        "React", "TypeScript", "Node.js", "Express", "PostgreSQL", 
        "Guardian API", "PDFKit", "Chart.js", "Recharts", "Styled Components"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    {
      id: "atlas-ai",
      title: "ATLAS AI Assistant",
      description: "Cross-platform voice-controlled AI assistant available as both React Native mobile app and Electron.js desktop application. Features Google Gemini integration, comprehensive Windows service architecture, and system automation including power management, window controls, and office automation.",
      summary: "Cross-platform voice-controlled AI assistant (React Native + Electron.js) with Google Gemini integration, Windows service architecture, and comprehensive system automation...",
      tags: ["Electron.js", "React Native", "Google Gemini AI", "Voice Recognition", "System Automation", "Windows Services"],
      images: [jarvisImage],
      scaleX: 1,
      scaleY: 1,
      link: "#",
      gradient: "transparent",
      impact: "Personal productivity assistant",
      category: "AI Innovation",
      detailedDescription: `ATLAS AI Assistant is a comprehensive voice-controlled AI system built with Google Gemini integration. Available as both a React Native mobile app and an Electron.js desktop application, it provides seamless Windows system automation and office productivity features through natural language processing. The showcase demonstrates the Electron.js desktop version.

Key Features:
• Cross-platform availability (React Native mobile + Electron.js desktop)
• Voice-controlled interface with Google Gemini AI
• Windows service architecture for deep system integration
• Power management and system controls
• Office automation and productivity tools
• Real-time voice recognition and processing
• Customizable automation workflows

The assistant transforms daily computer interactions by enabling hands-free control of system functions, office applications, and productivity tasks through natural speech commands.`,
      techStack: [
        "Electron.js", "React Native", "Google Gemini AI", "Node.js", "Express", 
        "Azure Speech SDK", "Web Speech API", "C#", ".NET", "Windows API", "PowerShell"
      ],
      links: {
        demo: "#",
        github: "https://github.com/alisid-0/ATLAS-WIN",
        documentation: "#"
      }
    },
    {
      id: "windswept",
      title: "Windswept",
      description: "Immersive action-adventure game built in Unreal Engine 5 featuring a custom Kuwahara filter for hand-painted visuals, fluid combat system, and meticulously crafted world with dynamic 3D audio.",
      summary: "Immersive action-adventure game built in Unreal Engine 5 with custom Kuwahara filter for hand-painted visuals, fluid combat system, and carefully crafted world...",
      tags: ["Unreal Engine 5", "C++", "Blueprints", "Game Development", "3D Audio", "Custom Shaders"],
      images: [windsweptImage],
      scaleX: 1.1,
      scaleY: 1.1,
      link: "#",
      gradient: "transparent",
      impact: "Independent game development",
      category: "Game Development",
      detailedDescription: `Windswept is an ambitious action-adventure game developed in Unreal Engine 5, showcasing advanced technical and artistic capabilities. The project represents years of passion for game development, combining custom rendering techniques with fluid gameplay mechanics.

Key Features:
• Custom Kuwahara filter implementation creating a unique hand-painted art style
• Fluid combat system with responsive controls and dynamic animations
• Carefully designed game world with attention to environmental storytelling
• Comprehensive UI/UX design for immersive player experience
• Original music composition and implementation
• Advanced 3D spatial audio system for environmental immersion
• Performance-optimized for smooth gameplay

This project demonstrates the culmination of a game development journey that began at age 11 with GameMaker Studio, evolved through CryEngine and Unreal Engine, balancing solo development with professional work and personal life.`,
      techStack: [
        "Unreal Engine 5", "C++", "Blueprints", "HLSL", "Niagara VFX", 
        "MetaSounds", "Animation Blueprints", "UMG", "Nanite", "Lumen"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    {
      id: "car-id",
      title: "Car-ID",
      description: "Enterprise-grade vehicle delivery tracking app that opened new revenue streams. Features user-based workflows for remarketers, inspectors, and delivery drivers with comprehensive liability tracking for vehicle condition management.",
      summary: "Enterprise-grade vehicle delivery tracking app that opened new revenue streams. Features user-based workflows for remarketers, inspectors, and delivery drivers...",
      tags: ["React Native", "Enterprise", "Workflow Management", "Liability Tracking", "GPS Tracking", "Push Notifications"],
      images: [firstChoiceImage, butterChickenImage],
      scaleX: 1,
      scaleY: 1,
      link: "#",
      gradient: "transparent",
      impact: "Opened new revenue streams",
      category: "Enterprise Revenue",
      detailedDescription: `Car-ID is an enterprise-grade vehicle delivery tracking application designed to streamline automotive logistics and create new revenue opportunities. The platform serves multiple user types with specialized workflows and comprehensive liability management.

Key Features:
• Role-based workflows for remarketers, inspectors, and delivery drivers
• Comprehensive liability tracking for vehicle condition management
• Real-time delivery status updates and notifications
• Photo documentation and condition reporting
• Integration with existing automotive systems
• Revenue generation through premium features

The application successfully opened new revenue streams by providing essential tracking and documentation services to the automotive industry, improving operational efficiency and reducing liability risks.`,
      techStack: [
        "React Native", "Expo", "Node.js", "Express", "PostgreSQL", 
        "AWS S3", "AWS Lambda", "Firebase Cloud Messaging", "expo-location", "expo-camera"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    }
  ]

  return (
    <ProjectsContainer id="projects">
      {projects.filter(project => project.id !== 'car-id').map((project, index) => (
        <ProjectSection key={project.id} index={index}>
          <ProjectItem index={index}>
            {/* Image side */}
            <ImageSide index={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, margin: "-100px" }}
                style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
              >
                {project.layout === 'portrait' ? (
                  <IPhoneFrame>
                    <IPhoneScreen>
                      <ProjectImage 
                        src={project.images ? project.images[0] : butterChickenImage} 
                        alt={project.title}
                        isPortrait={project.layout === 'portrait'}
                        scaleX={project.scaleX}
                        scaleY={project.scaleY}
                      />
                    </IPhoneScreen>
                    <IPhoneNotch />
                  </IPhoneFrame>
                ) : (
                  <MonitorFrame>
                    <MonitorScreen>
                      <ProjectImage 
                        src={project.images ? project.images[0] : butterChickenImage} 
                        alt={project.title}
                        isPortrait={project.layout === 'portrait'}
                        scaleX={project.scaleX}
                        scaleY={project.scaleY}
                      />
                    </MonitorScreen>
                    <MonitorStand />
                    <MonitorBase />
                  </MonitorFrame>
                )}
              </motion.div>
            </ImageSide>

            {/* Content side */}
            <ContentSide index={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <ProjectNumber>0{index + 1}</ProjectNumber>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectImpact>{project.impact}</ProjectImpact>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TagContainer>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagContainer>

                <ProjectLink to={`/project/${project.id}`}>
                  View Project <ArrowUpRight size={20} weight="bold" />
                </ProjectLink>
              </motion.div>
            </ContentSide>
          </ProjectItem>
        </ProjectSection>
      ))}
    </ProjectsContainer>
  )
}

// Dynamic gradient is now handled by the main App component

const ProjectsContainer = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
`

const ProjectSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 4rem;
  background: transparent;
  transition: background 0.6s ease;
  
  &:first-of-type {
    padding-top: 6rem;
  }
  
  @media (max-width: 1600px) {
    padding: 4rem 3rem;
    
    &:first-of-type {
      padding-top: 6rem;
    }
  }
  
  @media (max-width: 1024px) {
    padding: 3rem 2rem;
    
    &:first-of-type {
      padding-top: 5rem;
    }
  }
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 3rem 1.2rem;
    
    &:first-of-type {
      padding-top: 4rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
    
    &:first-of-type {
      padding-top: 3.5rem;
    }
  }
`

const ProjectItem = styled.div`
  max-width: 1900px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1600px) {
    gap: 3rem;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`

const ImageSide = styled.div`
  grid-column: ${props => props.index % 2 === 0 ? '1 / 3' : '2 / 4'};
  grid-row: 1;
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0;
  
  @media (max-width: 1600px) {
    height: 600px;
  }
  
  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    grid-row: auto;
    height: 500px;
  }
  
  @media (max-width: 768px) {
    height: 380px;
  }
  
  @media (max-width: 480px) {
    height: 320px;
  }
`

const ContentSide = styled.div`
  grid-column: ${props => props.index % 2 === 0 ? '3 / 4' : '1 / 2'};
  grid-row: 1;
  padding: ${props => props.index % 2 === 0 ? '3rem 2rem 3rem 3rem' : '3rem 3rem 3rem 2rem'};
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 1600px) {
    padding: ${props => props.index % 2 === 0 ? '2rem 1.5rem 2rem 2rem' : '2rem 2rem 2rem 1.5rem'};
  }
  
  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    grid-row: auto;
    padding: 1rem 0;
  }
`

const ProjectNumber = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.5rem;
  letter-spacing: 0.2em;
  position: relative;
  z-index: 10;
  text-align: left;
`

const ProjectCategory = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;
  text-align: left;
`

const ProjectTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 10;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

const ProjectImpact = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(80, 250, 123, 0.95);
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
  z-index: 10;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2rem 0;
  max-width: 100%;
  position: relative;
  z-index: 10;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`

const TagContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 10;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: ${props => props.isPortrait ? '100%' : '100%'};
  height: ${props => props.isPortrait ? '100%' : 'auto'};
  object-fit: ${props => props.isPortrait ? 'cover' : 'contain'};
  border-radius: ${props => props.isPortrait ? '0' : '8px'};
  box-shadow: ${props => props.isPortrait ? 'none' : 'inset 0 0 20px rgba(0, 0, 0, 0.3)'};
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: scale(${props => props.scaleX || 1}, ${props => props.scaleY || 1});
  display: block;
  
  &:hover {
    transform: scale(${props => (props.scaleX || 1) * 1.02}, ${props => (props.scaleY || 1) * 1.02});
  }
`

const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translate(3px, -3px);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`

const IPhoneFrame = styled.div`
  position: relative;
  width: 320px;
  height: 650px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 45px;
  padding: 12px;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 15px 30px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
  
  &:hover {
    transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
    box-shadow: 
      0 40px 80px rgba(0, 0, 0, 0.6),
      0 20px 40px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 45px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    width: 260px;
    height: 530px;
    border-radius: 38px;
    transform: perspective(800px) rotateY(0deg) rotateX(0deg);
  }
  
  @media (max-width: 480px) {
    width: 220px;
    height: 450px;
    border-radius: 35px;
  }
`

const IPhoneScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000000;
  border-radius: 38px;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 38px;
  }
`

const IPhoneNotch = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 30px;
  background: #000000;
  border-radius: 0 0 20px 20px;
  z-index: 10;
  box-shadow: 
    0 2px 5px rgba(0, 0, 0, 0.5),
    inset 0 -2px 5px rgba(255, 255, 255, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 20px;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, rgba(100, 150, 255, 0.3) 0%, transparent 70%);
    border-radius: 50%;
  }
`

const MonitorFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: perspective(1000px) rotateY(-2deg) rotateX(1deg);
  
  &:hover {
    transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
  }

  @media (max-width: 768px) {
    max-width: 550px;
    transform: perspective(800px) rotateY(0deg) rotateX(0deg);
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    transform: none;
    
    &:hover {
      transform: scale(1.01);
    }
  }
`

const MonitorScreen = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.5),
    0 25px 50px rgba(0, 0, 0, 0.4),
    inset 0 2px 0 rgba(255, 255, 255, 0.1),
    inset 0 -2px 0 rgba(0, 0, 0, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    display: block;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 14px;
  }
`

const MonitorStand = styled.div`
  width: 120px;
  height: 85px;
  background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
  margin-top: -1px;
  clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
  box-shadow: 
    0 8px 22px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    width: 80px;
    height: 60px;
  }
`

const MonitorBase = styled.div`
  width: 280px;
  height: 16px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 8px;
  margin-top: -1px;
  box-shadow: 
    0 12px 30px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 190px;
    height: 14px;
  }
`

export default Projects 