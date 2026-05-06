"use client";
import { FiHome, FiCode, FiBriefcase, FiMail } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

const menu = [
  { name: "Home", link: "home", icon: <FiHome /> },
  { name: "Tech Stack", link: "tech", icon: <FiCode /> },
  { name: "Projects", link: "projects", icon: <FiBriefcase /> },
  { name: "Contact", link: "contact", icon: <FiMail /> },
];
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <div className="fixed top-4 w-full z-50 flex justify-center">

      {/* Glass Navbar */}
      <div className="flex items-center justify-between w-[100%] md:w-[100%] px-5 py-3 rounded-2xl 
      bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">

        {/* Logo */}
        <h1 className="text-white font-bold text-lg tracking-wide">
          <Image
            src="/my-pic.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 relative">
          {menu.map((item, i) => (
            <li
              key={i}
              onClick={() => handleScroll(item.link)}
              className="relative text-gray-300 cursor-pointer transition group"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </div>

              {/* Hover Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <HiOutlineDotsVertical
            onClick={() => setOpen(!open)}
            className="text-white text-2xl cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-16 w-[90%] bg-white/10 backdrop-blur-xl 
            border border-white/20 rounded-xl shadow-lg p-4 md:hidden"
          >
            {menu.map((item, i) => (
              <p
                key={i}
                onClick={() => handleScroll(item.link)}
                className="text-gray-300 py-2 text-center hover:text-white transition cursor-pointer"
              >
                {item.name}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}