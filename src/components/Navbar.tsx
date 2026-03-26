"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-[#020617] shadow-sm z-50">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-black dark:text-white">
          Alfred Makura
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#tech">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Theme Toggle */}
          <button onClick={toggleTheme}>
            {dark ? <Sun /> : <Moon />}
          </button>

        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          
          {/* Theme Toggle */}
          <button onClick={toggleTheme}>
            {dark ? <Sun /> : <Moon />}
          </button>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#020617] px-6 pb-6">
          <ul className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 font-medium">
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#tech" onClick={() => setOpen(false)}>Tech Stack</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}