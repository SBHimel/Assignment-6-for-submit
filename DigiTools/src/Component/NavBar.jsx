import React, { useState } from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 md:px-12 py-3 border-b border-gray-100">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">
          DigiTools
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-base font-medium text-gray-600">
          <li>
            <a className="hover:text-indigo-600 transition-colors">Products</a>
          </li>
          <li>
            <a className="hover:text-indigo-600 transition-colors">Features</a>
          </li>
          <li>
            <a className="hover:text-indigo-600 transition-colors">Pricing</a>
          </li>
          <li>
            <a className="hover:text-indigo-600 transition-colors">Testimonials</a>
          </li>
          <li>
            <a className="hover:text-indigo-600 transition-colors">FAQ</a>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="font-bold flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
            <LuShoppingCart size={20} />
            Login
          </button>
          <a
            className="inline-block px-6 py-3 font-semibold text-white rounded-full
                       bg-gradient-to-r from-purple-600 to-purple-400
                       shadow-lg hover:from-purple-700 hover:to-purple-500
                       transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-gray-700 lg:hidden border-t border-gray-100 pt-4">
          <li>
            <a className="hover:text-indigo-600 transition-colors">Products</a>
          </li>
          <li>
            <a className="hover:text-indigo-600 transition-colors">Features</a>
          </li>
          <li>
            <a className="hover:text-indigo-600 transition-colors">Pricing</a>
          </li>
          <li>
            <a className="hover:text-indigo-600 transition-colors">Testimonials</a>
          </li>
          <li>
            <a className="hover:text-indigo-600 transition-colors">FAQ</a>
          </li>
          <li className="flex flex-col gap-2 mt-2">
            <button className="font-bold flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <LuShoppingCart size={20} />
              Login
            </button>
            <a
              className="inline-block px-6 py-3 font-semibold text-white rounded-full
                         bg-gradient-to-r from-purple-600 to-purple-400
                         shadow-lg hover:from-purple-700 hover:to-purple-500
                         transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;