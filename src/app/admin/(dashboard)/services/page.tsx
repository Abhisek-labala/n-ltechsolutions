import { getServices } from "@/actions/services"
import ServicesManager from "./ServicesManager"

export default async function ServicesPage() {
  const services = await getServices()
  return <ServicesManager services={services} />
}
