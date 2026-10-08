"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./CinematicBackground.module.css";

export default function CinematicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const bgX = useTransform(smoothX, [-1000, 1000], [-10, 10]);
  const bgY = useTransform(smoothY, [-1000, 1000], [-10, 10]);
  const mapX = useTransform(smoothX, [-1000, 1000], [-20, 20]);
  const mapY = useTransform(smoothY, [-1000, 1000], [-20, 20]);
  const deckX = useTransform(smoothX, [-1000, 1000], [-40, 40]);
  const deckY = useTransform(smoothY, [-1000, 1000], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className={styles.root}>
      {/* 1. Background image with slow parallax zoom */}
      <motion.div style={{ x: bgX, y: bgY }} className={styles.bgLayer}>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 40, ease: "easeInOut", repeat: Infinity }}
          className={styles.bgInner}
        >
          <Image
            src="/register-hero-bg.jpg"
            alt="Cinematic Ship Background"
            fill
            className={styles.bgImage}
            priority
          />
          <div className={styles.bgGradient} />
        </motion.div>
      </motion.div>

      {/* 2. Faint nautical map grid */}
      <motion.div style={{ x: mapX, y: mapY }} className={styles.mapLayer}>
        <svg width="100%" height="100%" className={styles.mapSvg} stroke="currentColor" fill="none">
          <line x1="20%" y1="0" x2="20%" y2="100%" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="80%" y1="0" x2="80%" y2="100%" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="30%" strokeWidth="0.5" opacity="0.3" />
          <circle cx="50%" cy="50%" r="32%" strokeWidth="0.2" opacity="0.2" />
        </svg>
      </motion.div>

      {/* 3. Drifting fog */}
      <motion.div
        animate={{ x: ["-10%", "10%"], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 30, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className={styles.fog}
      />

      {/* 4. Foreground deck overlay with ropes */}
      <motion.div style={{ x: deckX, y: deckY }} className={styles.deckLayer}>
        {/* Left ropes */}
        <svg
          viewBox="0 0 100 800"
          className={styles.ropeLeft}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        >
          <path d="M 20,-100 Q 50,300 10,900" />
          <path d="M 40,-100 Q 10,400 30,900" strokeWidth="6" opacity="0.8" />
        </svg>

        {/* Right ropes */}
        <svg
          viewBox="0 0 100 800"
          className={styles.ropeRight}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        >
          <path d="M 80,-100 Q 20,400 90,900" />
        </svg>

        {/* Lantern glow */}
        <motion.div
          animate={{ opacity: [0.6, 0.8, 0.5, 0.9, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={styles.lantern}
        />

        {/* Vignette */}
        <div className={styles.vignette} />
      </motion.div>
    </div>
  );
}
