"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-14 px-6 bg-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Small Label */}
        <p className="text-indigo-400 uppercase tracking-widest text-sm mb-4">
          About
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Who Is <span className="text-indigo-500">Sushant?</span>
        </h2>

        <div className="grid md:grid-cols-[400px_1fr] gap-8 lg:gap-10 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl shadow-indigo-500/20">
              <Image
                src="/profile.png"  // put your image inside public folder
                alt="Sushant Saurabh"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-indigo-400">
              A curiosity-driven Frontend Engineer with design precision.
            </h3>

            <p className="text-gray-300 leading-8">
              I’m passionate about blending technical excellence with
              visually engaging user experiences. Clean architecture,
              performance optimization, and scalable UI systems define
              how I approach frontend engineering.
            </p>

            <p className="text-gray-300 leading-8">
              I hold an MCA degree and have worked across Fintech,
              Healthcare, Immigration, Law Automation, B2B ecosystems,
              and Enterprise platforms. My focus remains on crafting
              accessible, human-centered interfaces.
            </p>

            <p className="text-gray-300 leading-8">
              I enjoy building intelligent UI systems, integrating APIs,
              and optimizing performance for real-world business impact.
              Currently exploring AI-driven frontend enhancements and
              modern web architectures.
            </p>

            <a
              href="#contact"
              className="inline-block mt-4 text-indigo-400 font-semibold hover:underline"
            >
              Get In Touch →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
