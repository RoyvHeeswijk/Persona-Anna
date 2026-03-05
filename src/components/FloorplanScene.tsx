"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HotspotId =
  | "gang"
  | "keuken"
  | "woonkamer"
  | "badkamer"
  | "bed"
  | "muren"
  | "zolder"
  | "contract"
  | null;

type Floor = "zolder" | "eerste" | "begane";

const FLOORS: { id: Floor; label: string; sub: string }[] = [
  { id: "zolder", label: "Zolder", sub: "2e verdieping" },
  { id: "eerste", label: "1e Verdieping", sub: "slaapkamers" },
  { id: "begane", label: "Begane Grond", sub: "leefruimte" },
];

/* ─── Reusable Hover Marker ─── */
function HoverMarker({
  cx,
  cy,
  color,
  isActive,
  onEnter,
  onLeave,
}: {
  cx: number;
  cy: number;
  color: string;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <g className="cursor-pointer" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <circle cx={cx} cy={cy} r="28" fill="transparent" />
      <circle
        cx={cx}
        cy={cy}
        r="14"
        fill={isActive ? `${color}50` : `${color}25`}
        stroke={color}
        strokeWidth="1.5"
        className="animate-pulse"
      />
      <text
        x={cx}
        y={cy + 4}
        fill={color}
        fontSize="13"
        fontWeight="bold"
        textAnchor="middle"
        className="pointer-events-none select-none"
      >
        ?
      </text>
    </g>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  ZOLDER FLOOR (top-down view)                          */
/* ═══════════════════════════════════════════════════════ */
function ZolderFloor({
  active,
  setActive,
}: {
  active: HotspotId;
  setActive: (id: HotspotId) => void;
}) {
  return (
    <>
      <svg
        viewBox="0 0 700 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Outer walls */}
        <rect
          x="40"
          y="40"
          width="620"
          height="320"
          fill="none"
          stroke="#2a2a2a"
          strokeWidth="4"
        />

        <g
          style={{
            opacity: active && active !== "zolder" ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          {/* Label */}
          <text
            x="350"
            y="32"
            fill="#bbb"
            fontSize="10"
            textAnchor="middle"
            letterSpacing="3"
          >
            ZOLDER
          </text>

          {/* Wasmachine area (left) */}
          <motion.rect
            x="70"
            y="100"
            width="80"
            height="80"
            fill={active === "zolder" ? "#e4e9e2" : "none"}
            stroke={active === "zolder" ? "#7c8e76" : "#bbb"}
            strokeWidth="1.5"
            rx="4"
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="110"
            cy="140"
            r="24"
            fill="none"
            stroke={active === "zolder" ? "#7c8e76" : "#ccc"}
            strokeWidth="1.5"
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="110"
            cy="140"
            r="8"
            fill={active === "zolder" ? "#b8c4b3" : "#e8e8e8"}
            transition={{ duration: 0.3 }}
          />
          <text
            x="110"
            y="195"
            fill={active === "zolder" ? "#6b7c66" : "#ccc"}
            fontSize="8"
            textAnchor="middle"
            letterSpacing="1"
            style={{ transition: "fill 0.3s ease" }}
          >
            WASMACHINE
          </text>

          {/* Droogrek / hanging clothes (center) */}
          <line
            x1="240"
            y1="80"
            x2="500"
            y2="80"
            stroke={active === "zolder" ? "#7c8e76" : "#ddd"}
            strokeWidth="1.5"
            style={{ transition: "stroke 0.3s ease" }}
          />
          <text
            x="370"
            y="73"
            fill={active === "zolder" ? "#8a9a85" : "#ddd"}
            fontSize="7"
            textAnchor="middle"
            letterSpacing="1"
            style={{ transition: "fill 0.3s ease" }}
          >
            WASLIJN
          </text>

          {[260, 310, 360, 410, 460].map((hx) => (
            <g key={`hanger-${hx}`}>
              <line
                x1={hx}
                y1={80}
                x2={hx}
                y2={100}
                stroke={active === "zolder" ? "#8a9a85" : "#ddd"}
                strokeWidth="1"
                style={{ transition: "stroke 0.3s ease" }}
              />
              <motion.rect
                x={hx - 15}
                y={100}
                width="30"
                height="55"
                fill={active === "zolder" ? "#d0dacb" : "none"}
                stroke={active === "zolder" ? "#8a9a85" : "#e0e0e0"}
                strokeWidth="1"
                rx="2"
                transition={{ duration: 0.3 }}
              />
            </g>
          ))}

          {/* Drying rack (right side) */}
          <motion.rect
            x="480"
            y="210"
            width="120"
            height="100"
            fill={active === "zolder" ? "rgba(138,154,133,0.08)" : "none"}
            stroke={active === "zolder" ? "#8a9a85" : "#ddd"}
            strokeWidth="1"
            rx="2"
            transition={{ duration: 0.3 }}
          />
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.line
              key={`rack-${i}`}
              x1={490}
              y1={225 + i * 18}
              x2={590}
              y2={225 + i * 18}
              stroke={active === "zolder" ? "#8a9a85" : "#e8e8e8"}
              strokeWidth="1"
              transition={{ duration: 0.3 }}
            />
          ))}
          <text
            x="540"
            y="325"
            fill={active === "zolder" ? "#6b7c66" : "#ccc"}
            fontSize="8"
            textAnchor="middle"
            letterSpacing="1"
            style={{ transition: "fill 0.3s ease" }}
          >
            DROOGREK
          </text>

          {/* Schuin dak indicator (diagonal hatching in corners) */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={`slope-l-${i}`}
              x1={42}
              y1={42 + i * 20}
              x2={42 + 30 - i * 6}
              y2={42}
              stroke="#ddd"
              strokeWidth="0.5"
            />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={`slope-r-${i}`}
              x1={658}
              y1={42 + i * 20}
              x2={658 - 30 + i * 6}
              y2={42}
              stroke="#ddd"
              strokeWidth="0.5"
            />
          ))}

          <HoverMarker
            cx={350}
            cy={250}
            color="#8a9a85"
            isActive={active === "zolder"}
            onEnter={() => setActive("zolder")}
            onLeave={() => setActive(null)}
          />
        </g>
      </svg>

      {/* Popover */}
      <AnimatePresence>
        {active === "zolder" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-[100] w-64 md:w-72 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] p-5 pointer-events-none"
            style={{
              top: "62.5%",
              left: "54%" /* marker is at 350,250 on a 700x400 grid so 50%,62.5%. We offset left slightly */,
            }}
          >
            <div className="w-8 h-[2px] bg-[#8a9a85] rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              Het logistieke weekend
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              Wasmachine draait continu voor werkkleding. Elke voetstap
              hierboven dreunt door het hele, gehorige huis.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  1E VERDIEPING FLOOR (top-down view)                   */
/* ═══════════════════════════════════════════════════════ */
function EersteVerdiepingFloor({
  active,
  setActive,
}: {
  active: HotspotId;
  setActive: (id: HotspotId) => void;
}) {
  return (
    <>
      <svg
        viewBox="0 0 700 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Outer walls */}
        <rect
          x="40"
          y="40"
          width="620"
          height="320"
          fill="none"
          stroke="#2a2a2a"
          strokeWidth="4"
        />

        {/* ── Anna's room (left, large) ── */}
        <g
          style={{
            opacity: active && active !== "bed" && active !== "muren" ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          {/* Room outline */}
          <motion.rect
            x="42"
            y="42"
            width="260"
            height="316"
            fill={active === "bed" ? "rgba(138,154,133,0.1)" : "transparent"}
            transition={{ duration: 0.3 }}
          />
          <line
            x1="302"
            y1="40"
            x2="302"
            y2="360"
            stroke="#2a2a2a"
            strokeWidth="3"
          />

          <text
            x="172"
            y="70"
            fill={active === "bed" ? "#4a5946" : "#999"}
            fontSize="10"
            textAnchor="middle"
            letterSpacing="2"
            fontWeight={active === "bed" ? "bold" : "normal"}
            style={{ transition: "fill 0.3s ease" }}
          >
            ANNA&apos;S KAMER
          </text>

          {/* Bed 1 (Anna) */}
          <motion.rect
            x="70"
            y="110"
            width="80"
            height="120"
            fill={active === "bed" ? "#d0dacb" : "none"}
            stroke={active === "bed" ? "#586c53" : "#bbb"}
            strokeWidth="1.5"
            rx="3"
            transition={{ duration: 0.3 }}
          />
          <motion.rect
            x="80"
            y="115"
            width="60"
            height="18"
            fill={active === "bed" ? "#fbfcfb" : "#e8e8e8"}
            rx="3"
            transition={{ duration: 0.3 }}
          />
          <motion.rect
            x="70"
            y="155"
            width="80"
            height="75"
            fill="#d4dbd0"
            animate={{ opacity: active === "bed" ? 0.5 : 0.25 }}
            transition={{ duration: 0.3 }}
          />

          {/* Bed 2 (huisgenoot) */}
          <motion.rect
            x="180"
            y="110"
            width="80"
            height="120"
            fill={active === "bed" ? "#d0dacb" : "none"}
            stroke={active === "bed" ? "#586c53" : "#bbb"}
            strokeWidth="1.5"
            rx="3"
            transition={{ duration: 0.3 }}
          />
          <motion.rect
            x="190"
            y="115"
            width="60"
            height="18"
            fill={active === "bed" ? "#fbfcfb" : "#e8e8e8"}
            rx="3"
            transition={{ duration: 0.3 }}
          />
          <motion.rect
            x="180"
            y="155"
            width="80"
            height="75"
            fill="#d4dbd0"
            animate={{ opacity: active === "bed" ? 0.5 : 0.25 }}
            transition={{ duration: 0.3 }}
          />

          {/* Curtain divider */}
          <motion.line
            x1="165"
            y1="90"
            x2="165"
            y2="340"
            stroke={active === "bed" ? "#b8c4b3" : "#e0e0e0"}
            strokeWidth={active === "bed" ? "3" : "1"}
            strokeDasharray={active === "bed" ? "0" : "6 4"}
            transition={{ duration: 0.3 }}
          />
          {active === "bed" && (
            <text x="168" y="88" fill="#8a9a85" fontSize="7" letterSpacing="1">
              GORDIJN
            </text>
          )}

          {/* Window (left wall) with plants */}
          <line
            x1="40"
            y1="250"
            x2="40"
            y2="340"
            stroke={active === "bed" ? "#5ba0c4" : "#7eb8d8"}
            strokeWidth="8"
            style={{ transition: "stroke 0.3s ease" }}
          />
          <text
            x="28"
            y="298"
            fill="#7eb8d8"
            fontSize="7"
            textAnchor="middle"
            writingMode="vertical-rl"
            opacity="0.5"
          >
            RAAM
          </text>
          <circle
            cx="50"
            cy="265"
            r="5"
            fill="#8a9a85"
            opacity={active === "bed" ? 0.8 : 0.4}
            style={{ transition: "opacity 0.3s ease" }}
          />
          <circle
            cx="50"
            cy="280"
            r="4"
            fill="#8a9a85"
            opacity={active === "bed" ? 0.7 : 0.35}
            style={{ transition: "opacity 0.3s ease" }}
          />
          <circle
            cx="50"
            cy="293"
            r="3"
            fill="#8a9a85"
            opacity={active === "bed" ? 0.6 : 0.3}
            style={{ transition: "opacity 0.3s ease" }}
          />
          <circle
            cx="50"
            cy="305"
            r="4"
            fill="#8a9a85"
            opacity={active === "bed" ? 0.7 : 0.3}
            style={{ transition: "opacity 0.3s ease" }}
          />

          <HoverMarker
            cx={270}
            cy={335}
            color="#586c53"
            isActive={active === "bed"}
            onEnter={() => setActive("bed")}
            onLeave={() => setActive(null)}
          />
        </g>

        {/* ── Room K2 (top right) ── */}
        <g
          style={{
            opacity:
              active && active !== "bed" && active !== "badkamer" ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <rect
            x="304"
            y="42"
            width="180"
            height="156"
            fill="rgba(0,0,0,0.015)"
            stroke="transparent"
          />
          <line
            x1="304"
            y1="198"
            x2="484"
            y2="198"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          <line
            x1="484"
            y1="40"
            x2="484"
            y2="360"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          {/* Bed 1 in K2 */}
          <rect
            x="320"
            y="80"
            width="45"
            height="75"
            fill="none"
            stroke="#ddd"
            strokeWidth="1"
            rx="2"
          />
          <rect x="325" y="85" width="35" height="15" fill="#efefef" rx="2" />
          {/* Bed 2 in K2 */}
          <rect
            x="420"
            y="80"
            width="45"
            height="75"
            fill="none"
            stroke="#ddd"
            strokeWidth="1"
            rx="2"
          />
          <rect x="425" y="85" width="35" height="15" fill="#efefef" rx="2" />
        </g>

        {/* ── Room K3 (bottom right) ── */}
        <g
          style={{
            opacity:
              active && active !== "bed" && active !== "badkamer" ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <rect
            x="304"
            y="200"
            width="180"
            height="158"
            fill="rgba(0,0,0,0.015)"
            stroke="transparent"
          />
          {/* Bed 1 in K3 */}
          <rect
            x="320"
            y="240"
            width="45"
            height="75"
            fill="none"
            stroke="#ddd"
            strokeWidth="1"
            rx="2"
          />
          <rect x="325" y="245" width="35" height="15" fill="#efefef" rx="2" />
          {/* Bed 2 in K3 */}
          <rect
            x="420"
            y="240"
            width="45"
            height="75"
            fill="none"
            stroke="#ddd"
            strokeWidth="1"
            rx="2"
          />
          <rect x="425" y="245" width="35" height="15" fill="#efefef" rx="2" />
        </g>

        {/* ── Badkamer (far right) ── */}
        <g
          style={{
            opacity: active && active !== "badkamer" ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <motion.rect
            x="486"
            y="42"
            width="172"
            height="316"
            fill={
              active === "badkamer"
                ? "rgba(255,160,80,0.1)"
                : "rgba(0,0,0,0.01)"
            }
            stroke={active === "badkamer" ? "#ff9a56" : "transparent"}
            strokeWidth="2"
            transition={{ duration: 0.3 }}
          />

          <text
            x="572"
            y="70"
            fill={active === "badkamer" ? "#ff9a56" : "#999"}
            fontSize="10"
            textAnchor="middle"
            letterSpacing="2"
            fontWeight={active === "badkamer" ? "bold" : "normal"}
            style={{ transition: "fill 0.3s ease" }}
          >
            BADKAMER
          </text>

          {/* Shower */}
          <motion.rect
            x="510"
            y="100"
            width="65"
            height="65"
            fill={active === "badkamer" ? "rgba(255,160,80,0.15)" : "none"}
            stroke={active === "badkamer" ? "#ff9a56" : "#ccc"}
            strokeWidth="1.5"
            rx="4"
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="542"
            cy="132"
            r="14"
            fill="none"
            stroke={active === "badkamer" ? "#ff9a56" : "#ddd"}
            strokeWidth="1.5"
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="542"
            cy="132"
            r="4"
            fill={active === "badkamer" ? "#ff9a56" : "#e8e8e8"}
            transition={{ duration: 0.3 }}
          />

          {/* Sink */}
          <motion.rect
            x="530"
            y="210"
            width="40"
            height="30"
            fill={active === "badkamer" ? "rgba(255,160,80,0.12)" : "none"}
            stroke={active === "badkamer" ? "#ff9a56" : "#ccc"}
            strokeWidth="1"
            rx="4"
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="550"
            cy="225"
            r="4"
            fill={active === "badkamer" ? "#ff9a56" : "#e0e0e0"}
            transition={{ duration: 0.3 }}
          />

          {/* Toilet */}
          <motion.rect
            x="530"
            y="280"
            width="30"
            height="40"
            fill={active === "badkamer" ? "rgba(255,160,80,0.1)" : "none"}
            stroke={active === "badkamer" ? "#ff9a56" : "#ccc"}
            strokeWidth="1"
            rx="6"
            transition={{ duration: 0.3 }}
          />

          <HoverMarker
            cx={510}
            cy={335}
            color="#ff9a56"
            isActive={active === "badkamer"}
            onEnter={() => setActive("badkamer")}
            onLeave={() => setActive(null)}
          />
        </g>

        {/* ── Thin walls / Gehorigheid hotspot ── */}
        <g
          style={{
            opacity: active && active !== "muren" ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          {/* The wall between Anna and K2 */}
          <motion.line
            x1="302"
            y1="40"
            x2="302"
            y2="360"
            stroke={active === "muren" ? "#e85d4a" : "#2a2a2a"}
            strokeWidth={active === "muren" ? "5" : "3"}
            animate={
              active === "muren"
                ? { x1: [302, 301, 303, 302], x2: [302, 301, 303, 302] }
                : {}
            }
            transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
          />
          {/* The wall between K2 and K3 */}
          <motion.line
            x1="484"
            y1="40"
            x2="484"
            y2="360"
            stroke={active === "muren" ? "#e85d4a" : "#2a2a2a"}
            strokeWidth={active === "muren" ? "4" : "2"}
            animate={
              active === "muren"
                ? { x1: [484, 483, 485, 484], x2: [484, 483, 485, 484] }
                : {}
            }
            transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
          />

          <HoverMarker
            cx={394}
            cy={175}
            color="#e85d4a"
            isActive={active === "muren"}
            onEnter={() => setActive("muren")}
            onLeave={() => setActive(null)}
          />
        </g>

        {/* Gang/corridor indicator */}
        <text
          x="394"
          y="215"
          fill="#ddd"
          fontSize="7"
          textAnchor="middle"
          letterSpacing="2"
        >
          GANG
        </text>
      </svg>

      {/* Popovers */}
      <AnimatePresence>
        {active === "bed" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-[100] w-64 md:w-72 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] p-5 pointer-events-none"
            style={{
              top: "83%",
              left: "43%" /* marker is at 270,335 -> 38%, 83%. We place left at 43% */,
            }}
          >
            <div className="w-8 h-[2px] bg-[#586c53] rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              Gedeelde vierkante meters
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              Deelt de kamer met een huisgenoot. Tussen 19:30 en 21:30 belt ze
              achter haar gordijn met familie in Polen. Plantjes op de
              vensterbank zijn haar rustpunt.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active === "badkamer" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-[100] w-64 md:w-72 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] p-5 pointer-events-none"
            style={{
              top: "83%",
              left: "76.5%" /* marker is at 510,335 -> 72.8%, 83%. We place left at 76.5% */,
            }}
          >
            <div className="w-8 h-[2px] bg-[#ff9a56] rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              De 05:30 Flessenhals
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              Zes mensen delen deze badkamer. Haasten is noodzaak: wie te laat
              is, mist de bus van het uitzendbureau.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active === "muren" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-[100] w-64 md:w-72 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] p-5 pointer-events-none"
            style={{
              top: "43.7%",
              left: "60%" /* marker is at 394,175 -> 56%, 43.7%. We offset left slightly */,
            }}
          >
            <div className="w-8 h-[2px] bg-[#e85d4a] rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              Gehorigheid
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              De muren zijn flinterdun. Je hoort elke stap, elk gesprek, elke
              wekker. Privacy is een illusie.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  BEGANE GROND FLOOR (top-down view)                    */
/* ═══════════════════════════════════════════════════════ */
function BeganeGrondFloor({
  active,
  setActive,
}: {
  active: HotspotId;
  setActive: (id: HotspotId) => void;
}) {
  return (
    <>
      <svg
        viewBox="0 0 700 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Outer walls */}
        <rect
          x="40"
          y="40"
          width="620"
          height="320"
          fill="none"
          stroke="#2a2a2a"
          strokeWidth="4"
        />

        {/* ── Gang (left, narrow) ── */}
        <g
          style={{
            opacity: active && active !== "gang" ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <motion.rect
            x="42"
            y="42"
            width="130"
            height="316"
            fill={active === "gang" ? "rgba(138,154,133,0.08)" : "transparent"}
            transition={{ duration: 0.3 }}
          />
          <line
            x1="172"
            y1="40"
            x2="172"
            y2="360"
            stroke="#2a2a2a"
            strokeWidth="3"
          />

          <text
            x="107"
            y="70"
            fill={active === "gang" ? "#6b7c66" : "#999"}
            fontSize="10"
            textAnchor="middle"
            letterSpacing="2"
            fontWeight={active === "gang" ? "bold" : "normal"}
            style={{ transition: "fill 0.3s ease" }}
          >
            GANG
          </text>

          {/* Front door (bottom wall) */}
          <motion.rect
            x="75"
            y={356}
            width="60"
            height="6"
            fill={active === "gang" ? "#8a9a85" : "#aaa"}
            rx="1"
            transition={{ duration: 0.3 }}
          />
          <text
            x="105"
            y={374}
            fill="#bbb"
            fontSize="7"
            textAnchor="middle"
            letterSpacing="1"
          >
            VOORDEUR
          </text>

          {/* Shoes */}
          <motion.rect
            x="60"
            y="300"
            width="30"
            height="14"
            fill={active === "gang" ? "#b8c4b3" : "none"}
            stroke={active === "gang" ? "#7c8e76" : "#ddd"}
            strokeWidth="1"
            rx="2"
            transition={{ duration: 0.3 }}
          />
          <motion.rect
            x="100"
            y="300"
            width="30"
            height="14"
            fill={active === "gang" ? "#b8c4b3" : "none"}
            stroke={active === "gang" ? "#7c8e76" : "#ddd"}
            strokeWidth="1"
            rx="2"
            transition={{ duration: 0.3 }}
          />

          {/* Toilet (WC under stairs) */}
          <motion.rect
            x="65"
            y="130"
            width="55"
            height="55"
            fill={active === "gang" ? "rgba(138,154,133,0.06)" : "none"}
            stroke={active === "gang" ? "#8a9a85" : "#ddd"}
            strokeWidth="1"
            rx="2"
            transition={{ duration: 0.3 }}
          />
          <text
            x="92"
            y="162"
            fill="#ccc"
            fontSize="7"
            textAnchor="middle"
            letterSpacing="1"
          >
            WC
          </text>

          {/* Stairs */}
          {[0, 1, 2, 3, 4].map((s) => (
            <rect
              key={`stair-${s}`}
              x={80}
              y={200 + s * 14}
              width="45"
              height="12"
              fill="none"
              stroke="#ddd"
              strokeWidth="0.5"
            />
          ))}
          <text
            x="102"
            y="290"
            fill="#ddd"
            fontSize="6"
            textAnchor="middle"
            letterSpacing="1"
          >
            TRAP
          </text>

          <HoverMarker
            cx={75}
            cy={95}
            color="#8a9a85"
            isActive={active === "gang"}
            onEnter={() => setActive("gang")}
            onLeave={() => setActive(null)}
          />
        </g>

        {/* ── Keuken (middle) ── */}
        <g
          style={{
            opacity: active && active !== "keuken" ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <motion.rect
            x="174"
            y="42"
            width="200"
            height="316"
            fill={
              active === "keuken" ? "rgba(138,154,133,0.08)" : "transparent"
            }
            transition={{ duration: 0.3 }}
          />
          <line
            x1="374"
            y1="40"
            x2="374"
            y2="360"
            stroke="#2a2a2a"
            strokeWidth="3"
          />

          <text
            x="274"
            y="70"
            fill={active === "keuken" ? "#6b7c66" : "#999"}
            fontSize="10"
            textAnchor="middle"
            letterSpacing="2"
            fontWeight={active === "keuken" ? "bold" : "normal"}
            style={{ transition: "fill 0.3s ease" }}
          >
            KEUKEN
          </text>

          {/* Countertop (top wall) */}
          <motion.rect
            x="180"
            y="85"
            width="185"
            height="14"
            fill={active === "keuken" ? "#d0dacb" : "none"}
            stroke={active === "keuken" ? "#8a9a85" : "#ccc"}
            strokeWidth="1"
            rx="1"
            transition={{ duration: 0.3 }}
          />

          {/* Stove */}
          <motion.rect
            x="195"
            y="105"
            width="50"
            height="45"
            fill={active === "keuken" ? "#e4e9e2" : "none"}
            stroke={active === "keuken" ? "#7c8e76" : "#ccc"}
            strokeWidth="1.5"
            rx="3"
            transition={{ duration: 0.3 }}
          />
          {[210, 230, 210, 230].map((cx, i) => (
            <motion.circle
              key={`burner-${i}`}
              cx={cx}
              cy={i < 2 ? 118 : 137}
              r="5"
              fill="none"
              stroke={active === "keuken" ? "#7c8e76" : "#ddd"}
              strokeWidth="1"
              transition={{ duration: 0.3 }}
            />
          ))}

          {/* Sink */}
          <motion.rect
            x="290"
            y="105"
            width="45"
            height="30"
            fill={active === "keuken" ? "#e4e9e2" : "none"}
            stroke={active === "keuken" ? "#7c8e76" : "#ccc"}
            strokeWidth="1"
            rx="3"
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="312"
            cy="120"
            r="5"
            fill={active === "keuken" ? "#b8c4b3" : "#e0e0e0"}
            transition={{ duration: 0.3 }}
          />

          {/* Small kitchen table */}
          <motion.rect
            x="220"
            y="230"
            width="75"
            height="50"
            fill={active === "keuken" ? "#e4e9e2" : "none"}
            stroke={active === "keuken" ? "#8a9a85" : "#ccc"}
            strokeWidth="1"
            rx="3"
            transition={{ duration: 0.3 }}
          />
          {/* Chairs */}
          {[232, 255, 278].map((cx) => (
            <motion.circle
              key={`chair-t-${cx}`}
              cx={cx}
              cy={222}
              r="5"
              fill={active === "keuken" ? "#d0dacb" : "none"}
              stroke={active === "keuken" ? "#8a9a85" : "#ddd"}
              strokeWidth="1"
              transition={{ duration: 0.3 }}
            />
          ))}
          {[232, 255, 278].map((cx) => (
            <motion.circle
              key={`chair-b-${cx}`}
              cx={cx}
              cy={288}
              r="5"
              fill={active === "keuken" ? "#d0dacb" : "none"}
              stroke={active === "keuken" ? "#8a9a85" : "#ddd"}
              strokeWidth="1"
              transition={{ duration: 0.3 }}
            />
          ))}

          <HoverMarker
            cx={340}
            cy={310}
            color="#8a9a85"
            isActive={active === "keuken"}
            onEnter={() => setActive("keuken")}
            onLeave={() => setActive(null)}
          />
        </g>

        {/* ── Woonkamer (right, large) ── */}
        <g
          style={{
            opacity: active && active !== "woonkamer" ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <motion.rect
            x="376"
            y="42"
            width="282"
            height="316"
            fill={
              active === "woonkamer" ? "rgba(138,154,133,0.08)" : "transparent"
            }
            transition={{ duration: 0.3 }}
          />

          <text
            x="517"
            y="70"
            fill={active === "woonkamer" ? "#6b7c66" : "#999"}
            fontSize="10"
            textAnchor="middle"
            letterSpacing="2"
            fontWeight={active === "woonkamer" ? "bold" : "normal"}
            style={{ transition: "fill 0.3s ease" }}
          >
            WOONKAMER
          </text>

          {/* TV (on the right wall) */}
          <motion.rect
            x={654}
            y="120"
            width="6"
            height="70"
            fill={active === "woonkamer" ? "#6b7c66" : "#aaa"}
            transition={{ duration: 0.3 }}
          />
          <motion.rect
            x={648}
            y="128"
            width="4"
            height="54"
            fill={active === "woonkamer" ? "#b8c4b3" : "#ddd"}
            transition={{ duration: 0.3 }}
          />

          {/* Couch */}
          <motion.rect
            x="440"
            y="160"
            width="140"
            height="60"
            fill={active === "woonkamer" ? "#e4e9e2" : "none"}
            stroke={active === "woonkamer" ? "#8a9a85" : "#ccc"}
            strokeWidth="1.5"
            rx="4"
            transition={{ duration: 0.3 }}
          />
          {[445, 492, 539].map((cx) => (
            <motion.rect
              key={`cushion-${cx}`}
              x={cx}
              y="165"
              width="42"
              height="50"
              fill={active === "woonkamer" ? "#d0dacb" : "#f0f0f0"}
              rx="3"
              opacity="0.5"
              transition={{ duration: 0.3 }}
            />
          ))}

          {/* Coffee table */}
          <motion.rect
            x="470"
            y="100"
            width="80"
            height="40"
            fill={active === "woonkamer" ? "#f7f8f6" : "none"}
            stroke={active === "woonkamer" ? "#8a9a85" : "#ddd"}
            strokeWidth="1"
            rx="3"
            transition={{ duration: 0.3 }}
          />

          {/* Rug (circle) */}
          <motion.circle
            cx="510"
            cy="280"
            r="40"
            fill="none"
            stroke={active === "woonkamer" ? "#b8c4b3" : "#eee"}
            strokeWidth="1"
            strokeDasharray="4 3"
            transition={{ duration: 0.3 }}
          />

          <HoverMarker
            cx={510}
            cy={280}
            color="#8a9a85"
            isActive={active === "woonkamer"}
            onEnter={() => setActive("woonkamer")}
            onLeave={() => setActive(null)}
          />
        </g>
      </svg>

      {/* Popovers */}
      <AnimatePresence>
        {active === "gang" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-[100] w-64 md:w-72 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] p-5 pointer-events-none"
            style={{
              top: "23.7%",
              left: "15%" /* marker is at 75,95 -> 10.7%, 23.7%. We place left at 15% */,
            }}
          >
            <div className="w-8 h-[2px] bg-[#8a9a85] rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              De onzichtbare shift
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              Zodra de veiligheidsschoenen uitgaan, checkt ze appjes van het
              uitzendbureau over de shift van morgen.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active === "keuken" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-[100] w-64 md:w-72 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] p-5 pointer-events-none"
            style={{
              top: "77.5%",
              left: "52.5%" /* marker is at 340,310 -> 48.5%, 77.5%. We place left at 52.5% */,
            }}
          >
            <div className="w-8 h-[2px] bg-[#8a9a85] rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              Lopen op eieren
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              Om 05:45 muisstil thee maken in een extreem gehorig huis. &apos;s
              Avonds is het er krap en zorgt samen koken voor irritatie.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active === "woonkamer" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute z-[100] w-64 md:w-80 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] p-5 pointer-events-none"
            style={{
              top: "70%",
              left: "76.8%" /* marker is at 510,280 -> 72.8%, 70%. We place left at 76.8% */,
            }}
          >
            <div className="w-8 h-[2px] bg-[#8a9a85] rounded-full mb-3" />
            <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
              Een stukje Polen
            </h4>
            <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
              TV staat op Poolse zenders. Ze zit hier na het eten even om over
              het distributiecentrum te praten.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                        */
/* ═══════════════════════════════════════════════════════ */
export default function FloorplanScene() {
  const [active, setActive] = useState<HotspotId>(null);
  const [floor, setFloor] = useState<Floor>("begane");

  return (
    <div
      className="relative w-full max-w-5xl mx-auto mt-12 mb-8 rounded-2xl border border-gray-200/60 font-mono"
      style={{ overflow: "visible" }}
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          backgroundColor: "#f7f8f6",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Floor selector */}
      <div className="relative z-20 flex items-center justify-center gap-1 pt-5 pb-2 px-4">
        {FLOORS.map((f) => (
          <button
            key={f.id}
            onClick={() => {
              setFloor(f.id);
              setActive(null);
            }}
            className={`
              relative px-5 py-2.5 rounded-xl text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer
              ${
                floor === f.id
                  ? "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-gray-900 font-bold border border-gray-200/60"
                  : "bg-transparent text-gray-400 hover:text-gray-600 hover:bg-white/40 border border-transparent"
              }
            `}
          >
            <span className="block">{f.label}</span>
            <span
              className={`block text-[9px] mt-0.5 tracking-normal lowercase ${floor === f.id ? "text-gray-400" : "text-gray-300"}`}
            >
              {f.sub}
            </span>
          </button>
        ))}
      </div>

      {/* Floorplan container */}
      <div
        className="relative w-full aspect-[7/4]"
        style={{ overflow: "visible" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={floor}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ overflow: "visible" }}
          >
            {floor === "zolder" && (
              <ZolderFloor active={active} setActive={setActive} />
            )}
            {floor === "eerste" && (
              <EersteVerdiepingFloor active={active} setActive={setActive} />
            )}
            {floor === "begane" && (
              <BeganeGrondFloor active={active} setActive={setActive} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* ═══ CONTRACT STAMP ═══ */}
        <div
          className="absolute bottom-2 right-4 md:bottom-3 md:right-6 z-30 rotate-[-3deg] cursor-pointer"
          onMouseEnter={() => setActive("contract")}
          onMouseLeave={() => setActive(null)}
        >
          <div className="border-2 border-red-400/60 rounded-lg px-4 py-2 bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white/90 transition-colors">
            <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.15em] text-red-500/80">
              ⚠ Woonruimte gekoppeld aan werkcontract
            </span>
          </div>

          <AnimatePresence>
            {active === "contract" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="absolute z-[100] w-64 md:w-80 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.05)] p-5 pointer-events-none right-0 bottom-full mb-3 text-left rotate-[3deg] font-sans whitespace-normal"
              >
                <div className="w-8 h-[2px] bg-red-500 rounded-full mb-3" />
                <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug tracking-tight mb-2">
                  Het Koppelbeding
                </h4>
                <p className="font-sans text-[13px] leading-[1.7] text-gray-500 tracking-[0.005em]">
                  Dit bed is geen veilige haven, maar een tijdelijke bruikleen
                  van de baas. De wet die werk en wonen scheidt, geldt hier
                  niet. Als Anna&apos;s naam op het scherm in het
                  distributiecentrum te lang rood blijft, verliest ze niet
                  alleen haar loon, maar moet ze binnen 24 uur haar koffer
                  pakken. De angst voor dakloosheid is de motor achter haar
                  snelheid.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Subtle footer instruction */}
      <div className="bg-white/40 border-t border-gray-200/40 py-3 px-6 text-center">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gray-300">
          Hover over de vraagtekens
        </span>
      </div>
    </div>
  );
}
