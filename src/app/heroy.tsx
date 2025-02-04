"use client"

import { motion } from "framer-motion"

export default function AnotherHero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-green-800">
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl sm:text-7xl font-bold text-green-800 mb-6 leading-tight">
          COHI- MSSN, Lagos.
          <br />
          Uniting Muslim Students.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <div className="flex items-center border-2 border-green-800 text-green-800 rounded-full pl-6 pr-2 py-2">
            <span>Secure your early bird ticket to the Student Career Fair!</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            >
              Get Ticket
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

