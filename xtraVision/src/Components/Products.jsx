import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="products" className="pt-24 py-20 px-6 bg-[#FFF8F0] text-center">
      <h2 className="text-4xl font-bold text-[#F59E0B] mb-6">Our Products</h2>

      {loading ? (
        <div className="py-20 text-gray-600">Loading products...</div>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products available</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              {p.imageUrl && (
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-2">
                  {p.name}
                </h3>
                <p className="text-[#4B5563] mb-4">{p.description}</p>
                {p.price && (
                  <p className="text-[#F59E0B] font-bold mb-4">{p.price}</p>
                )}

                <Link
                  to={`/products/${p.id}`}
                  className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-white px-4 py-2 rounded transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
