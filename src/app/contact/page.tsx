"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workType: "Short-term",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", workType: "Short-term", message: "" });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="bg-white p-6 shadow-md rounded-lg max-w-lg w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number (Optional)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Work Type</label>
          <select
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option>Short-term</option>
            <option>Long-term</option>
            <option>Internship</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </main>
  );
}
