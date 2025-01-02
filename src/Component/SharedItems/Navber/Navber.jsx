import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true); // Start the closing animation
      setTimeout(() => {
        setMenuOpen(false); // After animation completes, close the menu
        setIsClosing(false); // Reset the closing state
      }, 1000); // Match the animation duration (1s)
    } else {
      setMenuOpen(true); // Open the menu
    }
  };

  return (
    <div className=" ">
      {/* Navbar */}
      <nav className=" w-2/3 mx-auto  fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50">
        {/* Left Side: Social Icons */}
        <div className="flex space-x-4 ">
          <a  href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl text-white hover:text-blue-500 " />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-white hover:text-blue-700" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-white hover:text-gray-400" />
          </a>
        </div>

        {/* Right Side: Hamburger Menu */}
        <div className="relative cursor-pointer " onClick={toggleMenu}>
          {/* Top Line */}
          <div
            className={`w-10 h-[2px] bg-white my-1 transition-all duration-500 ease-in-out transform ${
              menuOpen ? "rotate-45 absolute top-0 left-1" : "left-0"
            }`}
          ></div>
          {/* Middle Line */}
          <div
            className={`w-6 h-[2px] bg-white my-1 transition-all duration-500 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          {/* Bottom Line */}
          <div
            className={`w-10 h-[2px] bg-white my-1 transition-all duration-500 ease-in-out transform ${
              menuOpen ? "rotate-135 absolute bottom-0 left-1" : "left-0"
            }`}
          ></div>
        </div>
      </nav>

      {/* Full-Page Overlay Menu */}
      {menuOpen && (
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col justify-center items-center text-white text-2xl z-50 ${
            isClosing ? "animate-zoomOutUp" : "animate-zoomInRight"
          }`}
        >
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
