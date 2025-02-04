"use client"

import { motion } from "framer-motion"

interface IslamicPatternProps {
  className?: string
  color?: string
  size?: number
  opacity?: number
}

export function IslamicPattern({
  className = "",
  color = "currentColor",
  size = 40,
  opacity = 0.1,
}: IslamicPatternProps) {
  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1.5 }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-pattern" x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
            <path
              d={`M${size / 2} 0L${size} ${size / 2}L${size / 2} ${size}L0 ${size / 2}Z`}
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <circle cx={size / 2} cy={size / 2} r={size / 4} fill="none" stroke={color} strokeWidth="1" />
            <path
              d={`M${size / 4} ${size / 4}L${(size * 3) / 4} ${(size * 3) / 4}M${(size * 3) / 4} ${size / 4}L${size / 4} ${(size * 3) / 4}`}
              stroke={color}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
    </motion.div>
  )
}

