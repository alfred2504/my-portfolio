"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 md:px-16 py-20 bg-[#020617]">

      <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
        Projects
      </h2>

      <p className="text-gray-400 text-center mt-2">
        Things I’ve built so far
      </p>

      <motion.div
        className="grid md:grid-cols-3 gap-8 mt-12"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>

    </section>
  );
}