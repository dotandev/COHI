"use client"

import { motion } from "framer-motion"
import type { TagGroup as TagGroupType } from "./profile.interfaces"
import ProfileCard from "./profilecard"

interface TagGroupProps {
  tagGroup: TagGroupType
  gender: "male" | "female"
}

export default function TagGroup({ tagGroup, gender }: TagGroupProps) {
  if (tagGroup.profiles.length === 0) return null

  const headProfile = tagGroup.profiles.find((p) => p.isHead)
  const otherProfiles = tagGroup.profiles.filter((p) => !p.isHead)

  const leftProfiles = otherProfiles.slice(0, Math.ceil(otherProfiles.length / 2))
  const rightProfiles = otherProfiles.slice(Math.ceil(otherProfiles.length / 2))

  return (
    <div>
      <motion.h2
        className={`text-2xl font-bold mb-6 mx-4 capitalize ${gender === "male" ? "text-[#0F973D]" : "text-pink-400"}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {tagGroup.tag}
      </motion.h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 gap-y-12">
        {leftProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} isCenter={false} />
        ))}

        {headProfile && <ProfileCard profile={headProfile} isCenter={true} />}

        {rightProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} isCenter={false} />
        ))}
      </div>
    </div>
  )
}
