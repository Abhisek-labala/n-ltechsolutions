"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { validateAdmin } from "@/lib/auth"

export default function LoginForm() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const isValid = await validateAdmin(username, password)
    if (isValid) {
      router.push("/admin")
    } else {
      setError("Invalid credentials")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-navy-dark p-4">
      <div className="w-full max-w-sm bg-white dark:bg-navy rounded-xl shadow-sm border border-gray-200 dark:border-white/5 p-8">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-navy dark:text-white">N&L Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to manage your site</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Username</label>
            <input
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
            />
          </div>
          {error && (
            <p className="text-xs text-red-500">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 rounded-lg bg-navy hover:bg-navy-light text-white dark:bg-teal dark:hover:bg-teal-dark dark:text-navy text-sm font-medium disabled:opacity-50 transition-all"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}
