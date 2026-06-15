"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getEnquiries() {
  return prisma.enquiry.findMany({ orderBy: { createdAt: "desc" } })
}

export async function createEnquiry(data: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}) {
  const enquiry = await prisma.enquiry.create({ data })
  revalidatePath("/admin/enquiries")
  return enquiry
}

export async function markEnquiryRead(id: string) {
  await prisma.enquiry.update({ where: { id }, data: { read: true } })
  revalidatePath("/admin/enquiries")
}

export async function deleteEnquiry(id: string) {
  await prisma.enquiry.delete({ where: { id } })
  revalidatePath("/admin/enquiries")
}
