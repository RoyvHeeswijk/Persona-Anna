"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface BentoCardProps {
  icon?: string;
  iconBg?: "sage" | "gold";
  title: string;
  children: ReactNode;
  className?: string;
  span2?: boolean;
  delay?: number;
}

export default function BentoCard({
  icon,
  iconBg = "sage",
  title,
  children,
  className = "",
  span2 = false,
  delay = 0,
  radiusClass = "rounded-[32px]", // Default soft round if no asymmetric class provided
}: BentoCardProps & { radiusClass?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring config for bouncing back and smooth tracking (Elastic Physics)
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 15 });

  // Map mouse position to rotation (-10deg to 10deg max)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate relative position -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={`perspective-1000 ${span2 ? "hub-card-span-2" : ""} ${className}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        // Elastic entrance animation
        initial={{ opacity: 0, scale: 0.8, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 18,
          delay,
        }}
        // The 3D styles
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        // Claymorphism Box Shadow + Dynamic Radius
        className={`hub-card relative z-10 bg-white shadow-[var(--shadow-clay)] hover:shadow-[var(--shadow-clay-hover)] p-9 transition-shadow duration-300 ${radiusClass}`}
      >
        {/* Inner content translates slightly forward for parallax 3D effect */}
        <motion.div style={{ transform: "translateZ(40px)" }}>
          {icon && (
            <div
              className={`hub-card-icon hub-card-icon--${iconBg} inline-flex items-center justify-center w-14 h-14 mb-5 text-2xl bg-opacity-20`}
              // Organic blob masking for the icon background
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                borderRadius: "50% 30% 60% 40% / 40% 50% 30% 60%",
              }}
            >
              {icon}
            </div>
          )}
          <h3 className="hub-card-title text-[1.1875rem] font-serif font-bold text-gray-900 mb-[0.875rem] tracking-tight">
            {title}
          </h3>
          <div className="hub-card-body text-[0.9375rem] text-gray-500 leading-relaxed font-sans">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
