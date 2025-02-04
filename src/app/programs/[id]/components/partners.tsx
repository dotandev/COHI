"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "ALT-HIJABIS", logo: "/partners/alt-hijabis.png" },
  { name: "Partner 2", logo: "/partners/partner2.png" },
  { name: "Partner 3", logo: "/partners/partner3.png" },
  { name: "Partner 4", logo: "/partners/partner4.png" },
]

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partners</h2>
          <p className="text-gray-600">Proudly supported by</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="bg-gray-50 rounded-lg p-6 w-full aspect-square flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="max-w-[120px] h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

