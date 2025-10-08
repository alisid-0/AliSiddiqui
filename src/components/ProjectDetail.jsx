import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { ArrowLeft, GithubLogo, Globe, Book, Sparkle, Lightning, Check, CaretRight } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import upstreamInspectionsImage1 from '../assets/upstreaminspectionsmobileapp/IMG_7993.PNG'
import upstreamInspectionsImage2 from '../assets/upstreaminspectionsmobileapp/IMG_7994.PNG'
import upstreamMobilityImage1 from '../assets/upstreammobility/Screenshot 2025-10-07 151533.png'
import upstreamMobilityImage2 from '../assets/upstreammobility/Screenshot 2025-10-07 151606.png'
import upstreamMobilityImage3 from '../assets/upstreammobility/Screenshot 2025-10-07 152134.png'
import sipOfSilkImage from '../assets/sipofsilk/Screenshot 2025-10-07 151211.png'
import firstChoiceImage from '../assets/firstchoice.png'
import butterChickenImage from '../assets/butter.png'
import jarvisImage from '../assets/JARVIS/Screenshot 2025-10-07 203902.png'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isArchitectureExpanded, setIsArchitectureExpanded] = useState(false)

  // Project data (same as in Projects.jsx)
  const projects = {
    "upstream-inspections": {
      id: "upstream-inspections",
      title: "Upstream Inspections Mobile App",
      description: "Cross-platform React Native field solution with offline-first inspection workflow and conflict resolution. Features OBD2 integration, biometric authentication, GPS tracking, and sophisticated SQLite sync algorithms for complete offline functionality.",
      tags: ["React Native", "Expo", "OBD2", "Biometric Auth", "SQLite", "Offline-First"],
      images: [upstreamInspectionsImage1, upstreamInspectionsImage2],
      gradient: "transparent",
      accentColor: "#667EEA",
      impact: "Enabled complete offline field operations",
      category: "Mobile Enterprise",
      layout: "portrait",
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
        "React Native", "Expo", "TypeScript", "SQLite", "OBD2 Protocol", 
        "Biometric Authentication", "GPS Tracking", "Offline Sync", "Conflict Resolution"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    "sipofsilk": {
      id: "sipofsilk",
      title: "SipOfSilk Coffee Shop",
      description: "Serverless Firebase Functions-based platform with automated scaling. Features coffee menu management with spice level categorization, user authentication with RBAC, and brand-consistent design system with real-time persistence.",
      tags: ["React 18+", "Firebase Functions", "Firestore", "Serverless", "RBAC", "Cultural Branding"],
      images: [sipOfSilkImage],
      gradient: "transparent",
      accentColor: "#2ECC71",
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
        "React 18+", "Firebase Functions", "Firestore", "Serverless Architecture", 
        "RBAC", "Material-UI", "Real-time Database", "Cultural Design System"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    "upstream-mobility": {
      id: "upstream-mobility",
      title: "Upstream Mobility Platform",
      description: "Real-time analytics and tracking system with Guardian API integration. Features battery health testing, automated certification generation, role-based dashboards, and sales analytics with predictive modeling for 40% dealer efficiency improvement.",
      tags: ["React", "TypeScript", "Guardian API", "Real-time Analytics", "PDF Generation", "Predictive Modeling"],
      images: [upstreamMobilityImage1, upstreamMobilityImage2, upstreamMobilityImage3],
      gradient: "transparent",
      accentColor: "#4FACFE",
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
        "React", "TypeScript", "Node.js", "Guardian API", "PostgreSQL", 
        "Real-time Analytics", "PDF Generation", "Predictive Modeling", "Role-based Access"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    "atlas-ai": {
      id: "atlas-ai",
      title: "ATLAS AI Assistant",
      description: "Cross-platform voice-controlled AI assistant available as both React Native mobile app and Electron.js desktop application. Features Google Gemini integration, comprehensive Windows service architecture, and system automation including power management, window controls, and office automation.",
      tags: ["Electron.js", "React Native", "Google Gemini AI", "Voice Recognition", "System Automation"],
      images: [jarvisImage],
      gradient: "transparent",
      accentColor: "#F093FB",
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
        "Electron.js", "React Native", "Google Gemini AI", "Node.js", "Windows Services", 
        "Voice Recognition", "System Automation", "C#", "Windows API", "Natural Language Processing"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      },
      architecture: {
        title: "ATLAS VOICE ASSISTANT - COMPLETE ARCHITECTURE BREAKDOWN",
        layers: [
          {
            title: "LAYER 1: ELECTRON DESKTOP APPLICATION (main.js)",
            description: "Framework: Electron (Chromium + Node.js)\nCreates a native Windows desktop window (1200x800px)\nLoads the React app from src/index.html\nEnables Node.js integration in the browser context\nThis gives the web app access to Node.js modules and desktop APIs"
          },
          {
            title: "LAYER 2: REACT UI LAYER (VoiceAssistant.js)",
            description: "Single React component managing the entire UI\nState management for:\n• isListening (mic active/inactive)\n• commandHistory (conversation log)\n• textInput (typed commands)\n• spokenText/response (current interaction)\n\nTwo input methods:\n1. Voice input via microphone button\n2. Text input via keyboard\n3. Quick action buttons (predefined commands)"
          },
          {
            title: "LAYER 3A: SPEECH INPUT (Browser Web Speech API)",
            description: "When user clicks mic button or says 'turn off monitors':\n\n1. toggleListening() activates Web Speech Recognition API\n   - Uses browser's built-in speech-to-text (Chrome/Edge)\n   - Configured for: en-US, non-continuous, final results only\n\n2. Browser listens to microphone and converts speech to text\n   - Real-time audio capture from system microphone\n   - Uses Chrome's cloud-based speech recognition\n\n3. onresult event fires with transcribed text\n   - Extract transcript: 'turn off monitors'\n   - Passes to handleCommand(text)"
          },
          {
            title: "LAYER 4: COMMAND ROUTING (commandProcessor.js)",
            description: "processCommand(text) receives: 'turn off monitors'\n\nDecision tree:\n1. Check if empty → return error\n2. Convert to lowercase: 'turn off monitors'\n3. Check if starts with 'atlas' → NO, so go to AI Service\n4. SPECIAL CASE: Check for monitor control regex pattern\n   - Pattern matches: /(turn off|turn on|disable|enable)\\s+(primary|secondary|all|both)?\\s*monitors?/\n   - MATCH FOUND: 'turn off' + 'monitors'\n   - Extract: action = 'turn off', isOff = true\n   \n5. DIRECT HTTP CALL (bypassing AI):\n   - Sends: fetch('http://192.168.1.104:3000/system/monitor/off')\n   - This goes to a separate backend server on my network from an installed windows service I built\n   - Returns response: 'I've turned off the monitor for you.'\n\nALTERNATE PATH (for non-monitor commands):\n- If no special pattern matches, forwards to aiService.getResponse(text)"
          },
          {
            title: "LAYER 5: AI INTELLIGENCE LAYER (aiService.js)",
            description: "Only triggered for commands that need AI interpretation:\n\n1. INITIALIZATION:\n   - Google Gemini Pro AI (gemini-pro model)\n   - Maintains conversation history for context\n\n2. CONTEXT PROMPT:\n   - AI is given extensive system prompt defining available commands\n   - Lists all command types: sound, media, window, monitor, app, system,\n     workspace, browser, clipboard, keyboard, mouse, notification, voice,\n     theme, preset\n   - Provides JSON schema for command structure\n\n3. PROMPT CONSTRUCTION:\n   - Combines system context + conversation history + user command\n   - Example: 'You are ATLAS... [all commands]... User: launch chrome'\n\n4. AI PROCESSING:\n   - Sends to Google Gemini API\n   - AI understands intent and generates JSON response\n\n5. JSON PARSING & COMMAND EXECUTION:\n   - Extracts JSON from AI response\n   - Routes to appropriate HTTP API endpoints\n   - All commands sent to: http://192.168.1.104:3000/[endpoint]"
          },
          {
            title: "LAYER 6: BACKEND API SERVER (external - not in this codebase)",
            description: "Located at: http://192.168.1.104:3000\n\nThis is a separate Node.js server that:\n- Receives HTTP requests from the Electron app\n- Translates them into Windows system commands\n- Executes PowerShell/CMD commands to control:\n  • Display monitors (DDC/CI or Windows API)\n  • Application launching (start chrome.exe)\n  • Media controls (keyboard simulation)\n  • Window management (Win32 API)\n  • System operations (shutdown, sleep, etc.)\n\nFor monitor control specifically:\n- Receives: GET /system/monitor/off\n- Executes Windows commands to turn off display"
          },
          {
            title: "LAYER 7: SPEECH OUTPUT (speechService.js)",
            description: "After command executes, response goes back to React:\n\n1. handleCommand() receives text response\n2. Updates UI (adds to commandHistory, displays in chat)\n3. Calls speechService.speak(response)\n4. AZURE COGNITIVE SERVICES:\n   - Voice: en-GB-RyanNeural (British male voice)\n   - SSML generation for ATLAS-like voice characteristics\n5. AZURE TTS:\n   - Sends SSML to Azure Speech Service\n   - Generates high-quality audio using neural voice\n   - Audio played through system speakers\n6. FALLBACK:\n   - If Azure fails, uses browser's SpeechSynthesis API"
          }
        ],
        technologies: {
          frontend: ["Electron", "React 19", "Webpack", "Web Speech API"],
          ai: ["Google Gemini Pro", "Azure Cognitive Services Speech SDK"],
          backend: ["Node.js + Express", "Windows PowerShell", "Win32 API", "HTTP REST API"],
          communication: ["HTTP fetch()", "JSON", "SSML"]
        },
        flowExample: {
          command: "Turn off monitors",
          steps: [
            "USER SPEAKS into microphone",
            "BROWSER (Web Speech API) converts speech to text",
            "REACT UI receives text and calls handleCommand()",
            "COMMAND PROCESSOR detects monitor control pattern",
            "Makes HTTP request to backend server",
            "BACKEND SERVER executes Windows command to turn off display",
            "COMMAND PROCESSOR returns success message",
            "REACT UI updates conversation history",
            "AZURE SPEECH SERVICE generates ATLAS-style voice audio",
            "MONITOR TURNS OFF"
          ]
        }
      }
    },
    "car-id": {
      id: "car-id",
      title: "Car-ID",
      description: "Enterprise-grade vehicle delivery tracking app that opened new revenue streams. Features user-based workflows for remarketers, inspectors, and delivery drivers with comprehensive liability tracking for vehicle condition management.",
      tags: ["React Native", "Enterprise", "Workflow Management", "Liability Tracking", "Revenue Generation"],
      images: [firstChoiceImage, butterChickenImage],
      gradient: "transparent",
      accentColor: "#FF8C00",
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
        "React Native", "Node.js", "PostgreSQL", "AWS", "Image Processing", 
        "Push Notifications", "GPS Tracking", "Enterprise Integration"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    }
  }

  const project = projects[projectId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (project?.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [project])

  if (!project) {
    return (
      <ErrorContainer>
        <ErrorContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Project Not Found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist.</p>
          <BackButton onClick={() => navigate('/')}>
            <ArrowLeft size={24} weight="bold" />
            Back to Home
          </BackButton>
        </ErrorContent>
      </ErrorContainer>
    )
  }

  const features = project.detailedDescription
    .split('\n')
    .filter(line => line.trim().startsWith('•'))
    .map(line => line.replace('•', '').trim())

  return (
    <DetailContainer>
      {/* Animated Background Elements */}
      <FloatingOrb style={{ top: '10%', left: '10%' }} color={project.accentColor} delay={0} />
      <FloatingOrb style={{ top: '60%', right: '15%' }} color={project.accentColor} delay={2} />

      <TopBar>
        <BackButton 
          onClick={() => navigate('/')}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} weight="bold" />
          Back
        </BackButton>

        {(project.links.demo !== "#" || project.links.github !== "#" || project.links.documentation !== "#") && (
          <LinkContainer>
            {project.links.demo !== "#" && (
              <ActionLink 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                accentColor={project.accentColor}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                primary
              >
                <Globe size={18} weight="bold" />
                Demo
              </ActionLink>
            )}
            {project.links.github !== "#" && (
              <ActionLink 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                accentColor={project.accentColor}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubLogo size={18} weight="bold" />
                Code
              </ActionLink>
            )}
            {project.links.documentation !== "#" && (
              <ActionLink 
                href={project.links.documentation} 
                target="_blank" 
                rel="noopener noreferrer"
                accentColor={project.accentColor}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Book size={18} weight="bold" />
                Docs
              </ActionLink>
            )}
          </LinkContainer>
        )}
      </TopBar>

      {/* Content Grid - Main Layout or Architecture View */}
      {!isArchitectureExpanded ? (
        <MainGrid>
          {/* Left Column - Header + Image */}
          <LeftColumn>
            <HeroSection>
              <CategoryBadge
                accentColor={project.accentColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Sparkle size={14} weight="fill" />
                {project.category}
              </CategoryBadge>
              
              <Title
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {project.title}
              </Title>
              
              <ImpactBadge
                accentColor={project.accentColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Lightning size={18} weight="fill" />
                {project.impact}
              </ImpactBadge>
              
              <ShortDescription
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.description}
              </ShortDescription>
            </HeroSection>

            <ImageSection
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ImageGallery layout={project.layout}>
                {project.layout === 'portrait' ? (
                  <IPhoneFrame
                    accentColor={project.accentColor}
                    whileHover={{ scale: 1.02, rotateY: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IPhoneScreen>
                      <ProjectImage
                        as={motion.img}
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        isPortrait={true}
                      />
                    </IPhoneScreen>
                    <IPhoneNotch />
                  </IPhoneFrame>
                ) : (
                  <MonitorFrame
                    whileHover={{ scale: 1.02, rotateY: 0, rotateX: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MonitorScreen>
                      <ProjectImage
                        as={motion.img}
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        accentColor={project.accentColor}
                      />
                    </MonitorScreen>
                    <MonitorStand />
                    <MonitorBase />
                  </MonitorFrame>
                )}
                {project.images.length > 1 && (
                  <ImageIndicators>
                    {project.images.map((_, index) => (
                      <Indicator
                        key={index}
                        active={index === currentImageIndex}
                        onClick={() => setCurrentImageIndex(index)}
                        accentColor={project.accentColor}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </ImageIndicators>
                )}
              </ImageGallery>
            </ImageSection>
          </LeftColumn>

          {/* Right Column - Details */}
          <RightColumn
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TagContainer>
              {project.tags.map((tag, i) => (
                <Tag 
                  key={i}
                  accentColor={project.accentColor}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {tag}
                </Tag>
              ))}
            </TagContainer>

            {features.length > 0 && (
              <Section>
                <SectionTitle accentColor={project.accentColor}>
                  Key Features
                </SectionTitle>
                <FeaturesList>
                  {features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    >
                      <FeatureIcon accentColor={project.accentColor}>
                        <Check size={14} weight="bold" />
                      </FeatureIcon>
                      {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </Section>
            )}

            <Section>
              <SectionTitle accentColor={project.accentColor}>
                Tech Stack
              </SectionTitle>
              <TechStackGrid>
                {project.techStack.map((tech, index) => (
                  <TechItem
                    key={index}
                    accentColor={project.accentColor}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.03 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    {tech}
                  </TechItem>
                ))}
              </TechStackGrid>
            </Section>

            {/* Architecture Section */}
            {project.architecture && (
              <ArchitectureSection>
                <ArchitectureHeader
                  onClick={() => setIsArchitectureExpanded(!isArchitectureExpanded)}
                  accentColor={project.accentColor}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArchitectureTitle accentColor={project.accentColor}>
                    System Architecture
                  </ArchitectureTitle>
                  <ExpandIcon
                    animate={{ rotate: isArchitectureExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CaretRight size={20} weight="bold" />
                  </ExpandIcon>
                </ArchitectureHeader>
              </ArchitectureSection>
            )}
          </RightColumn>
        </MainGrid>
      ) : (
        /* Architecture View - Full Screen */
        <ArchitectureViewContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ArchitectureBackButton
            onClick={() => setIsArchitectureExpanded(false)}
            accentColor={project.accentColor}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <CaretRight size={20} weight="bold" />
            Back to Project
          </ArchitectureBackButton>

          <ArchitectureTitleMain>{project.architecture.title}</ArchitectureTitleMain>
          
          <ArchitectureLayers>
            {project.architecture.layers.map((layer, index) => (
              <LayerCard
                key={index}
                accentColor={project.accentColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LayerTitle accentColor={project.accentColor}>
                  {layer.title}
                </LayerTitle>
                <LayerDescription>
                  {layer.description.split('\n').map((line, lineIndex) => (
                    <div key={lineIndex}>
                      {line}
                      {lineIndex < layer.description.split('\n').length - 1 && <br />}
                    </div>
                  ))}
                </LayerDescription>
              </LayerCard>
            ))}
          </ArchitectureLayers>

          <TechnologiesSection>
            <TechnologiesTitle accentColor={project.accentColor}>
              Key Technologies
            </TechnologiesTitle>
            <TechnologiesGrid>
              {Object.entries(project.architecture.technologies).map(([category, techs]) => (
                <TechCategory key={category}>
                  <TechCategoryTitle accentColor={project.accentColor}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </TechCategoryTitle>
                  <TechCategoryList>
                    {techs.map((tech, index) => (
                      <TechCategoryItem
                        key={index}
                        accentColor={project.accentColor}
                      >
                        {tech}
                      </TechCategoryItem>
                    ))}
                  </TechCategoryList>
                </TechCategory>
              ))}
            </TechnologiesGrid>
          </TechnologiesSection>

          {project.architecture.flowExample && (
            <FlowExampleSection>
              <FlowExampleTitle accentColor={project.accentColor}>
                Example Flow: &quot;{project.architecture.flowExample.command}&quot;
              </FlowExampleTitle>
              <FlowSteps>
                {project.architecture.flowExample.steps.map((step, index) => (
                  <FlowStep
                    key={index}
                    accentColor={project.accentColor}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <FlowStepNumber accentColor={project.accentColor}>
                      {index + 1}
                    </FlowStepNumber>
                    <FlowStepText>{step}</FlowStepText>
                    {index < project.architecture.flowExample.steps.length - 1 && (
                      <FlowArrow accentColor={project.accentColor}>↓</FlowArrow>
                    )}
                  </FlowStep>
                ))}
              </FlowSteps>
            </FlowExampleSection>
          )}
        </ArchitectureViewContainer>
      )}
    </DetailContainer>
  )
}

// Styled Components
const DetailContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, 
    #0a192f 0%, 
    #112240 20%, 
    #1a1a2e 40%, 
    #16213e 60%, 
    #0f3460 80%, 
    #000000 100%);
  color: #ffffff;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(100, 255, 218, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(189, 147, 249, 0.06) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`

const FloatingOrb = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.color}40 0%, transparent 70%);
  filter: blur(60px);
  animation: float ${props => 6 + props.delay}s ease-in-out infinite;
  z-index: 0;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-30px); }
  }
`

const ErrorContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0a192f 0%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 2rem;
`

const ErrorContent = styled(motion.div)`
  text-align: center;
  max-width: 500px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
  }
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const BackButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const LeftColumn = styled.div``

const RightColumn = styled(motion.div)``

const HeroSection = styled.header`
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const CategoryBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  background: ${props => `${props.accentColor}15`};
  border: 2px solid ${props => `${props.accentColor}40`};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.25rem;
  color: ${props => props.accentColor};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px ${props => `${props.accentColor}20`};
`

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 1.25rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1024px) {
    font-size: 2.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`

const ImpactBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin-bottom: 1.25rem;
  padding: 0.7rem 1.5rem;
  background: ${props => `${props.accentColor}10`};
  border-radius: 50px;
  border: 2px solid ${props => `${props.accentColor}30`};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px ${props => `${props.accentColor}25`};

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
  }
`

const ShortDescription = styled(motion.p)`
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const TagContainer = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
`

const Tag = styled(motion.span)`
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.95);
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${props => `${props.accentColor}30`};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px ${props => `${props.accentColor}15`};

  &:hover {
    background: ${props => `${props.accentColor}15`};
    border-color: ${props => `${props.accentColor}60`};
    box-shadow: 0 4px 16px ${props => `${props.accentColor}30`};
  }
`

const LinkContainer = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const ActionLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.primary ? props.accentColor : 'rgba(255, 255, 255, 0.08)'};
  border: 2px solid ${props => props.primary ? props.accentColor : 'rgba(255, 255, 255, 0.15)'};
  border-radius: 50px;
  color: ${props => props.primary ? '#000000' : '#ffffff'};
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.primary 
    ? `0 4px 16px ${props.accentColor}50` 
    : '0 4px 16px rgba(0, 0, 0, 0.2)'};
  
  &:hover {
    background: ${props => props.primary ? props.accentColor : 'rgba(255, 255, 255, 0.15)'};
    box-shadow: ${props => props.primary 
      ? `0 8px 24px ${props.accentColor}60` 
      : '0 8px 24px rgba(0, 0, 0, 0.3)'};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`

const ImageSection = styled(motion.div)`
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`

const ImageGallery = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.layout === 'portrait' ? '650px' : '500px'};
`

const MonitorFrame = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: perspective(1000px) rotateY(-2deg) rotateX(1deg);
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 500px;
    transform: perspective(800px) rotateY(-1deg) rotateX(0.5deg);
  }
`

const MonitorScreen = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 16px;
  padding: 22px;
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
    padding: 14px;
    border-radius: 14px;
  }
`

const MonitorStand = styled.div`
  width: 110px;
  height: 78px;
  background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
  margin-top: -1px;
  clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
  box-shadow: 
    0 8px 22px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    width: 70px;
    height: 55px;
  }
`

const MonitorBase = styled.div`
  width: 260px;
  height: 14px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 7px;
  margin-top: -1px;
  box-shadow: 
    0 12px 30px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 170px;
    height: 12px;
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
  display: block;
`

const IPhoneFrame = styled(motion.div)`
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
    width: 280px;
    height: 570px;
    border-radius: 40px;
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

const ImageIndicators = styled.div`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.6rem;
`

const Indicator = styled(motion.button)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? props.accentColor : 'rgba(255, 255, 255, 0.3)'};
  border: ${props => props.active ? `2px solid ${props.accentColor}` : '2px solid transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? `0 0 15px ${props.accentColor}60` : 'none'};

  &:hover {
    background: ${props => props.active ? props.accentColor : 'rgba(255, 255, 255, 0.6)'};
  }
`

const Section = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1.25rem 0;
  color: #ffffff;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 50%;
    height: 3px;
    background: ${props => props.accentColor};
    border-radius: 2px;
    box-shadow: 0 0 15px ${props => `${props.accentColor}60`};
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateX(3px);
  }
`

const FeatureIcon = styled.div`
  min-width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${props => `${props.accentColor}20`};
  border: 2px solid ${props => `${props.accentColor}40`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.accentColor};
  box-shadow: 0 0 15px ${props => `${props.accentColor}30`};
  margin-top: 1px;
`

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`

const TechItem = styled(motion.div)`
  padding: 0.9rem 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${props => `${props.accentColor}20`};
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px ${props => `${props.accentColor}10`};

  &:hover {
    background: ${props => `${props.accentColor}15`};
    border-color: ${props => `${props.accentColor}50`};
    box-shadow: 0 4px 16px ${props => `${props.accentColor}30`};
    color: ${props => props.accentColor};
  }
`

// Architecture Section Styled Components
const ArchitectureSection = styled.div`
  margin-top: 2rem;
`

const ArchitectureHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
    border-color: ${props => props.accentColor}40;
  }
`

const ArchitectureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ExpandIcon = styled(motion.div)`
  color: ${props => props.accentColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

const ArchitectureViewContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const ArchitectureBackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: ${props => props.accentColor};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
    border-color: ${props => props.accentColor}50;
    box-shadow: 0 4px 16px ${props => `${props.accentColor}30`};
  }
`

const ArchitectureTitleMain = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 2rem 0;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const ArchitectureLayers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const LayerCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.accentColor}40;
    box-shadow: 0 8px 32px ${props => `${props.accentColor}20`};
  }
`

const LayerTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0 0 1rem 0;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
`

const LayerDescription = styled.div`
  color: #e0e0e0;
  line-height: 1.6;
  font-size: 0.9rem;
  white-space: pre-line;
`

const TechnologiesSection = styled.div`
  margin: 2rem 0;
`

const TechnologiesTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0 0 1.5rem 0;
  text-align: center;
`

const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`

const TechCategory = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.2rem;
  backdrop-filter: blur(10px);
`

const TechCategoryTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0 0 0.8rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const TechCategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const TechCategoryItem = styled.li`
  color: #e0e0e0;
  font-size: 0.85rem;
  padding: 0.3rem 0;
  border-left: 2px solid ${props => props.accentColor}40;
  padding-left: 0.8rem;
  margin-bottom: 0.3rem;

  &:hover {
    color: ${props => props.accentColor};
    border-left-color: ${props => props.accentColor};
  }
`

const FlowExampleSection = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
`

const FlowExampleTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0 0 1.5rem 0;
  text-align: center;
`

const FlowSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FlowStep = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.accentColor}40;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  }
`

const FlowStepNumber = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.accentColor} 0%, ${props => props.accentColor}CC 100%);
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
`

const FlowStepText = styled.div`
  color: #e0e0e0;
  font-size: 0.9rem;
  flex: 1;
`

const FlowArrow = styled.div`
  color: ${props => props.accentColor};
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: auto;
`

export default ProjectDetail
