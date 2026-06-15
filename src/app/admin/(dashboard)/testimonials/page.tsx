import { getTestimonials } from "@/actions/testimonials"
import TestimonialsManager from "./TestimonialsManager"

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()
  return <TestimonialsManager testimonials={testimonials} />
}
