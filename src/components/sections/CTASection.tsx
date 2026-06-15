"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-navy-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-teal/5 via-navy/[0.02] to-teal/5 dark:from-teal/[0.04] dark:to-transparent blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      </div>

      <div className="section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Let&apos;s Collaborate</span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mt-4 text-navy dark:text-white">
            Let&apos;s Build Something
            <span className="text-gradient"> Amazing Together</span>
          </h2>
          <p className="mt-5 text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Ready to transform your business with technology? Let&apos;s discuss your project.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-navy hover:bg-navy-light text-white dark:bg-teal dark:hover:bg-teal-dark dark:text-navy rounded-full px-8 h-12 text-sm font-medium shadow-xl shadow-navy/10 dark:shadow-teal/10 hover:shadow-2xl transition-all gap-2 group">
                Start Your Project
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+918328826667" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-teal transition-colors">
              <Phone size={14} />
              +91 83288 26667
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
            <Mail size={12} />
            <a href="mailto:contact@nltechsolutions.in" className="hover:text-teal transition-colors">contact@nltechsolutions.in</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
