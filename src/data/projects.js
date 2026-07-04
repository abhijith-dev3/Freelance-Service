
import dashboard from "../assets/dashboard.png"
import portfolio from "../assets/portfolio.png"
import Ecommerce from "../assets/Ecommerce.png"

export const projects = [
  {
    title: "E-Commerce Landing Page",
    description:
      "A high-converting landing page designed for a fictional e-commerce brand with focus on speed and conversion.",
      image:Ecommerce,
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://amped-ecommerce-two.vercel.app/",
    github: "https://github.com/abhijith-dev3/Amped-Ecommerce.git",
  },
  {
    title: "SaaS Dashboard UI",
    description:
      "A modern analytics dashboard UI with clean data visualization and responsive layout.",
    image:dashboard,
      tech: ["React", "Tailwind"],
    live: "https://saas-dashboard-rho-puce.vercel.app/",
    github: "https://github.com/abhijith-dev3/saas-dashboard.git",
  },
  {
    title: "Portfolio Website",
    description:
      "A premium personal portfolio built with modern UI principles.",
      image:portfolio,
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://portfolio-website-ashen-mu-94.vercel.app/",
    github: "https://github.com/abhijith-dev3/portfolio-website.git",
  },
];