"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { IslamicPattern } from "../ui/pattern"

const stats = [
  { number: "1000+", label: "Active Members", arabic: "عضو نشط" },
  { number: "50+", label: "Annual Events", arabic: "حدث سنوي" },
  { number: "10+", label: "Years of Impact", arabic: "سنوات من التأثير" },
  { number: "5000+", label: "Lives Touched", arabic: "حياة متأثرة" },
]

export function StatsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <section ref={ref} className="relative min-h-[50vh] py-20 bg-emerald-900 text-white overflow-hidden">
      <IslamicPattern color="white" opacity={0.05} />

      <motion.div style={{ scale, opacity }} className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h3 className="text-5xl md:text-6xl font-bold">{stat.number}</h3>
              <div className="space-y-2">
                <p className="text-xl text-emerald-100">{stat.label}</p>
                <p className="text-lg font-arabic text-emerald-200">{stat.arabic}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

