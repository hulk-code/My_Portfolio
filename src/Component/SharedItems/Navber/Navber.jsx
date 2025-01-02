import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        {/* Left Side: Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-700" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-400" />
          </a>
        </div>

        {/* Right Side: Hamburger Menu */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </div>
      </nav>

      {/* Full-Page Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col justify-center items-center text-white text-2xl z-50">
          {/* Close Button */}
          <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
            <FaTimes className="text-3xl hover:text-red-500" />
          </div>

          {/* Navigation Links */}
          <a href="/" className="mb-4 hover:text-blue-500" onClick={toggleMenu}>
            Home
          </a>
          <a href="/contact" className="mb-4 hover:text-blue-500" onClick={toggleMenu}>
            Contact
          </a>
          <a href="/about" className="hover:text-blue-500" onClick={toggleMenu}>
            About
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
