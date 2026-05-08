"use client";

import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiAward,
} from "react-icons/fi";

export default function Education() {
  const educationData = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "University of Barishal",
      session: "2022 - Present",
      result: "CGPA: Running",
      location: "Barishal, Bangladesh",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "AMMC",
      session: "2020 - 2021",
      result: "GPA: 5.00",
      location: "Mymensingh,Bangladesh",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "NSC",
      session: "2018 - 2019",
      result: "GPA: 5.00",
      location: "Mymensingh, Bangladesh",
    },
  ];

  return (
    <section
      id="education"
      className="relative mt-30 min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Glow */}
      {/* <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div> */}

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Educational Qualification
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-400 tracking-[0.4em] uppercase text-[10px] font-bold mt-3"
          >
            My Academic Journey
          </motion.p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Degree */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      delay: idx * 0.5,
                    }}
                    className="text-3xl text-blue-400"
                  >
                    <FiBookOpen />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.degree}
                  </h3>
                </div>

                {/* Institution */}
                <p className="text-lg text-gray-300 mb-6">
                  {item.institution}
                </p>

                {/* Info Grid */}
                <div className="grid sm:grid-cols-3 gap-5">
                  {/* Session */}
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                    <FiCalendar className="text-blue-400 text-xl" />
                    <div>
                      <p className="text-xs uppercase text-gray-500">
                        Session
                      </p>
                      <h4 className="text-sm font-semibold text-white">
                        {item.session}
                      </h4>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                    <FiAward className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-xs uppercase text-gray-500">
                        Result
                      </p>
                      <h4 className="text-sm font-semibold text-white">
                        {item.result}
                      </h4>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                    <FiMapPin className="text-pink-400 text-xl" />
                    <div>
                      <p className="text-xs uppercase text-gray-500">
                        Location
                      </p>
                      <h4 className="text-sm font-semibold text-white">
                        {item.location}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}