"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import mssnlogo from '@/../public/mssn.svg'
import AffiliateInstitutions from "../affiliates/components/institutions"
import { institutions } from "../affiliates/components/data"

const institutionsi = [
  { name: "University of Lagos", logo: mssnlogo },
  { name: "Lagos State University", logo: mssnlogo },
  { name: "Federal College of Education (Technical)", logo: mssnlogo},
]



export default function Institutions() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">Our Member Institutions</h2>
        {/* <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {institutionsi.map((institution, index) => (
            <motion.div
              key={institution.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-span-1 flex justify-center items-center"
            >
              <Image
                src={institution.logo || "/placeholder.svg"}
                alt={institution.name}
                width={50}
                height={50}
                objectFit="contain"
              />
                          </motion.div>
          ))}
        </div> */}
        <AffiliateInstitutions institutions={institutions} />
      </div>
    </div>
  )
}

