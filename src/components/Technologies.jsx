"use client";

import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiNestjs, SiMongodb, 
  SiPostgresql, SiPrisma, SiDocker, SiKubernetes, 
  SiTailwindcss, SiGit
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Technologies = () => {
  const techList = [
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    // { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
    // { icon: <SiExpress className="text-gray-400" />, name: "Express" },
    // { icon: <SiNestjs className="text-red-500" />, name: "NestJS" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-blue-400" />, name: "PostgreSQL" },
    // { icon: <SiPrisma className="text-white" />, name: "Prisma" },
    // { icon: <SiDocker className="text-blue-500" />, name: "Docker" },
    // { icon: <SiKubernetes className="text-blue-600" />, name: "Kubernetes" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <SiGit className="text-orange-600" />, name: "Git" },
    { icon: <FaAws className="text-orange-400" />, name: "AWS" },
  ];

  return (
    <section className="py-24 bg-transparent">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div> 

      {/* Header */}
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-black mb-4 text-white italic tracking-tighter"
        >
          TECHNOLOGIES
        </motion.h2>
        <motion.p className="text-blue-400 tracking-[0.5em] uppercase text-xs font-bold opacity-80">
          My Tech Stack
        </motion.p>
      </div>

      {/* Tech Icons Grid */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-14 max-w-6xl mx-auto px-6">
        {techList.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center group cursor-pointer w-24"
          >
            {/* Super Bright Icon Container */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              
              {/* Background Glow - এটি আইকনকে উজ্জ্বল করবে */}
              <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.1)] group-hover:bg-white/20 group-hover:shadow-blue-500/30 transition-all duration-300"></div>
              
              {/* Radial Center Light */}
              <div className="absolute w-10 h-10 bg-white/10 blur-xl rounded-full"></div>

              {/* Icon - Full Opacity and Drop Shadow */}
              <div className="relative z-10 text-4xl md:text-5xl brightness-125 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
            </div>
            
            {/* Label - High Contrast */}
            <span className="mt-5 text-[10px] md:text-xs text-white font-black uppercase tracking-widest italic opacity-60 group-hover:opacity-100 transition-all">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;