"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { Magazine } from "./magazine.interfaces"
import { Button } from "@/components/ui/button"
import { magazines } from "./data"

interface MagazineHeroProps {
  trendingMagazines: Magazine[]
}

export const MagazineBlocHero:React.FC<MagazineHeroProps> = ({ trendingMagazines }) => {
  const [showAll, setShowAll] = useState(false)
  const featuredMagazine = trendingMagazines[0]
  const initialMagazines = trendingMagazines.slice(1, 3)
  const remainingMagazines = trendingMagazines.slice(3)

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          className="md:col-span-2 relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={`/magazines/${featuredMagazine.id}`}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={featuredMagazine.coverImage || "/placeholder.svg"}
                alt={featuredMagazine.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-emerald-500 rounded-full text-sm mb-3">Trending</span>
                <h2 className="text-3xl font-bold mb-2">{featuredMagazine.title}</h2>
                <p className="text-gray-200">{featuredMagazine.subtitle}</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="space-y-6">
          {initialMagazines.map((magazine) => (
            <motion.div
              key={magazine.id}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/magazines/${magazine.id}`}>
                <div className="relative h-[235px] rounded-xl overflow-hidden">
                  <Image
                    src={magazine.coverImage || "/placeholder.svg"}
                    alt={magazine.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{magazine.title}</h3>
                    <p className="text-sm text-gray-200">{magazine.subtitle}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={() => setShowAll(!showAll)}
          variant="outline"
          className="bg-transparent border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
        >
          {showAll ? (
            <>
              See Less <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              See All Magazines <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {remainingMagazines.map((magazine) => (
                <motion.div
                  key={magazine.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <Link href={`/magazines/${magazine.id}`}>
                    <div className="relative h-[300px] rounded-xl overflow-hidden">
                      <Image
                        src={magazine.coverImage || "/placeholder.svg"}
                        alt={magazine.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{magazine.title}</h3>
                        <p className="text-sm text-gray-200">{magazine.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

