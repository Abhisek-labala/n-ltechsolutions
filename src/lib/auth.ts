import { cookies } from "next/headers"

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "N&L@2026Admin"

export async function validateAdmin(username: string, password: string): Promise<boolean> {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

export async function setAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.set("admin_auth", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/admin",
  })
}

export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_auth")
}

export async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies()
  return cookieStore.get("admin_auth")?.value === "authenticated"
}
