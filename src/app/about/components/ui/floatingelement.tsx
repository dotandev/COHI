"use client"

import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import type React from "react" 

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  amplitude?: number
  duration?: number
}

export function FloatingElement({ children, className = "", amplitude = 20, duration = 4 }: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = element.getBoundingClientRect()
      const x = (clientX - left - width / 2) / 25
      const y = (clientY - top - height / 2) / 25

      element.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{
        y: [0, amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

