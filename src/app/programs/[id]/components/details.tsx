"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"
import Image from 'next/image'
import image from '@/../public/gal2.svg'

export default function EventDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes SCF Special</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join us for an extraordinary gathering of Muslim students, featuring inspiring speakers, interactive
              workshops, and networking opportunities that will enhance your spiritual and academic journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">February 25, 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">University of Lagos Main Auditorium</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Expected attendance: 1000+</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={image.src}
              alt="Event preview"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

