"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getProjects() {
  return prisma.project.findMany({ orderBy: { order: "asc" } })
}

export async function getActiveProjects() {
  return prisma.project.findMany({
    where: { active: true },
    orderBy: { order: "asc" },
  })
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
  const project = await prisma.project.create({
    data: {
      ...data,
      tags: JSON.stringify(data.tags),
      results: JSON.stringify(data.results),
    },
  })
  revalidatePath("/")
  revalidatePath("/admin/portfolio")
  return project
}

export async function updateProject(
  id: string,
  data: {
    title?: string
    category?: string
    description?: string
    icon?: string
    gradient?: string
    tags?: string[]
    results?: string[]
    order?: number
    active?: boolean
  }
) {
  const updateData: Record<string, unknown> = { ...data }
  if (data.tags) updateData.tags = JSON.stringify(data.tags)
  if (data.results) updateData.results = JSON.stringify(data.results)
  const project = await prisma.project.update({ where: { id }, data: updateData })
  revalidatePath("/")
  revalidatePath("/admin/portfolio")
  return project
}

export async function deleteProject(id: string) {
  await prisma.project.delete({ where: { id } })
  revalidatePath("/")
  revalidatePath("/admin/portfolio")
}
