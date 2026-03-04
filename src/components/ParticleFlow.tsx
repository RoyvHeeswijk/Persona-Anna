"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Hardcode values for stable SSR hydration
const particleData = [
  { yStart: -12.4, yEnd: 8.2, duration: 3.1 },
  { yStart: 5.6, yEnd: -15.1, duration: 2.8 },
  { yStart: -18.7, yEnd: 12.5, duration: 4.2 },
  { yStart: 14.3, yEnd: -2.8, duration: 3.6 },
  { yStart: -5.2, yEnd: 18.9, duration: 2.9 },
  { yStart: 9.1, yEnd: -11.4, duration: 4.0 },
  { yStart: -2.3, yEnd: 3.7, duration: 3.3 },
  { yStart: 17.5, yEnd: -19.2, duration: 3.8 },
  { yStart: -14.6, yEnd: 1.1, duration: 2.7 },
  { yStart: 2.8, yEnd: 15.6, duration: 4.1 },
  { yStart: -9.5, yEnd: -6.4, duration: 3.4 },
  { yStart: 11.2, yEnd: 10.8, duration: 3.5 },
];

export default function ParticleFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Anna's circle (Venlo) shrinks
  const scaleAnna = useTransform(scrollYProgress, [0.2, 0.7], [1, 0.5]);
  const colorAnna = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    ["#8a9a85", "#c5cec2"],
  );

  // Family's circle (Poland) grows
  const scaleFamily = useTransform(scrollYProgress, [0.2, 0.7], [0.5, 1.2]);
  const colorFamily = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    ["#e0cc7a", "#f3e5ab"],
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-between px-4 sm:px-12 mt-12 mb-12"
    >
      {/* Background connection line */}
      <div className="absolute top-1/2 left-24 right-24 h-[2px] bg-gradient-to-r from-[#e4e9e2] via-[#e5e7eb] to-[#f3e5ab] -translate-y-1/2 z-0 opacity-50" />

      {/* Origin: Anna in Venlo */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="font-serif font-bold text-gray-800 text-xl">Anna</div>
        <div className="text-sm text-gray-400 font-mono tracking-widest uppercase mb-2">
          Venlo, NL
        </div>
        <motion.div
          className="w-40 h-40 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
          style={{
            scale: scaleAnna,
            backgroundColor: colorAnna,
            boxShadow: "var(--clay-sage)",
          }}
        >
          <span className="text-white text-3xl opacity-80">💶</span>
        </motion.div>
      </div>

      {/* Particle Flow Animations */}
      <div className="absolute top-1/2 left-24 right-24 h-20 -translate-y-1/2 z-0 overflow-hidden pointer-events-none">
        {particleData.map((data, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 w-3 h-3 rounded-full bg-gold-400 opacity-60"
            style={{
              backgroundColor: "#e0cc7a",
              boxShadow: "0 0 8px #e0cc7a",
            }}
            initial={{ left: "10%", y: data.yStart }}
            animate={{
              left: "90%",
              y: data.yEnd,
              opacity: [0, 0.8, 0.8, 0],
              scale: [0.5, 1.2, 1, 0.5],
            }}
            transition={{
              duration: data.duration,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Destination: Family in Poland */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="font-serif font-bold text-gray-800 text-xl">
          Familie
        </div>
        <div className="text-sm text-gray-400 font-mono tracking-widest uppercase mb-2">
          Polen
        </div>
        <motion.div
          className="w-40 h-40 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
          style={{
            scale: scaleFamily,
            backgroundColor: colorFamily,
            boxShadow: "var(--clay-gold)",
          }}
        >
          <span className="text-gray-800 text-3xl opacity-80">❤️</span>
        </motion.div>
      </div>

      {/* Explanatory floating text attached to scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur px-6 py-4 rounded-2xl shadow-sm border border-gray-100 text-center max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-600 font-sans text-[15px] leading-relaxed">
          <strong className="font-semibold text-gray-900">Remittances:</strong>{" "}
          Ze stuurt het grootste deel van haar salaris direct naar huis. Haar
          eigen buffer in Nederland is minimaal.
        </p>
      </motion.div>
    </div>
  );
}
