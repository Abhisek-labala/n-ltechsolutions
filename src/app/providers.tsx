"use client"

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"
import LoadingScreen from "@/components/ui/LoadingScreen"

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return <div className="bg-white dark:bg-navy-dark min-h-screen">{children}</div>
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      {loading && <LoadingScreen />}
      <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </ThemeProvider>
  )
}
