import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, Envelope, FilePdf, PaperPlaneTilt } from '@phosphor-icons/react'
import resumePdf from '../assets/resume/Ali Siddiqui Resume (2).pdf'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3fbd8f69-b4b0-4ee5-8565-140594bd2bea',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

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
          <ContactGrid>
            <ContactInfo>
              <h3>Let&apos;s Connect</h3>
              <p>I&apos;m always open to new opportunities and interesting projects. Feel free to reach out!</p>
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
              </SocialLinks>
              
              <ResumeSection>
                <ResumeLink href={resumePdf} download="Ali_Siddiqui_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FilePdf size={24} weight="bold" />
                  Download Resume
                </ResumeLink>
              </ResumeSection>
            </ContactInfo>

            <FormContainer>
              <FormTitle>Send Me a Message</FormTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or idea..."
                    rows="5"
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  <PaperPlaneTilt size={20} weight="bold" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>

                {status === 'success' && (
                  <StatusMessage success>
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </StatusMessage>
                )}
                {status === 'error' && (
                  <StatusMessage>
                    ✗ Something went wrong. Please try again or email me directly.
                  </StatusMessage>
                )}
              </Form>
            </FormContainer>
          </ContactGrid>
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
    padding: 2rem 1.2rem 7rem;
    min-height: 70vh;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem 7rem;
    min-height: 60vh;
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
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
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
  min-height: 44px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #64ffda;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(100, 255, 218, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 1.5rem;
    width: 240px;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 1rem 1.2rem;
    width: 100%;
    max-width: 280px;
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
  min-height: 44px;
  
  &:hover {
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(100, 255, 218, 0.1) 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
    border-color: #ffffff;
    color: #ffffff;
  }
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    padding: 1.1rem 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
`

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const FormTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #64ffda;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #cccccc;
`

const Input = styled.input`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  &:focus {
    outline: none;
    border-color: #64ffda;
    background: rgba(100, 255, 218, 0.05);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem;
    font-size: 0.95rem;
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  &:focus {
    outline: none;
    border-color: #64ffda;
    background: rgba(100, 255, 218, 0.05);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem;
    font-size: 0.95rem;
  }
`

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.15) 0%, rgba(100, 255, 218, 0.1) 100%);
  border: 2px solid #64ffda;
  border-radius: 12px;
  color: #64ffda;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.25) 0%, rgba(100, 255, 218, 0.15) 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
    border-color: #ffffff;
    color: #ffffff;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`

const StatusMessage = styled.div`
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  background: ${props => props.success 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(255, 100, 100, 0.1)'};
  border: 1px solid ${props => props.success 
    ? 'rgba(100, 255, 218, 0.3)' 
    : 'rgba(255, 100, 100, 0.3)'};
  color: ${props => props.success ? '#64ffda' : '#ff6464'};
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`

export default Contact 