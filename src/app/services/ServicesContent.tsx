"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Smartphone, Users, Building2, HeartPulse, Fingerprint, FileText, Search, Cloud, Server, Bot, CheckCircle, ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/CTASection"

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, Users, Building2, HeartPulse,
  Fingerprint, FileText, Search, Cloud, Server, Bot,
}

type ServiceData = {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  benefits: string
}

const faqs = [
  { q: "What is your typical project timeline?", a: "Timelines vary by scope. A typical website takes 4-6 weeks, while enterprise systems like CRM or HMIS range from 8-16 weeks depending on complexity." },
  { q: "Do you provide post-launch support?", a: "Yes, we offer comprehensive maintenance and support packages to ensure your solution runs smoothly post-launch." },
  { q: "What technologies do you use?", a: "We use modern stacks including Next.js, React, Laravel, Node.js, PostgreSQL, AWS, Docker, and more based on project requirements." },
  { q: "Can you integrate with existing systems?", a: "Absolutely. We specialize in API integrations and can connect with most third-party platforms, legacy systems, and cloud services." },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 dark:border-white/5 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="text-sm font-medium text-navy dark:text-white">{question}</span>
        <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-gray-500 dark:text-gray-400">{answer}</p>}
    </div>
  )
}

export default function ServicesContent({ services }: { services: ServiceData[] }) {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white dark:bg-navy-dark">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
        />
        <div className="section-padding relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 text-navy dark:text-white">Our Services</h1>
            <p className="mt-5 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Comprehensive technology solutions tailored to your business needs. From web development to healthcare IT, we deliver excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-white dark:bg-navy-dark">
        <div className="section-padding space-y-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe
            const benefits: string[] = JSON.parse(service.benefits || "[]")
            return (
              <motion.div
                key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-teal text-xs font-semibold uppercase tracking-[0.2em]">Service</span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-navy dark:text-white mb-3">{service.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{service.description}</p>
                  {benefits.length > 0 && (
                    <div className="space-y-2.5 mb-6">
                      {benefits.map((b: string) => (
                        <div key={b} className="flex items-center gap-2.5">
                          <CheckCircle size={14} className="text-teal shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <Link href="/contact">
                    <Button className="bg-navy hover:bg-navy-light text-white dark:bg-teal dark:hover:bg-teal-dark dark:text-navy rounded-full h-9 text-xs gap-1.5">
                      Get Started <ArrowRight size={13} />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {benefits.length > 0 && (
                    <div className="glass-card-premium rounded-xl p-6 lg:p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                        <span className="text-sm font-semibold text-navy dark:text-white">Key Features</span>
                      </div>
                      <div className="space-y-2.5">
                        {benefits.map((f: string) => (
                          <div key={f} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-gray-50 dark:bg-white/[0.02]">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                            <span className="text-xs font-medium text-navy dark:text-white">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="section-spacing bg-gray-50/50 dark:bg-navy-dark/30">
        <div className="section-padding max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">FAQ</span>
            <h2 className="text-3xl font-bold tracking-tight mt-3 text-navy dark:text-white">Frequently Asked Questions</h2>
          </motion.div>
          <div className="glass-card-premium rounded-xl p-6">
            {faqs.map((faq) => <FAQItem key={faq.q} question={faq.q} answer={faq.a} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
