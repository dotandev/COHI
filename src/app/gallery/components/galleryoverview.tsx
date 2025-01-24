"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ParallaxBackground from "./parallax"
import GalleryCard from "./gallerycard"
import Navbar from "@/app/components/navbar"
import { GalleryHero } from "./hero"


const galleries = [
  { id: "scf", name: "SCF", description: "Student Career Festival" },
  { id: "cif", name: "CIF", description: "Campus Interactive Forum" },
  { id: "hicoms", name: "HICOMS", description: "Higher Institutions Council Of Muslim Students" },
  { id: "ramadan", name: "RAMADAN", description: "Ramadan Gallery" },
  { id: "ivc", name: "IVC", description: "Islamic Vacation Course" },
  { id: "cohi-cup", name: "COHI CUP", description: "COHI Cup Tournament" },
]

export default function GalleryOverview() {
  const [hoveredGallery, setHoveredGallery] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const cursor = document.getElementById("custom-cursor")
      if (cursor) {
        cursor.style.transform = `translate(${moveX}px, ${moveY}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      <GalleryHero />
      <ParallaxBackground />
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h5 className="text-5xl md:text-7xl font-extrabold text-center mb-12 -mt-9" style={{ y: y1 }}>
          Extraordinary Galleries
        </motion.h5>
        <motion.p className="text-xl md:text-2xl text-center mb-16 max-w-3xl mx-auto" style={{ y: y2 }}>
          Explore our mind-blowing collection of visual experiences
        </motion.p>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-black transform -translate-x-1/2" />
          {galleries.map((gallery, index) => (
            <div key={gallery.id} className={`flex justify-${index % 2 === 0 ? "end" : "start"} mb-16`}>
              <GalleryCard
                gallery={gallery}
                index={index}
                isHovered={hoveredGallery === gallery.id}
                setHoveredGallery={setHoveredGallery}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <div
        id="custom-cursor"
        className="fixed w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
        style={{ left: "-100px", top: "-100px" }}
      />
    </div>
  )
}

