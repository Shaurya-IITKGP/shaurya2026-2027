"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Navbar from "../Navbar";
import CinematicBackground from "./CinematicBackground";
import RegistrationForm from "./RegistrationForm";
import styles from "./page.module.css";

export default function RegisterPage() {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    return () => lenis.destroy();
  }, []);

  // Suppress "activeField unused" warning — can be wired to background effects later
  void activeField;

  return (
    <main className={styles.page}>
      {/* Existing site Navbar */}
      <Navbar
        links={[
          { label: "Home",     href: "/" },
          { label: "Events",   href: "/events" },
          { label: "Gallery",  href: "/gallery" },
          { label: "Sponsors", href: "/sponsors" },
          { label: "Matches",  href: "/matches" },
          { label: "Teams",    href: "/teams" },
        ]}
      />

      {/* Cinematic ship background */}
      <CinematicBackground />

      {/* Main content */}
      <div className={styles.contentWrap}>

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className={styles.heroText}
        >
          <h1 className={styles.eyebrow}>Shaurya 2026</h1>
          <h2 className={styles.heroTitle}>Join The Expedition</h2>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <svg className={styles.dividerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.3" />
            </svg>
            <div className={styles.dividerLineReverse} />
          </div>

          <p className={styles.heroCopy}>&ldquo;Every voyage begins with a name.&rdquo;</p>
        </motion.div>

        {/* Registration form */}
        <RegistrationForm
          onFocusChange={setActiveField}
          onSubmitStart={() => setIsSubmitted(true)}
        />
      </div>

      {/* Cinematic success overlay (compass rose) */}
      {isSubmitted && (
        <motion.div
          className={styles.successOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.15 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className={styles.successGlow}
          />
          <motion.svg
            viewBox="0 0 500 500"
            className={styles.compassRose}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{
              rotate: { duration: 100, ease: "linear", repeat: Infinity },
              scale:  { duration: 4, ease: "easeOut" },
              opacity:{ duration: 4, ease: "easeOut" },
            }}
          >
            <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="250" cy="250" r="220" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="250" cy="250" r="215" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
            <path
              d="M 250,50 L 265,235 L 450,250 L 265,265 L 250,450 L 235,265 L 50,250 L 235,235 Z"
              fill="none" stroke="currentColor" strokeWidth="1"
            />
            <path
              d="M 120,120 L 240,240 L 380,120 L 260,240 L 380,380 L 260,260 L 120,380 L 240,260 Z"
              fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"
            />
            <line x1="250" y1="0"   x2="250" y2="500" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <line x1="0"   y1="250" x2="500" y2="250" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <g opacity="0.4">
              {[...Array(36)].map((_, i) => (
                <line
                  key={i}
                  x1="250" y1="10" x2="250" y2="20"
                  stroke="currentColor" strokeWidth="1"
                  transform={`rotate(${i * 10} 250 250)`}
                />
              ))}
            </g>
          </motion.svg>
        </motion.div>
      )}
    </main>
  );
}
