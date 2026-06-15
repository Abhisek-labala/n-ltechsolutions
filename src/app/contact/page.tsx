import type { Metadata } from "next"
import ContactContent from "./ContactContent"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with N&L Tech Solutions. Call us at +91 83288 26667 or email contact@nltechsolutions.in for a free consultation.",
}

export default function ContactPage() {
  return <ContactContent />
}
