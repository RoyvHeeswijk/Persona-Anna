"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NAV_ITEMS = [
  { id: "profiel", label: "Portret" },
  { id: "binnenwereld", label: "Binnenwereld" },
  { id: "leefwereld", label: "Leefwereld" },
  { id: "het-werk", label: "Het Werk" },
  { id: "drijfveren", label: "Drijfveren" },
];

export default function Navbar() {
  const [active, setActive] = useState("profiel");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Scroll to hide logic
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // Scrolling down past 150px
    } else {
      setHidden(false); // Scrolling up
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="hub-nav"
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-200%" : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="hub-nav-inner border-0">
        <ul className="hub-nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`hub-nav-link ${active === id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hub-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div className={`hub-nav-mobile ${mobileOpen ? "open" : ""}`}>
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="hub-nav-mobile-link"
            onClick={(e) => {
              e.preventDefault();
              handleClick(id);
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
