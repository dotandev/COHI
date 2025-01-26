"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import image from "@/../public/gal3.svg"

export default function CoordinatorStory() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={image.src}
            alt="Our Coordinator"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <motion.h2
            className="text-4xl font-bold text-emerald-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            An Inspiring Story of Our Coordinator
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Leading with passion and dedication, our coordinator has been instrumental in shaping the literary landscape
            of our community. Through innovative programs and unwavering commitment, they continue to inspire the next
            generation of writers and readers.
          </motion.p>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-2xl font-bold">10+</span>
              </div>
              <div>
                <h3 className="font-semibold">Years of Experience</h3>
                <p className="text-gray-400">Dedicated to literary excellence</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-2xl font-bold">50+</span>
              </div>
              <div>
                <h3 className="font-semibold">Published Works</h3>
                <p className="text-gray-400">Inspiring stories shared</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

