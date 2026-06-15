import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CustomCursor from "@/components/ui/CustomCursor"
import BackToTop from "@/components/ui/BackToTop"
import WhatsAppButton from "@/components/ui/WhatsAppButton"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  )
}
