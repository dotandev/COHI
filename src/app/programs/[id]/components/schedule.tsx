"use client"

import { motion } from "framer-motion"

const schedule = [
  { time: "9:00 WAT", event: "Event registration OPENS" },
  { time: "9:30 WAT", event: "Opening Ceremony" },
  { time: "10:00 WAT", event: "Keynote Speech" },
  { time: "11:00 WAT", event: "Workshop Session 1" },
  { time: "12:00 WAT", event: "Lunch Break" },
  { time: "13:00 WAT", event: "Panel Discussion" },
  { time: "14:00 WAT", event: "Workshop Session 2" },
  { time: "15:00 WAT", event: "Networking Session" },
  { time: "16:00 WAT", event: "Closing Ceremony" },
]

export default function Schedule() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule</h2>
          <p className="text-gray-600">February 25, 2025</p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center p-4 ${index !== schedule.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <div className="w-24 font-medium text-gray-900">{item.time}</div>
              <div className="flex-1 text-gray-600">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

