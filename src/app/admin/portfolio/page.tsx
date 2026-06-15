import { getProjects, createProject, updateProject, deleteProject } from "@/actions/portfolio"
import AdminTable from "@/components/admin/AdminTable"

const iconOptions = ["Users", "Building2", "HeartPulse", "Fingerprint", "Globe", "ShoppingCart", "Smartphone", "FileText"]

export default async function PortfolioPage() {
  const projects = await getProjects()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-navy dark:text-white">Portfolio</h1>
          <p className="text-sm text-gray-500 mt-0.5">{projects.length} projects</p>
        </div>
      </div>

      <div className="bg-white dark:bg-navy rounded-xl border border-gray-100 dark:border-white/5">
        <div className="p-5 border-b border-gray-100 dark:border-white/5">
          <h2 className="text-sm font-semibold text-navy dark:text-white">All Projects</h2>
        </div>
        <div className="p-5">
          <AdminTable
            columns={[{ key: "title", label: "Title" }, { key: "category", label: "Category" }, { key: "active", label: "Active", width: 60 }]}
            data={projects}
            renderRow={(p) => (
              <>
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-navy dark:text-white">{p.title}</p>
                  <p className="text-xs text-gray-400 truncate max-w-md">{p.description}</p>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">{p.category}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${p.active ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400" : "bg-gray-100 dark:bg-white/5 text-gray-500"}`}>
                    {p.active ? "Active" : "Hidden"}
                  </span>
                </td>
              </>
            )}
            editAction={async (id, formData) => {
              "use server"
              await updateProject(id, {
                title: formData.get("title") as string,
                category: formData.get("category") as string,
                description: formData.get("description") as string,
                icon: formData.get("icon") as string || "Users",
                gradient: formData.get("gradient") as string || "from-blue-600 to-cyan-500",
                active: formData.get("active") === "true",
              })
            }}
            deleteAction={async (id) => {
              "use server"
              await deleteProject(id)
            }}
            createAction={async (formData) => {
              "use server"
              await createProject({
                title: formData.get("title") as string,
                category: formData.get("category") as string || "",
                description: formData.get("description") as string,
                icon: formData.get("icon") as string || "Users",
                gradient: formData.get("gradient") as string || "from-blue-600 to-cyan-500",
                tags: [],
                results: [],
                order: projects.length + 1,
              })
            }}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "category", label: "Category", type: "text" },
              { name: "description", label: "Description", type: "textarea", required: true },
              { name: "icon", label: "Icon", type: "select", options: iconOptions },
              { name: "gradient", label: "Gradient", type: "text", placeholder: "from-blue-600 to-cyan-500" },
              { name: "active", label: "Active", type: "select", options: ["true", "false"] },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
