"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Institution } from "../components/affiliate.interface"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AffiliateInstitutionsProps {
  institutions: Institution[]
}

export default function AffiliateInstitutions({ institutions }: AffiliateInstitutionsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string>("all")
  const [selectedFilter, setSelectedFilter] = useState<string>("all")

  const tags = useMemo(() => {
    const allTags = institutions.map((i) => i.tag)
    return ["all", ...allTags.filter((value, index, self) => self.indexOf(value) === index)]
  }, [institutions])
  const filters = ["all", "oldest", "newest", "largest", "smallest"]

  const filteredInstitutions = useMemo(() => {
    let filtered = institutions
    if (selectedTag !== "all") {
      filtered = filtered.filter((i) => i.tag === selectedTag)
    }
    switch (selectedFilter) {
      case "oldest":
        return filtered.sort((a, b) => a.foundedYear - b.foundedYear)
      case "newest":
        return filtered.sort((a, b) => b.foundedYear - a.foundedYear)
      case "largest":
        return filtered.sort((a, b) => b.studentPopulation - a.studentPopulation)
      case "smallest":
        return filtered.sort((a, b) => a.studentPopulation - b.studentPopulation)
      default:
        return filtered
    }
  }, [institutions, selectedTag, selectedFilter])

  const currentYear = new Date().getFullYear()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="mb-4 sm:mb-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedTag === tag ? "bg-[#0F973D] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
          <p className="text-2xl font-semibold mt-4">As of {currentYear};</p>
          <div className="sm:hidden mt-4">
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a tag" />
              </SelectTrigger>
              <SelectContent>
                {tags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              {filters.map((filter) => (
                <SelectItem key={filter} value={filter}>
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInstitutions.map((institution) => (
          <motion.div
            key={institution.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05, borderColor: "#0F973D", borderWidth: 2 }}
            onHoverStart={() => setHoveredId(institution.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <Link href={`/affiliates/${institution.id}`}>
              <div className="relative h-48">
                <Image
                  src={institution.coverImage || "/placeholder.svg"}
                  alt={institution.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Image
                    src={institution.logo || "/placeholder.svg"}
                    alt={`${institution.name} logo`}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{institution.name}</h2>
                <p className="text-gray-600 mb-4">{institution.abbreviation}</p>
                <span className="inline-block bg-[#0F973D] text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                  {institution.tag}
                </span>
                {hoveredId === institution.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4"
                  >
                    <p className="text-gray-700">{institution.description}</p>
                    <p className="text-gray-600 mt-2">Founded: {institution.foundedYear}</p>
                    <p className="text-gray-600">Students: {institution.studentPopulation.toLocaleString()}</p>
                  </motion.div>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

