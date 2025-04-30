import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/images/unboxedlogo (2).png'; // Import the logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) =>
    location.pathname === path
      ? 'bg-yellow-500 text-white border-2 border-yellow-500 py-2 px-4 rounded-md'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-md';

  return (
    <nav className="bg-emerald-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="font-bold">
          <Link to="/" className="hover:text-gray-300">
            <img src={logo} alt="Unboxed Autism Christian School Logo" className="h-20" /> {/* Adjusted size */}
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/admissions" className={isActive('/admissions')}>Admissions</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-80 text-white z-50">
          <div className="flex flex-col items-center pt-20 space-y-6 relative">
            <button onClick={closeMenu} className="absolute top-4 right-4 text-white text-2xl">
              <FaTimes />
            </button>
            <Link to="/" onClick={closeMenu} className={`text-lg font-semibold ${isActive('/')}`}>Home</Link>
            <Link to="/admissions" onClick={closeMenu} className={`text-lg font-semibold ${isActive('/admissions')}`}>Admissions</Link>
            <Link to="/about" onClick={closeMenu} className={`text-lg font-semibold ${isActive('/about')}`}>About</Link>
            <Link to="/contact" onClick={closeMenu} className={`text-lg font-semibold ${isActive('/contact')}`}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
