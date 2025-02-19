import { Parallax } from 'react-scroll-parallax'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Code, Rocket, Brain } from '@phosphor-icons/react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const iconAnimation = {
  hidden: { scale: 0, rotate: -180 },
  visible: { scale: 1, rotate: 0 }
}

const lineAnimation = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: "150px", opacity: 1 }
}

const Hero = () => {
  return (
    <HeroSection id="home">
      <GradientOverlay />
      <GridTexture />
      <Parallax translateY={[-20, 20]}>
        <HeroContent>
          <IconsContainer>
            {[
              { Icon: Code, color: "#64ffda", delay: 0 },
              { Icon: Rocket, color: "#bd93f9", delay: 0.2 },
              { Icon: Brain, color: "#ff79c6", delay: 0.4 }
            ].map(({ Icon, color, delay }, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={iconAnimation}
                transition={{ 
                  duration: 0.6, 
                  delay,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  transition: { duration: 0.5 } 
                }}
              >
                <Icon size={32} color={color} weight="thin" />
              </motion.div>
            ))}
          </IconsContainer>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HeroTitle>Ali Siddiqui</HeroTitle>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <HeroSubtitle>Full Stack Developer</HeroSubtitle>
          </motion.div>

          <LineContainer>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={lineAnimation}
              transition={{ 
                duration: 1.2, 
                delay: 1,
                ease: "easeInOut"
              }}
            >
              <GlowingLine />
            </motion.div>
          </LineContainer>
        </HeroContent>
      </Parallax>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  overflow: hidden;
`

const GridTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(#20407e20 1px, transparent 1px),
    linear-gradient(90deg, #20407e20 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.15;
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, transparent 0%, #0a192f 70%);
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`

const IconsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
`

const HeroTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  font-weight: 200;
  letter-spacing: 0.2em;
  background: linear-gradient(120deg, #64ffda, #bd93f9, #ff79c6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(100, 255, 218, 0.2);
`

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #8892b0;
  font-weight: 100;
  letter-spacing: 0.3em;
  margin-bottom: 2rem;
`

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const GlowingLine = styled.div`
  height: 1px;
  width: 150px;
  background: linear-gradient(90deg, #64ffda, #bd93f9, #ff79c6);
  border-radius: 1px;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
`

export default Hero 