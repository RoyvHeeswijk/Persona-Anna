"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HoverState = "name" | "bar" | "clock" | null;

export default function ScannerInterface() {
  const [activeHover, setActiveHover] = useState<HoverState>(null);
  const [timeLeft, setTimeLeft] = useState(14);

  // Aggressive ticking clock for Anna
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 14; // Reset to 14 when it hits 0
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 mb-20 font-mono">
      {/* 
        The Dashboard Container 
        Cold, minimalist, dark.
      */}
      <div className="bg-[#1A2432] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
        {/* Header */}
        <div className="bg-[#131b26] px-6 py-4 border-b border-gray-800 flex justify-between items-center">
          <div className="text-gray-400 text-xs tracking-[0.2em] font-bold">
            LIVE PERFORMANCE /// SECTOR 4
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-500 text-[10px] tracking-wider">
              SYNCED
            </span>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[2fr_3fr_1fr] md:grid-cols-[2fr_4fr_1fr] px-6 py-3 border-b border-gray-800/50 text-[10px] text-gray-500 tracking-widest uppercase">
          <div>Operator</div>
          <div>Pick-Rate Target</div>
          <div className="text-right">Status</div>
        </div>

        {/* --- ROW 1: KACPER M. (GREEN) --- */}
        <div className="grid grid-cols-[2fr_3fr_1fr] md:grid-cols-[2fr_4fr_1fr] px-6 py-4 border-b border-gray-800/30 items-center transition-colors">
          <div className="text-gray-300 text-sm font-bold">KACPER M.</div>
          <div className="flex items-center gap-4">
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-full" />
            </div>
            <span className="text-emerald-400 text-xs font-bold w-12 shrink-0">
              112%
            </span>
          </div>
          <div className="text-right flex justify-end">
            <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded">
              GROEN
            </span>
          </div>
        </div>

        {/* --- ROW 2: ANNA K. (ORANGE) --- */}
        {/* This row is interactive and subtly pulsing */}
        <motion.div
          className="relative grid grid-cols-[2fr_3fr_1fr] md:grid-cols-[2fr_4fr_1fr] px-6 py-5 border-b border-gray-800/30 items-center bg-orange-500/[0.02]"
          animate={{
            backgroundColor: [
              "rgba(249, 115, 22, 0.02)",
              "rgba(249, 115, 22, 0.06)",
              "rgba(249, 115, 22, 0.02)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Anna's Name (Hoverable) */}
          <div
            className="text-white text-sm font-bold relative w-max cursor-pointer"
            onMouseEnter={() => setActiveHover("name")}
            onMouseLeave={() => setActiveHover(null)}
          >
            ANNA K.
            {activeHover === "name" && (
              <motion.div
                layoutId="hover-outline"
                className="absolute -inset-x-2 -inset-y-1 border border-orange-500/30 rounded"
              />
            )}
          </div>

          {/* Anna's Bar & Clock (Hoverable separate elements) */}
          <div className="flex items-center gap-4">
            {/* The Bar */}
            <div
              className="w-full relative cursor-pointer py-2"
              onMouseEnter={() => setActiveHover("bar")}
              onMouseLeave={() => setActiveHover(null)}
            >
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-orange-500 rounded-full"
                  initial={{ width: "84%" }}
                  animate={{ width: ["84%", "86%", "84%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-y-0 left-[100%] w-[1px] bg-white/50" />
              </div>
              {activeHover === "bar" && (
                <motion.div
                  layoutId="hover-outline"
                  className="absolute inset-0 border border-orange-500/30 rounded"
                />
              )}
            </div>

            {/* The Text % */}
            <span className="text-orange-500 text-xs font-bold w-12 shrink-0">
              84%
            </span>

            {/* The Clock */}
            <div
              className="hidden md:flex items-center justify-center bg-red-500/10 border border-red-500/30 text-red-500 px-2 py-1 rounded text-[10px] font-bold w-14 cursor-pointer relative"
              onMouseEnter={() => setActiveHover("clock")}
              onMouseLeave={() => setActiveHover(null)}
            >
              00:{timeLeft.toString().padStart(2, "0")}
            </div>
          </div>

          <div className="text-right flex justify-end">
            <span className="px-2 py-1 bg-orange-500/10 text-orange-500 text-[10px] font-bold rounded animate-pulse">
              ORANJE
            </span>
          </div>
        </motion.div>

        {/* Mobile-only clock for Anna (shown below the row on small screens) */}
        <div className="md:hidden px-6 py-2 border-b border-gray-800/30 flex justify-end">
          <div
            className="flex items-center justify-center bg-red-500/10 border border-red-500/30 text-red-500 px-2 py-1 rounded text-[10px] font-bold w-14 cursor-pointer"
            onMouseEnter={() => setActiveHover("clock")}
            onMouseLeave={() => setActiveHover(null)}
          >
            00:{timeLeft.toString().padStart(2, "0")}
          </div>
        </div>

        {/* --- ROW 3: PIOTR W. (RED) --- */}
        <div className="grid grid-cols-[2fr_3fr_1fr] md:grid-cols-[2fr_4fr_1fr] px-6 py-4 border-b border-transparent items-center">
          <div className="text-gray-400 text-sm font-bold">PIOTR W.</div>
          <div className="flex items-center gap-4">
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[71%]" />
            </div>
            <span className="text-red-500 text-xs font-bold w-12 shrink-0">
              71%
            </span>
          </div>
          <div className="text-right flex justify-end">
            <span className="px-2 py-1 bg-red-500/10 text-red-500 text-[10px] font-bold rounded">
              ROOD
            </span>
          </div>
        </div>
      </div>

      {/* 
        The Popovers (Museum-style editorial cards)
        Absolute positioned relative to the container.
      */}
      <AnimatePresence>
        {/* Name Hook */}
        {activeHover === "name" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-50 w-64 md:w-72 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.05)] p-5 pointer-events-none left-4 text-left"
            style={{ top: "35%" }}
          >
            <div className="w-8 h-[2px] bg-gray-900 rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              Schuldgevoel & Systeemangst
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              Een lage score betekent minder uren, wat direct betekent dat ze
              haar huis kan verliezen (koppelbeding) én minder geld naar haar
              moeder in Polen kan sturen.
            </p>
          </motion.div>
        )}

        {/* Bar Hook */}
        {activeHover === "bar" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-50 w-64 md:w-72 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.05)] p-5 pointer-events-none left-1/3 text-left"
            style={{ top: "35%" }}
          >
            <div className="w-8 h-[2px] bg-orange-500 rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              De prijs van Oranje
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              Ze gaat automatisch sneller lopen en tillen, de pijn in haar rug
              negerend, puur om weer in het groen te komen. Ze voelt zich een
              falende robot.
            </p>
          </motion.div>
        )}

        {/* Clock Hook */}
        {activeHover === "clock" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-50 w-64 md:w-72 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.05)] p-5 pointer-events-none right-12 text-left"
            style={{ top: "35%" }}
          >
            <div className="w-8 h-[2px] bg-red-500 rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              Onzichtbaar willen blijven
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              De klok betekent dat de teamleider meekijkt. Haar grootste angst
              is dat hij in snel Nederlands tegen haar begint te praten. Ze
              werkt harder om maar niet op te vallen.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-6">
        <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
          Hover over Anna&apos;s rij details
        </span>
      </div>
    </div>
  );
}
