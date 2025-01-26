"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Share2, Bookmark, MessageCircle } from "lucide-react"
import type { Magazine } from "./magazine.interfaces"
import { Button } from "@/components/ui/button"

interface MagazineStoryProps {
  magazine: Magazine
}

export default function MagazineStory({ magazine }: MagazineStoryProps) {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">{magazine.title}</h1>
        <p className="text-xl text-gray-300 mb-6">{magazine.subtitle}</p>
        <div className="flex items-center justify-center space-x-4">
          <Image
            src={magazine.author.image || "/placeholder.svg"}
            alt={magazine.author.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold">{magazine.author.name}</p>
            <p className="text-sm text-gray-400">
              {magazine.publishDate} · {magazine.readTime} min read
            </p>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[600px] rounded-2xl overflow-hidden mb-12"
      >
        <Image src={magazine.coverImage || "/placeholder.svg"} alt={magazine.title} layout="fill" objectFit="cover" />
      </motion.div>

      <div className="prose prose-lg prose-invert max-w-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl leading-relaxed mb-8"
        >
          {magazine.content.introduction}
        </motion.p>

        {magazine.content.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
            {section.image && (
              <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
                <Image src={section.image || "/placeholder.svg"} alt={section.title} layout="fill" objectFit="cover" />
              </div>
            )}
            <p className="text-gray-300">{section.content}</p>
          </motion.section>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm p-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-2 ${liked ? "text-red-500" : "text-gray-400"}`}
            >
              <Heart className={`w-6 h-6 ${liked ? "fill-current" : ""}`} />
              <span>{magazine.reactions.likes + (liked ? 1 : 0)}</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2 text-gray-400">
              <MessageCircle className="w-6 h-6" />
              <span>{magazine.reviews.length}</span>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => setBookmarked(!bookmarked)}
              className={`${bookmarked ? "text-emerald-500" : "text-gray-400"}`}
            >
              <Bookmark className={`w-6 h-6 ${bookmarked ? "fill-current" : ""}`} />
            </Button>
            <Button variant="ghost" className="text-gray-400">
              <Share2 className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 mb-24"
      >
        <h3 className="text-2xl font-bold mb-8">Reader Reviews</h3>
        <div className="space-y-6">
          {magazine.reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </article>
  )
}

