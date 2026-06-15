import Link from "next/link"
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Web Development" },
    { href: "/services", label: "Mobile Apps" },
    { href: "/services", label: "CRM & HRMS" },
    { href: "/services", label: "HMIS & Healthcare" },
    { href: "/services", label: "Cloud & API" },
    { href: "/services", label: "SEO & Marketing" },
  ],
}

const socialLinks = [
  { href: "#", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaFacebookF, label: "Facebook" },
  { href: "#", icon: FaTwitter, label: "Twitter" },
]

export default function Footer() {
  return (
    <footer className="bg-navy dark:bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 blur-[128px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/3 blur-[96px] rounded-full" />
      </div>

      <div className="section-padding pt-20 pb-12 relative">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="N&L Tech Solutions"
                width={160}
                height={42}
                className="h-9 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transforming Ideas Into Technology — empowering businesses with innovative software, healthcare IT, and enterprise solutions.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-teal flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon size={13} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-teal mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-teal mb-5">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-teal mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+918328826667" className="text-gray-300 hover:text-teal text-sm transition-colors">
                  +91 83288 26667
                </a>
              </li>
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:contact@nltechsolutions.in" className="text-gray-300 hover:text-teal text-sm transition-colors">
                  contact@nltechsolutions.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} N&L Tech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/" className="text-gray-500 hover:text-teal text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500 hover:text-teal text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
