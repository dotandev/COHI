"use client"

import { motion } from "framer-motion"

import Image from "next/image"
import { IslamicPattern } from "../ui/pattern"
import { ParallaxSection } from "../ui/parallax"
import { ProgramContainer, ProgramContainerProps } from "@/app/programs/components/container"

const features = [
  {
    title: "Islamic Education",
    arabicTitle: "التعليم الإسلامي",
    description: "Comprehensive Islamic studies program with qualified scholars",
    image: "/placeholder.svg?height=300&width=300&text=Education",
  },
  {
    title: "Community Events",
    arabicTitle: "فعاليات المجتمع",
    description: "Regular gatherings, workshops, and social activities",
    image: "/placeholder.svg?height=300&width=300&text=Events",
  },
  {
    title: "Youth Development",
    arabicTitle: "تنمية الشباب",
    description: "Mentorship programs and leadership training",
    image: "/placeholder.svg?height=300&width=300&text=Development",
  },
]

const programs: ProgramContainerProps['program'][] = [
    { name: 'COHI BUS', description: 'THE COHI BUS Program', link: '#', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
    { name: 'CBC', description: 'Capacity Building Course', link: '#', isCurrent: true, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
    { name: 'SCF', description: 'Student Career Fest', link: '#', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
    
];

export function FeaturesSection() {
  return (
    <section className="relative min-h-screen py-20 bg-white">
      <IslamicPattern />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6">Our Programs</h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Discover the various ways we nurture faith, knowledge, and community through our comprehensive programs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {programs.map((program, index) => (
            <ParallaxSection key={program.name} offset={50 * (index + 1)}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <ProgramContainer program={program}     />        
                 </motion.div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  )
}

