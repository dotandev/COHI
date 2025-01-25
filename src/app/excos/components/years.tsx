"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { GenderGroup } from "./profile.interfaces"
import TagGroup from "./tagGroup"

interface YearSectionProps {
  data: GenderGroup
}

export default function YearSection({ data }: YearSectionProps) {
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center gap-4 mb-8">
        <motion.button
          className={`px-6 py-2 rounded-full text-lg font-medium transition-colors
            ${selectedGender === "male" ? "bg-[#0F973D] text-white" : "bg-gray-800 text-white hover:bg-gray-700"}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedGender(selectedGender === "male" ? null : "male")}
        >
          Male
        </motion.button>
        <motion.button
          className={`px-6 py-2 rounded-full text-lg font-medium transition-colors
            ${selectedGender === "female" ? "bg-pink-500 text-white" : "bg-gray-800 text-white hover:bg-gray-700"}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedGender(selectedGender === "female" ? null : "female")}
        >
          Female
        </motion.button>
      </div>

      {(!selectedGender || selectedGender === "male") && (
        <div className="space-y-16 mb-16">
          {data.male.map((tagGroup) => (
            <TagGroup key={tagGroup.tag} tagGroup={tagGroup} gender="male" />
          ))}
        </div>
      )}

      {!selectedGender && (
        <div className="flex flex-col justify-center">
          <hr className="w-full border-gray-800" />
          <h1 className="text-center text-5xl mt-4">Females</h1>
        </div>
      )}

      {(!selectedGender || selectedGender === "female") && (
        <div className="space-y-16">
          {data.female.map((tagGroup) => (
            <TagGroup key={tagGroup.tag} tagGroup={tagGroup} gender="female" />
          ))}
        </div>
      )}
    </motion.div>
  )
}

