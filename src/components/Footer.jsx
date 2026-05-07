"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiHeart,
} from "react-icons/fi";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FiGithub />,
      link: "https://github.com/yourusername",
    },
    {
      icon: <FiLinkedin />,
      link: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <FiFacebook />,
      link: "https://facebook.com/yourusername",
    },
    {
      icon: <FiMail />,
      link: "mailto:yourmail@gmail.com",
    },
  ];

  return (
    <footer className="relative py-10 bg-[#030014] text-white overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-wide"
          >
            Rafiul Goni Rayhan
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-3 max-w-xl text-sm md:text-base"
          >
            Full-stack Web Developer & AI/ML Research Trainee passionate about
            building modern, responsive, and intelligent digital experiences.
          </motion.p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-8">
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} Rafiul Goni Rayhan. All Rights
            Reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with <FiHeart className="text-red-400 animate-pulse" /> using
            Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}