
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import AuthModal from "../Auth/AuthModal";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold text-amber-800 cursor-pointer"
        >
          Café Bliss
        </h1>

        <ul className="hidden md:flex space-x-8 text-amber-900 font-medium">
          <li
            onClick={() => scrollToSection('home')}
            className="hover:text-amber-700 cursor-pointer transition-colors"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection('menu')}
            className="hover:text-amber-700 cursor-pointer transition-colors"
          >
            Menu
          </li>
          <li
            onClick={() => scrollToSection('about')}
            className="hover:text-amber-700 cursor-pointer transition-colors"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection('contact')}
            className="hover:text-amber-700 cursor-pointer transition-colors"
          >
            Contact
          </li>
        </ul>

        {user ? (
          <div className="hidden md:flex items-center gap-4">
            <span className="text-amber-900 font-medium">{user.email}</span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setAuthModalOpen(true)}
            className="hidden md:block px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all"
          >
            Login
          </button>
        )}

        <div
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-amber-900 text-2xl cursor-pointer"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-amber-900 font-medium">
            <li
              onClick={() => scrollToSection('home')}
              className="hover:text-amber-700 cursor-pointer transition-colors py-2 border-b border-amber-100"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection('menu')}
              className="hover:text-amber-700 cursor-pointer transition-colors py-2 border-b border-amber-100"
            >
              Menu
            </li>
            <li
              onClick={() => scrollToSection('about')}
              className="hover:text-amber-700 cursor-pointer transition-colors py-2 border-b border-amber-100"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection('contact')}
              className="hover:text-amber-700 cursor-pointer transition-colors py-2 border-b border-amber-100"
            >
              Contact
            </li>
            <li className="pt-2">
              {user ? (
                <>
                  <p className="text-amber-900 font-medium mb-2">{user.email}</p>
                  <button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      )}

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </nav>
  );
};

export default Navbar;

