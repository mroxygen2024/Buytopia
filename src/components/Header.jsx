import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle"; // adjust path if needed

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f3f9f6] dark:bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#2a9f6a] dark:text-white">
          Buytopia
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-[#2a9f6a] dark:text-white hover:text-[#1e7f55]">
            Home
          </Link>
          <Link to="/products" className="text-[#2a9f6a] dark:text-white hover:text-[#1e7f55]">
            Products
          </Link>
          <Link to="/login" className="text-[#2a9f6a] dark:text-white hover:text-[#1e7f55]">
            Login
          </Link>
          <Link to="/register" className="text-[#2a9f6a] dark:text-white hover:text-[#1e7f55]">
            Register
          </Link>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#2a9f6a] dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f3f9f6] dark:bg-gray-900 px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-[#2a9f6a] dark:text-white hover:text-[#1e7f55]">
            Home
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-[#2a9f6a] dark:text-white hover:text-[#1e7f55]">
            Products
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block text-[#2a9f6a] dark:text-white hover:text-[#1e7f55]">
            Login
          </Link>
          <Link to="/register" onClick={() => setIsOpen(false)} className="block text-[#2a9f6a] dark:text-white hover:text-[#1e7f55]">
            Register
          </Link>

          {/* Dark Mode Toggle in Mobile */}
          <DarkModeToggle />
        </div>
      )}
    </header>
  );
}
