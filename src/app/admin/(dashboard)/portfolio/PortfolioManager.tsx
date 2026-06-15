"use client"

import { useCallback } from "react"
import { createProject, updateProject, deleteProject } from "@/actions/portfolio"
import AdminTable from "@/components/admin/AdminTable"

const techImages = [
  "ai-ml", "api-integration", "ar-vr", "automation", "big-data",
  "blockchain", "blockchain-alt", "cloud-computing", "crm", "cybersecurity",
  "data-analytics", "database", "devops", "digital-marketing", "ecommerce",
  "enterprise", "fintech", "gaming", "healthcare-tech", "iot",
  "microservices", "mobile-dev", "networking", "robotics", "server-infra",
  "software-dev", "testing-qa", "ui-ux", "web-dev",
]

type ProjectData = {
  id: string
  title: string
  category: string
  description: string
  icon: string
  gradient: string
  tags: string
  results: string
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export default function PortfolioManager({ projects: initial }: { projects: ProjectData[] }) {
  const editAction = useCallback(async (id: string, formData: FormData) => {
    await updateProject(id, {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      icon: formData.get("icon") as string || "ai-ml",
      gradient: formData.get("gradient") as string || "from-blue-600 to-cyan-500",
      active: formData.get("active") === "true",
    })
  }, [])

  const deleteAction = useCallback(async (id: string) => {
    await deleteProject(id)
  }, [])

  const createAction = useCallback(async (formData: FormData) => {
    await createProject({
      title: formData.get("title") as string,
      category: formData.get("category") as string || "",
      description: formData.get("description") as string,
      icon: formData.get("icon") as string || "ai-ml",
      gradient: formData.get("gradient") as string || "from-blue-600 to-cyan-500",
      tags: [],
      results: [],
      order: initial.length + 1,
    })
  }, [initial.length])

  const renderRow = useCallback((p: ProjectData) => (
    <>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={`/images/tech/${p.icon}.svg`} alt={p.icon} className="w-8 h-8 rounded-md shrink-0" />
          <div>
            <p className="text-sm font-medium text-navy dark:text-white">{p.title}</p>
            <p className="text-xs text-gray-400 truncate max-w-md">{p.description}</p>
          </div>
        </div>
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
  ), [])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-navy dark:text-white">Portfolio</h1>
          <p className="text-sm text-gray-500 mt-0.5">{initial.length} projects</p>
        </div>
      </div>

      <div className="bg-white dark:bg-navy rounded-xl border border-gray-100 dark:border-white/5">
        <div className="p-5 border-b border-gray-100 dark:border-white/5">
          <h2 className="text-sm font-semibold text-navy dark:text-white">All Projects</h2>
        </div>
        <div className="p-5">
          <AdminTable
            columns={[{ key: "title", label: "Title" }, { key: "category", label: "Category" }, { key: "active", label: "Active", width: 60 }]}
            data={initial}
            renderRow={renderRow}
            editAction={editAction}
            deleteAction={deleteAction}
            createAction={createAction}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "category", label: "Category", type: "text" },
              { name: "description", label: "Description", type: "textarea", required: true },
              { name: "icon", label: "Tech Image", type: "image-grid", options: techImages },
              { name: "gradient", label: "Gradient", type: "text", placeholder: "from-blue-600 to-cyan-500" },
              { name: "active", label: "Active", type: "select", options: ["true", "false"] },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
