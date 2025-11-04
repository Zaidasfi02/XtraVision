import React, { useState, useRef, useEffect } from "react";

export default function LocalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I’m XtraBot — your assistant for XtraVision. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef();

  // Scroll to bottom when new message added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🧠 Intent-based replies
  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
      return "👋 Hello there! How can I assist you today?";
    }
    if (text.includes("services")) {
      return "📦 We offer CCTV installation, maintenance, and camera setup services.";
    }
    if (text.includes("products") || text.includes("camera")) {
      return "🎥 We sell HD Dome Cameras, Night Vision Cameras, and Wireless Kits.";
    }
    if (text.includes("price") || text.includes("cost")) {
      return "💰 Prices vary by model — check our Products section for details.";
    }
    if (text.includes("contact")) {
      return "📞 You can reach us at +91-XXXXXXXXXX or via the Contact page.";
    }
    if (text.includes("book") || text.includes("install")) {
      return "🛠️ Great! Please visit the Contact page and fill out the booking form.";
    }

    // Default fallback
    return "🤖 I'm not sure about that, but you can check our Services or Contact pages for more info.";
  };

  // Handle sending message
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const botReply = getBotReply(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="bg-[#F59E0B] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#D97706] transition"
        >
          💬 Chat
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-lg shadow-lg overflow-hidden z-50 flex flex-col">
          {/* Header */}
          <div className="p-3 bg-[#F59E0B] text-white font-semibold flex justify-between">
            <span>XtraVision Assistant</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="p-3 flex-1 overflow-y-auto" style={{ maxHeight: "60vh" }}>
            {messages.map((m, i) => (
              <div key={i} className={`mb-3 ${m.sender === "user" ? "text-right" : "text-left"}`}>
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    m.sender === "user"
                      ? "bg-[#F59E0B] text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded px-3 py-1 text-sm"
            />
            <button
              type="submit"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-3 py-1 rounded"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
