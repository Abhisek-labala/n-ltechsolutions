const defaultDate = new Date("2026-01-01T00:00:00.000Z")

export interface ServiceData {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  benefits: string
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface TestimonialData {
  id: string
  quote: string
  author: string
  role: string
  company: string
  rating: number
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ProjectData {
  id: string
  title: string
  category: string
  description: string
  icon: string
  gradient: string
  tags: string
  results: string
  liveUrl?: string
  imageUrl?: string
  neonColor?: string
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface IndustryData {
  id: string
  title: string
  icon: string
  gradient: string
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export const staticServices: ServiceData[] = [
  {
    id: "cm001",
    title: "Website Development",
    description: "We build high-performance, responsive websites using modern frameworks like Next.js, Laravel, and React. From landing pages to complex web applications, we deliver pixel-perfect, SEO-optimized solutions.",
    icon: "Globe",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    benefits: JSON.stringify([
      "SEO-optimized architecture",
      "Responsive & mobile-first design",
      "Sub-2s load times",
      "CMS integration",
      "Ongoing support & maintenance",
    ]),
    order: 1,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cm002",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built with React Native and Flutter. We create seamless, feature-rich apps with beautiful UIs, offline support, and real-time capabilities.",
    icon: "Smartphone",
    gradient: "from-fuchsia-500 via-purple-600 to-pink-500",
    benefits: JSON.stringify([
      "iOS & Android from single codebase",
      "Offline-first architecture",
      "Push notifications & real-time sync",
      "App store deployment",
      "Performance optimization",
    ]),
    order: 2,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cm003",
    title: "CRM & HRMS Solutions",
    description: "Enterprise-grade CRM and HRMS tailored to your business processes. Automate workflows, track performance, and manage your workforce with powerful analytics dashboards.",
    icon: "Users",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    benefits: JSON.stringify([
      "Custom workflow automation",
      "Role-based access control",
      "Real-time analytics dashboard",
      "Leave & attendance management",
      "Payroll integration",
    ]),
    order: 3,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cm004",
    title: "Enterprise Application Development",
    description: "Scalable enterprise applications designed to streamline operations, reduce costs, and improve efficiency. We build robust backend systems with modern architectures.",
    icon: "Building2",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    benefits: JSON.stringify([
      "Microservices architecture",
      "High availability & scalability",
      "API-first design",
      "Legacy system integration",
      "99.9% uptime SLA",
    ]),
    order: 4,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cm005",
    title: "Hospital Management System (HMIS)",
    description: "Comprehensive HMIS covering patient registration, OPD/IPD management, pharmacy, lab, radiology, billing, and reporting. Compliant with Indian healthcare regulations.",
    icon: "HeartPulse",
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    benefits: JSON.stringify([
      "Patient registration & history",
      "OPD/IPD & OT management",
      "Pharmacy & inventory control",
      "Lab & radiology integration",
      "Ayushman Bharat compliant",
    ]),
    order: 5,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cm006",
    title: "ABHA & NHCX Integration",
    description: "Seamless integration with ABHA and NHCX. Enable digital health records, consent management, and paperless claims processing for your healthcare platform.",
    icon: "Fingerprint",
    gradient: "from-violet-600 via-indigo-600 to-cyan-400",
    benefits: JSON.stringify([
      "ABHA number creation & linking",
      "Consent-based health record sharing",
      "NHCX claims submission",
      "HIPAA-compliant architecture",
      "Sandbox & production support",
    ]),
    order: 6,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
]

export const staticTestimonials: TestimonialData[] = [
  {
    id: "ct001",
    quote: "N&L Tech transformed our healthcare patient management into a seamless, role-based platform. Their expertise delivered beyond expectations.",
    author: "Mr. Santosh Kumar Nayak",
    role: "Owner",
    company: "Abhinav Motors",
    rating: 5,
    order: 1,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "ct002",
    quote: "The CRM and coordinator workflow portal they built for us streamlined our operations. We saw immediate efficiency gains across teams.",
    author: "Tarun Rathore",
    role: "Director",
    company: "Hridayampsp",
    rating: 5,
    order: 2,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "ct003",
    quote: "Working with N&L Tech on our HMIS and ABDM integration was remarkable. Their team delivered reliable, secure, and compliant systems.",
    author: "Ch. Satish Kumar",
    role: "Owner",
    company: "Chinnari Medicos",
    rating: 5,
    order: 3,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "ct004",
    quote: "They designed and deployed our high-fashion photography website with incredible speed and visual aesthetics. Top tier development!",
    author: "V.Sunil Kumar",
    role: "Creative Head",
    company: "Studio GFX Photography",
    rating: 5,
    order: 4,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "ct005",
    quote: "Their expertise in fitness technology and mobile applications helped us launch a successful platform for our clients.",
    author: "Yenugula Swamy",
    role: "Founder",
    company: "Rhythm Fitness & Lifestyle",
    rating: 5,
    order: 5,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
]

export const staticProjects: ProjectData[] = [
  {
    id: "cp001",
    title: "Hridayam — Healthcare Patient Support Program (PSP)",
    category: "Healthcare & PSP",
    description: "A specialized cardiac healthcare portal delivering role-based management for Educators, Regional Managers, Digital Educators, Yoga Dieticians, MIS, and Project Managers with real-time patient consultation tracking.",
    icon: "healthcare-tech",
    gradient: "from-[#FF007F] via-[#BD00FF] to-[#00F0FF]",
    neonColor: "#FF007F",
    tags: JSON.stringify(["React.js", "Node.js", "Healthcare IT", "Role-Based Access", "Analytics Dashboard"]),
    results: JSON.stringify(["Multi-role patient tracking", "99.9% clinical system uptime", "Integrated patient care workflows"]),
    liveUrl: "https://hridayampsp.com/",
    imageUrl: "/images/portfolio/hridayam.png",
    order: 1,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cp002",
    title: "Suntulan — Metabolic Journey Healthcare Portal",
    category: "Healthcare & PSP",
    description: "End-to-end metabolic healthcare portal designed for Counselors, Regional & National Coordinators, Digital Counselors, Admins, and Sun Team to guide patients through balanced metabolic health programs.",
    icon: "automation",
    gradient: "from-[#FF6B00] via-[#FAFF00] to-[#00FF88]",
    neonColor: "#FAFF00",
    tags: JSON.stringify(["Next.js", "PostgreSQL", "Healthcare Compliance", "Custom CRM", "Workflow Automation"]),
    results: JSON.stringify(["Streamlined counselor workflow", "Centralized patient monitoring", "Multi-tier coordinator hierarchy"]),
    liveUrl: "https://suntulanpsp.com/",
    imageUrl: "/images/portfolio/suntulan.png",
    order: 2,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cp003",
    title: "Studio GFX — Fine-Art Editorial Wedding Photography",
    category: "Web Development",
    description: "High-fashion editorial photography platform featuring high-performance image galleries, dark neon aesthetic UI, client portal, and automated wedding consultation booking.",
    icon: "web-dev",
    gradient: "from-[#00FF88] via-[#00F0FF] to-[#0070F3]",
    neonColor: "#00FF88",
    tags: JSON.stringify(["Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary CDN", "SEO Optimized"]),
    results: JSON.stringify(["Sub-second gallery load times", "Vibrant neon dark UI aesthetics", "Integrated booking & inquiry portal"]),
    liveUrl: "https://studiogfxwebsite.vercel.app/",
    imageUrl: "/images/portfolio/studiogfx.png",
    order: 3,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cp004",
    title: "Odishan Foods — FMCG Brand & Food Product Platform",
    category: "Web Development",
    description: "Modern brand and product showcase platform for Odishan Foods ('The Taste of New Odisha'), featuring interactive product catalogs, digital distributor outreach, and vibrant brand storytelling.",
    icon: "web-dev",
    gradient: "from-[#E11D48] via-[#FF6B00] to-[#FAFF00]",
    neonColor: "#FF007F",
    tags: JSON.stringify(["Next.js", "Tailwind CSS", "FMCG Portal", "Responsive Design", "Brand Identity"]),
    results: JSON.stringify(["High-performance product showcase", "Modern brand aesthetic", "Optimized mobile experience"]),
    liveUrl: "https://www.odishanfoods.in/",
    imageUrl: "/images/portfolio/odishanfoods.png",
    order: 4,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cp005",
    title: "Abhisek Labala — Full Stack Engineering Portfolio",
    category: "Enterprise & Cloud",
    description: "Interactive portfolio showcasing full-stack enterprise systems, Ayushman Bharat (ABDM) integrated Hospital Management System (HMIS), educational ERPs, and peer-to-peer payment gateways.",
    icon: "software-dev",
    gradient: "from-[#00F0FF] via-[#38BDF8] to-[#BD00FF]",
    neonColor: "#00F0FF",
    tags: JSON.stringify(["React", "Next.js", "Laravel", "ABDM / FHIR", "Docker"]),
    results: JSON.stringify(["10,000+ users served", "99.9% uptime architecture", "Live interactive demos"]),
    liveUrl: "https://abhiseklabalaportfolio-iota.vercel.app/",
    imageUrl: "/images/portfolio/abhiseklabala.png",
    order: 5,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cp006",
    title: "Multi-Specialty HMIS & Ayushman Bharat (ABDM) Suite",
    category: "HMIS & ABDM",
    description: "Enterprise hospital management platform featuring OPD/IPD modules, pharmacy & lab diagnostic synchronization, and seamless national health stack integration with ABHA creation and NHCX claims.",
    icon: "api-integration",
    gradient: "from-[#BD00FF] via-[#6366F1] to-[#00F0FF]",
    neonColor: "#BD00FF",
    tags: JSON.stringify(["FastAPI", "React", "ABDM / ABHA", "NHCX Claims", "FHIR Standards"]),
    results: JSON.stringify(["50% faster registration", "10,000+ ABHA accounts created", "National health stack compliant"]),
    order: 6,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
  {
    id: "cp007",
    title: "Enterprise CRM & Workforce HRMS Solution",
    category: "CRM & HRMS",
    description: "Unified enterprise platform for sales lead management, pipeline analytics, employee attendance, automated payroll, and workflow automation tailored for growing organizations.",
    icon: "crm",
    gradient: "from-[#00F0FF] via-[#00FF88] to-[#38BDF8]",
    neonColor: "#00F0FF",
    tags: JSON.stringify(["Next.js", "PostgreSQL", "Redis", "AWS Cloud", "Role-Based Auth"]),
    results: JSON.stringify(["40% increase in lead conversion", "80% reduction in paperwork", "Real-time analytics"]),
    order: 7,
    active: true,
    createdAt: defaultDate,
    updatedAt: defaultDate,
  },
]

export const staticIndustries: IndustryData[] = [
  { id: "ci001", title: "Healthcare & PSP", icon: "HeartPulse", gradient: "from-rose-500 to-pink-400", order: 1, active: true, createdAt: defaultDate, updatedAt: defaultDate },
  { id: "ci002", title: "Creative & Media", icon: "Globe", gradient: "from-emerald-500 to-teal-400", order: 2, active: true, createdAt: defaultDate, updatedAt: defaultDate },
  { id: "ci003", title: "Enterprise & SaaS", icon: "Building2", gradient: "from-blue-600 to-cyan-400", order: 3, active: true, createdAt: defaultDate, updatedAt: defaultDate },
  { id: "ci004", title: "Fintech & Payments", icon: "Building2", gradient: "from-orange-500 to-red-400", order: 4, active: true, createdAt: defaultDate, updatedAt: defaultDate },
  { id: "ci005", title: "Education & E-Learning", icon: "Users", gradient: "from-purple-600 to-pink-400", order: 5, active: true, createdAt: defaultDate, updatedAt: defaultDate },
  { id: "ci006", title: "E-Commerce", icon: "ShoppingCart", gradient: "from-indigo-500 to-blue-400", order: 6, active: true, createdAt: defaultDate, updatedAt: defaultDate },
]
