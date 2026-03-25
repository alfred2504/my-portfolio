"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 md:px-20 py-4 bg-white dark:bg-gray-900 shadow-sm">

      {/* Logo */}
      <h1 className="text-xl font-bold">
        Alfred Makura
      </h1>

      {/* Navigation */}
      <div className="flex items-center gap-6">

        {/* REAL NAV BUTTONS */}
        <button onClick={() => scrollToSection("home")}>
          Home
        </button>

        <button onClick={() => scrollToSection("tech")}>
          Tech Stack
        </button>

        <button onClick={() => scrollToSection("projects")}>
          Projects
        </button>

        <button onClick={() => scrollToSection("contact")}>
          Contact
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

      </div>
    </nav>
  );
}