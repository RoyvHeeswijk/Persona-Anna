"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface StillLifeItem {
  id: string;
  title: string;
  body: string;
  imageSrc: string;
  // Position & sizing
  top: string;
  left: string;
  width: number;
  height: number;
  rotate: number;
  floatDelay: number;
  // Popover position relative to item
  popover: { top: string; left: string };
}

const items: StillLifeItem[] = [
  {
    id: "plant",
    title: "Het enige eigendom",
    body: "In een huis waar ze alles deelt, is deze vensterbank haar enige domein. Ze praat zachtjes tegen de kruiden. Het verzorgen van iets dat groeit, herinnert haar aan haar droom: een eigen plekje met een balkon.",
    imageSrc: "/objects/plant.png",
    top: "5%",
    left: "8%",
    width: 220,
    height: 260,
    rotate: 2,
    floatDelay: 0,
    popover: { top: "10%", left: "calc(100% + 24px)" },
  },
  {
    id: "ring",
    title: "Tastbare geruststelling",
    body: "Een cadeau van haar moeder. Wanneer instructies in het magazijn te snel gaan in het Nederlands, of wanneer ze onzeker is tijdens een stand-up, friemelt ze onbewust aan deze ring. Het is haar anker in momenten van cognitieve overbelasting.",
    imageSrc: "/objects/ring.png",
    top: "15%",
    left: "55%",
    width: 140,
    height: 140,
    rotate: 0,
    floatDelay: 1.2,
    popover: { top: "-20px", left: "calc(100% + 20px)" },
  },
  {
    id: "phone",
    title: "De Digitale Levenslijn",
    body: "Haar controlekamer. Ze bewaart elk bonnetje en werkrooster als visueel dagboek. Toch vermijdt ze tekstzware, officiële apps uit angst voor bureaucratische fouten.",
    imageSrc: "/objects/phone.png",
    top: "52%",
    left: "38%",
    width: 130,
    height: 180,
    rotate: -5,
    floatDelay: 0.6,
    popover: { top: "0", left: "calc(100% + 24px)" },
  },
  {
    id: "stones",
    title: "Stille getuigenissen",
    body: "Verzameld tijdens wandelingen in Venlo. Weg van de piepende scanners en de dunne muren van haar gedeelde huis, zijn dit haar enige momenten van absolute stilte.",
    imageSrc: "/objects/stones.png",
    top: "62%",
    left: "72%",
    width: 110,
    height: 90,
    rotate: 3,
    floatDelay: 1.8,
    popover: { top: "-60px", left: "-280px" },
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

      {/* Asymmetric Still-Life Canvas */}
      <div
        className="relative w-full"
        style={{ height: "clamp(420px, 55vw, 640px)" }}
      >
        {items.map((item) => {
          const isDimmed = activeId !== null && activeId !== item.id;
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              className="absolute"
              style={{
                top: item.top,
                left: item.left,
                width: item.width,
                height: item.height,
              }}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Floating Object */}
              <motion.div
                className="relative w-full h-full cursor-pointer"
                style={{ rotate: item.rotate }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.floatDelay,
                }}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    opacity: isDimmed ? 0.3 : 1,
                    scale: isActive ? 1.05 : 1,
                    filter: isActive
                      ? "drop-shadow(0 12px 24px rgba(0,0,0,0.12))"
                      : "drop-shadow(0 4px 8px rgba(0,0,0,0.04))",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes={`${item.width}px`}
                  />
                </motion.div>
              </motion.div>

              {/* Popover Card (Museum Label) — positioned freely */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 28,
                    }}
                    className="absolute z-50 w-64 md:w-72 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] p-5 pointer-events-none"
                    style={{
                      top: item.popover.top,
                      left: item.popover.left,
                    }}
                  >
                    {/* Decorative accent line */}
                    <div className="w-8 h-[2px] bg-[#8a9a85] rounded-full mb-3" />

                    <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
                      {item.body}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Instruction text */}
      <div className="text-center pb-4 mt-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gray-300">
          Hover over de objecten
        </span>
      </div>
    </div>
  );
}
