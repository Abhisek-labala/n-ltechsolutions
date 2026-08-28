"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { ExternalLink, Sparkles, Activity, Layers, Zap } from "lucide-react"
import Link from "next/link"
import CTASection from "@/components/sections/CTASection"

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

const categories = ["All", "Healthcare & PSP", "Web Development", "Enterprise & Cloud", "HMIS & ABDM", "CRM & HRMS"]

function PortfolioCard({ project, index }: { project: ProjectData; index: number }) {
  const tags: string[] = JSON.parse(project.tags || "[]")
  const results: string[] = JSON.parse(project.results || "[]")
  const [imgError, setImgError] = useState(false)
  const neon = project.neonColor || "#06b6d4"

  const screenshotUrl = project.imageUrl || (project.liveUrl ? `https://image.thum.io/get/width/800/crop/600/noanimate/${project.liveUrl}` : null)
  const [hasPreview, setHasPreview] = useState(Boolean(screenshotUrl))

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springY, rotateY: springX }}
        className="group relative h-full flex flex-col glass-card-premium rounded-2xl p-5 transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] dark:hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] border border-slate-200/90 dark:border-white/[0.08] hover:border-[#00F0FF]/50 dark:hover:border-[#00F0FF]/50"
      >
        {/* Neon ambient aura behind card on hover */}
        <div
          className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${neon}33 0%, transparent 70%)` }}
        />

        {/* Top Mockup Header with Live Screenshot or Neon Gradient */}
        <div className={`relative h-48 rounded-xl bg-gradient-to-br ${project.gradient} mb-5 overflow-hidden p-4 flex flex-col justify-between shadow-lg`}>
          {/* Live Homepage Screenshot */}
          {hasPreview && screenshotUrl ? (
            <img
              src={screenshotUrl}
              alt={project.title}
              onError={() => setHasPreview(false)}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.45))]" />

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                  backgroundSize: "18px 18px",
                }}
              />
            </>
          )}

          {/* Protective gradient scrim for top & bottom text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

          {/* Header Controls */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
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
                className="flex items-center gap-1 bg-black/45 hover:bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-400/50 text-[10px] text-white font-semibold transition-all shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                title="Open Live Website"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                Live Demo
                <ExternalLink size={10} className="ml-0.5 opacity-90 text-emerald-300" />
              </a>
            ) : (
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] text-white font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                Production
              </div>
            )}
          </div>

          {/* Center SVG Icon only if not displaying live screenshot */}
          {!hasPreview && (
            <div className="relative z-10 my-auto flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-4 rounded-full bg-white/25 blur-lg group-hover:bg-white/45 transition-all duration-500 animate-pulse" />
                <div className="relative w-16 h-16 rounded-2xl bg-black/25 backdrop-blur-xl border border-white/40 flex items-center justify-center p-3 shadow-[0_0_25px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                  {!imgError ? (
                    <img
                      src={`/images/tech/${project.icon}.svg`}
                      alt={project.title}
                      onError={() => setImgError(true)}
                      className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    />
                  ) : (
                    <Layers className="w-8 h-8 text-white drop-shadow-md" />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Metrics Bar */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-white bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 shadow-sm">
            <span className="flex items-center gap-1.5 font-medium truncate max-w-[200px]">
              <Activity size={12} className="text-emerald-300 shrink-0" />
              <span className="truncate">{project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : "Enterprise Cloud Platform"}</span>
            </span>
            <span className="text-[10px] text-emerald-300 font-semibold flex items-center gap-0.5">
              <Zap size={10} /> Live
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-base font-bold text-navy dark:text-white mb-2 group-hover:text-teal transition-colors">
              {project.title}
            </h3>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Results / Key Impact */}
            {results.length > 0 && (
              <div className="mb-4 space-y-1.5 bg-gray-50 dark:bg-white/[0.02] p-2.5 rounded-lg border border-gray-100 dark:border-white/[0.05]">
                {results.map((res, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-300 font-medium">
                    <Sparkles size={11} className="text-teal shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 border border-gray-200/70 dark:border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.liveUrl ? (
              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-teal-dark group/btn transition-colors"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-teal-dark group/btn transition-colors"
              >
                <span>Discuss Similar Project</span>
                <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 text-navy dark:text-white">Our Work & Live Platforms</h1>
            <p className="mt-5 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Explore our track record of enterprise platforms, specialized healthcare Patient Support Programs (PSP), high-fashion web applications, and digital solutions deployed live across industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-white dark:bg-navy-dark">
        <div className="section-padding">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-navy text-white dark:bg-teal dark:text-navy shadow-lg shadow-teal/15"
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
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, index) => (
                <PortfolioCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection />
    </>
  )
}
