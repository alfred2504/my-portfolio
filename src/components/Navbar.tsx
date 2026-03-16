"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">(007)</h1>

      <ul className="hidden md:flex gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Tech Stack</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </nav>
  );
}