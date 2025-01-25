"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { Profile } from "./../../components/profile.interfaces"
import RankProgressionTable from "./ranktable"

interface ExcoMemberProfileProps {
  profile: Profile
}

export default function ExcoMemberProfile({ profile }: ExcoMemberProfileProps) {
  const [selectedTab, setSelectedTab] = useState<"about" | "achievements" | "skills" | "progression">("about")

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg overflow-hidden shadow-lg mb-8"
      >
        <div className="relative h-64 md:h-96">
          <Image src={profile.image || "/placeholder.svg"} alt={profile.name} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
            <p className="text-xl text-gray-300">{profile.role}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800 rounded-lg p-6 mb-8"
      >
        <div className="flex justify-center space-x-4 mb-6 flex-wrap">
          {["about", "achievements", "skills", "progression"].map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedTab === tab ? "bg-[#0F973D] text-white" : "bg-gray-700 text-gray-300"
              } m-1`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTab(tab as any)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTab === "about" && (
              <div>
                <p className="text-lg mb-4">{profile.bio}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Department</h3>
                    <p>{profile.department}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Level</h3>
                    <p>{profile.level}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">School</h3>
                    <p>{profile.school}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Hobbies</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.hobbies.map((hobby, index) => (
                      <span key={index} className="px-3 py-1 bg-[#0F973D] rounded-full text-sm">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "achievements" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Achievements Timeline</h2>
                <div className="space-y-6">
                  {profile.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex"
                    >
                      <div className="flex-shrink-0 w-24 text-right">
                        <span className="text-[#0F973D] font-semibold">{achievement.year}</span>
                      </div>
                      <div className="flex-grow pl-8 relative">
                        <div className="absolute left-0 top-2 w-3 h-3 bg-[#0F973D] rounded-full"></div>
                        <div className="border-l-2 border-gray-700 pl-6 pb-6">
                          <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                          <p className="text-gray-400">{achievement.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "skills" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {profile.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-[#0F973D] rounded-full px-4 py-2"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "progression" && profile.rankProgression && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Rank Progression</h2>
                <RankProgressionTable progression={profile.rankProgression} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Connect with {profile.name}</h2>
        <div className="flex space-x-4">
          {profile.socialMedia.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#0F973D] rounded-full p-3"
            >
              <Image src={`/${social.platform.toLowerCase()}-icon.svg`} alt={social.platform} width={24} height={24} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

