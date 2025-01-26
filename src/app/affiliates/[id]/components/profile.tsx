"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { Institution } from "../../components/affiliate.interface"
import { CheckBadgeIcon } from "@heroicons/react/20/solid"

interface InstitutionProfileProps {
  institution: Institution
}

export default function InstitutionProfile({ institution }: InstitutionProfileProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent">
      <div className="relative h-64 rounded-t-xl overflow-hidden">
        <Image
          src={institution.coverImage || "/placeholder.svg"}
          alt={`${institution.name} cover`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="bg-white shadow-black shadow-2xl rounded-b-xl px-8 py-6">
        <div className="flex items-end -mt-20 mb-6">
          <div className="relative w-32 h-32 border-4 border-[#0F973D] rounded-xl overflow-hidden">
            <Image
              src={institution.logo || "/placeholder.svg"}
              alt={`${institution.name} logo`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="ml-6 flex-1">
            <h1 className="text-3xl font-bold flex items-center">
              {institution.name}
              <CheckBadgeIcon className="w-8 h-8 text-yellow-400 ml-2" />
            </h1>
            <p className="text-xl text-gray-600">{institution.abbreviation}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-700 mb-4">{institution.description}</p>
            <div className="space-y-2">
              <p>
                <strong>Founded:</strong> {institution.foundedYear}
              </p>
              <p>
                <strong>Location:</strong> {institution.location}
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={institution.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F973D] hover:underline"
                >
                  {institution.website}
                </a>
              </p>
              <p>
                <strong>Student Population:</strong> {institution.studentPopulation.toLocaleString()}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Notable Faculties</h2>
            <ul className="list-disc list-inside space-y-2">
              {institution.notableFaculties.map((faculty, index) => (
                <li key={index}>{faculty}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          <div className="space-y-4">
            {institution.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 p-4 rounded-lg hover:bg-[#0F973D]"
              >
                <h3 className="font-semibold">
                  {achievement.year}: {achievement.title}
                </h3>
                <p className="text-gray-700">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
          <div className="flex flex-wrap gap-2">
            {institution.researchAreas.map((area, index) => (
              <span key={index} className="bg-[#0F973D] text-white px-3 py-1 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Relation with COHI</h2>
          <p className="text-gray-700">{institution.relationWithCOHI}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Mission Statement</h3>
              <p className="text-gray-700">{institution.missionStatement}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Vision Statement</h3>
              <p className="text-gray-700">{institution.visionStatement}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Connect with {institution.name}</h2>
          <div className="flex space-x-4">
            {institution.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{social.platform}</span>
                <Image
                  src={`/icons/${social.platform.toLowerCase()}.svg`}
                  alt={social.platform}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

