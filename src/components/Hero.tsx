"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20"
    >
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi 👋,<br />
          My name is <br />
          <span className="text-purple-500">Alfred Makura</span>
        </h1>

        <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 font-medium">
          Frontend Developer
        </p>

        <p className="mt-3 text-gray-500">
          I build modern, responsive, and visually stunning web experiences.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/images/profile.png"
          alt="Alfred Makura"
          width={320}
          height={320}
          className="rounded-full border-4 border-purple-500"
        />
      </motion.div>
    </section>
  );
}