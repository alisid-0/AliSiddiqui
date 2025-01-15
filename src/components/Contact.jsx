import styled from '@emotion/styled'
import { motion } from 'framer-motion'

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
            <h3>Let's Connect</h3>
            <p>I'm always open to new opportunities and interesting projects.</p>
            <SocialLinks>
              <SocialLink href="https://github.com/yourusername" target="_blank">
                GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/yourusername" target="_blank">
                LinkedIn
              </SocialLink>
              <SocialLink href="mailto:your.email@example.com">
                Email
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </ContactContent>
      </motion.div>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  min-height: 80vh;
  background: linear-gradient(180deg, #000000 0%, #000000 85%, #2a0043 100%);
  position: relative;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 100%, rgba(42, 0, 67, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const ContactInfo = styled.div`
  margin-bottom: 3rem;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #cccccc;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`

const SocialLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a1a1a;
    border-color: #666;
  }
`

export default Contact 