
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-800">Café Bliss</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-amber-900 font-medium">
          <li className="hover:text-amber-700 cursor-pointer">Home</li>
          <li className="hover:text-amber-700 cursor-pointer">Menu</li>
          <li className="hover:text-amber-700 cursor-pointer">About</li>
          <li className="hover:text-amber-700 cursor-pointer">Contact</li>
        </ul>

        {/* Login Button */}
        <button className="hidden md:block px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all">
          Login
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-amber-900 text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

