"use client"

import { motion } from "framer-motion"
import { ProgramContainer, ProgramContainerProps } from "../programs/components/container";
import { ParallaxSection } from "../about/components/ui/parallax";

const events = [
  {
    name: "Annual Islamic Conference",
    date: "August 15-17, 2023",
    description: "Join us for three days of inspiring lectures, workshops, and networking opportunities.",
  },
  {
    name: "Ramadan Lecture Series",
    date: "March-April 2024",
    description: "Daily lectures and Tafsir sessions throughout the blessed month of Ramadan.",
  },
  {
    name: "Career Fair",
    date: "November 5, 2023",
    description: "Connect with potential employers and explore career opportunities aligned with Islamic values.",
  },
]


const programs: ProgramContainerProps['program'][] = [
  { name: 'COHI BUS', description: 'THE COHI BUS Program', link: '#', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
  { name: 'CBC', description: 'Capacity Building Course', link: '#', isCurrent: true, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
  { name: 'SCF', description: 'Student Career Fest', link: '#', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
  
];

export default function Events() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">Upcoming Events</h2>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/programs"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition duration-300"
          >
            View All Events
          </a>
        </motion.div>
      </div>
    </div>
  )
}

