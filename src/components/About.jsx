"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBriefcase,
  FiHeadphones,
  FiFileText,
} from "react-icons/fi";
import Image from "next/image";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const stats = [
    {
      icon: <FiAward />,
      title: "Experience",
      desc: "1+ Years Learning",
    },
    {
      icon: <FiBriefcase />,
      title: "Projects",
      desc: "15+ Completed",
    },
    {
      icon: <FiHeadphones />,
      title: "Passion",
      desc: "Coding & Research",
    },
  ];

  return (
    <section
      id="about"
      className="relative mt-30 min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Glow */}
      {/* <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div> */}

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto flex text-center grid md:grid-cols-2 gap-10 items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-400 tracking-[0.4em] uppercase text-[10px] font-bold"
          >
            My Introduction
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 group">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              {/* Image */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 z-10 bg-[#030014]">
                <Image
                  src="/my-pic.jpg"
                  alt="Rafiul Goni Rayhan"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center text-center transition-all duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      delay: idx * 0.5,
                    }}
                    className="text-2xl text-blue-400 mb-2"
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="font-bold text-xs text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[10px] text-gray-400 uppercase tracking-tight">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* About Text */}
            <div className="text-gray-400 text-lg leading-relaxed text-center lg:text-left">
              <p>
                Hello! I’m{" "}
                <span className="text-white font-semibold">
                  Rafiul Goni Rayhan
                </span>
                , a passionate Full-stack Web Developer and AI/ML Research
                Trainee currently studying Computer Science and Engineering at
                the University of Barishal.
              </p>

              {/* Hidden Content */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: showMore ? 1 : 0,
                  height: showMore ? "auto" : 0,
                }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="space-y-5 mt-5">
                  <p>
                    My programming journey started with curiosity about how
                    websites and software actually work behind the scenes. What
                    began as simple HTML and CSS practice slowly turned into a
                    deep passion for building modern web applications and
                    solving real-world problems through technology.
                  </p>

                  <p>
                    I enjoy working on creative and challenging projects,
                    especially full-stack development, UI/UX design, and
                    intelligent systems powered by AI.
                  </p>

                  <p>
                    Outside of programming, I enjoy learning about new
                    technologies, listening to music, watching tech content,
                    and continuously improving my skills every day.
                  </p>

                  <p>
                    I believe in continuous learning, consistency, and
                    creativity. I always try to bring passion and personality
                    into my work.
                  </p>
                </div>
              </motion.div>

              {/* See More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMore(!showMore)}
                className="mt-5 text-blue-400 hover:text-blue-300 font-semibold transition-all duration-300"
              >
                {showMore ? "See Less ↑" : "See More ↓"}
              </motion.button>
            </div>

            {/* Download Button */}
            <div className="flex justify-center lg:justify-start mt-10">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-black px-10 py-4 rounded-2xl font-bold transition-all duration-300 border border-white/10 shadow-lg group"
              >
                Download CV
                <FiFileText className="text-xl group-hover:animate-bounce" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}