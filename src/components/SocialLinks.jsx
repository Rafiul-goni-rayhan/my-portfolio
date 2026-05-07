"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const SocialLinks = () => {
  const socialData = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      href: " https://github.com/Rafiul-goni-rayhan",
      color: "hover:bg-zinc-800 shadow-zinc-500/10",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={24} />,
      href: "https://www.linkedin.com/in/rafiul-goni-rayhan",
      color: "hover:bg-[#0077b5] shadow-blue-500/10",
    },
    // {
    //   name: "Twitter",
    //   icon: <FaTwitter size={24} />,
    //   href: "https://twitter.com/rafiul_goni_rayhan",
    //   color: "hover:bg-[#1da1f2] shadow-sky-500/10",
    // },
    {
      name: "Facebook",
      icon: <FaFacebookF size={24} />,
      href: "https://facebook.com",
      color: "hover:bg-[#1877f2] shadow-blue-600/10",
    },
    {
      name: "Youtube",
      icon: <FaYoutube size={24} />,
      href: "https://www.youtube.com/@Rafiul_Goni_Rayhan",
      color: "hover:bg-[#ff0000] shadow-red-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.span 
            variants={itemVariants}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
          >
            Connect with me
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black mt-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-zinc-500"
          >
            Social Links
          </motion.h2>
        </div>

        {/* Links Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socialData.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className={`
                group relative flex items-center gap-4 px-6 py-4 
                bg-white dark:bg-zinc-900/50 
                border border-gray-200 dark:border-zinc-800 
                rounded-3xl shadow-xl transition-all duration-500
                backdrop-blur-md overflow-hidden
                ${social.color} hover:text-white
              `}
            >
              {/* Icon Container */}
              <div className="relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]">
                {social.icon}
              </div>

              {/* Name */}
              <span className="text-lg font-bold relative z-10 hidden sm:block">
                {social.name}
              </span>

              {/* Advanced Glow Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-current -z-10 blur-2xl scale-150" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SocialLinks;