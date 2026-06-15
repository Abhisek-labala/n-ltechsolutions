"use client"

import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918328826667"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
    >
      <FaWhatsapp size={22} />
    </motion.a>
  )
}
