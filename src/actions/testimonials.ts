"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getTestimonials() {
  return prisma.testimonial.findMany({ orderBy: { order: "asc" } })
}

export async function getActiveTestimonials() {
  return prisma.testimonial.findMany({
    where: { active: true },
    orderBy: { order: "asc" },
  })
}

export async function createTestimonial(data: {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  order: number
}) {
  const testimonial = await prisma.testimonial.create({ data })
  revalidatePath("/")
  revalidatePath("/admin/testimonials")
  return testimonial
}

export async function updateTestimonial(
  id: string,
  data: {
    quote?: string
    author?: string
    role?: string
    company?: string
    rating?: number
    order?: number
    active?: boolean
  }
) {
  const testimonial = await prisma.testimonial.update({ where: { id }, data })
  revalidatePath("/")
  revalidatePath("/admin/testimonials")
  return testimonial
}

export async function deleteTestimonial(id: string) {
  await prisma.testimonial.delete({ where: { id } })
  revalidatePath("/")
  revalidatePath("/admin/testimonials")
}
