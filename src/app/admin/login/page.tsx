import { redirect } from "next/navigation"
import { checkAuth } from "@/lib/auth"
import LoginForm from "./LoginForm"

export default async function LoginPage() {
  const authed = await checkAuth()
  if (authed) redirect("/admin")
  return <LoginForm />
}
