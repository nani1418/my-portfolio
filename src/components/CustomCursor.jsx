import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onMove = (event) => setPosition({ x: event.clientX, y: event.clientY })
    const onDown = () => setActive(true)
    const onUp = () => setActive(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] hidden h-4 w-4 rounded-full bg-cyan-300/90 mix-blend-screen md:block"
        animate={{ x: position.x - 8, y: position.y - 8, scale: active ? 0.7 : 1 }}
        transition={{ type: 'spring', stiffness: 550, damping: 28, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[99] hidden h-10 w-10 rounded-full border border-fuchsia-300/60 md:block"
        animate={{ x: position.x - 20, y: position.y - 20, scale: active ? 1.25 : 1 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24, mass: 0.6 }}
      />
    </>
  )
}

export default CustomCursor
