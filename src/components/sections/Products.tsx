"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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

export default function Products({ projects }: { projects: ProjectData[] }) {
  if (projects.length === 0) return null

  return (
    <section className="section-spacing bg-white dark:bg-navy-dark">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-navy dark:text-white">
            Featured Platforms
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-base">
            Enterprise-grade solutions built for scale, security, and performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon] || Users
            const tags: string[] = JSON.parse(project.tags || "[]")
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="glass-card-premium rounded-xl p-6 h-full hover:-translate-y-0.5 transition-all duration-500">
                  <div className={`h-24 rounded-lg bg-gradient-to-br ${project.gradient} mb-5 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
                    <div className="absolute bottom-3 left-3 right-3 h-6 rounded-md bg-white/20 backdrop-blur-sm flex items-center px-2">
                      <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-4 h-1.5 rounded-full bg-white/40" />
                        ))}
                      </div>
                    </div>
                    <Icon className="absolute top-3 right-3 w-8 h-8 text-white/30" />
                  </div>
                  <h3 className="text-base font-semibold text-navy dark:text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/services" className="inline-flex items-center gap-1 text-xs font-medium text-teal hover:text-teal-dark transition-colors">
                    Learn more <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
