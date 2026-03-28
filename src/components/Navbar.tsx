"use client";

import { useState, useEffect } from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const sections = ["home", "about", "tech", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");

  // THEME LOAD
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // THEME TOGGLE
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

  // ACTIVE SECTION DETECTION
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LINK STYLE
  const linkClass = (section: string) =>
    `cursor-pointer ${
      active === section
        ? "text-purple-500 font-semibold"
        : "hover:text-purple-500"
    }`;

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

          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#tech" className={linkClass("tech")}>Tech Stack</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-5 text-gray-600 dark:text-gray-300 text-xl">

          {/* THEME TOGGLE */}
          <button onClick={toggleTheme} className="hover:text-purple-500">
            {dark ? <FaSun /> : <FaMoon />}
          </button>

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

        {/* MOBILE BUTTON */}
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white dark:bg-[#020617] text-gray-700 dark:text-gray-300">

          <a href="#home" onClick={() => setOpen(false)} className={linkClass("home")}>Home</a>
          <a href="#about" onClick={() => setOpen(false)} className={linkClass("about")}>About</a>
          <a href="#tech" onClick={() => setOpen(false)} className={linkClass("tech")}>Tech Stack</a>
          <a href="#projects" onClick={() => setOpen(false)} className={linkClass("projects")}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className={linkClass("contact")}>Contact</a>

          <button onClick={toggleTheme} className="text-xl">
            {dark ? <FaSun /> : <FaMoon />}
          </button>

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