"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { createEnquiry } from "@/actions/enquiries"

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 83288 26667", href: "tel:+918328826667" },
  { icon: Mail, label: "Email", value: "contact@nltechsolutions.in", href: "mailto:contact@nltechsolutions.in" },
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Clock, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
]

const services = [
  "Website Development", "Mobile App Development", "CRM Solutions", "HRMS Solutions",
  "HMIS Solutions", "ABHA Integration", "NHCX Integration", "SEO & Digital Marketing",
  "Cloud & API Integration", "Business Automation", "Other",
]

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [service, setService] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = formRef.current!
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value || "",
      service: service || "",
      message: (form.elements.namedItem("message") as HTMLInputElement).value,
    }
    await createEnquiry(data)
    setSubmitted(true)
    form.reset()
    setService("")
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white dark:bg-navy-dark">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
        />
        <div className="section-padding relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="text-teal font-semibold text-xs uppercase tracking-[0.2em]">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 text-navy dark:text-white">Let&apos;s Talk</h1>
            <p className="mt-5 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Have a project in mind? We&apos;d love to hear from you. Reach out and let&apos;s discuss how we can help transform your ideas into technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-white dark:bg-navy-dark">
        <div className="section-padding">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-navy dark:text-white font-medium hover:text-teal transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-navy dark:text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card-premium rounded-xl p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <MessageSquare size={16} className="text-teal" />
                  <h3 className="text-sm font-semibold text-navy dark:text-white">Quick Response</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  We typically respond within 24 hours during business days. For urgent inquiries, please call us directly.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="glass-card-premium rounded-xl p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-navy dark:text-white mb-6">Send Us a Message</h3>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                        <CheckCircle size={28} className="text-teal" />
                      </div>
                      <h4 className="text-base font-semibold text-navy dark:text-white mb-1">Message Sent!</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">We&apos;ll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      ref={formRef}
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-navy dark:text-white">Name *</label>
                          <Input name="name" placeholder="Your full name" className="bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] h-10 text-sm" required />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-navy dark:text-white">Email *</label>
                          <Input name="email" type="email" placeholder="your@email.com" className="bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] h-10 text-sm" required />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-navy dark:text-white">Phone</label>
                          <Input name="phone" type="tel" placeholder="+91 98765 43210" className="bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] h-10 text-sm" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-navy dark:text-white">Service Required</label>
                          <input type="hidden" name="service" value={service} />
                          <Select value={service} onValueChange={(v) => v && setService(v)}>
                            <SelectTrigger className="bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] h-10 text-sm">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-navy dark:text-white">Message *</label>
                        <Textarea name="message" placeholder="Tell us about your project..." className="bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] min-h-[120px] text-sm" required />
                      </div>
                      <Button type="submit" className="w-full bg-navy hover:bg-navy-light text-white dark:bg-teal dark:hover:bg-teal-dark dark:text-navy rounded-full h-11 text-sm font-medium gap-2">
                        <Send size={14} />
                        Send Message
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
