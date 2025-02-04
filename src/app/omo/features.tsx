"use client"

import { motion } from "framer-motion"
import { BookOpenIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/outline"

const features = [
  {
    name: "Islamic Education",
    description: "Enhance your understanding of Islam through our comprehensive educational programs.",
    icon: BookOpenIcon,
  },
  {
    name: "Networking",
    description: "Connect with fellow Muslim students and professionals across various institutions.",
    icon: UserGroupIcon,
  },
  {
    name: "Academic Support",
    description: "Access resources and mentorship to excel in your academic pursuits.",
    icon: AcademicCapIcon,
  },
  {
    name: "Spiritual Growth",
    description: "Nurture your faith through regular prayers, lectures, and spiritual retreats.",
    icon: BookOpenIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Empowering Muslim Students</h2>
          <p className="mt-4 text-xl text-gray-600">
            COHI MSSN Lagos provides a platform for growth, learning, and community service.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

