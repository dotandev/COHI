'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const y3 = useTransform(scrollY, [0, 500], [0, -50])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 z-0">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: y2, backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")', backgroundSize: 'cover' }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ y: y3 }}
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/20 to-transparent" />
      </motion.div>
    </div>
  )
}

