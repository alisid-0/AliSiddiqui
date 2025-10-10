import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0)
      setIsMobile(mobile)
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
    return null
  }

  return (
    <CursorDot
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: clicking ? 0.8 : isPointer ? 1.2 : 1,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.15
      }}
    />
  )
}

const CursorDot = styled(motion.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background: #64ffda;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`

export default CursorEffect
