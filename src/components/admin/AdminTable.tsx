"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, X } from "lucide-react"

type Field = {
  name: string
  label: string
  type: "text" | "textarea" | "number" | "select"
  required?: boolean
  placeholder?: string
  options?: string[]
}

type Column = {
  key: string
  label: string
  width?: number
}

type Props<T extends { id: string }> = {
  columns: Column[]
  data: T[]
  renderRow: (item: T) => React.ReactNode
  editAction: (id: string, formData: FormData) => Promise<void>
  deleteAction: (id: string) => Promise<void>
  createAction: (formData: FormData) => Promise<void>
  fields: Field[]
}

export default function AdminTable<T extends { id: string }>({
  columns,
  data,
  renderRow,
  editAction,
  deleteAction,
  createAction,
  fields,
}: Props<T>) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showCreate, setShowCreate] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setShowCreate(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy hover:bg-navy-light text-white dark:bg-teal dark:hover:bg-teal-dark dark:text-navy text-xs font-medium transition-all"
        >
          <Plus size={14} />
          Add New
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <form
          action={async (fd) => {
            await createAction(fd)
            setShowCreate(false)
          }}
          className="mb-6 p-4 rounded-xl border border-teal/20 bg-teal/5 dark:bg-teal/5 space-y-3"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-navy dark:text-white">New Entry</span>
            <button type="button" onClick={() => setShowCreate(false)} className="text-gray-400 hover:text-gray-600">
              <X size={14} />
            </button>
          </div>
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50 min-h-[80px]"
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  required={field.required}
                  className="w-full h-9 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
                >
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type === "number" ? "number" : "text"}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full h-9 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
                />
              )}
            </div>
          ))}
          <button type="submit" className="w-full h-9 rounded-lg bg-navy hover:bg-navy-light text-white dark:bg-teal dark:hover:bg-teal-dark dark:text-navy text-xs font-medium transition-all">
            Create
          </button>
        </form>
      )}

      {/* Edit form */}
      {editingId && (
        <form
          action={async (fd) => {
            await editAction(editingId, fd)
            setEditingId(null)
          }}
          className="mb-6 p-4 rounded-xl border border-teal/20 bg-teal/5 space-y-3"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-navy dark:text-white">Editing</span>
            <button type="button" onClick={() => setEditingId(null)} className="text-gray-400 hover:text-gray-600">
              <X size={14} />
            </button>
          </div>
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  defaultValue={""}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50 min-h-[80px]"
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  defaultValue={field.options?.[0]}
                  className="w-full h-9 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
                >
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type === "number" ? "number" : "text"}
                  name={field.name}
                  defaultValue={""}
                  placeholder={field.placeholder}
                  className="w-full h-9 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
                />
              )}
            </div>
          ))}
          <button type="submit" className="w-full h-9 rounded-lg bg-navy hover:bg-navy-light text-white dark:bg-teal dark:hover:bg-teal-dark dark:text-navy text-xs font-medium transition-all">
            Save Changes
          </button>
        </form>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 dark:border-white/5">
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={col.width ? { width: col.width } : undefined}>
                  {col.label}
                </th>
              ))}
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: 80 }}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-white/5">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                {renderRow(item)}
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => setEditingId(item.id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-teal hover:bg-teal/5 transition-all"
                      title="Edit"
                    >
                      <Pencil size={13} />
                    </button>
                    <button
                      onClick={() => setDeletingId(item.id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
                      title="Delete"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete confirmation */}
      {deletingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white dark:bg-navy rounded-xl p-6 max-w-sm mx-4 shadow-xl border border-gray-100 dark:border-white/5">
            <h3 className="text-sm font-semibold text-navy dark:text-white mb-2">Delete this item?</h3>
            <p className="text-xs text-gray-500 mb-4">This action cannot be undone.</p>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setDeletingId(null)} className="px-4 py-2 rounded-lg text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
                Cancel
              </button>
              <form action={async () => {
                await deleteAction(deletingId)
                setDeletingId(null)
              }}>
                <button type="submit" className="px-4 py-2 rounded-lg text-xs bg-red-500 hover:bg-red-600 text-white transition-all">
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
