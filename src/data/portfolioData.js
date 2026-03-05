import {
  FaPhp,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaDatabase,
  FaGolang,
  FaStripe,
  FaPaypal,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiCodeigniter } from "react-icons/si";

export const personalInfo = {
  name: "Mahnoor Zulfiqar",
  title: "Full-Stack Backend Developer",
  tagline: "Building scalable web & enterprise systems with ~5 years of expertise",
  bio: [
    `Results-driven Full-Stack Backend Developer with approximately 5 years of hands-on experience designing, building, and optimizing scalable web and enterprise systems. My core strengths lie in PHP, Laravel, and Golang, with deep expertise in architecting RESTful APIs, integrating payment gateways (Stripe, PayPal), and driving performance improvements that have cut query times by up to 40%.`,
    `I've delivered production-grade solutions across healthcare, e-commerce, EdTech, and network management domains, from a Zabbix-based NMS monitoring 1,000+ devices to learning platforms serving 10,000+ users. Currently sharpening my edge with a Master's in Information Security, I bring a security-first mindset to every system I build.`,
  ],
  email: "mahnoor.engineer@gmail.com",
  phone: "+92 316 5420343",
  linkedin: "https://linkedin.com/in/mahnoor-zulfiqar-dev",
  github: "https://github.com/mahnoorzulfiqar",
};

export const experiences = [
  {
    role: "Senior PHP Developer",
    company: "Extravis",
    location: "Islamabad (Hybrid)",
    period: "May 2025 – Present",
    highlights: [
      "Leading backend development of MonetX, an enterprise-grade Network Management System (NMS) built on Zabbix, supporting 1,000+ monitored devices.",
      "Developed core NMS modules including NCM, IPAM, and Network Traffic Analysis.",
      "Designed custom widgets and reporting modules for real-time and historical data visualization.",
      "Built and optimized RESTful APIs for device discovery, alerts, and performance analytics.",
      "Improved monitoring accuracy (~30%) and reduced query execution time by up to 40%.",
      "Collaborated with frontend and QA teams across 15+ feature releases.",
    ],
  },
  {
    role: "Web Developer (Laravel)",
    company: "BitFoot",
    location: "Malaysia (Remote)",
    period: "Oct 2024 – June 2025",
    highlights: [
      "Developed backend services for AlMaghrib's learning and event management platform serving 10,000+ users.",
      "Implemented scalable APIs for user registration, course enrollment, event booking, and payments.",
      "Integrated Stripe and PayPal with secure webhook handling, reducing payment failures by ~25%.",
      "Resolved production issues and improved system reliability.",
    ],
  },
  {
    role: "Senior Backend Engineer (PHP / Golang)",
    company: "31Green",
    location: "Islamabad",
    period: "Nov 2023 – July 2024",
    highlights: [
      "Built backend services in Golang for a healthcare platform supporting staff and patient workflows.",
      "Designed APIs for appointment scheduling, patient registration, and internal communication.",
      "Improved API performance by ~35% through optimization and refactoring.",
      "Participated in architecture discussions and code reviews.",
    ],
  },
  {
    role: "PHP Web Developer",
    company: "Tangent Technologies",
    location: "Islamabad",
    period: "Apr 2022 – Nov 2023",
    highlights: [
      "Developed PHP-based web applications for multiple client projects.",
      "Integrated third-party APIs and optimized application performance (20–30% faster load times).",
      "Collaborated with designers and stakeholders to deliver production-ready solutions.",
    ],
  },
  {
    role: "PHP Developer",
    company: "PkTeam",
    location: "Rawalpindi",
    period: "Dec 2020 – Mar 2022",
    highlights: [
      "Developed and maintained a custom ERP system (inventory, billing, reporting).",
      "Automated business workflows, reducing manual effort by ~40%.",
      "Handled testing, debugging, and long-term system maintenance.",
    ],
  },
];

export const education = [
  {
    degree: "Master's in Information Security",
    institution: "Air University, Islamabad",
    period: "Sep 2023 – July 2025",
  },
  {
    degree: "Bachelor's in Software Engineering",
    institution: "Foundation University, Islamabad",
    period: "Sep 2016 – June 2020",
  },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "PHP", icon: FaPhp },
      { name: "Golang", icon: FaGolang },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Laravel", icon: FaLaravel },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "CodeIgniter", icon: SiCodeigniter },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Tools & Integrations",
    skills: [
      { name: "REST APIs", icon: FaDatabase },
      { name: "Stripe", icon: FaStripe },
      { name: "PayPal", icon: FaPaypal },
    ],
  },
];

export const projects = [
  {
    title: "MonetX",
    featured: true,
    description: "Enterprise-grade Network Management System built on Zabbix, designed to monitor and manage large-scale network infrastructure in real time.",
    highlights: [
      "Supports 1,000+ monitored devices with real-time alerting",
      "Core modules: NCM, IPAM, and Network Traffic Analysis",
      "Custom widgets for data visualization and reporting",
      "Reduced query execution time by up to 40%",
    ],
    tech: ["PHP", "Laravel", "Zabbix", "REST APIs"],
    link: "https://extravis.co/monetx",
  },
  {
    title: "AlMaghrib Platform",
    featured: true,
    description: "A comprehensive learning and event management platform serving a global community of 10,000+ users with seamless course and event experiences.",
    highlights: [
      "Scalable APIs for registration, enrollment, and booking",
      "Stripe & PayPal integration with secure webhook handling",
      "Reduced payment failures by ~25%",
    ],
    tech: ["Laravel", "Stripe", "PayPal", "MySQL"],
    link: "https://www.almaghrib.org",
  },
  {
    title: "Bourne Health",
    description: "A healthcare platform built with Golang to streamline clinical workflows, connecting staff and patients through a unified digital experience.",
    highlights: [
      "APIs for appointment scheduling and patient registration",
      "Internal communication and staff coordination tools",
      "Improved API performance by ~35% through optimization",
    ],
    tech: ["Golang", "Fiber", "REST APIs", "PostgreSQL"],
    link: "https://bournehealth.co.uk",
  },
  {
    title: "My WowHealth",
    description: "A health management system that empowers users to track, manage, and optimize their health data with personalized insights and dashboards.",
    highlights: [
      "User health profiles and data tracking",
      "Third-party API integrations for health services",
      "Performance-optimized for high-traffic usage",
    ],
    tech: ["PHP", "MySQL", "REST APIs"],
    link: "https://www.mywowhealth.com",
  },
  {
    title: "Wow Health Pakistan",
    description: "A regional healthcare platform tailored for the Pakistani market, providing accessible health services and management tools for local users.",
    highlights: [
      "Localized features for the Pakistani healthcare ecosystem",
      "Optimized load times by 20–30%",
    ],
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "https://www.wowhealth.pk",
  },
  {
    title: "Bazaroo",
    description: "A full-featured e-commerce platform enabling businesses to manage products, process orders, and handle payments with a smooth shopping experience.",
    highlights: [
      "Product catalog, cart, and checkout flows",
      "Secure payment gateway integration",
      "Admin dashboard for order and inventory management",
    ],
    tech: ["Laravel", "MySQL", "Stripe"],
    link: "https://bazaroo.com",
  },
  {
    title: "Gemwares ERP",
    description: "A custom-built ERP system designed to automate core business operations including inventory tracking, billing, and financial reporting.",
    highlights: [
      "Automated business workflows, reducing manual effort by ~40%",
      "Inventory management with real-time stock tracking",
      "Comprehensive billing and reporting modules",
    ],
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "https://gemwareserp.com",
  },
];

export const socialLinks = [
  { icon: FaEnvelope, href: "mailto:mahnoor.engineer@gmail.com", label: "Email" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/mahnoor-zulfiqar-dev", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/mahnoorzulfiqar", label: "GitHub" },
  { icon: FaPhone, href: "tel:+923165420343", label: "Phone" },
];
