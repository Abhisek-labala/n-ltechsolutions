import { getEnquiries, markEnquiryRead, deleteEnquiry } from "@/actions/enquiries"
import { Trash2, Check, Mail, Phone, Calendar } from "lucide-react"

export default async function EnquiriesPage() {
  const enquiries = await getEnquiries()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-navy dark:text-white">Enquiries</h1>
          <p className="text-sm text-gray-500 mt-0.5">{enquiries.length} total, {enquiries.filter(e => !e.read).length} unread</p>
        </div>
      </div>

      <div className="space-y-3">
        {enquiries.length === 0 ? (
          <div className="bg-white dark:bg-navy rounded-xl border border-gray-100 dark:border-white/5 p-8 text-center">
            <p className="text-sm text-gray-400">No enquiries yet.</p>
          </div>
        ) : (
          enquiries.map((enquiry) => (
            <div key={enquiry.id} className={`bg-white dark:bg-navy rounded-xl border ${enquiry.read ? "border-gray-100 dark:border-white/5" : "border-teal/20 dark:border-teal/10"} p-5 transition-all`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-sm font-semibold text-navy dark:text-white">{enquiry.name}</h3>
                    {!enquiry.read && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal/10 text-teal font-medium">New</span>
                    )}
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(enquiry.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Mail size={12} />
                      <a href={`mailto:${enquiry.email}`} className="hover:text-teal">{enquiry.email}</a>
                    </span>
                    {enquiry.phone && (
                      <span className="flex items-center gap-1">
                        <Phone size={12} />
                        <a href={`tel:${enquiry.phone}`} className="hover:text-teal">{enquiry.phone}</a>
                      </span>
                    )}
                    {enquiry.service && (
                      <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5">{enquiry.service}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{enquiry.message}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {!enquiry.read && (
                    <form action={async () => {
                      "use server"
                      await markEnquiryRead(enquiry.id)
                    }}>
                      <button type="submit" className="p-2 rounded-lg bg-teal/10 text-teal hover:bg-teal/20 transition-all" title="Mark as read">
                        <Check size={14} />
                      </button>
                    </form>
                  )}
                  <form action={async () => {
                    "use server"
                    await deleteEnquiry(enquiry.id)
                  }}>
                    <button type="submit" className="p-2 rounded-lg bg-red-50 dark:bg-red-900/10 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 transition-all" title="Delete">
                      <Trash2 size={14} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
