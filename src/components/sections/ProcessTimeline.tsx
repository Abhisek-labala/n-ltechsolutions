"use client"

import { motion } from "framer-motion"

const steps = [
  { number: "01", title: "Discovery", desc: "We dive deep into your business, goals, and challenges to craft the perfect strategy." },
  { number: "02", title: "Design", desc: "Beautiful, intuitive interfaces designed with user experience at the core." },
  { number: "03", title: "Development", desc: "Agile development with modern tech stacks, clean code, and regular iterations." },
  { number: "04", title: "Testing", desc: "Rigorous QA across performance, security, and usability before launch." },
  { number: "05", title: "Deployment", desc: "Smooth deployment with zero downtime and thorough production monitoring." },
  { number: "06", title: "Support", desc: "Ongoing maintenance, updates, and 24/7 support to ensure long-term success." },
]

export default function ProcessTimeline() {
  return (
    <section className="section-spacing bg-gray-50/50 dark:bg-navy-dark/30">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-navy dark:text-white">
            How We Work
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-base">
            A proven methodology that ensures quality, transparency, and timely delivery.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal/40 via-teal/20 to-transparent" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-8 ${index % 2 === 0 ? "lg:text-right" : "lg:flex-row-reverse"}`}
              >
                {/* Number circle */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white dark:bg-navy-dark border-2 border-teal/30 flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-teal">{step.number}</span>
                </div>

                {/* Content */}
                <div className={`pl-16 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16 lg:w-1/2" : "lg:pl-16 lg:w-1/2 lg:text-left"}`}>
                  <div className="glass-card-premium rounded-xl p-5 lg:p-6">
                    <h3 className="text-base font-semibold text-navy dark:text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Spacer for odd items */}
                {index % 2 === 0 && <div className="hidden lg:block lg:w-1/2" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
