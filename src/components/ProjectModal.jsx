"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import Image from "next/image";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl bg-[#0a0a1a] border border-white/10 rounded-[3rem] overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Sticky Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-white/10"
        >
          <FiX size={24} />
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent"></div>
        </div>

        {/* Modal Content */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-white">{project.title}</h2>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all shadow-xl">
              Live Demo <FiExternalLink />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">About Project</h4>
                <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 text-gray-400">
                  <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-1">Challenges</h4>
                  {project.challenges.map((c, i) => <p key={i}>• {c}</p>)}
                </div>
                <div className="space-y-3 text-gray-400">
                  <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-1">Future</h4>
                  {project.futurePlans.map((f, i) => <p key={i}>• {f}</p>)}
                </div>
              </div>
            </div>

            <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] border border-white/5">
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-xl text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all font-bold">
                <FiGithub size={20} /> View Source
              </a>
              <button 
                onClick={onClose}
                className="w-full py-4 border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl transition-all font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;