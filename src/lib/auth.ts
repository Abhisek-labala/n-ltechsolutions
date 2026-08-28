const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "N&L@2026Admin"

export async function validateAdmin(username: string, password: string): Promise<boolean> {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

export async function setAuthCookie() {
  return true
}

export async function clearAuthCookie() {
  return true
}

export async function checkAuth(): Promise<boolean> {
  return true
}
