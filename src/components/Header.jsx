import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Search } from "lucide-react";
import LogoutButton from "./LogoutButton";
import { clearAuthData } from "../utils/auth";



export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1d242d] shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl ml-2.5 font-bold text-[#31AF51]">
          Buytopia
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-white text-xl hover:text-green-400"
          >
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-green-400">Home</Link>
          <Link to="/products" className="text-white hover:text-green-400">Products</Link>

          <div className="relative" ref={searchRef}>
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center space-x-2 bg-gray-800 px-2 py-1 rounded-md shadow-md"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="bg-transparent text-white placeholder-gray-400 px-2 py-1 focus:outline-none"
              />
              <button type="submit" className="text-white hover:text-[#31AF51]">
                <Search size={20} />
              </button>
            </form>
          </div>

          <Link to="/cart" className="relative text-white hover:text-green-400">
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </Link>

          <div className="relative" ref={menuRef}>
            <button onClick={() => setShowMenu(!showMenu)} className="text-xl text-white hover:text-green-400">
              <FaUser />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border shadow-md rounded p-2 z-50 dark:bg-gray-900">
                {user ? (
                  <>
                    <p className="px-4 py-2 text-gray-700" >Hello, {user.firstName || "User"}</p>
                    <LogoutButton onLogout={handleLogout} />
                  </>
                ) : (
                  <>
                    <Link to="/login" className="block px-4 py-2 hover:bg-green-600 hover:text-white">Login</Link>
                    <Link to="/register" className="block px-4 py-2 hover:bg-green-600 hover:text-white">Register</Link>
                    <Link to="/setting"  className="block px-4 py-2 hover:bg-green-600 hover:text-white">Settings</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>

      {showMobileMenu && (
        <div className="md:hidden bg-[#1d242d] text-white px-4 pb-4 space-y-3">
          <Link to="/" onClick={() => setShowMobileMenu(false)} className="block hover:text-green-400">Home</Link>
          <Link to="/products" onClick={() => setShowMobileMenu(false)} className="block hover:text-green-400">Products</Link>
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 px-3 py-2 rounded-l-md text-white bg-gray-800"
            />
            <button type="submit" className="bg-green-700 text-white px-3 rounded-r-md">Go</button>
          </form>
          <Link to="/cart" onClick={() => setShowMobileMenu(false)} className="block hover:text-green-400">Cart ({cart.length})</Link>
          {user ? (
            <>
              <p>Hello, {user.firstName || "User"}</p>
              <button onClick={handleLogout} className="block hover:text-green-400">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setShowMobileMenu(false)} className="block hover:text-green-400">Login</Link>
              <Link to="/register" onClick={() => setShowMobileMenu(false)} className="block hover:text-green-400">Register</Link>
              <Link to="/setting" onClick={() => setShowMobileMenu(false)} className="block hover:text-green-400">Settings</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
