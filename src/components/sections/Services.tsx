"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import {
  Globe, Smartphone, Users, Building2, HeartPulse,
  Fingerprint, FileText, Search, BarChart3, Cloud, Bot, Server,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, Users, Building2, HeartPulse,
  Fingerprint, FileText, Search, BarChart3, Cloud, Bot, Server,
}

type ServiceData = {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  order: number
  active: boolean
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set((px - 0.5) * 12)
    y.set((py - 0.5) * -12)
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX: springY, rotateY: springX }}
      className="perspective-[800px]"
    >
      {children}
    </motion.div>
  )
}

export default function Services({ services }: { services: ServiceData[] }) {
  return (
    <section className="section-spacing bg-white dark:bg-navy-dark">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Our Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-navy dark:text-white">
            What We Build
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            Comprehensive technology solutions crafted for enterprises, healthcare, and high-growth businesses.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
              >
                <TiltCard>
                  <div className="group relative h-full glass-card-premium rounded-xl p-5 cursor-default transition-all duration-500 hover:shadow-[0_8px_40px_rgba(6,182,212,0.08)]">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-navy dark:text-white mb-2">{service.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{service.description}</p>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
