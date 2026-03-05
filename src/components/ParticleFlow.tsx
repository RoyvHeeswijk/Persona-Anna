"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Generate a dense, organic stream of particles
// We do this outside the component to guarantee stable hydration across SSR/Client
const generateParticles = (count: number) => {
  const particles = [];
  // Use a pseudo-random approach for stable hydration if necessary, or just hardcode a larger array
  // For simplicity and stability, we'll generate it here but rely on client-side mounting if we use Math.random
  // Alternatively, providing a fixed array of 50 seeded values is safest for Next.js SSR.
  for (let i = 0; i < count; i++) {
    particles.push({
      yStart: (i % 20) * 2 - 20 + (i % 3) * 5, // pseudo-random spread -20 to 20
      yEnd: (i % 15) * 3 - 22 + (i % 4) * 2,
      duration: 2.5 + (i % 5) * 0.4, // duration between 2.5 and 4.1
      delay: (i % 10) * 0.3, // staggered starts
    });
  }
  return particles;
};

const particleData = generateParticles(52); // Dense stream

export default function ParticleFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Avoid synchronous setState in effect for React 19 performance
  useEffect(() => {
    let mounted = true;
    queueMicrotask(() => {
      if (mounted) setIsMounted(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // The animation tracks while the container is in view
    offset: ["start end", "end start"],
  });

  // --- Visuals for the Core Circles ---

  // Anna's circle (Venlo) shrinks & fades
  const scaleAnna = useTransform(scrollYProgress, [0.2, 0.6], [1, 0.6]);
  const opacityAnna = useTransform(scrollYProgress, [0.2, 0.6], [1, 0.6]);

  // Family's circle (Poland) grows & intensifies
  const scaleFamily = useTransform(scrollYProgress, [0.2, 0.6], [0.6, 1.2]);
  const opacityFamily = useTransform(scrollYProgress, [0.2, 0.6], [0.6, 1]);
  const shadowFamily = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    [
      "0px 0px 0px rgba(224, 204, 122, 0)",
      "0px 0px 40px rgba(224, 204, 122, 0.5)",
    ],
  );

  // --- Scroll-Triggered Y-Transitions for the 3 Museum Labels ---
  // The user scrolls down through the ~1200px tall container.

  // Label 1: Left
  const yLabel1 = useTransform(scrollYProgress, [0.1, 0.3], [20, 0]);

  // Label 2: Center
  const yLabel2 = useTransform(scrollYProgress, [0.35, 0.5], [20, 0]);

  // Label 3: Right
  const yLabel3 = useTransform(scrollYProgress, [0.55, 0.7], [20, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[750px] flex flex-col items-center justify-start -mb-10 md:-mb-24"
    >
      {/* Sticky container holds the visualization in the viewport as we scroll through the tall div */}
      <div className="sticky top-0 w-full h-[500px] md:h-[700px] flex flex-col items-center justify-start pt-4 overflow-hidden">
        {/* Main interactive visualization wrapper */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] flex items-center justify-between px-4 sm:px-12 md:px-24 mt-4">
          {/* ========================================================= */}
          {/* LEFT SCENE: ANNA (VENLO)                                  */}
          {/* ========================================================= */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="font-serif font-bold text-gray-800 tracking-wide text-2xl">
                Anna
              </span>
              <span className="text-xs text-gray-400 font-mono tracking-[0.2em] uppercase mt-1">
                Venlo, NL
              </span>
            </div>

            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#8a9a85]/30 bg-gradient-to-br from-[#8a9a85]/10 to-[#8a9a85]/30 backdrop-blur-md shadow-inner flex items-center justify-center"
              style={{
                scale: scaleAnna,
                opacity: opacityAnna,
              }}
            >
              {/* Inner core */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#8a9a85] opacity-20" />
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* THE GOLDEN PARTICLE FLOW                                  */}
          {/* ========================================================= */}
          <div className="absolute top-[62%] left-[15%] right-[15%] h-32 -translate-y-2/3 z-0 pointer-events-none overflow-visible">
            {isMounted &&
              particleData.map((data, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                  style={{
                    backgroundColor: "#e0cc7a",
                    boxShadow: "0 0 10px 2px rgba(224, 204, 122, 0.4)",
                  }}
                  initial={{ left: "0%", y: data.yStart, opacity: 0 }}
                  animate={{
                    left: "100%",
                    y: data.yEnd,
                    opacity: [0, 0.8, 1, 0.8, 0],
                    scale: [0.5, 1.5, 1, 0.5],
                  }}
                  transition={{
                    duration: data.duration,
                    repeat: Infinity,
                    delay: data.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
          </div>

          {/* ========================================================= */}
          {/* RIGHT SCENE: FAMILY (POLAND)                              */}
          {/* ========================================================= */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="font-serif font-bold text-gray-800 tracking-wide text-2xl">
                Familie
              </span>
              <span className="text-xs text-[#e0cc7a] font-mono tracking-[0.2em] uppercase mt-1">
                Polen
              </span>
            </div>

            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#e0cc7a]/40 bg-gradient-to-br from-[#e0cc7a]/20 to-[#e0cc7a]/40 backdrop-blur-md flex items-center justify-center relative"
              style={{
                scale: scaleFamily,
                opacity: opacityFamily,
                boxShadow: shadowFamily,
              }}
            >
              {/* Inner core expanding */}
              <motion.div
                className="absolute inset-4 rounded-full bg-[#e0cc7a] opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* THE 3 MUSEUM LABELS (ABSOLUTE PLACED)                       */}
          {/* ========================================================= */}

          {/* LABEL 1: Left / Anna */}
          <motion.div
            className="hidden md:block absolute top-[90%] left-0 w-72 bg-white border border-gray-100 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 z-20"
            style={{ y: yLabel1 }}
          >
            <h4 className="font-serif text-[16px] font-bold text-gray-800 mb-2">
              De Financiële Leegte
            </h4>
            <p className="font-sans text-[14px] leading-[1.6] text-gray-600">
              Ze stuurt bijna 70% van haar loon direct naar huis en weigert geld
              uit te geven aan eigen comfort. Haar buffer in Nederland is
              minimaal.
            </p>
          </motion.div>

          {/* LABEL 2: Center / Flow */}
          <motion.div
            className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[85%] sm:w-80 md:w-96 bg-white border border-gray-100 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 z-30"
            style={{ y: yLabel2 }}
          >
            <h4 className="font-serif text-[16px] font-bold text-gray-800 mb-2">
              Het Matka Polka Syndroom
            </h4>
            <p className="font-sans text-[14px] leading-[1.6] text-gray-600">
              De diepgewortelde culturele verwachting om jezelf op te offeren
              voor het gezin. Ze compenseert haar fysieke afwezigheid met
              meedogenloze financiële steun.
            </p>
          </motion.div>

          {/* LABEL 3: Right / Poland */}
          <motion.div
            className="hidden md:block absolute top-[90%] right-0 w-72 bg-white border border-gray-100 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 z-20"
            style={{ y: yLabel3 }}
          >
            <h4 className="font-serif text-[16px] font-bold text-gray-800 mb-2">
              Afhankelijke Stabiliteit
            </h4>
            <p className="font-sans text-[14px] leading-[1.6] text-gray-600">
              Haar geld betaalt de medicijnen van haar moeder en schoolspullen
              voor haar zusje. Hun onbezorgde zekerheid leunt volledig op
              Anna&apos;s harde targets.
            </p>
          </motion.div>
        </div>

        {/* Mobile-only visible labels rendering in a stack if viewport is too small to render absolute side labels */}
        <div className="md:hidden mt-20 flex flex-col gap-4 px-6 w-full max-w-sm pointer-events-none">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <h4 className="font-serif text-[16px] font-bold text-gray-800 mb-2">
              De Financiële Leegte
            </h4>
            <p className="font-sans text-[14px] leading-[1.6] text-gray-600">
              Ze stuurt 70% van haar loon direct naar huis.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <h4 className="font-serif text-[16px] font-bold text-gray-800 mb-2">
              Afhankelijke Stabiliteit
            </h4>
            <p className="font-sans text-[14px] leading-[1.6] text-gray-600">
              Hun zekerheid leunt volledig op Anna&apos;s targets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
