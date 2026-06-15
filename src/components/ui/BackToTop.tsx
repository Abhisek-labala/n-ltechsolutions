"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const { scrollY } = useScroll()
  const show = useTransform(scrollY, [400, 600], [0, 1])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      style={{ opacity: show }}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-navy dark:bg-teal text-white dark:text-navy flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp size={18} />
    </motion.button>
  )
}
