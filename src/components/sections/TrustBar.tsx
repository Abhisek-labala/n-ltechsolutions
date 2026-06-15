"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "+", label: "Enterprise Brands" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
]

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const start = performance.now()
          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(progress * to))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to])

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  )
}

export default function TrustBar() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50/50 dark:bg-navy-dark/50 border-y border-gray-100/50 dark:border-white/[0.03]">
      <div className="section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white mb-1">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
