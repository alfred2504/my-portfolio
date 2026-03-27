"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const techs = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },

  // Next.js (fixed visibility)
  {
    name: "Next.js",
    icon: <FaReact size={40} className="text-black dark:text-white" />,
  },

  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
  {
    name: "GitHub",
    icon: <FaGithub size={40} className="text-black dark:text-white" />,
  },

  // Vercel (custom icon)
  {
    name: "Vercel",
    icon: (
      <span className="text-2xl font-bold text-black dark:text-white">
        ▲
      </span>
    ),
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="scroll-mt-24 px-6 md:px-16 py-20 bg-white dark:bg-[#020617]"
    >
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Tech Stack
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-500 dark:text-gray-400 text-center mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Technologies I’ve been working with recently
      </motion.p>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12 place-items-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1 }}
          >
            {tech.icon}
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}