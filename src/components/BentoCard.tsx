"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

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
}: BentoCardProps) {
  return (
    <motion.div
      className={`hub-card ${span2 ? "hub-card-span-2" : ""} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {icon && (
        <div className={`hub-card-icon hub-card-icon--${iconBg}`}>{icon}</div>
      )}
      <h3 className="hub-card-title">{title}</h3>
      <div className="hub-card-body">{children}</div>
    </motion.div>
  );
}
