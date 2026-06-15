import Link from "next/link"
import { getServices } from "@/actions/services"
import { getTestimonials } from "@/actions/testimonials"
import { getProjects } from "@/actions/portfolio"
import { getEnquiries } from "@/actions/enquiries"
import { FileText, User, Briefcase, MessageSquare, ArrowUpRight } from "lucide-react"

export default async function AdminDashboard() {
  const [services, testimonials, projects, enquiries] = await Promise.all([
    getServices(),
    getTestimonials(),
    getProjects(),
    getEnquiries(),
  ])

  const unread = enquiries.filter((e) => !e.read).length

  const cards = [
    { label: "Services", count: services.length, href: "/admin/services", icon: FileText, color: "from-blue-500 to-cyan-500" },
    { label: "Testimonials", count: testimonials.length, href: "/admin/testimonials", icon: User, color: "from-purple-500 to-pink-500" },
    { label: "Projects", count: projects.length, href: "/admin/portfolio", icon: Briefcase, color: "from-green-500 to-emerald-500" },
    { label: "Enquiries", count: enquiries.length, href: "/admin/enquiries", icon: MessageSquare, color: unread > 0 ? "from-orange-500 to-red-500" : "from-gray-500 to-slate-500" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy dark:text-white mb-1">Dashboard</h1>
      <p className="text-sm text-gray-500 mb-8">Manage your website content</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="group">
            <div className="bg-white dark:bg-navy rounded-xl border border-gray-100 dark:border-white/5 p-5 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                  <card.icon size={18} className="text-white" />
                </div>
                <ArrowUpRight size={14} className="text-gray-300 group-hover:text-teal transition-colors" />
              </div>
              <p className="text-2xl font-bold text-navy dark:text-white">{card.count}</p>
              <p className="text-xs text-gray-500 mt-0.5">{card.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white dark:bg-navy rounded-xl border border-gray-100 dark:border-white/5 p-5">
        <h2 className="text-sm font-semibold text-navy dark:text-white mb-3">Recent Enquiries</h2>
        {enquiries.length === 0 ? (
          <p className="text-xs text-gray-400">No enquiries yet.</p>
        ) : (
          <div className="space-y-2">
            {enquiries.slice(0, 5).map((e) => (
              <div key={e.id} className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-white/5 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${e.read ? "bg-gray-300 dark:bg-white/10" : "bg-teal"}`} />
                  <div>
                    <p className="text-sm font-medium text-navy dark:text-white">{e.name}</p>
                    <p className="text-xs text-gray-400">{e.service || "General"} &middot; {new Date(e.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{new Date(e.createdAt).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
