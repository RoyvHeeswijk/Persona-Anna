"use client";

import SectionHeader from "./SectionHeader";
import BentoCard from "./BentoCard";
import { motion } from "framer-motion";

export default function CharacterSection() {
  return (
    <div className="hub-section--tinted relative overflow-hidden">
      {/* Background large scribble */}
      <svg
        className="absolute right-[-10%] top-20 text-[#F3E5AB] opacity-30 w-96 h-96 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 40,40 C 80,-20 180,20 160,80 C 140,140 180,180 120,180 C 60,180 0,160 20,100 C 40,40 20,80 40,40 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      <section id="binnenwereld" className="hub-section relative z-10">
        <SectionHeader
          number="02"
          title="De Binnenwereld"
          subtitle="Karakter, dromen en de kleine dingen die Anna's dag kleur geven."
        />

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          <BentoCard
            className="md:col-span-8"
            icon="🌿"
            iconBg="sage"
            title="Details"
            delay={0.1}
          >
            <p className="relative">
              Ze praat zachtjes tegen haar kruidenplantjes op de vensterbank. Ze
              friemelt aan haar ring (cadeau van haar moeder) als ze zenuwachtig
              is. Tijdens wandelingen
              <motion.span
                className="inline-block mx-1 font-semibold text-gray-700 underline decoration-[#8A9A85] decoration-2 underline-offset-4 cursor-pointer"
                whileHover={{ rotate: [-2, 2, -2, 0] }}
              >
                verzamelt ze steentjes en blaadjes
              </motion.span>
              als herinneringen.
            </p>
          </BentoCard>

          <BentoCard
            className="md:col-span-4"
            icon="📺"
            iconBg="gold"
            title="Hobby's"
            delay={0.2}
          >
            <p>
              Kijkt &lsquo;Heel Holland Bakt&rsquo; met ondertiteling om de taal
              te leren. Kookt{" "}
              <strong className="font-semibold">
                &lsquo;zupa ogórkowa&rsquo;
              </strong>{" "}
              voor haar huisgenoten.
            </p>
          </BentoCard>

          <BentoCard
            className="md:col-span-5 relative"
            icon="✨"
            iconBg="sage"
            title="Dromen"
            delay={0.3}
          >
            {/* Small floating doodle */}
            <svg
              className="absolute -top-6 -right-4 text-[#F3E5AB] w-16 h-16"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M20 5 L23 15 L33 17 L25 24 L27 34 L18 29 L9 33 L12 23 L4 16 L14 14 Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <p>
              Een eigen kleine flat met een balkon vol plantjes. Nederlands
              spreken zonder schaamte. Groeien van &ldquo;overleven&rdquo; naar
              &ldquo;echt leven&rdquo;.
            </p>
          </BentoCard>

          <BentoCard
            className="md:col-span-7"
            icon="📱"
            iconBg="gold"
            title="Gewoontes"
            delay={0.4}
          >
            <p>
              Bewaart elk bonnetje, lijstje en elke foto op haar telefoon als
              een digitaal dagboek voor controle en overzicht.
            </p>
          </BentoCard>
        </div>
      </section>
    </div>
  );
}
