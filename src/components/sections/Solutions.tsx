"use client"

import { motion } from "framer-motion"
import {
  Users,
  Building2,
  HeartPulse,
  Fingerprint,
  FileText,
  ShoppingCart,
} from "lucide-react"
import { cn } from "@/lib/utils"

const solutions = [
  {
    icon: Users,
    title: "Enterprise CRM",
    description: "Comprehensive customer relationship platform with sales pipeline, analytics, and automation.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: Building2,
    title: "HRMS Platform",
    description: "End-to-end human resource management with payroll, attendance, and performance tracking.",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: HeartPulse,
    title: "Hospital Information System",
    description: "Complete HMIS solution for patient management, billing, pharmacy, and lab integration.",
    gradient: "from-rose-600 to-pink-500",
  },
  {
    icon: Fingerprint,
    title: "ABHA Integration Platform",
    description: "Seamless ABDM-compliant ABHA integration for healthcare providers and apps.",
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    icon: FileText,
    title: "NHCX Claim Management",
    description: "Digital claims and insurance workflow platform for healthcare providers and insurers.",
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    description: "Scalable online store solution with inventory, payments, and order management.",
    gradient: "from-green-600 to-emerald-500",
  },
]

export default function Solutions() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50/50 dark:bg-navy/30">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">Solutions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-navy dark:text-white">
            Featured Solutions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Enterprise-grade platforms built for scale and performance
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="glass-card rounded-2xl p-6 lg:p-8 h-full hover:-translate-y-1">
                <div className="relative z-10">
                  <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5", solution.gradient)}>
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
