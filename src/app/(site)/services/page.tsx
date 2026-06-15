import type { Metadata } from "next"
import { getActiveServices } from "@/actions/services"
import ServicesContent from "./ServicesContent"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our technology services including Website Development, Mobile Apps, CRM, HRMS, HMIS, ABHA & NHCX Integration, and more.",
}

export default async function ServicesPage() {
  const services = await getActiveServices()
  return <ServicesContent services={services} />
}
