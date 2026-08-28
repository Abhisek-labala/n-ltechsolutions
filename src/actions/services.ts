import { staticServices } from "@/data/siteData"

export async function getServices() {
  return staticServices
}

export async function getActiveServices() {
  return staticServices.filter((s) => s.active)
}

export async function createService(data: {
  title: string
  description: string
  icon: string
  gradient: string
  benefits: string[]
  order: number
}) {
  const newService = {
    id: `cm_${Date.now()}`,
    ...data,
    benefits: JSON.stringify(data.benefits),
    active: true,
  }
  return newService
}

export async function updateService(
  id: string,
  data: Partial<{
    title: string
    description: string
    icon: string
    gradient: string
    benefits: string[]
    order: number
    active: boolean
  }>
) {
  return { id, ...data }
}

export async function deleteService(_id: string) {
  return true
}
