"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import image from '@/../public/gal2.svg'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={image.src}
        alt="Event background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">SCF UNILAG 2025</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">February 25, 2025</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
            Apply to Attend
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

