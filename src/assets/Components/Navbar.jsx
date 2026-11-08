import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-[#c3e264]/10">
      <nav className="flex justify-between items-center px-8 py-1 mx-auto w-full max-w-[500px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1400px] 2xl:max-w-[1600px]">

        {/* Logo */}
        <Link to="/" 
        aria-label="Digisinc Home - AI Automations and Web Development Agency"
        className="flex items-center group cursor-pointer" onClick={closeMenu}>
          <img
            src="./media/images/logo.svg"
            alt="digisinc"
            className="h-16 lg:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[14px] md:text-[16px] xl:text-[18px] font-medium tracking-wide">
          <li>
            <NavLink to="/" 
            aria-label="Digisinc Home - AI Automations and Web Development Agency"
            className={({ isActive }) => `transition ${isActive ? 'text-[#c3e264]' : 'text-white hover:text-[#c3e264]'}`}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" 
            aria-label="View Digisinc's portfolio of AI, Web, and Design projects"
            className={({ isActive }) => `transition ${isActive ? 'text-[#c3e264]' : 'text-white hover:text-[#c3e264]'}`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" 
            aria-label="View Digisinc Services: AI, Web Apps, UI/UX, and Graphic Design"
            className={({ isActive }) => `transition ${isActive ? 'text-[#c3e264]' : 'text-white hover:text-[#c3e264]'}`}>
              Services
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Contact Button */}
          <Link
            to="/contact"
            aria-label="Hire Digisinc for AI automation and web development services"
            className="hidden md:inline-block bg-[#c3e264] text-[#1a1a1a] px-4 py-2 rounded-full font-bold text-[14px] md:text-[16px] xl:text-[18px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(195,226,100,0.4)]"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center text-center bg-[#1a1a1a]/95 backdrop-blur-md md:hidden px-6 py-6 space-y-6 border-t border-[#c3e264]/10`}
      >
        <NavLink to="/" 
        aria-label="Digisinc Home - AI Automations and Web Development Agency"
        onClick={closeMenu} className="text-white text-lg hover:text-[#c3e264]">Home</NavLink>
        <NavLink to="/projects" 
        aria-label="View Digisinc's portfolio of AI, Web, and Design projects"
        onClick={closeMenu} className="text-white text-lg hover:text-[#c3e264]">Projects</NavLink>
        <NavLink to="/services" 
        aria-label="View Digisinc Services: AI, Web Apps, UI/UX, and Graphic Design"
        onClick={closeMenu} className="text-white text-lg hover:text-[#c3e264]">Services</NavLink>

        <Link to="/contact" 
        aria-label="Hire Digisinc for AI automation and web development services"
        onClick={closeMenu} className="bg-[#c3e264] text-[#1a1a1a] px-6 py-2 rounded-full font-bold">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;