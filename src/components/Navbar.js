"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = ["Posts", "About", "Request", "Contact", "Admin"];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="w-full shadow-md dark:bg-gray-900 dark:text-white bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Jennie’s Blog
        </Link>

        {/* desktop */}
        <ul className="hidden md:flex gap-8 items-center uppercase text-sm font-semibold">
          {links.map((link) => (
            <li key={link} className="relative group cursor-pointer">
              <Link href={`/${link.toLowerCase()}`}>
                <span className="relative">
                  {link}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* theme toggle and mobile menu button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6 bg-white dark:bg-gray-900 text-center items-center">
          <ul className="flex flex-col gap-4 uppercase text-sm font-semibold">
            {links.map((link) => (
              <li key={link} className="relative group cursor-pointer">
                <Link
                  href={`/${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="relative inline-block"
                >
                  <span className="relative block pb-1">
                    {link}
                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
