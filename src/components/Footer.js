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

const NAV_LINKS = ["Posts", "About", "Request"];

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    url: "https://facebook.com",
    color: "hover:text-blue-600",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com",
    color: "hover:text-pink-500",
  },
  { icon: FaTwitter, url: "https://twitter.com", color: "hover:text-blue-400" },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-600",
  },
];

export default function Footer() {
  return (
    <footer className="bg-green-50 text-gray-700 w-full border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Logo + Description */}
        <div>
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Image
              src="/name.png"
              alt="Jennie’s Blog Logo"
              width={150}
              height={40}
            />
          </Link>
          <p className="font-body text-sm leading-relaxed max-w-sm">
            Sharing knowledge and insights on health, lifestyle, and more. Find
            out what makes{" "}
            <span className="font-semibold text-green-700">Ask A Nurse</span>{" "}
            tick.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-header font-semibold mb-4">Quick Links</h3>
          <ul className="font-body space-y-2 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Social Links */}
        <div>
          <h3 className="font-header font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            {SOCIAL_LINKS.map(({ icon: Icon, url, color }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 rounded`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="font-body text-center py-4 border-t border-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Ask A Nurse. All rights reserved.
      </div>
    </footer>
  );
}
