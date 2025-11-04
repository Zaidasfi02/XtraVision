import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import ServiceDetails from "./Components/ServiceDetails";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import LocalChatbot from "./Components/LocalChatbot";

export default function App() {
  return (
    <div className="bg-[#FFF8F0] text-[#1F2937] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <LocalChatbot />
      <Footer />
    </div>
  );
}

