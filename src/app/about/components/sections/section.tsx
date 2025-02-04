import { motion } from "framer-motion"

export const SectionBar = ({ children }: any) => (
  <motion.div
    className="bg-white bg-opacity-90 shadow-lg rounded-full py-6 px-8 mb-8"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
)

