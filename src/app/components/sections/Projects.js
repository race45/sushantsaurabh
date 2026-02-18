"use client";

import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 "
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-white/80 mb-3">
          Work
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-20">
          A Selection Of Stuff I have Built
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-16 items-center`}
              >
                {/* TEXT SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`${!isEven && "md:order-2"}`}
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-white/80 mb-4">
                    {project.description}
                  </p>

                  <p className="text-white/70 mb-6">
                    <strong>Contribution:</strong> {project.contribution}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-white/20 text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition"
                  >
                    View It Here
                  </a>
                </motion.div>

                {/* IMAGE SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex justify-center ${!isEven && "md:order-1"}`}
                >
                  <div className="relative w-full max-w-lg">
                    <Image
                      src={project.desktop}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="rounded-xl shadow-2xl"
                    />

                    <Image
                      src={project.mobile}
                      alt="mobile"
                      width={170}
                      height={350}
                      className="absolute -bottom-8 -right-8 rounded-xl shadow-xl"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
