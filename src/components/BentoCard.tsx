"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type ClayVariant = "sage" | "gold" | "blush" | "sky" | "white";
type RadiusVariant = "a" | "b" | "c" | "d" | "e" | "f";

interface BentoCardProps {
  icon?: string;
  iconBg?: "sage" | "gold";
  title: string;
  children: ReactNode;
  className?: string;
  span2?: boolean;
  delay?: number;
  variant?: ClayVariant;
  radius?: RadiusVariant;
}

// Maps variant → bg color + clay shadow CSS variable
const variantMap: Record<
  ClayVariant,
  { bg: string; shadow: string; highlight: string }
> = {
  sage: {
    bg: "#e4e9e2",
    shadow: "var(--clay-sage)",
    highlight: "rgba(255,255,255,0.55)",
  },
  gold: {
    bg: "#f3e5ab",
    shadow: "var(--clay-gold)",
    highlight: "rgba(255,255,255,0.55)",
  },
  blush: {
    bg: "#f9e4e4",
    shadow: "var(--clay-blush)",
    highlight: "rgba(255,255,255,0.60)",
  },
  sky: {
    bg: "#e0edf9",
    shadow: "var(--clay-sky)",
    highlight: "rgba(255,255,255,0.60)",
  },
  white: {
    bg: "#ffffff",
    shadow: "var(--clay-white)",
    highlight: "rgba(255,255,255,0.70)",
  },
};

const radiusMap: Record<RadiusVariant, string> = {
  a: "var(--radius-a)",
  b: "var(--radius-b)",
  c: "var(--radius-c)",
  d: "var(--radius-d)",
  e: "var(--radius-e)",
  f: "var(--radius-f)",
};

export default function BentoCard({
  icon,
  iconBg = "sage",
  title,
  children,
  className = "",
  span2 = false,
  delay = 0,
  variant = "white",
  radius = "e",
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Subtle 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const { bg, shadow, highlight } = variantMap[variant];
  const borderRadius = radiusMap[radius];

  return (
    <div
      className={`perspective-1000 ${span2 ? "hub-card-span-2" : ""} ${className}`}
      style={{ perspective: "800px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        // Springy entrance
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        // Elastic hover LIFT + tilt
        whileHover={{ y: -10, scale: 1.02 }}
        // Elastic tap SQUISH down (clay press!)
        whileTap={{ y: 4, scale: 0.96 }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 14,
          delay,
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          backgroundColor: bg,
          boxShadow: shadow,
          borderRadius,
          // Claymorphic inner top-left highlight
          backgroundImage: `linear-gradient(145deg, ${highlight} 0%, transparent 50%)`,
        }}
        className="relative hub-card p-8 md:p-9 cursor-none transition-none"
      >
        {/* Inner content layer for 3D parallax push */}
        <motion.div style={{ transform: "translateZ(30px)" }}>
          {icon && (
            <div
              className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-5 text-2xl ${
                iconBg === "gold"
                  ? "bg-[rgba(243,229,171,0.6)]"
                  : "bg-[rgba(228,233,226,0.7)]"
              }`}
            >
              {icon}
            </div>
          )}
          <h3 className="text-[1.125rem] font-serif font-bold text-gray-900 mb-3 tracking-tight leading-snug">
            {title}
          </h3>
          <div className="text-[0.9375rem] text-gray-600 leading-relaxed font-sans">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
