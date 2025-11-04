import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#FFF8F0] px-6 pt-24"
    >
      <img
        src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1200&q=80"
        alt="Camera installation technician"
        className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-[#F59E0B] mb-8 hover:scale-105 transition-transform duration-500"
      />
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#1F2937]">
        Smart & Secure Camera Installations
      </h1>
      <p className="text-[#4B5563] max-w-2xl text-lg mb-6">
        Experience reliable security setups with the most trusted camera installation service.
        Protect your space with <span className="text-[#F59E0B] font-semibold">XtraVision</span>.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/services"
          className="px-8 py-3 bg-[#F59E0B] text-white font-semibold rounded-lg hover:bg-[#D97706] transition"
        >
          View Services
        </Link>
        <Link
          to="/contact"
          className="px-8 py-3 border-2 border-[#F59E0B] text-[#F59E0B] rounded-lg hover:bg-[#F59E0B] hover:text-white transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}


