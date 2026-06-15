import { getProjects } from "@/actions/portfolio"
import PortfolioManager from "./PortfolioManager"

export default async function PortfolioPage() {
  const projects = await getProjects()
  return <PortfolioManager projects={projects} />
}
