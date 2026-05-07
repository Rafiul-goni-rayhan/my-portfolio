"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight, FiX } from "react-icons/fi";
import Image from "next/image";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: "skillsphere",

      title: "SkillsSphere: A Comprehensive Learning Platform",

      shortDesc:
        "A modern full-stack LMS platform with secure authentication, course management, Stripe payments, and real-time progress tracking.",

      description:
        "SkillsSphere is a complete Learning Management System (LMS) built using modern web technologies. The platform allows users to browse courses, enroll securely through Stripe payments, and track learning progress in real time.",

      image: "/skillsphere..png",

      techStack: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Tailwind CSS",
      ],

      github: "https://github.com/Rafiul-goni-rayhan/skillsphere",

      live: "https://skillsphere-vert.vercel.app/",

      challenges: [
        "Stripe payment integration",
        "Authentication & protected routes",
        "Real-time course progress tracking",
      ],

      futurePlans: [
        "AI-based course recommendation",
        "Certificate generation system",
        "Advanced instructor analytics",
      ],
    },

    {
      id: "pixgen",

      title: "PixGen: AI-Powered Image Generation",

      shortDesc:
        "An AI SaaS platform that generates high-quality images from text prompts using Cloudinary AI integration.",

      description:
        "PixGen is an AI-powered SaaS application designed for generating creative images from text prompts with secure authentication and Stripe integration.",

      image: "/pixgen.png",

      techStack: ["Next.js 15", "Tailwind CSS", "Cloudinary AI", "MongoDB"],

      github: "https://github.com/Rafiul-goni-rayhan/pixgen-prac",

      live: "https://pixgen-prac.vercel.app",

      challenges: [
        "AI API integration",
        "Image optimization",
        "Credit-based system management",
      ],

      futurePlans: [
        "Multiple AI image styles",
        "Image editing system",
        "HD image downloads",
      ],
    },

    {
      id: "dragon-news",

      title: "Dragon-news: Dynamic News & Media Portal",

      shortDesc:
        "A responsive digital newspaper platform with category filtering, trending news, and interactive user engagement.",

      description:
        "Dragon-news is a dynamic digital news platform developed for delivering real-time news content with modern UI and responsive design.",

      image: "/news.png",

      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Firebase",
        "Framer Motion",
      ],

      github: "https://github.com/Rafiul-goni-rayhan/news-paper",

      live: "https://news-paper-nu.vercel.app/category/01",

      challenges: [
        "Dynamic category management",
        "Responsive design optimization",
        "Authentication security",
      ],

      futurePlans: [
        "AI-powered news recommendation",
        "Multilingual support",
        "Bookmark system",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#030014] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My Projects
          </motion.h2>

          <motion.p className="text-blue-400 tracking-[0.3em] uppercase text-xs font-bold">
            Recent Works
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 group shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {/* View Details */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all"
                  >
                    View Details <FiArrowRight />
                  </button>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm transition-all"
                  >
                    <FiGithub /> GitHub
                  </a>

                  {/* Live */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-blue-500/30 hover:bg-blue-500/10 rounded-xl text-sm transition-all"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#0a0a1a] border border-white/10 rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              >
                <FiX />
              </button>

              {/* Image */}
              <div className="relative w-full h-72">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* cross */}
              <div className="flex justify-center text-center mt-3">
                <a href="#projects">
                  <button className="  rounded-full bg-purple-100 p-5 hover:bg-blue-200 flex items-center justify-center transition">
                    <FiX />
                    <h2 className="text-2xl font-bold text-red-500  "> Go to main page</h2>
                  </button>
                </a>
              </div>
              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h2>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-blue-400 font-semibold mb-2">
                    Brief Description
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-blue-400 font-semibold mb-3">
                    Main Technology Stack
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <h3 className="text-blue-400 font-semibold mb-3">
                    Challenges Faced
                  </h3>

                  <ul className="space-y-2 text-gray-400">
                    {selectedProject.challenges.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Future Plans */}
                <div className="mb-8">
                  <h3 className="text-blue-400 font-semibold mb-3">
                    Future Improvements
                  </h3>

                  <ul className="space-y-2 text-gray-400">
                    {selectedProject.futurePlans.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition"
                  >
                    <FiGithub />
                    GitHub Repository
                  </a>

                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition"
                  >
                    <FiExternalLink />
                    Live Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
