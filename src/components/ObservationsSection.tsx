"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const observations = [
  {
    label: "Notitie 01",
    topic: "Communicatie",
    text: "Tijdens de ochtend stand-up gaan instructies snel in het Nederlands. Anna knikt beleefd, maar werkt de rest van de shift in onzekerheid of ze de veiligheidsregels goed heeft begrepen.",
    variant: {
      bg: "#e4e9e2",
      shadow: "var(--clay-sage)",
      radius: "var(--radius-a)",
    },
    rotate: -2,
    delay: 0.0,
  },
  {
    label: "Notitie 02",
    topic: "Assertiviteit",
    text: "Anna werkt elke gevraagde overuren-shift, ook bij fysieke uitputting. De angst om niet meer opgeroepen te worden is merkbaar aanwezig.",
    variant: {
      bg: "#f3e5ab",
      shadow: "var(--clay-gold)",
      radius: "var(--radius-b)",
    },
    rotate: 1.5,
    delay: 0.08,
  },
  {
    label: "Notitie 03",
    topic: "Digitale Tools",
    text: "Ze gebruikt haar smartphone intensief voor Maps en Translate, maar blokkeert bij officiële brieven uit angst voor de Nederlandse bureaucratie.",
    variant: {
      bg: "#f9e4e4",
      shadow: "var(--clay-blush)",
      radius: "var(--radius-c)",
    },
    rotate: -1,
    delay: 0.16,
  },
  {
    label: "Notitie 04",
    topic: "Rustmomenten",
    text: "Haar enige momenten van persoonlijke stilte zijn de twee extra minuten op het toilet tijdens haar shift.",
    variant: {
      bg: "#e0edf9",
      shadow: "var(--clay-sky)",
      radius: "var(--radius-d)",
    },
    rotate: 2,
    delay: 0.24,
  },
];

export default function ObservationsSection() {
  return (
    <div style={{ backgroundColor: "#f9fafb" }} className="pt-8 pb-24">
      <section id="observaties" className="hub-section">
        <SectionHeader
          number="04"
          title="Observaties"
          subtitle="Veldnotities gestapeld als een fysiek archief. Hover om ze naar voren te halen."
        />

        {/* Clay sticky notes — stacked, rotated */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {observations.map((obs) => (
            <motion.div
              key={obs.label}
              className="relative w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] p-7 cursor-none"
              style={{
                backgroundColor: obs.variant.bg,
                boxShadow: obs.variant.shadow,
                borderRadius: obs.variant.radius,
                backgroundImage:
                  "linear-gradient(145deg, rgba(255,255,255,0.5) 0%, transparent 50%)",
                rotate: obs.rotate,
              }}
              initial={{
                opacity: 0,
                y: 60,
                rotate: obs.rotate - 12,
                scale: 0.88,
              }}
              whileInView={{ opacity: 1, y: 0, rotate: obs.rotate, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              // Elastic lift on hover — snaps note to the foreground
              whileHover={{
                scale: 1.06,
                rotate: 0,
                y: -14,
                zIndex: 50,
                boxShadow: "0 20px 0 0 #b0b0b0, 0 26px 50px rgba(0,0,0,0.15)",
              }}
              // Clay squish on tap
              whileTap={{ scale: 0.95, y: 4 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 14,
                delay: obs.delay,
              }}
            >
              {/* Faux tape strip */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 opacity-50"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  borderRadius: "3px",
                  rotate: "1deg",
                }}
              />

              <div className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                {obs.label}
              </div>
              <h4 className="font-serif font-bold text-[1.1rem] text-gray-900 mb-3">
                {obs.topic}
              </h4>
              <p className="text-gray-600 font-sans leading-relaxed text-sm">
                &ldquo;{obs.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
