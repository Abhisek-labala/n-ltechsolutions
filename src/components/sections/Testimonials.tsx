"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

type TestimonialData = {
  id: string
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

export default function Testimonials({ testimonials }: { testimonials: TestimonialData[] }) {
  const [current, setCurrent] = useState(0)

  if (testimonials.length === 0) return null

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-spacing bg-gray-50/50 dark:bg-navy-dark/30">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-navy dark:text-white">
            Client Love
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card-premium rounded-xl p-8 lg:p-10 text-center"
              >
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy to-teal flex items-center justify-center text-white text-xs font-bold">
                    {testimonials[current].author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-navy dark:text-white">{testimonials[current].author}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonials[current].role}{testimonials[current].role && testimonials[current].company ? ", " : ""}{testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button onClick={prev} className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 hover:text-navy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-teal w-4" : "bg-gray-300 dark:bg-white/20"}`} />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 hover:text-navy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
