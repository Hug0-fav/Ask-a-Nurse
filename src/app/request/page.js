"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// app/request/page.js
export default function RequestPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log("✅ Email sent:", result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          // console.error("❌ Email failed:", error.text);
          toast.error("Failed to send message.");
        }
      );

      form.current.reset();
  };

  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-blue-50 to-white text-gray-900 font-body">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-header font-extrabold text-gray-800 mb-4">
          Want to make a Request?
        </h1>
        <p className="text-lg text-gray-600">
          Have a topic you&apos;d love me to cover? Let&apos;s make this space
          work for you! Send in your request I’m listening. 💙
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-xl space-y-6"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm font-body
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
      transition duration-200"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm font-body
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
      transition duration-200"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-none font-body
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
      transition duration-200"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg font-header font-semibold text-white 
      bg-gradient-to-r from-blue-600 to-indigo-600 
      hover:from-blue-700 hover:to-indigo-700 
      shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Send Request
        </button>
      </form>
    </main>
  );
}
