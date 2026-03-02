"use client";

import SectionHeader from "./SectionHeader";
import BentoCard from "./BentoCard";
import { motion } from "framer-motion";

export default function CharacterSection() {
  return (
    <div style={{ backgroundColor: "#f9fafb" }} className="relative">
      {/* Doodle blob background */}
      <svg
        className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M 40,40 C 80,-20 180,20 160,80 C 140,140 180,180 120,180 C 60,180 0,160 20,100 C 40,40 20,80 40,40 Z"
          stroke="#8a9a85"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
        />
      </svg>

      <section id="binnenwereld" className="hub-section relative z-10">
        <SectionHeader
          number="02"
          title="De Binnenwereld"
          subtitle="Karakter, dromen en de kleine dingen die Anna's dag kleur geven."
        />

        {/* Asymmetric 12-col bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          {/* Wide card — sage */}
          <div className="md:col-span-8">
            <BentoCard
              icon="🌿"
              iconBg="sage"
              title="Details & Rituelen"
              delay={0.05}
              variant="sage"
              radius="a"
            >
              <p>
                Ze praat zachtjes tegen haar kruidenplantjes op de vensterbank.
                Ze friemelt aan haar ring (cadeau van haar moeder) als ze
                zenuwachtig is. Tijdens wandelingen langs het kanaal{" "}
                <motion.span
                  className="font-semibold text-gray-800 underline decoration-[#8a9a85] decoration-2 underline-offset-4 cursor-pointer"
                  whileHover={{ rotate: [-1, 1, -1, 0] }}
                  transition={{ type: "spring", stiffness: 300, damping: 8 }}
                >
                  verzamelt ze steentjes als herinneringen
                </motion.span>
                .
              </p>
            </BentoCard>
          </div>

          {/* Tall card — gold */}
          <div className="md:col-span-4">
            <BentoCard
              icon="✨"
              iconBg="gold"
              title="Dromen"
              delay={0.1}
              variant="gold"
              radius="c"
              className="h-full"
            >
              <p>
                Een eigen kleine flat met een balkon vol plantjes. Nederlands
                spreken zonder schaamte. Groeien van &ldquo;overleven&rdquo;
                naar &ldquo;écht leven&rdquo;.
              </p>
              {/* Floating star doodle */}
              <svg
                className="absolute bottom-6 right-6 text-[#e0cc7a] w-10 h-10 opacity-60"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 4 L23 15 L34 17 L26 25 L28 36 L18 30 L8 36 L11 25 L3 17 L14 15 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </BentoCard>
          </div>

          {/* Medium card — blush */}
          <div className="md:col-span-6">
            <BentoCard
              icon="📺"
              iconBg="gold"
              title="Hobby's"
              delay={0.15}
              variant="blush"
              radius="d"
            >
              <p>
                Kijkt &lsquo;Heel Holland Bakt&rsquo; met ondertiteling. Kookt{" "}
                <strong className="font-semibold">zupa ogórkowa</strong> voor
                haar huisgenoten.
              </p>
            </BentoCard>
          </div>

          {/* Wide card — sky */}
          <div className="md:col-span-6">
            <BentoCard
              icon="📱"
              iconBg="sage"
              title="Gewoontes"
              delay={0.2}
              variant="sky"
              radius="b"
            >
              <p>
                Bewaart elk bonnetje, lijstje en elke foto op haar telefoon als
                een digitaal dagboek voor controle en overzicht.{" "}
                <span className="italic text-gray-500">
                  Haar telefoon is haar externe geheugen.
                </span>
              </p>
            </BentoCard>
          </div>
        </div>
      </section>
    </div>
  );
}
