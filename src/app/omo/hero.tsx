"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import image from '@/../public/gal3.svg'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Council of Higher Institutions</h1>
            <p className="text-xl mb-8">
              Uniting Muslim students across Lagos State's higher institutions for spiritual growth, academic
              excellence, and community service.
            </p>
            <div className="space-x-4">
              <motion.a
                href="#join"
                className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold text-lg inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join COHI
              </motion.a>
              <motion.a
                href="#learn-more"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-lg inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96"
          >
            <Image src={image.src} alt="COHI Illustration" layout="fill" objectFit="contain" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

