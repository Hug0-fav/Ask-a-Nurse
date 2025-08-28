"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarLogo from "./NavbarLogo";

const links = ["Posts", "About", "Request", "Admin"];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toHref = (link) =>
    link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 uppercase text-sm font-semibold items-center">
      {links.map((link) => {
        const href = toHref(link);
        const isActive = pathname === href;

        return (
          <li key={link} className="relative group cursor-pointer">
            <Link
              href={href}
              onClick={onClick}
              className={`relative block pb-1 ${
                isActive ? "text-blue-600" : ""
              }`}
            >
              {link}
              <span
                className={`absolute  bottom-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                  isActive ? "w-full left-0" : "w-0 left-1/2"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50 font-body">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        {/* Logo */}
        <div className="font-header">
          <NavbarLogo />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex">
          <NavLinks className="font-body" />
        </div>

        {/* Mobile menu button - only visible on small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="px-4 pb-6 bg-white text-center font-body">
          <NavLinks onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
