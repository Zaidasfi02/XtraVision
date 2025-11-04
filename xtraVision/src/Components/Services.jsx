import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched services:", data);
        setServices(data);
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <section id="services" className="pt-24 px-6 bg-[#FFF8F0] min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#1F2937]">
        Our Services
      </h2>

      {services.length === 0 ? (
        <p className="text-center text-gray-500">No services available</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              {service.iconUrl ? (
                <img
                  src={service.iconUrl}
                  alt={service.title}
                  className="h-56 w-full object-cover rounded-t-xl"
                />
              ) : (
                <div className="h-56 w-full bg-gray-200 rounded-t-xl flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#1F2937]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-block px-4 py-2 bg-[#F59E0B] text-white font-medium rounded-lg hover:bg-[#D97706] transition"
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

