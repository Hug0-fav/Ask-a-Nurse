// components/Footer.js
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-50 text-gray-700 w-full border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/name.png"
            alt="Jennie’s Blog Logo"
            width={150}
            height={40}
          />
        </Link>

        {/* Description */}
        <p className="text-sm max-w-md leading-relaxed">
          Sharing knowledge and insights on health, lifestyle, and more. Find
          out what makes Jennie’s blog tick.
        </p>

        {/* Links */}
        <ul className="flex gap-6 text-sm font-medium">
          {["Posts", "About", "Request"].map((link) => (
            <li key={link}>
              <Link
                href={`/${link.toLowerCase()}`}
                className="hover:text-green-700 transition-colors"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Jennie’s Blog. All rights reserved.
      </div>
    </footer>
  );
}
