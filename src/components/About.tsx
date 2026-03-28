"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 md:px-16 py-20">
      
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-500 text-center mt-4 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I am a passionate Frontend Developer dedicated to building modern, 
        responsive, and user-friendly web applications using React, Next.js, 
        and Tailwind CSS.
      </motion.p>

    </section>
  );
}