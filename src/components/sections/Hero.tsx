"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const floatingTech = [
  { label: "CRM", x: "10%", y: "20%", delay: 0 },
  { label: "HRMS", x: "85%", y: "15%", delay: 0.2 },
  { label: "HMIS", x: "90%", y: "55%", delay: 0.4 },
  { label: "ABHA", x: "5%", y: "60%", delay: 0.6 },
  { label: "NHCX", x: "15%", y: "75%", delay: 0.3 },
  { label: "Websites", x: "80%", y: "75%", delay: 0.5 },
  { label: "Mobile Apps", x: "50%", y: "10%", delay: 0.7 },
]

const heroParticles = [
  { left: "12%", top: "25%", duration: 4.5, delay: 0.2 },
  { left: "85%", top: "18%", duration: 5.2, delay: 1.1 },
  { left: "70%", top: "65%", duration: 3.8, delay: 2.3 },
  { left: "25%", top: "75%", duration: 6.1, delay: 0.8 },
  { left: "45%", top: "35%", duration: 4.9, delay: 1.7 },
  { left: "92%", top: "82%", duration: 5.5, delay: 2.9 },
  { left: "8%", top: "60%", duration: 3.9, delay: 0.4 },
  { left: "60%", top: "15%", duration: 6.4, delay: 3.2 },
  { left: "38%", top: "88%", duration: 4.1, delay: 1.5 },
  { left: "78%", top: "42%", duration: 5.0, delay: 2.1 },
  { left: "18%", top: "48%", duration: 4.7, delay: 0.9 },
  { left: "52%", top: "70%", duration: 5.8, delay: 3.5 },
  { left: "88%", top: "30%", duration: 3.6, delay: 1.8 },
  { left: "32%", top: "12%", duration: 6.2, delay: 2.6 },
  { left: "65%", top: "90%", duration: 4.3, delay: 0.6 },
  { left: "5%", top: "85%", duration: 5.1, delay: 1.3 },
  { left: "95%", top: "55%", duration: 4.8, delay: 2.7 },
  { left: "48%", top: "52%", duration: 6.0, delay: 3.0 },
  { left: "22%", top: "92%", duration: 3.7, delay: 0.1 },
  { left: "75%", top: "8%", duration: 5.3, delay: 1.9 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-navy-dark">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teal/20 to-teal/5"
            style={{ animation: "mesh-shift 12s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-navy/10 to-teal/10"
            style={{ animation: "mesh-shift 15s ease-in-out infinite reverse" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-teal/5"
            style={{ animation: "pulse-glow 6s ease-in-out infinite" }}
          />
        </div>
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating tech badges */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingTech.map((tech) => (
          <motion.div
            key={tech.label}
            className="absolute"
            style={{ left: tech.x, top: tech.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
              scale: [0, 1, 1, 1, 0],
              y: [0, -8, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              delay: tech.delay,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <div className="glass-card-premium rounded-xl px-4 py-2 shadow-md border border-slate-300/80 dark:border-white/10">
              <span className="text-xs font-bold text-slate-900 dark:text-white">{tech.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {heroParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-teal/30 dark:bg-teal/40"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="section-padding pt-32 pb-20 lg:pt-40 lg:pb-28 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/90 dark:bg-teal/10 border border-cyan-300 dark:border-teal/30 text-[#0284C7] dark:text-teal text-xs font-semibold mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284C7] dark:bg-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0284C7] dark:bg-teal" />
              </span>
              Enterprise Software & Healthcare IT
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9]"
            >
              <span className="text-slate-950 dark:text-white">Transforming</span>
              <br />
              <span className="text-gradient-hero">Ideas Into</span>
              <br />
              <span className="text-gradient-hero">Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-lg font-medium"
            >
              We build websites, mobile apps, CRM, HRMS, HMIS, ABHA Integration, NHCX Integration, and scalable business software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link href="/contact">
                <Button className="bg-slate-950 hover:bg-slate-800 text-white dark:bg-teal dark:hover:bg-teal-light dark:text-black font-semibold rounded-full px-7 h-11 text-sm shadow-xl shadow-slate-950/15 dark:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-2xl transition-all duration-300 gap-2 group">
                  Get Free Consultation
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="rounded-full px-7 h-11 text-sm border-slate-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-semibold gap-2 group">
                  <Play size={14} />
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Trusted by strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-12 flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400"
            >
              <span className="font-semibold">Trusted by</span>
              <span className="w-px h-4 bg-slate-300 dark:bg-white/10" />
              <span className="font-bold text-slate-900 dark:text-white">50+ Projects</span>
              <span className="w-px h-4 bg-slate-300 dark:bg-white/10" />
              <span className="font-bold text-slate-900 dark:text-white">10+ Industries</span>
              <span className="w-px h-4 bg-slate-300 dark:bg-white/10" />
              <span className="font-bold text-[#0284C7] dark:text-teal">99% Satisfaction</span>
            </motion.div>
          </motion.div>

          {/* Right side - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="glass-card-premium rounded-2xl p-5 shadow-2xl shadow-slate-950/10 dark:shadow-black/40 border border-slate-300/80 dark:border-white/10">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 h-5 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 flex items-center px-3">
                    <span className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">nltechsolutions.in/dashboard</span>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Active Projects", value: "24", color: "from-cyan-600 to-blue-600 dark:from-teal dark:to-cyan-400" },
                      { label: "Revenue", value: "₹2.4Cr", color: "from-slate-900 to-slate-800 dark:from-navy dark:to-blue-600" },
                      { label: "Clients", value: "38", color: "from-blue-600 to-indigo-600 dark:from-teal dark:to-teal-dark" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] rounded-xl p-3.5 shadow-sm">
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 shadow-sm`}>
                          <span className="text-white text-[10px] font-bold">{stat.value}</span>
                        </div>
                        <p className="text-[10px] font-semibold text-slate-700 dark:text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Main chart area */}
                  <div className="bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">Monthly Performance</p>
                        <p className="text-[10px] font-semibold text-slate-500 dark:text-gray-400">+24.5% vs last month</p>
                      </div>
                      <div className="flex gap-1">
                        {["W", "M", "Y"].map((period) => (
                          <span key={period} className="px-2 py-1 rounded-md bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-transparent text-[10px] text-slate-700 dark:text-gray-300 font-semibold shadow-xs">{period}</span>
                        ))}
                      </div>
                    </div>
                    <div className="h-20 flex items-end gap-2">
                      {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + i * 0.03, duration: 0.4 }}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-600 to-cyan-400 dark:from-teal/60 dark:to-teal/30"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="flex gap-3">
                    <div className="bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] rounded-xl p-3.5 flex-1 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-teal" />
                        <span className="text-[10px] font-semibold text-slate-600 dark:text-gray-400">Revenue Growth</span>
                      </div>
                      <span className="text-lg font-bold text-slate-900 dark:text-white">₹84.6L</span>
                    </div>
                    <div className="bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] rounded-xl p-3.5 flex-1 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-teal" />
                        <span className="text-[10px] font-semibold text-slate-600 dark:text-gray-400">Team Members</span>
                      </div>
                      <span className="text-lg font-bold text-slate-900 dark:text-white">42</span>
                    </div>
                    <div className="bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] rounded-xl p-3.5 flex-1 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white" />
                        <span className="text-[10px] font-semibold text-slate-600 dark:text-gray-400">Satisfaction</span>
                      </div>
                      <span className="text-lg font-bold text-[#0284C7] dark:text-teal">99%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow behind */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-teal/10 to-navy/5 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal/15 to-navy/5 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
