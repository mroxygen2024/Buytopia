import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';




export default function Header() {
  
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const menuRef = useRef();
  const navigate = useNavigate();
  const { cart } = useCart();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

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

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary-foreground transition">
          Buytopia
        </Link>

        {/* Main nav links */}
        <nav className="flex space-x-4 items-center space-x-6">
          <Link to="/" className="text-primary-foreground hover:text-yellow-600 ">Home</Link>
          <Link to="/products" className="text-primary-foreground hover:text-yellow-600">Products</Link>

          {/* Cart icon */}
        
          <Link to="/cart" className="relative text-primary-foreground hover:text-yellow-600">
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </Link>


          {/* User icon with dropdown */}
          <div className="relative" ref={menuRef}>
            <button onClick={() => setShowMenu(!showMenu)} className="text-xl text-primary-foreground hover:text-yellow-600">
              <FaUser />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border shadow-md rounded p-2 z-50">
             {user ? (
                <>
                  <p className="px-4 py-2 text-gray-700">Hello, {user.firstName || "User"}</p>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                    Logout
                  </button>
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
