"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="max-w-7xl mx-auto font-semibold font-figtree px-5 sm:px-8 py-4 sm:py-8 text-lg">
      {/* Mobile Navigation */}

      <div className="sm:hidden">
        <div className="flex justify-between items-center">
          <Image src="/logo.png" alt="Logo" width={107} height={46} />

          {/* Menu Opening/Closing Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col space-y-1 p-2 rounded-md transition-colors text-white hover:text-gray-200"
            aria-label="Toggle menu"
            type="button"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mt-4 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="space-y-4 pb-4 font-figtree">
            <li>
              <Link
                href="#"
                className="block py-2 px-4 rounded-md transition-colors font-figtree text-secondary-100 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-4 rounded-md transition-colors text-secondary-100 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Navigation */}

      <div className="hidden sm:flex flex-row justify-between items-center">
        <Image src="/logo.png" alt="Logo" width={173} height={174} />
        <div className="flex items-center space-x-8">
          <ul className="flex gap-10">
            <li>
              <Link href="#" className="hover:text-blue-600 text-secondary-100">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 text-secondary-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
