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
        subtitle="Het dagelijks kader waarin Anna functioneert: wonen, werken en cultuur."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 relative">
        {/* Decorative arrow pointing between cards */}
        <svg
          className="absolute left-[30%] top-[45%] text-[#C5CEC2] w-24 h-24 hidden lg:block z-0 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M10 50 Q 50 10, 90 50 M 80 40 L 90 50 L 75 55"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="md:col-span-5 relative z-10">
          <BentoCard icon="🏠" iconBg="sage" title="Huisvesting" delay={0.1}>
            <p className="mb-4">
              Wekker om 05:30 voor de badkamer-rij. Woont met 5 anderen. Muren
              zo dun dat je een lepel hoort vallen.{" "}
              <span className="italic text-gray-400">
                Privacy via een gordijn voor haar bed.
              </span>
            </p>
            <div className="p-3 bg-[#f9fafb] rounded-lg border border-dashed border-[#e5e7eb] font-mono text-xs text-gray-500 mt-4">
              STATUS: Woonruimte is wettelijk gekoppeld aan werkcontract.
            </div>
          </BentoCard>
        </div>

        {/* Floating higher on Z axis using framer motion y-offset and larger shadow */}
        <motion.div
          className="md:col-span-7 relative z-30"
          initial={{ y: 0 }}
          whileHover={{ y: -8 }}
        >
          <BentoCard
            icon="📦"
            iconBg="gold"
            title="De Werkvloer"
            delay={0.2}
            className="md:mt-12"
          >
            <p>
              Fulltime in distributiecentrum Greenport Venlo. Werkt op
              veiligheidsschoenen.
              <strong className="text-[#F97316] font-semibold">
                {" "}
                &lsquo;Pick-rates&rsquo; (targets)
              </strong>{" "}
              zijn continu zichtbaar op schermen; kleurveranderingen bij haar
              naam zorgen voor fysieke druk in haar buik.
            </p>
          </BentoCard>
        </motion.div>

        <div className="md:col-span-8 md:col-start-3 relative z-20">
          <BentoCard
            icon="❤️"
            iconBg="sage"
            title="Cultuur — Matka Polka"
            delay={0.3}
            className="md:-mt-8"
          >
            <p className="text-lg">
              Een diep, onzichtbaar verantwoordelijkheidsgevoel om haar familie
              in Polen financieel te ondersteunen{" "}
              <span className="hub-sticker hub-sticker--gold text-xs !rotate-2 !inline-block -translate-y-1 mx-1">
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
