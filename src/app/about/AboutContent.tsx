"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Code2, Users, HeartPulse, Fingerprint, FileText, Smartphone, RefreshCw } from "lucide-react"
import CTASection from "@/components/sections/CTASection"

const values = [
  { icon: Heart, title: "Integrity", desc: "We uphold the highest standards of honesty and transparency in every engagement." },
  { icon: Code2, title: "Innovation", desc: "We embrace creative thinking and cutting-edge technology to solve complex problems." },
  { icon: Users, title: "Collaboration", desc: "We work closely with our clients, treating their goals as our own." },
  { icon: RefreshCw, title: "Excellence", desc: "We strive for perfection in every project, no matter the scale." },
]

const specializations = [
  { icon: Code2, label: "Custom Software" },
  { icon: Users, label: "CRM" },
  { icon: Users, label: "HRMS" },
  { icon: HeartPulse, label: "HMIS" },
  { icon: Fingerprint, label: "ABHA Integration" },
  { icon: FileText, label: "NHCX Integration" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: RefreshCw, label: "Digital Transformation" },
]

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white dark:bg-navy-dark">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
        />
        <div className="section-padding relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 text-navy dark:text-white">
              Transforming Ideas Into Technology
            </h1>
            <p className="mt-5 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              N&L Tech Solutions is a technology-driven company focused on delivering innovative software solutions for businesses, healthcare organizations and enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Mission/Vision */}
      <section className="section-spacing bg-white dark:bg-navy-dark border-y border-gray-100/50 dark:border-white/[0.03]">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Our Story</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 text-navy dark:text-white mb-5">
                Who We Are
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Founded with a vision to bridge the gap between innovative ideas and cutting-edge technology, N&L Tech Solutions has grown into a trusted partner for businesses across industries.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Our team brings decades of expertise in software development, healthcare IT, and enterprise solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <span key={spec.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal/5 text-teal text-xs font-medium">
                    <spec.icon size={12} />
                    {spec.label}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <div className="glass-card-premium rounded-xl p-6 lg:p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-navy dark:text-white mb-2">Our Mission</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Empower businesses with technology that drives growth, efficiency, and innovation.</p>
              </div>
              <div className="glass-card-premium rounded-xl p-6 lg:p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-navy dark:text-white mb-2">Our Vision</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Be the most trusted technology partner for businesses worldwide.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-gray-50/50 dark:bg-navy-dark/30">
        <div className="section-padding">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 text-navy dark:text-white">Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.3 }}
                className="glass-card-premium rounded-xl p-6 lg:p-8 text-center hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center mx-auto mb-3">
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-navy dark:text-white mb-2">{value.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
