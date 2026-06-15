"use server"

import { validateAdmin, setAuthCookie, clearAuthCookie } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function loginAction(_prev: unknown, formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string
  const valid = await validateAdmin(username, password)
  if (!valid) return { error: "Invalid credentials" }
  await setAuthCookie()
  redirect("/admin")
}

export async function logoutAction() {
  await clearAuthCookie()
  redirect("/admin/login")
}
