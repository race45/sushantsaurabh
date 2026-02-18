"use client";

import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-gradient-to-b from-[#050816] via-[#0a0f2c] to-[#070b22] overflow-hidden"
    >
      {/* Floating Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <p className="text-indigo-400 uppercase tracking-widest text-sm mb-3">
          Experience
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Professional Journey
        </h2>

        <p className="text-gray-400 mb-20 text-sm md:text-base">
          A collection of my work experience and the roles I have taken
          in various organizations.
        </p>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Glowing Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 animate-pulse rounded-full"></div>

          <div className="space-y-24">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Card Container */}
                  <div className="w-full md:w-5/12">

                    <Tilt
                      glareEnable={true}
                      glareMaxOpacity={0.2}
                      scale={1.02}
                      transitionSpeed={1500}
                    >
                      <div className="relative bg-[#0e132b] border border-indigo-500/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] transition-all duration-500">

                        {/* Animated Gradient Border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 hover:opacity-20 blur-xl transition duration-500"></div>

                        {/* Logo */}
                        <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 border border-indigo-400/40">
                          {item.logo && (
                            <Image
                              src={item.logo}
                              alt={item.company}
                              width={28}
                              height={28}
                            />
                          )}
                        </div>

                        {/* Role */}
                        <h3 className="text-lg font-semibold text-white">
                          {item.role}
                        </h3>

                        <p className="text-indigo-400 text-sm mb-1">
                          {item.company}
                        </p>

                        <p className="text-gray-500 text-xs mb-4">
                          {item.period}
                        </p>

                        <p className="text-gray-400 text-sm mb-6 text-justify">
                          {item.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs rounded-full bg-indigo-600/30 text-indigo-300 border border-indigo-500/40"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Tilt>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-[#070b22] shadow-[0_0_20px_rgba(99,102,241,0.8)]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
