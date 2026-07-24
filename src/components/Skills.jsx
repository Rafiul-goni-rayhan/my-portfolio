"use client";

import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Developer",
      skills: [
        { name: "HTML5", level: "Expert" },
        { name: "Next.JS", level: "Intermediate" },
        // { name: "TypeScript", level: "Expert" },
        { name: "Tailwind Css", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "React.JS", level: "Expert" },
      ],
    },
    {
      title: "Backend Developer",
      skills: [
        { name: "Node.JS", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
        { name: "Express.JS", level: "Intermediate" },
        // { name: "Docker", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        // { name: "Kubernetes", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-400 tracking-[0.4em] uppercase text-[10px] font-bold"
          >
            My Technical Level
          </motion.p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] hover:border-white/60 transition-all duration-300 group"
            >
              <h3 className="text-center text-xl font-bold mb-10 text-gray-100 group-hover:text-white transition-colors">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3">
                    {/* Glowing Badge Icon */}
                    <HiBadgeCheck className="text-blue-500 text-2xl mt-0.5 filter drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                    
                    <div>
                      <h4 className="font-bold text-base text-white leading-tight">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-tighter">
                        {skill.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;