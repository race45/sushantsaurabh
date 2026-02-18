"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [animationData, setAnimationData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("contact-lottie.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-gradient-to-b from-[#0b1220] to-[#070b22]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-semibold border border-indigo-500 px-8 py-3 rounded-xl text-indigo-400">
            Connect With Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - LARGE LOTTIE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            {animationData && (
              <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl">
                <Lottie
                  animationData={animationData}
                  loop
                />
              </div>
            )}
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#0e132b] border border-indigo-500/30 focus:outline-none focus:border-indigo-500 text-white"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#0e132b] border border-indigo-500/30 focus:outline-none focus:border-indigo-500 text-white"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#0e132b] border border-indigo-500/30 focus:outline-none focus:border-indigo-500 text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-4 rounded-lg text-white font-medium"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-sm">
                Message sent successfully!
              </p>
            )}

            {error && (
              <p className="text-red-400 text-sm">
                {error}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
