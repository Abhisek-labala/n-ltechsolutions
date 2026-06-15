"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setComplete(true), 200)
          return 100
        }
        return next
      })
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-navy-dark"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center">
              <span className="text-white font-bold">N&L</span>
            </div>
            <span className="text-xl font-semibold text-navy dark:text-white">N&L Tech Solutions</span>
          </div>

          <div className="w-48 h-[2px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-navy to-teal rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          <p className="mt-4 text-sm text-gray-400">Loading exceptional experiences...</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
