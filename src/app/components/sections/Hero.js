"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/developer-working.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/abstract-coding.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-block px-4 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            🚀 Frontend Software Engineer
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi, I am{" "} Sushant Saurabh
            {/* <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <Typewriter
                words={["Sushant Saurabh", "Prompt Engineer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span> */}
            {/* <br />
  <span className="text-indigo-400 text-2xl md:text-3xl font-semibold">
    <Typewriter
      words={["Prompt Engineer"]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </span> */}
          </h1>

          {/* Enhanced Paragraph */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Frontend Engineer crafting scalable, high-performance web
            applications using{" "}
            <span className="text-indigo-400 font-medium">
              <Typewriter
                words={["React.js", "Next.js", "Angular", "WordPress", "Prompt Engineer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>

          {/* Social Icons Minimal Style */}
          <div className="flex items-center mt-6 gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/race45"
              target="_blank"
              rel="noopener noreferrer"
              // className="w-14 h-14 bg-[#111827] flex items-center justify-center hover:bg-[#1f2937] transition duration-300"
            >
              <FaGithub className="text-white text-2xl" />
            </a>

            {/* Divider */}
            {/* <div className="h-14 w-px bg-gray-700"></div> */}

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sushant-saurabh-a1b680243"
              target="_blank"
              rel="noopener noreferrer"
              // className="w-14 h-14 bg-[#111827] flex items-center justify-center hover:bg-[#1f2937] transition duration-300"
            >
              <FaLinkedinIn className="text-white text-2xl" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 flex-wrap">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg shadow-lg shadow-indigo-600/30 flex items-center gap-2"
            >
              ⬇ Download Resume
            </a>

            <a
              href="#about"
              className="px-6 py-3 border border-indigo-500 hover:bg-indigo-600 transition rounded-lg"
            >
              Know More →
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - LOTTIE */}
        <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full max-w-md"
            />
          )}
        </div>
      </div>
    </section>
  );
}
