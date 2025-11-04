import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install with: npm install lucide-react

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F59E0B] text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">XtraVision</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          <Link to="/" className="hover:text-[#1F2937] transition">Home</Link>
          <Link to="/about" className="hover:text-[#1F2937] transition">About</Link>
          <Link to="/services" className="hover:text-[#1F2937] transition">Services</Link>
          <Link to="/products" className="hover:text-[#1F2937] transition">Products</Link>
          <Link to="/contact" className="hover:text-[#1F2937] transition">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F59E0B] flex flex-col items-center space-y-4 py-4 border-t border-white/30 text-lg">
          <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-[#1F2937] transition">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="hover:text-[#1F2937] transition">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/services" className="hover:text-[#1F2937] transition">Services</Link>
          <Link onClick={() => setMenuOpen(false)} to="/products" className="hover:text-[#1F2937] transition">Products</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="hover:text-[#1F2937] transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}



