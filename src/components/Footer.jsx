import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#212934] text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 mb-4">
              Buytopia
            </h2>
            <ul className="space-y-2 text-sm">
              <li>📍 Adama, Ethiopia</li>
              <li>
                📞{" "}
                <a href="tel:+251968094406" className="hover:underline">
                  +251 968 094 406
                </a>
              </li>
              <li>
                ✉️{" "}
                <a href="mailto:fuadsano460@gmail.com" className="hover:underline">
                  fuadsano460@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">
              Products
            </h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-green-400">Luxury</Link></li>
              <li><Link to="#" className="hover:text-green-400">Sport Wear</Link></li>
              <li><Link to="#" className="hover:text-green-400">Men's Shoes</Link></li>
              <li><Link to="#" className="hover:text-green-400">Women's Shoes</Link></li>
              <li><Link to="#" className="hover:text-green-400">Popular Dress</Link></li>
              <li><Link to="#" className="hover:text-green-400">Gym Accessories</Link></li>
              <li><Link to="#" className="hover:text-green-400">Sport Shoes</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">
              Further Info
            </h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/products" className="hover:text-green-400">Products</Link></li>
              <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Subscribe Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex space-x-4">
            <Link to="#" className="bg-gray-800 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              Facebook
            </Link>
            <Link to="#" className="bg-gray-800 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              Instagram
            </Link>
            <Link to="#" className="bg-gray-800 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              Twitter
            </Link>
            <Link to="#" className="bg-gray-800 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              LinkedIn
            </Link>
          </div>

          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-green-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1d242d] py-4">
        <div className="max-w-7xl mx-auto px-4 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} CSEC ASTU | Designed by
          <span className="text-white "> Syntax Squad</span>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
