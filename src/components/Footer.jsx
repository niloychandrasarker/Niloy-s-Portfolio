import React from "react";

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-2">
    <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-10 text-xs text-gray-500">
      <span>&copy; {new Date().getFullYear()} Niloy Chandra Sarker</span>
      <span className="flex gap-2 items-center">
        <a
          href="mailto:niloychandrasarker@gmail.com"
          className="hover:text-purple-600 transition-colors"
        >
          Contact
        </a>
        <span className="text-gray-300">|</span>
        <a
          href="https://github.com/niloychandrasarker"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 transition-colors"
        >
          GitHub
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
