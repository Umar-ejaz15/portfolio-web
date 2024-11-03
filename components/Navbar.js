import React, { useState } from "react";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-3xl transition-transform duration-300 ease-in-out group"
          >
            <FaArrowAltCircleRight className="text-blue-400 group-hover:rotate-45" />
            <h1 className="ml-2 font-bold">NextDev</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutPage">About</Link>
          </li>
          <li>
            <Link href="/contactPage">Contact</Link>
          </li>
          <li>
            <Link href="/projectsPage">Projects</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link href="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutPage" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contactPage" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/projectsPage" onClick={toggleMobileMenu}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
