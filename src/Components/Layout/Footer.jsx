import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="bg-amber-900 text-amber-100 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 text-2xl font-serif text-white mb-2">
            <span className="bg-amber-700 rounded-full w-10 h-10 flex items-center justify-center text-lg">☕</span>
            <span className="text-2xl font-bold">Cafe Bliss</span>
          </div>
          <p className="text-amber-200 text-sm max-w-sm text-center md:text-left">
            Your perfect coffee break. Handcrafted beverages, fresh pastries, and cozy vibes —
            brewed with love.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h4 className="font-semibold mb-2">Explore</h4>
            <ul className="text-sm text-amber-200 space-y-1">
              <li onClick={() => scrollToSection('home')} className="hover:text-white cursor-pointer">Home</li>
              <li onClick={() => scrollToSection('menu')} className="hover:text-white cursor-pointer">Menu</li>
              <li onClick={() => scrollToSection('about')} className="hover:text-white cursor-pointer">About</li>
              <li onClick={() => scrollToSection('contact')} className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <ul className="text-sm text-amber-200 space-y-1">
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
            </ul>
          </div>
        </div>

        {/* Contact / Hours */}
        <div className="text-sm text-amber-200 text-center md:text-right">
          <p className="font-semibold text-amber-100 mb-1">Opening Hours</p>
          <p>Mon - Fri: 9:00 AM - 9:00 PM</p>
          <p>Sat - Sun: 10:00 AM - 10:00 PM</p>
          <p className="mt-3">📍Sec 37c near RG Supermart </p>
        </div>
      </div>

      <div className="border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-amber-200 text-sm">
          <p>© 2025 Cafe Bliss. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ — Crafted by TechNeural</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
