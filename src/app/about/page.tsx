import type { Metadata } from "next"
import AboutContent from "./AboutContent"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about N&L Tech Solutions - a technology-driven company delivering innovative software solutions for businesses, healthcare organizations and enterprises.",
}

export default function AboutPage() {
  return <AboutContent />
}
