"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloorplanScene() {
  const [isWallHovered, setIsWallHovered] = useState(false);
  const [isBedHovered, setIsBedHovered] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 mb-8 bg-[#e4e9e2] rounded-[var(--radius-c)] shadow-[var(--clay-sage)] overflow-hidden border border-[#c5cec2] font-mono">
      {/* Blueprint background grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Main SVG Floorplan */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
        <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-sm">
          {/* Outer Walls */}
          <rect
            x="50"
            y="50"
            width="700"
            height="350"
            fill="none"
            stroke="white"
            strokeWidth="6"
          />

          {/* Inner Walls - Static */}
          <line
            x1="300"
            y1="50"
            x2="300"
            y2="400"
            stroke="white"
            strokeWidth="4"
          />
          <line
            x1="50"
            y1="200"
            x2="300"
            y2="200"
            stroke="white"
            strokeWidth="4"
          />

          {/* Room Labels */}
          <text
            x="175"
            y="130"
            fill="white"
            fontSize="18"
            textAnchor="middle"
            opacity="0.8"
            letterSpacing="2"
          >
            KEUKEN
          </text>
          <text
            x="550"
            y="230"
            fill="white"
            fontSize="24"
            textAnchor="middle"
            opacity="0.6"
            letterSpacing="4"
          >
            GEDEELDE WOONKAMER
          </text>

          {/* Anna's Room - Highlighted */}
          <rect
            x="52"
            y="202"
            width="246"
            height="196"
            fill="white"
            opacity="0.1"
          />
          <text
            x="175"
            y="250"
            fill="#8a9a85"
            fontSize="14"
            textAnchor="middle"
            fontWeight="bold"
          >
            ANNA (9m²)
          </text>

          {/* Windows / external doors */}
          <line
            x1="100"
            y1="50"
            x2="200"
            y2="50"
            stroke="#bad4ef"
            strokeWidth="10"
          />
          <line
            x1="50"
            y1="250"
            x2="50"
            y2="350"
            stroke="#bad4ef"
            strokeWidth="10"
          />
          <line
            x1="450"
            y1="50"
            x2="650"
            y2="50"
            stroke="#bad4ef"
            strokeWidth="10"
          />

          {/* Dividing Wall (Interactive) */}
          <motion.line
            x1="300"
            y1="200"
            x2="300"
            y2="400"
            stroke={isWallHovered ? "#ff7e67" : "white"}
            strokeWidth={isWallHovered ? "8" : "4"}
            animate={
              isWallHovered
                ? { x1: [300, 298, 302, 300], x2: [300, 298, 302, 300] }
                : {}
            }
            transition={{ repeat: Infinity, duration: 0.1 }}
            onMouseEnter={() => setIsWallHovered(true)}
            onMouseLeave={() => setIsWallHovered(false)}
            className="cursor-pointer"
          />
          {/* Invisible padding for easier hover on wall */}
          <line
            x1="300"
            y1="200"
            x2="300"
            y2="400"
            stroke="transparent"
            strokeWidth="30"
            onMouseEnter={() => setIsWallHovered(true)}
            onMouseLeave={() => setIsWallHovered(false)}
            className="cursor-pointer"
          />

          {/* The Bed (Interactive) */}
          <g
            transform="translate(80, 280)"
            onMouseEnter={() => setIsBedHovered(true)}
            onMouseLeave={() => setIsBedHovered(false)}
            className="cursor-pointer"
          >
            {/* Bed Frame */}
            <rect
              x="0"
              y="0"
              width="100"
              height="110"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
            {/* Pillow */}
            <rect
              x="10"
              y="10"
              width="80"
              height="30"
              fill="white"
              fillOpacity="0.4"
              rx="4"
            />
            {/* Blanket */}
            <rect
              x="0"
              y="50"
              width="100"
              height="60"
              fill="white"
              fillOpacity="0.2"
            />

            {/* Curtain Animation */}
            <motion.rect
              x="105"
              y="0"
              width="15"
              height="110"
              fill="#c5cec2"
              initial={{ width: 15, x: 105, opacity: 0.5 }}
              animate={
                isBedHovered
                  ? { width: 110, x: -5, opacity: 0.9 }
                  : { width: 15, x: 105, opacity: 0.5 }
              }
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              rx="2"
            />
          </g>

          {/* Indicators for interactive spots */}
          <circle
            cx="300"
            cy="300"
            r="15"
            fill={isWallHovered ? "transparent" : "rgba(255,255,255,0.4)"}
            className="animate-pulse pointer-events-none"
          />
          <circle
            cx="130"
            cy="335"
            r="15"
            fill={isBedHovered ? "transparent" : "rgba(255,255,255,0.4)"}
            className="animate-pulse pointer-events-none"
          />
        </svg>

        {/* Text Overlays via AnimatePresence */}

        {/* Wall Text */}
        <AnimatePresence>
          {isWallHovered && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute top-1/2 left-[320px] -translate-y-1/2 bg-white/90 p-4 rounded-xl shadow-lg border border-red-100 max-w-xs z-20 pointer-events-none"
            >
              <div className="font-serif font-bold text-gray-900 mb-1 text-lg">
                Flinterdunne Muren
              </div>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                &quot;De muren zijn zo dun dat je een lepel hoort vallen. Wekker
                om 05:30 voor de badkamer-rij.&quot;
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bed Text */}
        <AnimatePresence>
          {isBedHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-16 left-8 bg-white/90 p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs z-20 pointer-events-none"
            >
              <div className="font-serif font-bold text-gray-900 mb-1 text-lg">
                Priveplek
              </div>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                &quot;Haar enige privacy is een gordijn voor haar bed in een
                kamer die ze deelt.&quot;
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="bg-white/40 border-t border-white/50 p-3 md:p-4 px-6 flex justify-between items-center text-sm">
        <span className="font-bold text-[#8a9a85]">
          STATUS: Woonruimte wettelijk gekoppeld aan werkcontract.
        </span>
        <span className="text-gray-500 italic hidden md:inline-block">
          Hover over de muur of het bed.
        </span>
      </div>
    </div>
  );
}
