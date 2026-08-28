"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/app/providers"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileOpen])

  return (
    <>
      {/* Floating Island Capsule Navbar */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <nav
            className={cn(
              "w-full rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500",
              "bg-white/95 dark:bg-[#0A0E1A]/95 backdrop-blur-2xl shadow-xl shadow-slate-950/5 dark:shadow-black/40 border border-slate-200/90 dark:border-white/[0.12]",
              scrolled && "shadow-2xl shadow-slate-950/10 dark:shadow-black/60 border-slate-300 dark:border-white/20"
            )}
          >
            {/* Logo on the left */}
            <Link href="/" className="flex items-center shrink-0 pr-4">
              <img
                src="/logo.svg"
                alt="N&L Tech Solutions"
                width={150}
                height={38}
                className="h-7 sm:h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 relative",
                    pathname === link.href
                      ? "text-slate-950 dark:text-teal font-bold"
                      : "text-slate-600 dark:text-gray-400 hover:text-slate-950 dark:hover:text-white"
                  )}
                >
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-slate-100 dark:bg-teal/15 border border-slate-200/90 dark:border-teal/30 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Right actions: Theme Toggle + Capsule CTA Button + Mobile Menu Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              )}

              <Link href="/contact" className="hidden sm:block">
                <Button
                  variant="outline"
                  className="rounded-full px-5 sm:px-6 h-9 text-xs sm:text-sm font-bold border-2 border-blue-600 dark:border-teal text-blue-600 dark:text-teal hover:bg-blue-600 hover:text-white dark:hover:bg-teal dark:hover:text-black shadow-xs transition-all duration-300"
                >
                  Request a Demo
                </Button>
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-800 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Immersive Overlay Menu (matching reference design) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#000000] text-white flex flex-col justify-between p-4 sm:p-6 md:p-8 overflow-y-auto"
          >
            {/* Top Floating White Capsule Bar */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl mx-auto bg-white text-black dark:bg-[#0E1322] dark:text-white rounded-2xl sm:rounded-3xl px-5 py-3.5 sm:py-4 flex items-center justify-between shadow-2xl border border-slate-200 dark:border-white/10 shrink-0"
            >
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="N&L Tech Solutions"
                  width={150}
                  height={38}
                  className="h-7 sm:h-8 w-auto dark:brightness-100"
                />
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-slate-800 dark:text-white transition-all hover:scale-105"
                aria-label="Close menu"
              >
                <X size={24} className="stroke-[2.5]" />
              </button>
            </motion.div>

            {/* Centered Large Editorial Navigation Links */}
            <div className="w-full max-w-5xl mx-auto py-10 sm:py-14 my-auto flex flex-col justify-center">
              <nav className="space-y-4 sm:space-y-6">
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-baseline justify-between text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white/90 hover:text-white transition-all py-1"
                    >
                      <span className="group-hover:translate-x-3 group-hover:text-[#00F0FF] transition-all duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Full-Width Pill CTA Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              className="w-full max-w-5xl mx-auto pt-4 shrink-0"
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block w-full">
                <Button className="w-full h-14 sm:h-16 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#00F0FF] dark:hover:bg-[#00D8E6] text-white dark:text-black font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(79,70,229,0.4)] dark:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.01]">
                  Request a Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
