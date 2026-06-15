import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from "@/actions/testimonials"
import AdminTable from "@/components/admin/AdminTable"

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-navy dark:text-white">Testimonials</h1>
          <p className="text-sm text-gray-500 mt-0.5">{testimonials.length} testimonials</p>
        </div>
      </div>

      <div className="bg-white dark:bg-navy rounded-xl border border-gray-100 dark:border-white/5">
        <div className="p-5 border-b border-gray-100 dark:border-white/5">
          <h2 className="text-sm font-semibold text-navy dark:text-white">All Testimonials</h2>
        </div>
        <div className="p-5">
          <AdminTable
            columns={[{ key: "author", label: "Author" }, { key: "company", label: "Company" }, { key: "rating", label: "Rating" }, { key: "active", label: "Active", width: 60 }]}
            data={testimonials}
            renderRow={(t) => (
              <>
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-navy dark:text-white">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{t.company}</td>
                <td className="px-4 py-3 text-sm text-yellow-500">{Array.from({ length: t.rating }).map((_, i) => "★").join("")}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${t.active ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400" : "bg-gray-100 dark:bg-white/5 text-gray-500"}`}>
                    {t.active ? "Active" : "Hidden"}
                  </span>
                </td>
              </>
            )}
            editAction={async (id, formData) => {
              "use server"
              await updateTestimonial(id, {
                quote: formData.get("quote") as string,
                author: formData.get("author") as string,
                role: formData.get("role") as string,
                company: formData.get("company") as string,
                rating: parseInt(formData.get("rating") as string) || 5,
                active: formData.get("active") === "true",
              })
            }}
            deleteAction={async (id) => {
              "use server"
              await deleteTestimonial(id)
            }}
            createAction={async (formData) => {
              "use server"
              await createTestimonial({
                quote: formData.get("quote") as string,
                author: formData.get("author") as string,
                role: formData.get("role") as string || "",
                company: formData.get("company") as string || "",
                rating: parseInt(formData.get("rating") as string) || 5,
                order: testimonials.length + 1,
              })
            }}
            fields={[
              { name: "quote", label: "Quote", type: "textarea", required: true },
              { name: "author", label: "Author Name", type: "text", required: true },
              { name: "role", label: "Role", type: "text" },
              { name: "company", label: "Company", type: "text" },
              { name: "rating", label: "Rating (1-5)", type: "number" },
              { name: "active", label: "Active", type: "select", options: ["true", "false"] },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
