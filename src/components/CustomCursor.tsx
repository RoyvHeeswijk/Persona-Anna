"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Use springs for a smooth, organic lag effect
  const springX = useSpring(position.x, {
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  });
  const springY = useSpring(position.y, {
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering an interactive element
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".hub-card") ||
        target.closest(".hub-sticker")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [springX, springY]);

  // Don't render cursor on touch devices to avoid ghost taps
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Outer organic blob cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 64 : 32,
          height: hovered ? 64 : 32,
          backgroundColor: hovered ? "#E4E9E2" : "#F3E5AB", // Sage on hover, Gold normally
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
          opacity: hovered ? 0.8 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Exact dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: position.x,
          y: position.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
