"use client"

import { useActionState } from "react"
import { loginAction } from "@/actions/auth"

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, null)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-navy-dark p-4">
      <div className="w-full max-w-sm bg-white dark:bg-navy rounded-xl shadow-sm border border-gray-200 dark:border-white/5 p-8">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-navy dark:text-white">N&L Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to manage your site</p>
        </div>
        <form action={action} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Username</label>
            <input
              name="username"
              required
              className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
            />
          </div>
          {state?.error && (
            <p className="text-xs text-red-500">{state.error}</p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="w-full h-10 rounded-lg bg-navy hover:bg-navy-light text-white dark:bg-teal dark:hover:bg-teal-dark dark:text-navy text-sm font-medium disabled:opacity-50 transition-all"
          >
            {pending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}
