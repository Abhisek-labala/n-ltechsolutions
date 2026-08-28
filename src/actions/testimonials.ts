import { staticTestimonials } from "@/data/siteData"

export async function getTestimonials() {
  return staticTestimonials
}

export async function getActiveTestimonials() {
  return staticTestimonials.filter((t) => t.active)
}

export async function createTestimonial(data: {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  order: number
}) {
  return {
    id: `ct_${Date.now()}`,
    ...data,
    active: true,
  }
}

export async function updateTestimonial(
  id: string,
  data: Partial<{
    quote: string
    author: string
    role: string
    company: string
    rating: number
    order: number
    active: boolean
  }>
) {
  return { id, ...data }
}

export async function deleteTestimonial(_id: string) {
  return true
}
