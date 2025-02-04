"use client"

import { motion, useAnimationControls, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedTextProps {
  words: string[]
  className?: string
  interval?: number
}

export function AnimatedText({ words, className = "", interval = 3000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimationControls()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <div className={`relative h-20 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

