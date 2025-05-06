// src/components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Search } from "lucide-react";
import LogoutButton from "./LogoutButton";
import { clearAuthData } from "../utils/auth";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const menuRef = useRef();
  const searchRef = useRef();
  const navigate = useNavigate();
  const { cart } = useCart();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  const handleLogout = () => {
    clearAuthData();
    setUser(null);
    setShowMenu(false);
    navigate("/login");
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
    }
  };

  return (
    <header className="bg-[#1d242d] shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary-foreground transition">
          Buytopia
        </Link>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-primary-foreground hover:text-yellow-600">Home</Link>
          <Link to="/products" className="text-primary-foreground hover:text-yellow-600">Products</Link>

          <div className="relative" ref={searchRef}>
            <button
              onClick={() => setShowSearch(prev => !prev)}
              className="text-primary-foreground hover:text-yellow-600"
            >
              <Search size={24} />
            </button>

            {showSearch && (
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="absolute top-8 right-0 w-48 sm:w-64 px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none"
                />
              </form>
            )}
          </div>

          <Link to="/cart" className="relative text-primary-foreground hover:text-yellow-600">
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </Link>

          <div className="relative" ref={menuRef}>
            <button onClick={() => setShowMenu(!showMenu)} className="text-xl text-primary-foreground hover:text-yellow-600">
              <FaUser />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border shadow-md rounded p-2 z-50">
                {user ? (
                  <>
                    <p className="px-4 py-2 text-gray-700">Hello, {user.firstName || "User"}</p>
                    <LogoutButton onLogout={handleLogout} />
                  </>
                ) : (
                  <>
                    <Link to="/login" className="block px-4 py-2 hover:bg-black hover:text-primary-foreground">Login</Link>
                    <Link to="/register" className="block px-4 py-2 hover:bg-black hover:text-primary-foreground">Register</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
