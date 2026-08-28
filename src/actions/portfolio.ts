import { staticProjects } from "@/data/siteData"

export async function getProjects() {
  return staticProjects
}

export async function getActiveProjects() {
  return staticProjects.filter((p) => p.active)
}

export async function createProject(data: {
  title: string
  category: string
  description: string
  icon: string
  gradient: string
  tags: string[]
  results: string[]
  order: number
}) {
  return {
    id: `cp_${Date.now()}`,
    ...data,
    tags: JSON.stringify(data.tags),
    results: JSON.stringify(data.results),
    active: true,
  }
}

export async function updateProject(
  id: string,
  data: Partial<{
    title: string
    category: string
    description: string
    icon: string
    gradient: string
    tags: string[]
    results: string[]
    order: number
    active: boolean
  }>
) {
  return { id, ...data }
}

export async function deleteProject(_id: string) {
  return true
}
