"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import image from '@/../public/gal2.svg'

export default function Collaboration() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Fostering Collaboration and Unity
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              COHI brings together Muslim students from various higher institutions in Lagos State, creating a vibrant
              community of learners, leaders, and change-makers.
            </p>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Inter-campus events and programs
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Joint community service initiatives
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Shared resources and knowledge exchange
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96"
          >
            <Image
              src={image.src}
              alt="Collaboration Illustration"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

