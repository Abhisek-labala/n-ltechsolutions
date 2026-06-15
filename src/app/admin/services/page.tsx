import { getServices, createService, updateService, deleteService } from "@/actions/services"
import AdminTable from "@/components/admin/AdminTable"

const iconOptions = ["Globe", "Smartphone", "Users", "Building2", "HeartPulse", "Fingerprint", "FileText", "Search", "BarChart3", "Cloud", "Bot", "Server"]

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-navy dark:text-white">Services</h1>
          <p className="text-sm text-gray-500 mt-0.5">{services.length} services</p>
        </div>
      </div>

      <div className="bg-white dark:bg-navy rounded-xl border border-gray-100 dark:border-white/5">
        <div className="p-5 border-b border-gray-100 dark:border-white/5">
          <h2 className="text-sm font-semibold text-navy dark:text-white">All Services</h2>
        </div>
        <div className="p-5">
          <AdminTable
            columns={[
              { key: "order", label: "#", width: 40 },
              { key: "title", label: "Title" },
              { key: "active", label: "Active", width: 60 },
            ]}
            data={services}
            renderRow={(s) => (
              <>
                <td className="px-4 py-3 text-xs text-gray-500">{s.order}</td>
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-navy dark:text-white">{s.title}</p>
                  <p className="text-xs text-gray-400 truncate max-w-md">{s.description}</p>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${s.active ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400" : "bg-gray-100 dark:bg-white/5 text-gray-500"}`}>
                    {s.active ? "Active" : "Hidden"}
                  </span>
                </td>
              </>
            )}
            editAction={async (id, formData) => {
              "use server"
              await updateService(id, {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                icon: formData.get("icon") as string,
                gradient: formData.get("gradient") as string,
                order: parseInt(formData.get("order") as string) || 0,
                active: formData.get("active") === "true",
              })
            }}
            deleteAction={async (id) => {
              "use server"
              await deleteService(id)
            }}
            createAction={async (formData) => {
              "use server"
              await createService({
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                icon: formData.get("icon") as string || "Globe",
                gradient: formData.get("gradient") as string || "from-blue-500 to-cyan-500",
                benefits: [],
                order: services.length + 1,
              })
            }}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea", required: true },
              { name: "icon", label: "Icon", type: "select", options: iconOptions },
              { name: "gradient", label: "Gradient", type: "text", placeholder: "from-blue-500 to-cyan-500" },
              { name: "order", label: "Order", type: "number" },
              { name: "active", label: "Active", type: "select", options: ["true", "false"] },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
