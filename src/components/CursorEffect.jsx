import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if it's a mobile device - be more conservative
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      console.log('Cursor Effect - Is Mobile:', mobile, 'Width:', window.innerWidth)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
      setIsPointer(
        hoveredElement?.tagName === 'A' ||
        hoveredElement?.tagName === 'BUTTON' ||
        window.getComputedStyle(hoveredElement || document.body).cursor === 'pointer'
      )
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  useEffect(() => {
    if (isMobile) return

    const handleMouseDown = () => setClicking(true)
    const handleMouseUp = () => setClicking(false)

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isMobile])

  // Don't render cursor effect on mobile devices
  if (isMobile) {
    console.log('Cursor Effect - Not rendering (mobile)')
    return null
  }

  console.log('Cursor Effect - Rendering at:', mousePosition)

  return (
    <CursorDot
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      animate={{
        scale: clicking ? 0.8 : isPointer ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28
      }}
    />
  )
}

const CursorDot = styled(motion.div)`
  position: fixed;
  width: 20px;
  height: 20px;
  background: #64ffda;
  border: 2px solid #ffffff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  opacity: 1;
  visibility: visible;
  display: block;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.8), 0 0 40px rgba(100, 255, 218, 0.4);
`

export default CursorEffect
