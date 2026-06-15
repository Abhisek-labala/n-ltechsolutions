"use client"

import { motion } from "framer-motion"
import { FaAws } from "react-icons/fa6"
import {
  SiNextdotjs, SiReact, SiLaravel, SiPhp, SiNodedotjs,
  SiMysql, SiPostgresql, SiDocker, SiGit, SiTailwindcss, SiRedis,
} from "react-icons/si"

const techs = [
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" },
  { icon: FaAws, name: "AWS" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiGit, name: "Git" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
]

export default function TechStack() {
  return (
    <section className="section-spacing bg-white dark:bg-navy-dark">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Technology</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-navy dark:text-white">
            Our Stack
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-base">
            Modern technologies powering enterprise-grade solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              whileHover={{ y: -3 }}
              className="group"
            >
              <div className="glass-card-premium rounded-xl px-4 py-3.5 flex items-center gap-2.5 hover:shadow-[0_4px_20px_rgba(6,182,212,0.06)] transition-shadow duration-300">
                <tech.icon className="w-5 h-5 text-navy dark:text-white group-hover:text-teal transition-colors duration-300" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
