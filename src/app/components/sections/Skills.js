"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaDocker,
  FaFigma,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiStorybook,
  SiMysql,
  SiMui,
  SiAntdesign,
  SiOpenai,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "Ant Design", icon: <SiAntdesign /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Storybook", icon: <SiStorybook /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "ChatGPT", icon: <SiOpenai /> },
  { name: "Gemini", icon: <SiOpenai /> },
  { name: "DALL·E", icon: <SiOpenai /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Label */}
        <p className="text-indigo-400 uppercase tracking-widest text-sm mb-4">
          Skills & Tools
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          My Toolbox & Things I Can Do
        </h2>

        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          The skills, tools and technologies I use to build scalable,
          high-performance and visually engaging digital products.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 text-gray-300 group-hover:text-indigo-400 transition duration-300">
                {skill.icon}
              </div>

              {/* Text */}
              <p className="text-gray-400 group-hover:text-white transition duration-300 text-sm md:text-base">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
