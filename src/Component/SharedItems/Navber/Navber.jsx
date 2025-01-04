import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaMailBulk,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <nav className=" w-2/3 mx-auto  fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50">
        {/* Left Side: Social Icons */}
        <div className="flex space-x-4 ">
          <a
            href="https://www.facebook.com/shoaibsarkar.akash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-4xl text-white hover:text-blue-500 " />
          </a>
          <a
            href="https://www.linkedin.com/in/shoaib-sarkar-akash/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl text-white hover:text-blue-700" />
          </a>
          <a
            href="https://github.com/hulk-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-4xl text-white hover:text-gray-400" />
          </a>
          <a
            href="mailto:akash.sarker.coder@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-400"
          >
            <FaMailBulk className="text-4xl mr-2" />
           
          </a>
        </div>

        {/* Right Side: Hamburger Menu */}
        <div className="relative cursor-pointer " onClick={toggleMenu}>
          {/* Top Line */}
          <div
            className={`w-12 h-[3px] bg-white my-1 transition-all duration-500 ease-in-out transform ${
              menuOpen ? "rotate-45 absolute top-0 left-1" : "left-0"
            }`}
          ></div>
          {/* Middle Line */}
          <div
            className={`w-6 h-[3px] bg-white my-1 transition-all duration-500 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          {/* Bottom Line */}
          <div
            className={`w-10 h-[3px] bg-white my-1 transition-all duration-500 ease-in-out transform ${
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
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes className="text-5xl  hover:text-red-500" />
          </div>

          {/* Navigation Links */}

          <Link
            to="/"
            className="group relative inline-block mb-4"
            onClick={toggleMenu}
          >
            <span className="relative z-10">Home</span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-700 transition-all 
            duration-300 ease-in-out group-hover:w-full"
            ></span>
          </Link>
          <Link
            to="/aboutMe"
            className="group relative inline-block mb-4"
            onClick={toggleMenu}
          >
            <span className="relative z-10">About Me</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            to="/education"
            className="group relative inline-block mb-4"
            onClick={toggleMenu}
          >
            <span className="relative z-10">Education</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
