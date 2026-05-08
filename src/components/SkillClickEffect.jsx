"use client";

import { useEffect, useState } from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const icons = [
  {
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    icon: FaNodeJs,
    color: "#68A063",
  },
  {
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    icon: FaJs,
    color: "#F7DF1E",
  },
  {
    icon: FaGithub,
    color: "#ffffff",
  },
  {
    icon: SiNextdotjs,
    color: "#ffffff",
  },
  {
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    icon: SiMongodb,
    color: "#47A248",
  },
];

export default function SkillClickEffect() {
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;

      // Ignore buttons & links
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("img") ||
        target.closest("svg") ||
        target.closest("nav") ||
        // target.closest("section") ||
        // target.closest(".card") ||
        target.closest("[data-no-effect]")
      ) {
        return;
      }

      const newEffects = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        moveX: (Math.random() - 0.5) * 250,
        moveY: (Math.random() - 0.5) * 250,
        rotate: Math.random() * 360,
        ...icons[Math.floor(Math.random() * icons.length)],
      }));

      setEffects((prev) => [...prev, ...newEffects]);

      setTimeout(() => {
        setEffects((prev) =>
          prev.filter(
            (item) => !newEffects.find((effect) => effect.id === item.id),
          ),
        );
      }, 1500);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {effects.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: item.x,
              top: item.y,
              animation: "skillFloat 1.5s ease-out forwards",
              transform: `translate(${item.moveX}px, ${item.moveY}px) rotate(${item.rotate}deg)`,
            }}
          >
            <Icon
              className="text-3xl drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]"
              style={{
                color: item.color,
              }}
            />
          </div>
        );
      })}

      <style jsx global>{`
        @keyframes skillFloat {
          0% {
            opacity: 1;
            transform: scale(0.1);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }

          100% {
            opacity: 0;
            transform: scale(0.2);
          }
        }
      `}</style>
    </>
  );
}
