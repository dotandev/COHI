"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface GalleryCardProps {
  gallery: {
    id: string
    name: string
    description: string
  }
  index: number
  isHovered: boolean
  setHoveredGallery: (id: string | null) => void
}

export default function GalleryCard({ gallery, index, isHovered, setHoveredGallery }: GalleryCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg shadow-lg w-5/6 ${isEven ? "mr-8" : "ml-8"}`}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setHoveredGallery(gallery.id)}
      onHoverEnd={() => setHoveredGallery(null)}
    >
      <Link href={`/gallery/${gallery.id}`}>
        <div className="relative aspect-video bg-gray-900">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.h2
            className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-white"
            animate={{
              scale: isHovered ? 1.1 : 1,
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {gallery.name}
          </motion.h2>
        </div>
        <motion.div
          className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg text-white">{gallery.description}</p>
        </motion.div>
      </Link>
      <motion.div
        className={`absolute top-1/2 ${isEven ? "left-0" : "right-0"} w-8 h-8 rounded-full bg-white transform -translate-y-1/2 ${isEven ? "-translate-x-1/2" : "translate-x-1/2"}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      />
    </motion.div>
  )
}

