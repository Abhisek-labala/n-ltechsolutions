"use client"

import { motion } from "framer-motion"
import {
  Users,
  Building2,
  HeartPulse,
  LayoutGrid,
  Shield,
  HeadphonesIcon,
  Banknote,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled professionals with years of industry expertise.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Enterprise-grade Development",
    description: "Robust solutions built for enterprise scale and reliability.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Technology Expertise",
    description: "Deep domain knowledge in healthcare IT and compliance.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: LayoutGrid,
    title: "Scalable Architecture",
    description: "Systems designed to grow with your business needs.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Secure Applications",
    description: "Enterprise security standards and data protection.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Long-term Support",
    description: "Dedicated support and maintenance for all solutions.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Banknote,
    title: "Affordable Pricing",
    description: "Competitive pricing without compromising quality.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodology ensuring timely project delivery.",
    gradient: "from-yellow-500 to-orange-500",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-navy">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">Why Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-navy dark:text-white">
            Why Choose N&L Tech Solutions?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            What sets us apart in the technology landscape
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:-translate-y-1">
                <div className={cn("w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4", feature.gradient)}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-navy dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
