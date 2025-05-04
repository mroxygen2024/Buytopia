import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#d6b894] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#79443B]">
          Bereka
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-[#79443B] hover:text-[#5e332c]">Home</Link>
          <Link to="/products" className="text-[#79443B] hover:text-[#5e332c]">Products</Link>
          <Link to="/login" className="text-[#79443B] hover:text-[#5e332c]">Login</Link>
          <Link to="/register" className="text-[#79443B] hover:text-[#5e332c]">Register</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#79443B] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#d6b894] px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-[#79443B] hover:text-[#5e332c]">
            Home
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-[#79443B] hover:text-[#5e332c]">
            Products
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block text-[#79443B] hover:text-[#5e332c]">
            Login
          </Link>
          <Link to="/register" onClick={() => setIsOpen(false)} className="block text-[#79443B] hover:text-[#5e332c]">
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
