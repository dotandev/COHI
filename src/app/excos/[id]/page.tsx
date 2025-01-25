"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import ExcoMemberProfile from "./components/member"
import { excoData } from "../components/data"

export default function ExcoMemberPage() {
  const params = useParams()
  const memberId = params.id as string

  const profile = excoData
    .flatMap((year) => [...year.data.male.flatMap((g) => g.profiles), ...year.data.female.flatMap((g) => g.profiles)])
    .find((p) => p.id === memberId)

  if (!profile) {
    return <div>Profile not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b text-white p-8 mt-14"
    >
      <ExcoMemberProfile profile={profile} />
    </motion.div>
  )
}

