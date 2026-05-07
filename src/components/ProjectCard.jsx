"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const ProjectCard = ({ project, idx, setSelectedProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
    >
      {/* Image Area */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60"></div>
      </div>

      {/* Content Area */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.shortDesc}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] text-blue-300 font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSelectedProject(project)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20"
          >
            Details <FiArrowRight />
          </button>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all">
            <FiGithub size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;