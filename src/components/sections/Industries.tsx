"use client"

import { motion } from "framer-motion"
import { HeartPulse, ShoppingBag, ShoppingCart, GraduationCap, Rocket, Factory, Building2, Landmark } from "lucide-react"

const industries = [
  { icon: HeartPulse, title: "Healthcare", gradient: "from-rose-500 to-pink-500" },
  { icon: ShoppingBag, title: "Retail", gradient: "from-amber-500 to-yellow-500" },
  { icon: ShoppingCart, title: "E-Commerce", gradient: "from-green-500 to-emerald-500" },
  { icon: GraduationCap, title: "Education", gradient: "from-blue-500 to-sky-500" },
  { icon: Rocket, title: "Startups", gradient: "from-violet-500 to-purple-500" },
  { icon: Factory, title: "Manufacturing", gradient: "from-cyan-500 to-teal-500" },
  { icon: Building2, title: "Finance", gradient: "from-indigo-500 to-blue-500" },
  { icon: Landmark, title: "Corporate", gradient: "from-slate-500 to-gray-500" },
]

export default function Industries() {
  return (
    <section className="section-spacing bg-gray-50/50 dark:bg-navy-dark/30">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Industries</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-navy dark:text-white">
            Who We Serve
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-base">
            Delivering tailored technology solutions across diverse sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              className="group"
            >
              <div className="glass-card-premium rounded-xl p-5 lg:p-6 text-center cursor-default hover:-translate-y-0.5 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-navy dark:text-white">{industry.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
