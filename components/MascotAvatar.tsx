"use client";

import React from "react";
import { motion } from "framer-motion";

interface MascotAvatarProps {
  type?: "laptop" | "flag" | "standing";
  size?: number;
  className?: string;
}

export default function MascotAvatar({
  type = "standing",
  size = 300,
  className = "",
}: MascotAvatarProps) {
  const imgSrc = `/mascot/${type}.png`;

  // Determine idle animation based on mascot type
  const getIdleAnimation = () => {
    switch (type) {
      case "flag":
        return {
          y: [0, -15, 0],
          rotate: [0, -2, 2, 0],
        };
      case "standing":
        return {
          y: [0, -20, 0],
          scale: [1, 1.02, 1],
          rotate: [0, 1, -1, 0],
        };
      case "laptop":
        return {
          y: [0, -12, 0],
          rotate: [0, -1, 1, 0],
        };
      default:
        return { y: [0, -10, 0] };
    }
  };

  const getTransition = () => {
    switch (type) {
      case "flag":
        return { duration: 4, repeat: Infinity, ease: "easeInOut" as const };
      case "standing":
        return { duration: 6, repeat: Infinity, ease: "easeInOut" as const };
      case "laptop":
        return { duration: 5, repeat: Infinity, ease: "easeInOut" as const };
      default:
        return { duration: 5, repeat: Infinity, ease: "easeInOut" as const };
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div 
        className="relative z-10 h-full w-full origin-bottom"
        animate={getIdleAnimation()}
        transition={getTransition()}
      >
        <img
          src={imgSrc}
          alt={`Mascot - ${type}`}
          className="h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(115,255,255,0.2)]"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-radial from-[#73FFFF]/20 to-transparent blur-3xl opacity-30" />
    </div>
  );
}
