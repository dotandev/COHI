"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import type { Profile } from "./profile.interfaces"

interface ProfileCardProps {
  profile: Profile
  isCenter: boolean
}

export default function ProfileCard({ profile, isCenter }: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/excos/${profile.id}`} passHref>
      <motion.div
        className={`relative ${
          isCenter ? "lg:w-80 w-[390px]" : "lg:w-64 w-[390px] mx-4"
        } bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden cursor-pointer`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          height: isCenter || isHovered ? "lg:800px" : "400px",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div className="relative w-full h-64">
          <Image
            src={profile.image || "/placeholder.svg"}
            alt={profile.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300"
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        <div className="p-6">
          <motion.div
            initial={false}
            animate={{ height: isHovered ? "auto" : "120px" }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{profile.role}</p>
            <p className="text-sm mb-2">
              {profile.department}, {profile.level} Level
            </p>
            <p className="text-sm mb-2">{profile.school}</p>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.hobbies.map((hobby, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-700 rounded-full">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Bio</h4>
                    <p className="text-sm text-white">{profile.bio}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white ${profile.gender === "male" ? "bg-[#0F973D]" : "bg-pink-400"}`}
        //   style={{
        //     backgroundColor:
        //       profile.tag === "president" ? "#FFD700" : profile.tag === "vice-president" ? "#C0C0C0" : "#4A90E2",
        //     color: profile.tag === "president" || profile.tag === "vice-president" ? "#000" : "#fff",
        //   }}
        >
          {profile.role}
        </motion.div>
      </motion.div>
    </Link>
  )
}

