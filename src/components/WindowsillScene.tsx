"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StillLifeItem {
  id: string;
  label: string;
  title: string;
  body: string;
  floatDelay: number;
  popoverSide: "left" | "right";
}

const items: StillLifeItem[] = [
  {
    id: "ring",
    label: "01 — Ring",
    title: "Tastbare geruststelling",
    body: "Een cadeau van haar moeder. Wanneer instructies in het magazijn te snel gaan in het Nederlands, of wanneer ze onzeker is tijdens een stand-up, friemelt ze onbewust aan deze ring. Het is haar anker in momenten van cognitieve overbelasting.",
    floatDelay: 0,
    popoverSide: "right",
  },
  {
    id: "plant",
    label: "02 — Plantje",
    title: "Het enige eigendom",
    body: "In een huis waar ze alles deelt, is deze vensterbank haar enige domein. Ze praat zachtjes tegen de kruiden. Het verzorgen van iets dat groeit, herinnert haar aan haar droom: een eigen plekje met een balkon.",
    floatDelay: 0.8,
    popoverSide: "left",
  },
  {
    id: "phone",
    label: "03 — Telefoon",
    title: "De Digitale Levenslijn",
    body: "Haar controlekamer. Ze bewaart elk bonnetje en werkrooster als visueel dagboek. Toch vermijdt ze tekstzware, officiële apps uit angst voor bureaucratische fouten.",
    floatDelay: 1.6,
    popoverSide: "right",
  },
  {
    id: "stones",
    label: "04 — Steentjes",
    title: "Stille getuigenissen",
    body: "Verzameld tijdens wandelingen in Venlo. Weg van de piepende scanners en de dunne muren van haar gedeelde huis, zijn dit haar enige momenten van absolute stilte.",
    floatDelay: 2.4,
    popoverSide: "left",
  },
];

export default function WindowsillScene() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16 mb-8">
      {/* Soft radial spotlight background */}
      <div
        className="absolute inset-0 -inset-x-12 -inset-y-8 rounded-[48px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(244,241,235,0.9) 0%, rgba(249,250,251,0) 100%)",
        }}
      />

      {/* Objects grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-4 py-12 md:py-20">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            {/* Floating Object */}
            <motion.div
              className="relative cursor-pointer w-28 h-28 md:w-36 md:h-36"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.floatDelay,
              }}
            >
              {/* Hover lift + shadow */}
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                whileHover={{ y: -12, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                {/* Placeholder circle — replace with <Image> when PNGs are ready */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-gray-300/60 bg-gradient-to-br from-gray-50 to-gray-100/50 shadow-inner" />
              </motion.div>

              {/* Ambient occlusion shadow beneath object */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-3 md:w-20 md:h-4 rounded-[50%] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(0,0,0,0.08) 0%, transparent 70%)",
                }}
                animate={{
                  scaleX: activeId === item.id ? 1.3 : 1,
                  opacity: activeId === item.id ? 0.12 : 0.06,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Museum label below object */}
            <div className="mt-6 text-center">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
                {item.label}
              </span>
            </div>

            {/* Popover Card (Museum Label) */}
            <AnimatePresence>
              {activeId === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 28,
                  }}
                  className={`absolute z-50 w-72 md:w-80 top-0
                    ${item.popoverSide === "right" ? "left-full ml-4" : "right-full mr-4"}
                    bg-white/80 backdrop-blur-xl
                    border border-gray-200/60
                    rounded-2xl
                    shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)]
                    p-6
                    pointer-events-none
                  `}
                >
                  {/* Decorative accent line */}
                  <div className="w-8 h-[2px] bg-[#8a9a85] rounded-full mb-4" />

                  <h4 className="font-serif text-lg font-bold text-gray-900 leading-snug tracking-tight mb-3">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
                    {item.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Instruction text */}
      <div className="text-center pb-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gray-300">
          Hover over de objecten
        </span>
      </div>
    </div>
  );
}
