import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  tech: string;
  github: string;
  live: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="w-full object-cover"
      />

      {/* Content */}
      <div className="p-5">

        {/* Title */}
        <h3 className="text-white text-lg font-semibold">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-2">
          {project.description}
        </p>

        {/* Tech */}
        <p className="text-gray-500 text-xs mt-3">
          <span className="text-gray-400 font-medium">Tech stack:</span>{" "}
          {project.tech}
        </p>

        {/* Links */}
        <div className="flex justify-between items-center mt-5 text-sm">

          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-1 text-white hover:text-purple-400"
          >
            <FiExternalLink /> Live Preview
          </a>

          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1 text-white hover:text-purple-400"
          >
            <FaGithub /> View Code
          </a>

        </div>

      </div>

    </div>
  );
}