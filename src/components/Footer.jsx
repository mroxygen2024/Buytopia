import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1d242d] text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 mb-4">
              Buytopia
            </h2>
            <ul className="space-y-2 text-sm">
              <li>📍 Adama, Ethiopia</li>
              <li>
                📞{" "}
                <a href="tel:+251968094406" className="hover:text-[#31af51]">
                  +251 9xx xxx xxx
                </a>
              </li>
              <li>
                ✉️{" "}
                <a href="mailto:buttopia06@gmail.com" className="hover:text-[#31af51]">
                  Buytopia06@gmail.com
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">
              Products
            </h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-[#31af51]">Automotive</Link></li>
              <li><Link to="/products" className="hover:text-[#31af51]">Toys & Games</Link></li>
              <li><Link to="/products" className="hover:text-[#31af51]">Sports & Outdoors</Link></li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">
              Further Info
            </h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#31af51]">Home</Link></li>
              <li><Link to="/products" className="hover:text-[#31af51]">Products</Link></li>
              <li><Link to="/about" className="hover:text-[#31af51]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#31af51]">Contact</Link></li>
            </ul>
          </div>
        </div>

       
        <div className="my-6 border-t border-gray-700"></div>

      
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex space-x-4">
            <Link to="#" className="bg-gray-800 hover:bg-[#31af51] text-white px-4 py-2 rounded-full text-sm transition">
              Facebook
            </Link>
            <Link to="https://www.instagram.com/buyt_opia/" className="bg-gray-800 hover:bg-[#31af51] text-white px-4 py-2 rounded-full text-sm transition">
              Instagram
            </Link>
            <Link to="#" className="bg-gray-800 hover:bg-[#31af51] text-white px-4 py-2 rounded-full text-sm transition">
              Twitter
            </Link>
            <Link to="#" className="bg-gray-800 hover:bg-[#31af51] text-white px-4 py-2 rounded-full text-sm transition">
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
              className="bg-[#31af51] hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="bg-[#1d242d] py-4">
        <div className="max-w-7xl mx-auto px-4 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} CSEC ASTU | Designed by
          <span className="text-[#31af51] font-medium"> Syntax Squad</span>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
