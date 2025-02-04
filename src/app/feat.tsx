"use client"

import { motion } from "framer-motion"
import { Book, Star, Building2 } from "lucide-react"

const features = [
  {
    title: "Islamic Education Programs",
    description:
      "Access comprehensive Islamic studies curriculum designed for university students. Join weekly lectures, workshops, and study circles.",
    icon: Book,
    link: "/programs/education",
  },
  {
    title: "Student Leadership",
    description:
      "Develop essential leadership skills through hands-on experience in organizing events and managing campus activities.",
    icon: Star,
    link: "/programs/leadership",
  },
  {
    title: "Campus Network",
    description:
      "Connect with Muslim students across different institutions. Build lasting relationships and expand your professional network.",
    icon: Building2,
    link: "/network",
  },
]

export default function HomeFeatures() {
  return (
    <section className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a href={feature.link} className="block p-8 bg-green-700 rounded-xl hover:bg-green-600 transition-colors">
                <feature.icon className="w-8 h-8 text-green-300 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
                <div className="mt-4 text-green-300 group-hover:translate-x-2 transition-transform">Learn more →</div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

