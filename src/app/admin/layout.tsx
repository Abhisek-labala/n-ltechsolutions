import { redirect } from "next/navigation"
import { checkAuth } from "@/lib/auth"
import { logoutAction } from "@/actions/auth"
import Link from "next/link"
import { LayoutDashboard, FileText, User, Briefcase, MessageSquare, LogOut } from "lucide-react"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/services", label: "Services", icon: FileText },
  { href: "/admin/testimonials", label: "Testimonials", icon: User },
  { href: "/admin/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/admin/enquiries", label: "Enquiries", icon: MessageSquare },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await checkAuth()
  if (!authed) redirect("/admin/login")

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-dark flex">
      <aside className="w-56 bg-white dark:bg-navy border-r border-gray-200 dark:border-white/5 flex flex-col">
        <div className="p-5 border-b border-gray-100 dark:border-white/5">
          <Link href="/admin" className="text-sm font-bold text-navy dark:text-white">N&L Admin</Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-navy dark:hover:text-white transition-all"
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-100 dark:border-white/5">
          <form action={logoutAction}>
            <button type="submit" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 w-full transition-all">
              <LogOut size={16} />
              Logout
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}
