"use client";

import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiHeadphones, FiFileText } from "react-icons/fi";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      icon: <FiAward />,
      title: "Experience",
      desc: "1+ Years Working",
    },
    {
      icon: <FiBriefcase />,
      title: "Completed",
      desc: "15+ Projects",
    },
    {
      icon: <FiHeadphones />,
      title: "Support",
      desc: "Online 24/7",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-[#030014] text-white overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
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
          {/* Left: Image with Modern Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 group">
              {/* Animated Glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

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

          {/* Right: Content & Animated Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Stats Cards */}
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

            {/* English Bio Description */}
            <p className="text-gray-400 text-lg leading-relaxed mb-10 text-center lg:text-left">
              I am Rafiul Goni Rayhan, a dedicated Full-stack Web Developer and
              AI/ML Research Trainee. Currently, I am in my final year of
              Computer Science and Engineering at the University of Barishal. I
              specialize in building scalable, high-performance web applications
              that deliver seamless user experiences. Alongside development, I
              am deeply involved in AI/ML research, exploring innovative ways to
              solve real-world problems through data and intelligent systems.
              Driven by a passion for clean code and continuous learning, I
              strive to create impactful digital solutions at the intersection
              of web technology and machine l
            </p>

            {/* Action Button */}
            <div className="flex justify-center lg:justify-start">
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
