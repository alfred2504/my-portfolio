import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function TechStack() {
  return (
    <section className="px-8 md:px-20 py-20 text-center">

      <h2 className="text-3xl md:text-4xl font-bold">
        My Tech Stack
      </h2>

      <p className="text-gray-500 mt-4">
        Technologies I’ve been working with recently
      </p>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-10 mt-12 place-items-center text-5xl">

        <FaHtml5 className="text-orange-500" />
        <FaCss3Alt className="text-blue-500" />
        <FaJs className="text-yellow-400" />
        <FaReact className="text-cyan-400" />
        <SiNextdotjs />
        <SiTailwindcss className="text-sky-400" />
        <FaGitAlt className="text-orange-600" />
        <FaGithub />

      </div>

    </section>
  );
}