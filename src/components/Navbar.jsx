import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-t from-purple-950 to-purple-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-12">

        {/* Logo - Clickable */}
        <Link to="/" className="text-4xl font-signature text-white hover:text-purple-300 transition duration-300">
          Harshit
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-3xl">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:gap-8 absolute lg:static top-20 left-0 w-full lg:w-auto bg-purple-900 lg:bg-transparent z-50 transition-all duration-300 ease-in ${
            isMenuOpen ? 'flex flex-col gap-4 py-6 px-6' : 'hidden'
          }`}
        >
          <li className="hover:text-purple-300 transition duration-300">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="hover:text-purple-300 transition duration-300">
            <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
          </li>
          <li className="hover:text-purple-300 transition duration-300">
            <Link to="/experience" onClick={() => setIsMenuOpen(false)}>Projects & Experience</Link>
          </li>
          <li className="hover:text-purple-300 transition duration-300">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>Blog's</Link>
          </li>
          <li className="hover:text-purple-300 transition duration-300">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</Link>
          </li>

          {/* Resume Download Button */}
          <li>
            <a
              href="\Harshit_Tiwari_18.pdf"
              download
              className="bg-white text-purple-800 font-semibold py-2 px-4 rounded hover:bg-purple-100 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
