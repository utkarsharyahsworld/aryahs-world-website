import { COMPANY_INFO } from '../constants';

export const company = {
  name: COMPANY_INFO.name,
  tagline: "Innovative IT Solutions for Modern Businesses",
  description:
    "Aryahs World Venture is a leading software development and IT consulting firm specializing in digital transformation, enterprise solutions, and custom software development.",
  founded: 2015,
  headquarter: "India",
  vision:
    "To empower businesses worldwide through cutting-edge technology and innovative solutions.",
  mission:
    "Deliver exceptional IT solutions that drive growth, efficiency, and competitive advantage for our clients.",
  
  // ✅ FIX 1: Pulling from constants (Single Source of Truth)
  contact: {
    email: COMPANY_INFO.email,
    phone: COMPANY_INFO.phone,
    address: COMPANY_INFO.address,
  },
  
  social: {
    linkedin: COMPANY_INFO.linkedin,
    twitter: "https://twitter.com/aryahsworld",
    github: "https://github.com/aryahsworld",
  },
  
  offices: [
    {
      city: "Bengaluru",
      country: "India",
      indicator: "🇮🇳",
      address: "Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka",
      phone: COMPANY_INFO.phone // using main line for HQ
    },
    {
      city: "Dubai",
      country: "UAE",
      indicator: "🇦🇪",
      address: "Business Bay, Dubai, United Arab Emirates",
      phone: COMPANY_INFO.phoneSecondary // using secondary line for Dubai
    },
    {
      city: "London",
      country: "United Kingdom",
      indicator: "🇬🇧",
      address: "Canary Wharf, London, United Kingdom",
      phone: "+44-20-0000-0000" // Placeholder until you add UK phone to constants
    },
    {
      city: "San Francisco",
      country: "United States",
      indicator: "🇺🇸",
      address: "SoMa, San Francisco, California",
      phone: "+1-415-000-0000" // Placeholder until you add US phone to constants
    }
  ],
  
  quickLinks: [
    { id: "linkedin", label: "LinkedIn", href: COMPANY_INFO.linkedin, kind: "external" },
    { id: "email", label: "Email", href: `mailto:${COMPANY_INFO.email}`, kind: "mailto" },
    { id: "portfolio", label: "Portfolio", href: "/projects", kind: "internal" }
  ],
  
  // Jobs remain static for now (or could be fetched from API later)
  jobs: [
    {
      id: "fe-01",
      title: "Frontend Engineer",
      department: "Engineering",
      location: "Bengaluru, India",
      type: "Full-time",
      level: "Mid",
      tags: ["React", "Tailwind", "Vite"],
      description: "Build performant, accessible UIs for enterprise products."
    },
    {
      id: "be-01",
      title: "Backend Engineer",
      department: "Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      level: "Senior",
      tags: ["Node.js", "PostgreSQL", "Cloud"],
      description: "Design scalable APIs with security and reliability in mind."
    },
    {
      id: "fs-01",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Contract",
      level: "Mid",
      tags: ["React", "Node.js", "AWS"],
      description: "Own end-to-end features across frontend and backend."
    },
    {
      id: "ux-01",
      title: "UI/UX Designer",
      department: "Design",
      location: "London, United Kingdom",
      type: "Full-time",
      level: "Mid",
      tags: ["Figma", "Design Systems", "Prototyping"],
      description: "Create intuitive experiences with clean visual design."
    },
    {
      id: "pm-01",
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, United States",
      type: "Full-time",
      level: "Senior",
      tags: ["Roadmaps", "Stakeholders", "Analytics"],
      description: "Drive product outcomes through discovery and execution."
    }
  ]
};