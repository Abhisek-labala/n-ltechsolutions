import Hero from "@/components/sections/Hero"
import TrustBar from "@/components/sections/TrustBar"
import ServicesSection from "@/components/sections/Services"
import ProcessTimeline from "@/components/sections/ProcessTimeline"
import Products from "@/components/sections/Products"
import Industries from "@/components/sections/Industries"
import TechStack from "@/components/sections/TechStack"
import TestimonialsSection from "@/components/sections/Testimonials"
import CTASection from "@/components/sections/CTASection"
import { getActiveServices } from "@/actions/services"
import { getActiveTestimonials } from "@/actions/testimonials"
import { getActiveProjects } from "@/actions/portfolio"

export default async function HomePage() {
  const [services, testimonials, projects] = await Promise.all([
    getActiveServices(),
    getActiveTestimonials(),
    getActiveProjects(),
  ])

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection services={services} />
      <ProcessTimeline />
      <Products projects={projects} />
      <Industries />
      <TechStack />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  )
}
