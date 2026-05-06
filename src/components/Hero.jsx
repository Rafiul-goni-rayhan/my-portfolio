"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const roles = ["Web Designer", "Frontend Developer", "Freelancer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // typing effect
  useEffect(() => {
    let i = 0;
    const current = roles[index];
    const interval = setInterval(() => {
      setText(current.slice(0, i));
      i++;
      if (i > current.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 1500);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="relative mt-30 min-h-screen flex items-center justify-center text-white overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>  

      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-400 mb-2">Hey, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            RAFIUL GONI RAYHAN👋
          </h1>

          {/* Typing */}
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4 h-8">
            I am a <span className="text-white font-semibold">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            🚀 I build modern, high-performance websites <br />
            ⭐ Available for freelance & collaborations
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-md border border-white/10 transition shadow-lg">
              Hire Me <FaArrowRight />
            </button>

            <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              View Work
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Profile */}
          <div className="relative w-72 h-72 rounded-full flex items-center justify-center 
          bg-gradient-to-tr from-blue-500/30 to-purple-500/30 border border-white/10 shadow-2xl">

            <img
              src="/my-pic.jpg"
              className="w-70 h-80 rounded-full object-cover"
              alt="profile"
            />
          </div>

          {/* Floating Cards */}

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-0 right-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm border border-white/10"
          >
            💡 A lots of Problems Solved...
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm border border-white/10"
          >
            🧠 1 Years Experience
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
            className="absolute bottom-0 right-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm border border-white/10"
          >
            🚀 15+ Projects
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}