"use client";

import SectionHeader from "./SectionHeader";
import BentoCard from "./BentoCard";
import { motion } from "framer-motion";

export default function ContextSection() {
  return (
    <section id="leefwereld" className="hub-section relative z-20">
      <SectionHeader
        number="03"
        title="De Leefwereld"
        subtitle="Wonen, werken en cultuur — het dagelijks kader."
      />

      {/* Staggered z-layered grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        {/* Top-left, lower z — sage */}
        <div className="md:col-span-5">
          <BentoCard
            icon="🏠"
            iconBg="sage"
            title="Huisvesting"
            delay={0.05}
            variant="sage"
            radius="c"
          >
            <p className="mb-4">
              Wekker om 05:30 voor de badkamer-rij. Woont met 5 anderen in een
              kamer van <span className="font-semibold text-gray-800">9m²</span>
              . Muren zo dun dat je een lepel hoort vallen. Privacy via een
              gordijn voor haar bed.
            </p>
            <div className="px-3 py-2 rounded-xl text-xs font-mono text-gray-500 bg-white/50">
              STATUS: Woonruimte wettelijk gekoppeld aan werkcontract.
            </div>
          </BentoCard>
        </div>

        {/* Top-right, lifted — gold */}
        <motion.div
          className="md:col-span-7 md:mt-10 md:mb-[-2rem]"
          initial={{ y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 14 }}
        >
          <BentoCard
            icon="📦"
            iconBg="gold"
            title="De Werkvloer"
            delay={0.1}
            variant="gold"
            radius="b"
          >
            <p>
              Fulltime in distributiecentrum Greenport Venlo. Werkt op
              veiligheidsschoenen.{" "}
              <strong className="font-semibold text-orange-500">
                &lsquo;Pick-rates&rsquo;
              </strong>{" "}
              zijn continu zichtbaar op schermen; kleurveranderingen bij haar
              naam geven een fysieke druk in haar buik.
            </p>
          </BentoCard>
        </motion.div>

        {/* Bottom, centered — blush */}
        <div className="md:col-span-8 md:col-start-3">
          <BentoCard
            icon="❤️"
            iconBg="sage"
            title="Cultuur — Matka Polka"
            delay={0.15}
            variant="blush"
            radius="a"
          >
            <p className="text-lg leading-relaxed">
              Een diep, onzichtbaar verantwoordelijkheidsgevoel om haar familie
              in Polen financieel te ondersteunen{" "}
              <span className="hub-sticker hub-sticker--gold inline-block text-xs !rotate-2 mx-1 -translate-y-0.5">
                remittances
              </span>
              . Zij komen op de eerste plaats.
            </p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
