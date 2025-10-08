import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, Envelope, FilePdf } from '@phosphor-icons/react'
import resumePdf from '../assets/resume/Ali Siddiqui Resume (1).pdf'

const Contact = () => {
  return (
    <ContactSection id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactContent>
          <ContactInfo>
            <h3>Let&apos;s Connect</h3>
            <p>I&apos;m always open to new opportunities and interesting projects.</p>
            <SocialLinks>
              <SocialLink href="https://github.com/alisid-0" target="_blank" rel="noopener noreferrer">
                <GithubLogo size={20} weight="bold" />
                GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/ali-a-siddiqui/" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo size={20} weight="bold" />
                LinkedIn
              </SocialLink>
              <SocialLink href="mailto:alisiddiquia22@yahoo.com">
                <Envelope size={20} weight="bold" />
                Email
              </SocialLink>
              <EmailByline>alisiddiquia22@yahoo.com</EmailByline>
            </SocialLinks>
            
            <ResumeSection>
              <ResumeLink href={resumePdf} download="Ali_Siddiqui_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FilePdf size={24} weight="bold" />
                Download Resume
              </ResumeLink>
            </ResumeSection>
          </ContactInfo>
        </ContactContent>
      </motion.div>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  min-height: 80vh;
  background: transparent;
  position: relative;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  @media (max-width: 1024px) {
    padding: 3rem 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: 70vh;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
  position: relative;
`

const ContactInfo = styled.div`
  margin-bottom: 3rem;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    color: #cccccc;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`

const EmailByline = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #888;
  margin-top: 0.5rem;
  text-align: center;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid #333;
  border-radius: 8px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #64ffda;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(100, 255, 218, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 1.5rem;
    width: 220px;
    justify-content: center;
  }
`

const ResumeSection = styled.div`
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: #64ffda;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border: 2px solid #64ffda;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0.05) 100%);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(100, 255, 218, 0.1) 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
    border-color: #ffffff;
    color: #ffffff;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.2rem 2rem;
  }
`

export default Contact 