"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const observations = [
  {
    label: "Notitie 01",
    topic: "Communicatie",
    text: "Tijdens de ochtend 'stand-up' gaan instructies snel in het Nederlands. Anna knikt beleefd, maar werkt de rest van de shift in onzekerheid of ze de veiligheidsregels goed heeft begrepen.",
    rotate: -2,
    color: "#E4E9E2",
  },
  {
    label: "Notitie 02",
    topic: "Assertiviteit",
    text: "Anna werkt elke gevraagde overuren-shift, ook bij fysieke uitputting. De angst om niet meer opgeroepen te worden is merkbaar.",
    rotate: 1,
    color: "#F3E5AB",
  },
  {
    label: "Notitie 03",
    topic: "Digitale Tools",
    text: "Ze gebruikt haar smartphone intensief voor Maps en Translate, maar blokkeert bij officiële brieven uit angst voor de Nederlandse bureaucratie.",
    rotate: -1,
    color: "#F9FAFB",
  },
  {
    label: "Notitie 04",
    topic: "Rustmomenten",
    text: "Haar enige momenten van stilte zijn de twee extra minuten op het toilet tijdens haar shift.",
    rotate: 2,
    color: "#E4E9E2",
  },
];

export default function ObservationsSection() {
  return (
    <div className="hub-section--tinted relative z-10 pt-8 pb-24">
      <section id="observaties" className="hub-section">
        <SectionHeader
          number="04"
          title="Observaties"
          subtitle="Objectieve veldnotities, overlappend gestapeld als een fysiek archief."
        />

        {/* Overlapping, messy paper aesthetic */}
        <div className="mt-16 relative flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {observations.map((obs, i) => (
            <motion.div
              key={obs.label}
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33%-1.5rem)] bg-white p-6 shadow-[var(--shadow-neumorphic)] cursor-none"
              style={{
                rotate: obs.rotate,
                borderTop: `6px solid ${obs.color}`,
              }}
              initial={{ opacity: 0, y: 50, rotate: obs.rotate - 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: obs.rotate }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 50,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: i * 0.1,
              }}
            >
              {/* Fake tape piece */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 backdrop-blur-sm shadow-sm rotate-1 opacity-70 mix-blend-multiply" />

              <div className="font-mono text-xs font-bold text-gray-400 mb-2">
                {obs.label}
              </div>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-3">
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
