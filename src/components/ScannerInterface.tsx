"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const instructions = [
  "ANNA — RIJ 14, VAK B!",
  "TEMPO! PICK-RATE TE LAAG.",
  "NIEUWE ORDER: 4x PALLET 8",
  "PAUZE VOORBIJ IN 2 MINUTEN",
  "WAARSCHUWING: TARGET NIET GEHAALD",
  "ANNA — MELDEN BIJ TEAMLEIDER",
];

export default function ScannerInterface() {
  const [currentInstruction, setCurrentInstruction] = useState(0);

  // Cycle through instructions rapidly to simulate cognitive overload
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInstruction((prev) => (prev + 1) % instructions.length);
    }, 2500); // changes every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[500px] mt-12 rounded-[var(--radius-a)] overflow-hidden shadow-2xl border-[8px] border-gray-900 font-mono flex flex-col justify-end">
      {/* Background Pulse: soft grey <-> warning orange */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundColor: ["#1f2937", "#9a3412", "#1f2937"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CRT Scanline Effect */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Glare Reflection */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent z-10 pointer-events-none skew-y-6 origin-top-left" />

      {/* Screen Content Wrapper */}
      <div className="relative z-20 p-6 sm:p-8 flex flex-col h-full text-green-400">
        {/* Top Header */}
        <div className="flex justify-between items-center text-xs opacity-70 mb-8 border-b border-green-400/30 pb-2">
          <span>TERM-492 /// GREENPORT</span>
          <span>BATT: 14% [!]</span>
        </div>

        {/* User Info & Pick Rate */}
        <div className="mb-auto">
          <div className="text-sm font-bold opacity-80 mb-2">
            OPERATOR: ANNA K.
          </div>
          <div className="bg-black/40 p-4 rounded-lg border border-green-500/20">
            <div className="flex justify-between text-xs mb-2">
              <span>HUIDIGE PICK-RATE</span>
              <span className="text-orange-400 font-bold">
                84% (TARGET: 105%)
              </span>
            </div>
            {/* Progress Bar */}
            <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-orange-500"
                initial={{ width: "95%" }}
                animate={{ width: ["95%", "84%", "88%", "84%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              {/* Target Line marker */}
              <div className="absolute top-0 bottom-0 left-[95%] w-1 bg-white z-10" />
            </div>
          </div>
        </div>

        {/* Cognitive Overload Instructions Focus Area */}
        <div className="h-32 relative bg-red-900/20 rounded-xl border border-red-500/30 p-4 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentInstruction}
              initial={{ opacity: 0, x: 50, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -50, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "anticipate" }}
              className="absolute text-center"
            >
              <div className="text-xl sm:text-2xl font-bold tracking-widest text-red-400 uppercase drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]">
                {instructions[currentInstruction]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer info */}
        <div className="mt-6 flex justify-between items-end">
          <div className="text-[10px] opacity-50 flex flex-col gap-1">
            <span>&gt; SYSTEM NOMINAL</span>
            <span>&gt; CONNECTION SECURE</span>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-green-400/20 flex items-center justify-center opacity-50">
            <div className="w-8 h-8 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
