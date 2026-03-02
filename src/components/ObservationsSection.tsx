"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const observations = [
  {
    label: "Observatie 1",
    topic: "Communicatie",
    text: "Tijdens de ochtend 'stand-up' gaan instructies snel in het Nederlands. Anna knikt beleefd, maar werkt de rest van de shift in onzekerheid of ze de veiligheidsregels goed heeft begrepen.",
  },
  {
    label: "Observatie 2",
    topic: "Assertiviteit",
    text: "Anna werkt elke gevraagde overuren-shift, ook bij fysieke uitputting. De angst om niet meer opgeroepen te worden is merkbaar.",
  },
  {
    label: "Observatie 3",
    topic: "Digitale Tools",
    text: "Ze gebruikt haar smartphone intensief voor Maps en Translate, maar blokkeert bij officiële brieven uit angst voor de Nederlandse bureaucratie.",
  },
  {
    label: "Observatie 4",
    topic: "Rustmomenten",
    text: "Haar enige momenten van stilte zijn de twee extra minuten op het toilet tijdens haar shift.",
  },
];

export default function ObservationsSection() {
  return (
    <div className="hub-section--tinted">
      <section id="observaties" className="hub-section">
        <SectionHeader
          number="04"
          title="Observaties"
          subtitle="Objectieve veldnotities over Anna's dagelijks functioneren."
        />

        <div className="hub-bento-4">
          {observations.map((obs, i) => (
            <motion.div
              key={obs.label}
              className="hub-observation"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="hub-observation-label">{obs.label}</div>
              <div className="hub-observation-topic">{obs.topic}</div>
              <p className="hub-observation-text">&ldquo;{obs.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
