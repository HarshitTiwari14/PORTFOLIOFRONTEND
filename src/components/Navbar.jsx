import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility for mobile screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-5 md:px-10 lg:px-20 text-white bg-gradient-to-t from-purple-950 to-purple-800">
      {/* Logo */}
      <div>
        <h1 className="text-4xl font-signature ml-2">Harshit</h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? (
            <span className="text-3xl">✖</span>  // Close icon
          ) : (
            <span className="text-3xl">☰</span>  // Hamburger icon
          )}
        </button>
      </div>

      {/* Navbar Links */}
      <ul className={`lg:flex flex-col lg:flex-row items-center gap-4 ${isMenuOpen ? 'flex' : 'hidden'} lg:block`}>
        <li className="px-4 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="px-4 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
          <Link to="/experience">Projects & Experience</Link>
        </li>
        <li className="px-4 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
          <Link to="/about">Blog's</Link>
        </li>
        <li className="px-4 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
          <Link to="/contact">Contact me</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;