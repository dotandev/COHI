"use client"

import { motion } from "framer-motion"
import heroimage from '@/../public/gal1.svg'

import Image from "next/image"
import { AnimatedText } from "../ui/animatedtext"
import { FloatingElement } from "../ui/floatingelement"
import { IslamicPattern } from "../ui/pattern"

export function HeroSection() {
  const words = ["Knowledge", "Community", "Faith", "Excellence", "العلم", "المجتمع", "الإيمان", "التميز"]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100">
      <IslamicPattern />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-emerald-900"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Built for
              <AnimatedText words={words} className="text-emerald-600" />
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-emerald-700 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Empowering Muslim students and young professionals through faith, knowledge, and community.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a
                href="#join"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Join Our Community
              </a>
              <a
                href="#learn"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>

          <FloatingElement className="relative w-full h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl backdrop-blur-sm border border-emerald-500/20 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={heroimage.src}
                  alt="Islamic Calligraphy"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
              <IslamicPattern opacity={0.05} />
            </div>
          </FloatingElement>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-100 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  )
}

