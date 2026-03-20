export interface Project {
  title: string;
  description: string;
  tech: string;
  github: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with Next.js and Tailwind CSS.",
    tech: "Next.js, Tailwind CSS",
    github: "https://github.com/alfred2504/my-portfolio",
    live: "https://alfred-makura-portfolio.vercel.app/",
    image: "/images/project1.png",
  },
  {
    title: "Expense Tracker",
    description: "A full-stack app to track daily expenses and manage budgets.",
    tech: "React, Node.js, MongoDB",
    github: "https://github.com/alfred2504/amak_tech_market_place",
    live: "https://alfred2504.github.io/amaktech-expense-tracker/",
    image: "/images/project2.png",
  },
  {
    title: "ProjectHub Lite",
    description: "A lightweight project management and showcase platform.",
    tech: "React, JavaScript, CSS",
    github: "https://github.com/alfred2504/Projecthub-lite",
    live: "https://projecthub-lite.vercel.app/",
    image: "/images/project3.png",
  },
];