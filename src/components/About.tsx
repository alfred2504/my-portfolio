"use client";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-16 py-20 bg-white dark:bg-[#020617]"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white">
        About Me
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 dark:text-gray-400 text-center mt-2">
        A little bit about who I am and what I do
      </p>

      {/* Content */}
      <div className="max-w-3xl mx-auto mt-10 text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
        
        <p className="mb-4">
          I am a passionate <span className="font-semibold text-purple-500">Frontend Developer</span> 
          dedicated to building modern, responsive, and user-friendly web applications.
        </p>

        <p className="mb-4">
          I specialize in technologies like React, Next.js, and Tailwind CSS, 
          and I enjoy transforming ideas into beautiful and functional digital experiences.
        </p>

        <p>
          My goal is to continuously improve my skills, stay updated with the latest 
          industry trends, and create solutions that deliver real value to users.
        </p>

      </div>
    </section>
  );
}