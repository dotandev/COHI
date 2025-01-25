"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RankProgression {
  year: number
  position: string
  responsibilities: string[]
}

interface RankProgressionTableProps {
  progression: RankProgression[]
}

export default function RankProgressionTable({ progression }: RankProgressionTableProps) {
  const [expandedYear, setExpandedYear] = useState<number | null>(null)

  if (!progression || progression.length === 0) {
    return null
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="">
          <tr className="bg-[#0F973D]">
            <th className="p-3">Year</th>
            <th className="p-3">Position</th>
            <th className="p-3">Responsibilities</th>
          </tr>
        </thead>
        <tbody>
          {progression.map((rank, index) => (
            <motion.tr
              key={rank.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
              onClick={() => setExpandedYear(expandedYear === rank.year ? null : rank.year)}
            >
              <td className="p-3">{rank.year}</td>
              <td className="p-3">{rank.position}</td>
              <td className="p-3">
                <AnimatePresence>
                  {expandedYear === rank.year ? (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="list-disc pl-5"
                    >
                      {rank.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {resp}
                        </motion.li>
                      ))}
                    </motion.ul>
                  ) : (
                    <motion.span>{rank.responsibilities[0]}...</motion.span>
                  )}
                </AnimatePresence>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

