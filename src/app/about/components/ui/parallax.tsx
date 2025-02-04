"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import type React from "react" 

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  offset?: number
}

export function ParallaxSection({ children, className = "", offset = 50 }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

