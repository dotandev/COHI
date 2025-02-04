"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import Image from "next/image"
import image1 from '@/../public/gal1.svg'
import image2 from '@/../public/gal2.svg'
import image3 from '@/../public/gal3.svg'
import { FloatingElement } from "../ui/floatingelement"
import { IslamicPattern } from "../ui/pattern"

const activities = [
  {
    title: "Quranic Studies",
    arabicTitle: "دراسات قرآنية",
    description: "Weekly Quran memorization and tafseer sessions",
    image: image1,
  },
  {
    title: "Youth Mentorship",
    arabicTitle: "توجيه الشباب",
    description: "Guidance and support for young Muslims",
    image: image2,
  },
  {
    title: "Community Service",
    arabicTitle: "خدمة المجتمع",
    description: "Regular charitable activities and outreach programs",
    image: image3,
  },
]

export function ActivitiesSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden"
    >
      <IslamicPattern />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6">Our Activities</h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Engage with our diverse range of activities designed to strengthen your faith and build lasting connections.
          </p>
        </motion.div>

        <div className="space-y-32">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              style={{ y: y }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-4xl font-bold text-emerald-900">{activity.title}</h3>
                <p className="text-2xl font-arabic text-emerald-600">{activity.arabicTitle}</p>
                <p className="text-xl text-emerald-700">{activity.description}</p>
                <motion.a
                  href={`#${activity.title.toLowerCase().replace(" ", "-")}`}
                  className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </motion.div>

              <FloatingElement className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl backdrop-blur-sm border border-emerald-500/20 shadow-2xl overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    layout="fill"
                    className="object-cover"
                  />
                  <IslamicPattern opacity={0.05} />
                </div>
              </FloatingElement>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

