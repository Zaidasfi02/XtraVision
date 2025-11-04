import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Failed to send message. Try again!");
      }
    } catch (err) {
      alert("Server not reachable. Check backend!");
    }
  };

  return (
    <section id="contact" className="pt-24 py-20 px-6 bg-[#FFD89A] text-center">
      <h2 className="text-4xl font-bold text-[#F59E0B] mb-8">Contact Us</h2>

      {submitted && (
        <div className="bg-green-100 text-green-800 py-3 px-6 rounded-lg mb-6 max-w-lg mx-auto shadow">
          ✅ Thank you! We’ll contact you shortly.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="p-3 border rounded bg-[#FFF8F0] text-[#1F2937]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="p-3 border rounded bg-[#FFF8F0] text-[#1F2937]"
          required
        />
        <textarea
          name="message"
          placeholder="Type your message..."
          rows="5"
          className="p-3 border rounded bg-[#FFF8F0] text-[#1F2937]"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}


