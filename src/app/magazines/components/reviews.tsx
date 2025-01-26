"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import type { Review } from "./magazine.interfaces"

interface ReviewsSectionProps {
  reviews: Review[]
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold text-emerald-500 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        WHAT OUR READERS HAD TO SAY
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-500 p-2 rounded-full text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-500 p-2 rounded-full text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="overflow-hidden px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={reviews[currentIndex].avatar || "/placeholder.svg"}
                  alt={reviews[currentIndex].author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{reviews[currentIndex].author}</h3>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < reviews[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-gray-400 ml-auto">{reviews[currentIndex].date}</span>
              </div>
              <p className="text-gray-300">{reviews[currentIndex].comment}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-emerald-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

