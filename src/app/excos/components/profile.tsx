"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ExcoData } from "./profile.interfaces"
import YearSection from "./years"


interface ExcoProfilesProps {
  data: ExcoData
}

export default function ExcoProfiles({ data }: ExcoProfilesProps) {
  const [selectedYear, setSelectedYear] = useState(data[0].year.toString())

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mb-12">
        <Select value={selectedYear} onValueChange={(value) => setSelectedYear(value)}>
          <SelectTrigger className="w-[180px] bg-gray-800 text-white border-gray-700">
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white border-gray-700">
            {data.map((yearData) => (
              <SelectItem key={yearData.year} value={yearData.year.toString()} className="hover:bg-gray-700">
                {yearData.year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {data.map(
        (yearData) =>
          yearData.year.toString() === selectedYear && <YearSection key={yearData.year} data={yearData.data} />,
      )}
    </div>
  )
}

