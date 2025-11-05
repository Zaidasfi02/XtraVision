import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/services/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch service details");
        }
        const data = await response.json();
        setService(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <div className="text-center text-white mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  if (!service) return <div className="text-center text-gray-400 mt-10">No service found.</div>;

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-lg bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-700">
        <img
          src={service.iconUrl}
          alt={service.title}
          className="w-32 h-32 mx-auto rounded-xl mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold text-black mb-2">{service.title}</h1>
        <p className="text-gray-600 mb-4">{service.description}</p>

        <Link
          to="/services"
          className="border border-[#F59E0B] text-[#1F2937] px-4 py-2 rounded hover:bg-[#F59E0B] hover:text-white transition">
          Back to Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
