"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Building2, HeartPulse, Fingerprint, Globe, ShoppingCart, Smartphone, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

const iconMap: Record<string, React.ElementType> = {
  Users, Building2, HeartPulse, Fingerprint, Globe, ShoppingCart, Smartphone, FileText,
}

type ProjectData = {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  tags: string
  results: string
  category: string
}

const categories = ["All", "CRM", "HRMS", "HMIS", "ABHA & NHCX", "Web Development", "E-Commerce"]

export default function PortfolioContent({ projects }: { projects: ProjectData[] }) {
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white dark:bg-navy-dark">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
        />
        <div className="section-padding relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 text-navy dark:text-white">Our Work</h1>
            <p className="mt-5 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Showcasing our best projects across industries. Each solution reflects our commitment to quality, innovation, and client success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-white dark:bg-navy-dark">
        <div className="section-padding">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-navy text-white dark:bg-teal dark:text-navy"
                    : "bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, index) => {
                const Icon = iconMap[project.icon] || Users
                const tags: string[] = JSON.parse(project.tags || "[]")
                const results: string[] = JSON.parse(project.results || "[]")
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="group"
                  >
                    <div className="glass-card-premium rounded-xl overflow-hidden h-full hover:-translate-y-0.5 transition-all duration-500">
                      <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-14 h-14 text-white/30" />
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-white/20 text-white backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-sm font-semibold text-navy dark:text-white mb-2">{project.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-[10px] rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-400">{tag}</span>
                          ))}
                        </div>
                        {results.length > 0 && (
                          <div className="space-y-1 mb-3">
                            {results.slice(0, 3).map((r) => (
                              <div key={r} className="flex items-center gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-teal" />
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">{r}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-medium text-teal hover:text-teal-dark transition-colors">
                          View Project <ExternalLink size={11} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
