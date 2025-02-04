"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

interface NavigationBarProps {
  sections: {
    id: string
    title: string
    arabicTitle: string
  }[]
}

export function NavigationBar({ sections }: NavigationBarProps) {
  const [activeSection, setActiveSection] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.1], [-100, 0])

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => document.getElementById(section.id))

      const currentPosition = window.scrollY + window.innerHeight / 2

      sectionElements.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <motion.div style={{ opacity, y }} className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg p-2 border border-emerald-100">
        <nav className="flex items-center space-x-1">
          {sections.map((section, index) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className={`relative px-4 py-2 rounded-full text-sm transition-colors duration-200
                ${activeSection === index ? "text-emerald-900" : "text-emerald-600 hover:text-emerald-700"}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {activeSection === index && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-emerald-100 rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{section.title}</span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}

