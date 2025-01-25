"use client"

import { motion } from "framer-motion"
import type { Profile } from "./profile.interfaces"
import ProfileCard from "./profilecard"

interface ProfileGroupProps {
  profiles: Profile[]
  gender: "male" | "female"
  className?: string
}

export default function ProfileGroup({ profiles, gender, className = "" }: ProfileGroupProps) {
  if (profiles.length === 0) return null

  const leaderProfile = profiles.find((p) => p.tag === "president" || p.tag === "vice-president")
  const otherProfiles = profiles.filter((p) => p !== leaderProfile)

  return (
    <div className={className}>
      <motion.h2
        className={`text-2xl font-bold mb-6 ${gender === "male" ? "text-blue-400" : "text-pink-400"}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {gender === "male" ? "Male" : "Female"} Executives
      </motion.h2>

      <div className="flex justify-center items-center gap-8">
        {otherProfiles.slice(0, 1).map((profile) => (
          <ProfileCard key={profile.id} profile={profile} isCenter={false} />
        ))}

        {leaderProfile && <ProfileCard profile={leaderProfile} isCenter={true} />}

        {otherProfiles.slice(1, 2).map((profile) => (
          <ProfileCard key={profile.id} profile={profile} isCenter={false} />
        ))}
      </div>
    </div>
  )
}

