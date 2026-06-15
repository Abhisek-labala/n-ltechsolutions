// @ts-nocheck
import { createClient } from "@libsql/client"
import * as bcrypt from "bcryptjs"

const now = new Date().toISOString()
const db = createClient({ url: process.env["DATABASE_URL"] ?? "file:./dev.db" })

async function main() {
  const existing = await db.execute("SELECT COUNT(*) as count FROM Service")
  if (existing.rows[0].count > 0) {
    console.log("Database already seeded — skipping.")
    return
  }

  await db.executeMultiple(`
    INSERT INTO Service (id, title, description, icon, gradient, benefits, "order", active, updatedAt)
    VALUES
    ('cm001', 'Website Development', 'We build high-performance, responsive websites using modern frameworks like Next.js, Laravel, and React. From landing pages to complex web applications, we deliver pixel-perfect, SEO-optimized solutions.', 'Globe', 'from-blue-600 to-cyan-400', '["SEO-optimized architecture","Responsive & mobile-first design","Sub-2s load times","CMS integration","Ongoing support & maintenance"]', 1, 1, '${now}'),
    ('cm002', 'Mobile App Development', 'Native and cross-platform mobile applications built with React Native and Flutter. We create seamless, feature-rich apps with beautiful UIs, offline support, and real-time capabilities.', 'Smartphone', 'from-purple-600 to-pink-400', '["iOS & Android from single codebase","Offline-first architecture","Push notifications & real-time sync","App store deployment","Performance optimization"]', 2, 1, '${now}'),
    ('cm003', 'CRM & HRMS Solutions', 'Enterprise-grade CRM and HRMS tailored to your business processes. Automate workflows, track performance, and manage your workforce with powerful analytics dashboards.', 'Users', 'from-emerald-500 to-teal-400', '["Custom workflow automation","Role-based access control","Real-time analytics dashboard","Leave & attendance management","Payroll integration"]', 3, 1, '${now}'),
    ('cm004', 'Enterprise Application Development', 'Scalable enterprise applications designed to streamline operations, reduce costs, and improve efficiency. We build robust backend systems with modern architectures.', 'Building2', 'from-orange-500 to-red-400', '["Microservices architecture","High availability & scalability","API-first design","Legacy system integration","99.9% uptime SLA"]', 4, 1, '${now}'),
    ('cm005', 'Hospital Management System (HMIS)', 'Comprehensive HMIS covering patient registration, OPD/IPD management, pharmacy, lab, radiology, billing, and reporting. Compliant with Indian healthcare regulations.', 'HeartPulse', 'from-rose-500 to-pink-400', '["Patient registration & history","OPD/IPD & OT management","Pharmacy & inventory control","Lab & radiology integration","Ayushman Bharat compliant"]', 5, 1, '${now}'),
    ('cm006', 'ABHA & NHCX Integration', 'Seamless integration with ABHA and NHCX. Enable digital health records, consent management, and paperless claims processing for your healthcare platform.', 'Fingerprint', 'from-indigo-500 to-blue-400', '["ABHA number creation & linking","Consent-based health record sharing","NHCX claims submission","HIPAA-compliant architecture","Sandbox & production support"]', 6, 1, '${now}');

    INSERT INTO Testimonial (id, quote, author, role, company, rating, "order", active, updatedAt)
    VALUES
    ('ct001', 'N&L Tech transformed our outdated systems into a modern, efficient platform. Their team understood our unique healthcare requirements and delivered beyond expectations.', 'Dr. Sanjay Mehta', 'Medical Director', 'Apollo Healthcare', 5, 1, 1, '${now}'),
    ('ct002', 'The CRM solution they built for us streamlined our entire sales process. We have seen a 40% increase in lead conversion within the first quarter.', 'Priya Sharma', 'VP of Sales', 'TechVista Corp', 5, 2, 1, '${now}'),
    ('ct003', 'Working with N&L Tech on our HMIS implementation was seamless. Their expertise in healthcare compliance and data security gave us complete confidence.', 'Rajesh Kumar', 'CEO', 'MediCare Hospitals', 5, 3, 1, '${now}'),
    ('ct004', 'They helped us integrate ABHA and NHCX into our platform in record time. The team was professional, responsive, and highly knowledgeable.', 'Ananya Patel', 'CTO', 'HealthBridge Solutions', 5, 4, 1, '${now}'),
    ('ct005', 'Our e-commerce platform built by N&L Tech handles 50K+ daily visitors without a hitch. The attention to UX detail is remarkable.', 'Vikram Singh', 'Founder', 'ShopIndia Online', 4, 5, 1, '${now}');

    INSERT INTO Project (id, title, category, description, icon, gradient, tags, results, "order", active, updatedAt)
    VALUES
    ('cp001', 'Enterprise CRM Platform', 'CRM', 'A full-featured CRM platform with lead management, pipeline tracking, analytics dashboards, and automated email campaigns.', 'Users', 'from-blue-600 to-cyan-400', '["React","Node.js","PostgreSQL","Redis","Docker"]', '["40% increase in lead conversion","60% reduction in manual data entry","3x faster sales cycle"]', 1, 1, '${now}'),
    ('cp002', 'HRMS for 5000+ Employees', 'HRMS', 'Comprehensive HRMS covering attendance, leave management, payroll, performance reviews, and employee self-service portal.', 'Users', 'from-emerald-500 to-teal-400', '["Next.js","Laravel","MySQL","AWS","Redis"]', '["80% reduction in HR paperwork","Real-time attendance tracking","Automated payroll processing"]', 2, 1, '${now}'),
    ('cp003', 'Multi-Specialty HMIS', 'HMIS', 'Hospital Management System for a 300-bed multi-specialty hospital with OPD, IPD, OT, pharmacy, lab, billing, and Ayushman Bharat compliance.', 'HeartPulse', 'from-rose-500 to-pink-400', '["React","Python","FastAPI","PostgreSQL","Docker"]', '["50% faster patient registration","Centralized digital health records","Seamless insurance claims processing"]', 3, 1, '${now}'),
    ('cp004', 'ABHA & NHCX Integration Suite', 'ABHA & NHCX', 'End-to-end integration solution for ABHA creation, consent management, and NHCX claims submission for healthcare platforms.', 'Fingerprint', 'from-indigo-500 to-blue-400', '["Node.js","Express","MongoDB","HIPAA","FHIR"]', '["10,000+ ABHA accounts created","Paperless claims processing","HIPAA-compliant architecture"]', 4, 1, '${now}'),
    ('cp005', 'High-Traffic E-Commerce Platform', 'E-Commerce', 'Scalable e-commerce platform handling 50K+ daily visitors with product catalog, cart, payments, order management, and real-time inventory.', 'ShoppingCart', 'from-orange-500 to-red-400', '["Next.js","Stripe","PostgreSQL","Redis","AWS"]', '["99.9% uptime","Sub-1s page loads","35% increase in conversion rate"]', 5, 1, '${now}'),
    ('cp006', 'Government Web Portal', 'Web Development', 'A modern, accessible web portal for a state government department with content management, citizen services, and real-time dashboards.', 'Globe', 'from-purple-600 to-pink-400', '["Next.js","TypeScript","PostgreSQL","Docker","Tailwind"]', '["WCAG 2.1 AA compliant","2M+ monthly visitors","Multi-language support"]', 6, 1, '${now}');

    INSERT INTO Industry (id, title, icon, gradient, "order", active, updatedAt)
    VALUES
    ('ci001', 'Healthcare', 'HeartPulse', 'from-rose-500 to-pink-400', 1, 1, '${now}'),
    ('ci002', 'E-Commerce', 'ShoppingCart', 'from-orange-500 to-red-400', 2, 1, '${now}'),
    ('ci003', 'Finance & Fintech', 'Building2', 'from-emerald-500 to-teal-400', 3, 1, '${now}'),
    ('ci004', 'Education', 'Users', 'from-blue-600 to-cyan-400', 4, 1, '${now}'),
    ('ci005', 'Logistics & Supply Chain', 'Globe', 'from-purple-600 to-pink-400', 5, 1, '${now}'),
    ('ci006', 'Government & Public Sector', 'Building2', 'from-indigo-500 to-blue-400', 6, 1, '${now}');

    INSERT INTO SiteSetting (id, key, value, updatedAt)
    VALUES
    ('cs001', 'company_name', 'N&L Tech Solutions', '${now}'),
    ('cs002', 'tagline', 'We Build Your Digital Future', '${now}'),
    ('cs003', 'hero_title', 'We Build Digital Solutions That Transform Healthcare & Enterprise', '${now}'),
    ('cs004', 'hero_subtitle', 'From concept to deployment, we deliver premium technology solutions — web, mobile, CRM, HRMS, and healthcare systems — tailored for Indian enterprises.', '${now}'),
    ('cs005', 'about_title', 'About N&L Tech Solutions', '${now}'),
    ('cs006', 'about_content', 'We are a team of passionate technologists dedicated to building world-class digital solutions for businesses in India and beyond.', '${now}'),
    ('cs007', 'email', 'hello@nltechsolutions.com', '${now}'),
    ('cs008', 'phone', '+91 98765 43210', '${now}'),
    ('cs009', 'address', 'Bengaluru, Karnataka, India', '${now}'),
    ('cs010', 'stats_projects', '50+', '${now}'),
    ('cs011', 'stats_clients', '30+', '${now}'),
    ('cs012', 'stats_experience', '5+', '${now}');
  `)

  const password = await bcrypt.hash(process.env["ADMIN_PASSWORD"] || "N&L@2026Admin", 12)
  const username = process.env["ADMIN_USERNAME"] || "admin"
  await db.execute({
    sql: "INSERT INTO Admin (id, username, password) VALUES (?, ?, ?)",
    args: ["ca001", username, password],
  })

  console.log("Database seeded successfully!")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
