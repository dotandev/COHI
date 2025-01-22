'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import image from '@/../public/gal2.svg'

const galleries = {
  scf: { name: 'SCF', description: "Student Career Festival", color: 'from-red-600 to-yellow-600' },
  cif: { name: 'CIF', description: "Campus Interactive Forum", color: 'from-green-600 to-blue-600' },
  hicoms: { name: 'HICOMS', description: "Higher Institutions Council Of Muslim Students", color: 'from-purple-600 to-pink-600' },
  ramadan: { name: 'RAMADAN', description: 'Ramadan Gallery', color: 'from-yellow-600 to-green-600' },
  ivc: { name: 'IVC', description: "Islamic Vacation Course", color: 'from-blue-600 to-indigo-600' },
  'cohi-cup': { name: 'COHI CUP', description: 'COHI Cup Tournament', color: 'from-orange-600 to-red-600' },
}

const tags = ['2023', '2022', '2021', 'Event', 'Corporate', 'Social']

interface GalleryDetailProps {
  galleryId: string
}

export default function GalleryDetail({ galleryId }: GalleryDetailProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -100])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const gallery = galleries[galleryId as keyof typeof galleries]

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  if (!gallery) return <div>Gallery not found</div>

  return (
    <div className="relative min-h-screen">
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${gallery.color}`}
        style={{ opacity }}
      />
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-6xl md:text-8xl font-extrabold text-center mb-8"
          style={{ y: y1 }}
        >
          {gallery.name}
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl text-center mb-12"
          style={{ y: y2 }}
        >
          {gallery.description}
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {tags.map(tag => (
            <motion.button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedTags.includes(tag) 
                  ? 'bg-white text-black' 
                  : 'bg-black bg-opacity-30 text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(9)].map((_, index) => (
            <motion.div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={image.src} 
                alt={`Gallery item ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-bold">View Details</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

