"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getServices() {
  return prisma.service.findMany({ orderBy: { order: "asc" } })
}

export async function getActiveServices() {
  return prisma.service.findMany({
    where: { active: true },
    orderBy: { order: "asc" },
  })
}

export async function createService(data: {
  title: string
  description: string
  icon: string
  gradient: string
  benefits: string[]
  order: number
}) {
  const service = await prisma.service.create({
    data: {
      ...data,
      benefits: JSON.stringify(data.benefits),
    },
  })
  revalidatePath("/")
  revalidatePath("/admin/services")
  return service
}

export async function updateService(
  id: string,
  data: {
    title?: string
    description?: string
    icon?: string
    gradient?: string
    benefits?: string[]
    order?: number
    active?: boolean
  }
) {
  const updateData: Record<string, unknown> = { ...data }
  if (data.benefits) updateData.benefits = JSON.stringify(data.benefits)
  const service = await prisma.service.update({ where: { id }, data: updateData })
  revalidatePath("/")
  revalidatePath("/admin/services")
  return service
}

export async function deleteService(id: string) {
  await prisma.service.delete({ where: { id } })
  revalidatePath("/")
  revalidatePath("/admin/services")
}
