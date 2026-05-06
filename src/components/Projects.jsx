"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const Projects = () => {
  const projectList = [
    // SkillsSphere Project Object
{
  title: "SkillsSphere: A Comprehensive Learning Platform",
  desc: "SkillsSphere is a complete full-stack solution built with Next.js, MongoDB, Node.js, and Stripe. It features a robust course management system, secure payment integration, user authentication, and real-time progress tracking for a seamless learning experience.",
  image: "/skillsphere..png", 
  tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
  github: "https://github.com/Rafiul-goni-rayhan/skillsphere", 
  live: "https://skillsphere-vert.vercel.app/", 
},
    {
  title: "PixGen: AI-Powered Image Generation ",
  desc: "PixGen is a cutting-edge SaaS platform that leverages advanced AI models to generate high-quality images from text prompts. Built with Next.js 15 and Cloudinary, it features secure user authentication, a credit-based system with Stripe integration, and a sleek dashboard for managing generated content.",
  image: "/pixgen.png", 
  tech: ["Next.js 15", "Tailwind CSS", "Cloudinary AI", "MongoDB"],
  github: "https://github.com/Rafiul-goni-rayhan/pixgen-prac",
  live: "https://pixgen-prac.vercel.app",   
},
  {
  title: "Dragon-news: Dynamic News & Media Portal",
  desc: "Dragon-news is a full-featured digital newspaper platform designed for real-time news delivery. It features a robust Content Management System (CMS) for editors, category-based news filtering, a trending news section, and a fully responsive layout. Integrated with high-performance caching for fast loading and an interactive comment system for user engagement.",
  image: "/news.png", 
  tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion", "Firebase"],
  github: "https://github.com/Rafiul-goni-rayhan/news-paper", 
  live: "https://news-paper-nu.vercel.app/category/01",   
},
  ];

  return (
    <section id="projects" className="py-24 bg-transparent text-white">
      <div className="container mx-auto px-6">
        
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
              className="bg-[#0a0a1a] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-gray-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm transition-all"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination (Optional UI) */}
        <div className="mt-16 flex justify-center items-center gap-4">
           <button className="text-gray-500 hover:text-white transition">← PREV</button>
           <div className="flex gap-2">
             <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full font-bold text-xs cursor-pointer">1</span>
             <span className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full font-bold text-xs cursor-pointer">2</span>
             <span className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full font-bold text-xs cursor-pointer">3</span>
           </div>
           <button className="text-gray-500 hover:text-white transition">NEXT →</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;