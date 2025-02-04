"use client"

import { motion } from "framer-motion"
import { FloatingElement } from "../ui/floatingelement"
import { IslamicPattern } from "../ui/pattern"

export function ContactSection() {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-white to-emerald-50 overflow-hidden">
      <IslamicPattern />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6">Connect With Us</h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Join our community and be part of something greater.
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> */}
          <FloatingElement className="relative p-8 bg-white rounded-3xl shadow-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Your message"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </FloatingElement>

          {/* <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-900">Visit Us</h3>
              <p className="text-emerald-700">123 Islamic Center Street, Lagos, Nigeria</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-900">Contact</h3>
              <p className="text-emerald-700">info@cohimmsnlagos.org</p>
              <p className="text-emerald-700">+234 123 456 7890</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-900">Follow Us</h3>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "Instagram"].map((social) => (
                  <motion.a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="bg-emerald-100 text-emerald-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-200 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div> */}
        {/* </div> */}
      </div>
    </section>
  )
}

