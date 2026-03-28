"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Load saved theme
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-[#020617] shadow-md z-50">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">

        {/* LOGO */}
        <div className="font-bold text-lg leading-tight">
          <p className="text-purple-500">{`{007}`}</p>
          <p className="text-black dark:text-white text-sm">alfredmk</p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-gray-600 dark:text-gray-300">
          <a href="#home" className="hover:text-purple-500">Home</a>
          <a href="#about" className="hover:text-purple-500">About</a>
          <a href="#tech" className="hover:text-purple-500">Tech Stack</a>
          <a href="#projects" className="hover:text-purple-500">Projects</a>
          <a href="#contact" className="hover:text-purple-500">Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-5 text-gray-600 dark:text-gray-300 text-xl">

          {/* THEME TOGGLE */}
          <button onClick={toggleTheme} className="hover:text-purple-500">
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* SOCIALS */}
          <a href="https://github.com/alfred2504" target="_blank">
            <FaGithub className="hover:text-purple-500" />
          </a>

          <a href="https://x.com/makura_alfred" target="_blank">
            <FaTwitter className="hover:text-purple-500" />
          </a>

          <a href="https://www.linkedin.com/in/alfred-makura-9b16a4208" target="_blank">
            <FaLinkedin className="hover:text-purple-500" />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white dark:bg-[#020617] text-gray-700 dark:text-gray-300">

          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#tech" onClick={() => setOpen(false)}>Tech Stack</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          {/* THEME TOGGLE MOBILE */}
          <button onClick={toggleTheme} className="text-xl">
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* SOCIALS */}
          <div className="flex gap-5 text-xl mt-4">
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      )}
    </nav>
  );
}