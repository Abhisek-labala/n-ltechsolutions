import type { Metadata } from "next"
import { getActiveProjects } from "@/actions/portfolio"
import PortfolioContent from "./PortfolioContent"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful projects including Enterprise CRM, HRMS, Hospital Management Systems, Healthcare Integration, and more.",
}

export default async function PortfolioPage() {
  const projects = await getActiveProjects()
  return <PortfolioContent projects={projects} />
}
