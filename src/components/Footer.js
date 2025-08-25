// components/Footer.js
"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100  text-gray-700 w-full ">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between text-center sm:text-left gap-8">
        {/* Section 1 - Logo and Description */}
        <div className="sm:max-w-sm">
          <h2 className="text-xl font-bold mb-2">Jennie’s Blog</h2>
          <p className="text-sm leading-relaxed">
            Sharing knowledge and insights on health, lifestyle, and more. Find
            out what makes Jennie’s blog tick.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            {["Posts", "About", "Request"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-blue-500 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 - Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 justify-center sm:justify-start text-xl">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Jennie’s Blog. All rights reserved.
      </div>
    </footer>
  );
}
