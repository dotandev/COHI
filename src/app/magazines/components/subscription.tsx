"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function SubscriptionForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          BE A PART OF THE LITERARY FAMILY
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join our community of writers and readers. Share your stories and be featured in our upcoming magazines.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-4">Submit Your Story</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" className="bg-gray-800 border-gray-700" />
            <Input placeholder="Email Address" type="email" className="bg-gray-800 border-gray-700" />
            <Textarea placeholder="Tell us about your story idea..." className="bg-gray-800 border-gray-700 h-32" />
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
              Submit Story
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-4">Subscribe to Updates</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" className="bg-gray-800 border-gray-700" />
            <Input placeholder="Email Address" type="email" className="bg-gray-800 border-gray-700" />
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-700" />
                <span className="text-sm text-gray-300">Receive weekly newsletters</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-700" />
                <span className="text-sm text-gray-300">Get new story alerts</span>
              </label>
            </div>
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
              Subscribe Now
            </Button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Thank you for your submission!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

