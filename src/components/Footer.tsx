"use client";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-16 bg-[#0f172a] text-white">

      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg">{`{007}`}</h2>
          <p className="text-gray-400 text-sm">Alfred Makura</p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left text-sm text-gray-400">
          <p>+263 716 997 735</p>
          <p>alfredmakura6@gmail.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <FaGithub className="hover:text-purple-500 cursor-pointer" />
          <FaTwitter className="hover:text-purple-500 cursor-pointer" />
          <FaLinkedin className="hover:text-purple-500 cursor-pointer" />
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* BOTTOM ROW */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

        {/* Navigation */}
        <div className="flex gap-6">
          <a href="#home" className="hover:text-purple-500">Home</a>
          <a href="#about" className="hover:text-purple-500">About</a>
          <a href="#tech" className="hover:text-purple-500">Technologies</a>
          <a href="#projects" className="hover:text-purple-500">Projects</a>
          <a href="#contact" className="hover:text-purple-500">Contact</a>
        </div>

        {/* Credit */}
        <p>
          Designed and built by{" "}
          <span className="text-purple-500">Alfred Makura</span>{" "}
          with <span className="text-pink-500">Love & Coffee</span>
        </p>

      </div>

    </footer>
  );
}