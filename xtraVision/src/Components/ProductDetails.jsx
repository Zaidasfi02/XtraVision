import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then(setProduct)
      .catch((err) => console.error("Error fetching product:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (!product) return <div className="py-20 text-center">Product not found.</div>;

  return (
    <section className="py-20 px-6 bg-[#FFF8F0] text-[#1F2937]">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          {product.details && (
            <p className="text-gray-700 mb-4">{product.details}</p>
          )}
          {product.price && (
            <p className="text-[#F59E0B] font-bold text-xl mb-4">
              {product.price}
            </p>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-4 py-2 rounded"
            >
              Book Product
            </button>
            <Link
              to="/products"
              className="border border-[#F59E0B] text-[#1F2937] px-4 py-2 rounded hover:bg-[#F59E0B] hover:text-white transition"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

