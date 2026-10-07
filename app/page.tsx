"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import styles from "./page.module.css";

const ShipCanvas = dynamic(() => import("./ShipCanvas"), { ssr: false });
const GamesSection = dynamic(() => import("./GamesSection"), { ssr: false });

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

interface StatItemProps {
  prefix?: string;
  targetNumber: number;
  suffix?: string;
  label: string;
  isFullyScrolled: boolean;
}

function StatCounter({
  prefix = "",
  targetNumber,
  suffix = "",
  label,
  isFullyScrolled,
}: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isFullyScrolled) { setCount(0); return; }
    const startTime = performance.now();
    const duration = 1500;
    let raf: number;
    const animate = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(targetNumber * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isFullyScrolled, targetNumber]);

  return (
    <div className={styles.statCard}>
      <h3 className={styles.statNumber}>{prefix}{count.toLocaleString()}{suffix}</h3>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

// 0=Hero  1=About  2=Games  3=Contact+Footer
const TOTAL_SECTIONS = 4;
const TRANSITION_MS = 800;

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const isAnimatingRef = useRef(false);
  const touchStartY = useRef(0);
  const contactFooterRef = useRef<HTMLDivElement>(null);

  const activeSectionRef = useRef(0);
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 7 + 5,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.7 + 0.3,
        drift: (Math.random() - 0.5) * 120,
      }))
    );
  }, []);

  const navigateSection = useCallback((direction: 1 | -1) => {
    if (isAnimatingRef.current) return;
    setActiveSection((prev) => {
      const next = prev + direction;
      if (next < 0 || next >= TOTAL_SECTIONS) return prev;
      isAnimatingRef.current = true;
      setTimeout(() => { isAnimatingRef.current = false; }, TRANSITION_MS);
      return next;
    });
  }, []);

  // Always reset contactFooter scroll to top when activeSection changes
  useEffect(() => {
    if (contactFooterRef.current) {
      contactFooterRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  // Wheel handler
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      const currentSection = activeSectionRef.current;
      const el = contactFooterRef.current;

      if (currentSection === 3 && el) {
        const atTop = el.scrollTop <= 5;
        // If scrolling UP while at the top of Section 3, snap back to Games
        if (e.deltaY < 0 && atTop) {
          e.preventDefault();
          navigateSection(-1);
          return;
        }
        // Otherwise, allow natural scrolling inside Section 3 (down to Footer)
        return;
      }

      // Sections 0, 1, 2: locked snap navigation
      e.preventDefault();
      if (Math.abs(e.deltaY) < 15) return;
      navigateSection(e.deltaY > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [navigateSection]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const currentSection = activeSectionRef.current;
      const el = contactFooterRef.current;

      if (currentSection === 3 && el) {
        const atTop = el.scrollTop <= 5;
        if ((e.key === "ArrowUp" || e.key === "PageUp") && atTop) {
          e.preventDefault();
          navigateSection(-1);
        }
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); navigateSection(1); }
      else if (e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); navigateSection(-1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigateSection]);

  // Touch
  useEffect(() => {
    const onStart = (e: TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
    const onEnd = (e: TouchEvent) => {
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 50) return;

      const currentSection = activeSectionRef.current;
      const el = contactFooterRef.current;

      if (currentSection === 3 && el) {
        const atTop = el.scrollTop <= 5;
        // delta < -50 means swipe down (scroll up)
        if (delta < -50 && atTop) {
          navigateSection(-1);
        }
        return;
      }

      navigateSection(delta > 0 ? 1 : -1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [navigateSection]);

  // --- Animation values ---
  const s = activeSection;

  const imageOpacity = s === 0 ? 1 : 0;
  const imageTranslateY = s === 0 ? -20 : -140;

  const aboutOpacity = s === 1 ? 1 : 0;
  const textTranslateX = s === 0 ? -80 : s === 1 ? 0 : -150;
  const shipTranslateX = s === 0 ? 100 : s === 1 ? 0 : 150;

  const gamesOpacity = s === 2 ? 1 : 0;
  const gamesTranslateY = s === 2 ? 0 : 40;

  const contactOpacity = s === 3 ? 1 : 0;
  const contactTranslateY = s === 3 ? 0 : 40;

  const isFullyScrolled = s === 1;

  return (
    <main className={styles.heroPage}>
      <Navbar />

      <section className={styles.heroSection}>
        {/* Particles */}
        <div className={styles.particlesContainer} aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className={styles.particle}
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                opacity: p.opacity,
                "--drift": `${p.drift}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* SECTION 0 — Hero */}
        <div
          className={styles.centerImageWrap}
          style={{
            opacity: imageOpacity,
            transform: `translateY(${imageTranslateY}px)`,
            visibility: s === 0 ? "visible" : "hidden",
            transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s ${s === 0 ? '0s' : '0.8s'}`,
          }}
        >
          <img src="/image.png" alt="Shaurya" className={styles.centerImage} />
        </div>

        {/* SECTION 1 — About */}
        <div
          className={styles.aboutWrapper}
          id="about"
          style={{
            opacity: aboutOpacity,
            visibility: s === 1 ? "visible" : "hidden",
            transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s ${s === 1 ? '0s' : '0.8s'}`,
          }}
        >
          <div className={styles.aboutGrid}>
            <div
              className={styles.aboutTextContent}
              style={{ transform: `translateX(${textTranslateX}px)` }}
            >
              <h3 className={styles.aboutYellowHeading}>ABOUT US</h3>
              <h2 className={styles.aboutTitle}>Brave Hearts Write History With Courage</h2>
              <p className={styles.aboutDescription}>
                Shaurya is IIT Kharagpur&apos;s premier annual sports festival,
                bringing together athletes and enthusiasts from across the nation.
                Celebrating skill, spirit, and sportsmanship, Shaurya provides a
                high-octane platform to compete, excel, and carve a legacy in gold.
              </p>
              <div className={styles.statsGrid}>
                <StatCounter targetNumber={50} suffix="+" label="Colleges Participating" isFullyScrolled={isFullyScrolled} />
                <StatCounter prefix="₹" targetNumber={5} suffix="L+" label="Prize Pool" isFullyScrolled={isFullyScrolled} />
                <StatCounter targetNumber={20} suffix="+" label="Sporting Events" isFullyScrolled={isFullyScrolled} />
                <StatCounter targetNumber={10000} suffix="+" label="Footfall & Audience" isFullyScrolled={isFullyScrolled} />
              </div>
            </div>
            <div
              className={styles.aboutShipContainer}
              style={{ transform: `translateX(${shipTranslateX}px)` }}
            >
              <ShipCanvas />
            </div>
          </div>
        </div>

        {/* SECTION 2 — Games */}
        <div
          className={styles.gamesWrapper}
          id="games"
          style={{
            opacity: gamesOpacity,
            transform: `translateY(${gamesTranslateY}px)`,
            visibility: s === 2 ? "visible" : "hidden",
            transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s ${s === 2 ? '0s' : '0.8s'}`,
          }}
        >
          <GamesSection />
        </div>

        {/* SECTION 3 — Contact + Footer */}
        <div
          ref={contactFooterRef}
          className={styles.contactFooterWrapper}
          id="contact"
          style={{
            opacity: contactOpacity,
            transform: `translateY(${contactTranslateY}px)`,
            visibility: s === 3 ? "visible" : "hidden",
            pointerEvents: s === 3 ? "auto" : "none",
            transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s ${s === 3 ? '0s' : '0.8s'}`,
          }}
        >
          <div className={styles.contactContent}>
            <ContactSection />
          </div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
