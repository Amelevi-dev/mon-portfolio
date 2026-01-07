import '../assets/fontawesome-free-6.7.2-web/css/all.min.css'
import logo from '../assets/images/logo11.png'
import { useState } from 'react'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-md px-6 py-2.5 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-16 sm:h-[80px] sm:w-[80px]" />
      </div>

      {/* Bouton hamburger (mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-purple-600 text-2xl md:hidden focus:outline-none"
      >
        <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
      </button>

      {/* Menu de navigation */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-gray-900 font-medium transition-all duration-300 ${
          isOpen ? 'max-h-80 py-4' : 'max-h-0 overflow-hidden md:max-h-none'
        }`}
      >
        <li>
          <a
            href="#home"
            className="hover:text-purple-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-purple-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-purple-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#realisations"
            className="hover:text-purple-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Réalisations
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-purple-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
