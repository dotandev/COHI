import { motion } from "framer-motion"

export const IslamicPattern = ({ className = "" }) => (
  <motion.div
    className={`absolute inset-0 opacity-10 ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.1, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="islamic-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 0L40 20L20 40L0 20Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
    </svg>
  </motion.div>
)

export const CalligraphyArt = ({ text, className = "" }: any) => (
  <motion.div
    className={`text-4xl md:text-6xl font-arabic text-emerald-800 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {text}
  </motion.div>
)

export const MosqueIllustration = ({ className = "" }) => (
  <motion.div
    className={`w-full h-64 md:h-96 ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L90 40H10L50 10Z" fill="currentColor" />
      <rect x="20" y="40" width="60" height="50" fill="currentColor" />
      <circle cx="50" cy="20" r="5" fill="currentColor" />
      <rect x="45" y="70" width="10" height="20" fill="white" />
    </svg>
  </motion.div>
)

