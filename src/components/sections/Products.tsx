"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Sparkles, Activity, Layers, ExternalLink, Globe, Zap } from "lucide-react"
import Link from "next/link"

type ProjectData = {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  neonColor?: string
  tags: string
  results: string
  category: string
  liveUrl?: string
}

function ProductCard({ project, index }: { project: ProjectData; index: number }) {
  const tags: string[] = JSON.parse(project.tags || "[]")
  const results: string[] = JSON.parse(project.results || "[]")
  const [imgError, setImgError] = useState(false)
  const neon = project.neonColor || "#06b6d4"

  // 3D Tilt interaction
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set((px - 0.5) * 8)
    y.set((py - 0.5) * -8)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springY, rotateY: springX }}
        className="group relative h-full flex flex-col glass-card-premium rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] dark:hover:shadow-[0_0_40px_rgba(6,182,212,0.22)] border border-gray-200/80 dark:border-white/[0.08] hover:border-teal/50 dark:hover:border-teal/50"
      >
        {/* Neon ambient aura behind card on hover */}
        <div
          className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${neon}33 0%, transparent 70%)` }}
        />

        {/* Top Mockup & Image Showcase Container with Neon Gradient */}
        <div className={`relative h-48 rounded-xl bg-gradient-to-br ${project.gradient} mb-5 overflow-hidden p-4 flex flex-col justify-between shadow-lg`}>
          {/* Ambient Lighting & Neon Glow Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.45))]" />
          
          {/* High-tech Neon Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
              backgroundSize: "18px 18px",
            }}
          />

          {/* Browser / UI Mockup Top Header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_6px_#f43f5e]" />
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
              <span className="text-[10px] text-white font-medium pl-1">{project.category}</span>
            </div>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-black/35 hover:bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-400/50 text-[10px] text-white font-semibold transition-all shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                title="Visit Live Application"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                Live Project
                <ExternalLink size={10} className="ml-0.5 opacity-90 text-emerald-300" />
              </a>
            ) : (
              <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] text-white font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                Enterprise
              </div>
            )}
          </div>

          {/* Center Graphic & Animated Neon Tech Icon */}
          <div className="relative z-10 my-auto flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative flex items-center justify-center"
            >
              {/* Neon pulsating ring aura */}
              <div className="absolute -inset-4 rounded-full bg-white/25 blur-lg group-hover:bg-white/45 transition-all duration-500 animate-pulse" />
              
              <div className="relative w-16 h-16 rounded-2xl bg-black/25 backdrop-blur-xl border border-white/40 flex items-center justify-center p-3 shadow-[0_0_25px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] transition-all">
                {!imgError ? (
                  <img
                    src={`/images/tech/${project.icon}.svg`}
                    alt={project.title}
                    onError={() => setImgError(true)}
                    className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <Layers className="w-8 h-8 text-white drop-shadow-md" />
                )}
              </div>
            </motion.div>
          </div>

          {/* Bottom Floating Stats / Indicator Preview */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-white bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 shadow-sm">
            <span className="flex items-center gap-1.5 font-medium truncate max-w-[200px]">
              <Activity size={12} className="text-emerald-300 shrink-0" />
              <span className="truncate">{project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : "Enterprise Cloud Architecture"}</span>
            </span>
            <span className="text-[10px] text-emerald-300 font-semibold flex items-center gap-0.5">
              <Zap size={10} /> Online
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-base font-bold text-navy dark:text-white mb-2 group-hover:text-teal transition-colors flex items-center gap-2">
              {project.title}
            </h3>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Key Metrics / Results Highlights */}
            {results.length > 0 && (
              <div className="mb-4 space-y-1.5 bg-gray-50 dark:bg-white/[0.02] p-2.5 rounded-lg border border-gray-100 dark:border-white/[0.05]">
                {results.slice(0, 2).map((res, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-300 font-medium">
                    <Sparkles size={11} className="text-teal shrink-0" />
                    <span className="truncate">{res}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            {/* Tech Stack Tags with Neon Accent */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-[10px] font-semibold rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-200 border border-gray-200/70 dark:border-white/[0.08] group-hover:border-teal/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Link with Slide Animation */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-teal-dark group/btn transition-all"
              >
                <span>Visit Live Project</span>
                <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
              </a>
            ) : (
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-teal-dark group/btn transition-all"
              >
                <span>Explore Solution</span>
                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Products({ projects }: { projects: ProjectData[] }) {
  if (projects.length === 0) return null

  return (
    <section className="section-spacing bg-white dark:bg-navy-dark relative overflow-hidden">
      {/* Ambient neon background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-teal/10 via-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal/10 border border-teal/30 text-teal font-semibold text-xs uppercase tracking-[0.2em] mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Globe size={12} />
            Live Deployments & Platforms
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white">
            Built for Scale & Impact
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            Live enterprise portals, healthcare platforms, and high-performance digital systems engineered and powered by N&L Tech Solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProductCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
