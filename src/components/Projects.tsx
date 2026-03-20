import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="px-6 md:px-16 py-16">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Projects
      </h2>

      <p className="text-gray-500 text-center mt-2">
        Things I’ve built so far
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >

            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full"
            />

            {/* Content */}
            <div className="p-4">

              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {project.description}
              </p>

              <p className="text-sm mt-2">
                <span className="font-medium">Tech stack:</span> {project.tech}
              </p>

              {/* Links */}
              <div className="flex gap-4 mt-4 text-sm">
                <a href={project.live} className="text-blue-500">
                  Live Preview
                </a>
                <a href={project.github} className="text-blue-500">
                  View Code
                </a>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}