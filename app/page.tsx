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
  const lastBlockedTimeRef = useRef(0);
  const accumulatedDeltaRef = useRef(0);
  const lastWheelTimeRef = useRef(0);
  const lastNativeScrollTimeRef = useRef(0);
  const touchStartY = useRef(0);
  const contactRef = useRef<HTMLDivElement>(null);

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

  // Always reset contact scroll to top when navigating away or entering section 3
  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  // Wheel handler
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const el = contactRef.current;
      const now = Date.now();
      const currentSection = activeSectionRef.current;

      // Reset accumulation if it's been a while since the last wheel event (new swipe)
      if (now - lastWheelTimeRef.current > 300) {
        accumulatedDeltaRef.current = 0;
      }
      lastWheelTimeRef.current = now;

      // Always block scroll during transition animation (prevents momentum bleed)
      if (isAnimatingRef.current) {
        e.preventDefault();
        lastBlockedTimeRef.current = now;
        return;
      }

      // Momentum bleed check (80ms is enough to catch inertia without blocking fast users)
      if (now - lastBlockedTimeRef.current < 80) {
        e.preventDefault();
        lastBlockedTimeRef.current = now;
        return;
      }

      // Section 3: Contact+Footer — allow natural scroll inside
      if (currentSection === 3 && el) {
        const atTop = el.scrollTop <= 2;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

        if (!atTop && !atBottom) {
          // Scrolling natively inside the footer
          lastNativeScrollTimeRef.current = now;
          accumulatedDeltaRef.current = 0;
          return;
        }

        // At top, scrolling up → go back to Games
        if (atTop && e.deltaY < 0) {
          e.preventDefault();

          // If we JUST reached the top from native scrolling, absorb the leftover momentum
          // so we lock at the Contact section instead of flying straight into Games.
          if (now - lastNativeScrollTimeRef.current < 300) {
            lastNativeScrollTimeRef.current = now; // keep absorbing
            return;
          }

          accumulatedDeltaRef.current += e.deltaY;
          if (accumulatedDeltaRef.current < -40) {
            navigateSection(-1);
            accumulatedDeltaRef.current = 0;
          }
          return;
        }

        // At bottom, scrolling down → absorb
        if (atBottom && e.deltaY > 0) {
          e.preventDefault();
          return;
        }

        // Catch native scrolls that just hit the boundary
        lastNativeScrollTimeRef.current = now;
        accumulatedDeltaRef.current = 0;
        return;
      }

      // Sections 0–2: fully locked snap
      e.preventDefault();
      accumulatedDeltaRef.current += e.deltaY;

      if (Math.abs(accumulatedDeltaRef.current) > 40) {
        navigateSection(accumulatedDeltaRef.current > 0 ? 1 : -1);
        accumulatedDeltaRef.current = 0;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [navigateSection]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
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

      // On section 3, let native touch scroll work, unless at the top and scrolling up
      if (currentSection === 3) {
        const el = contactRef.current;
        if (el) {
          const atTop = el.scrollTop <= 2;
          // delta < -50 means swipe down (scroll up)
          if (delta < -50 && atTop) {
            navigateSection(-1);
          }
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
  const contactTranslateY = s === 3 ? 0 : 60;

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

        {/* SECTION 3 — Contact Us + Footer (scrollable, Contact fills full viewport) */}
        <div
          ref={contactRef}
          className={styles.contactFooterWrapper}
          id="contact"
          style={{
            opacity: contactOpacity,
            transform: `translateY(${contactTranslateY}px)`,
            visibility: s === 3 ? "visible" : "hidden",
            transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s ${s === 3 ? '0s' : '0.8s'}`,
          }}
        >
          {/* Contact fills exactly 100vh — footer completely hidden below */}
          <div className={styles.contactSlide}>
            <ContactSection />
          </div>
          {/* Footer revealed by scrolling down */}
          <Footer />
        </div>
      </section>

      {/* Navigation dots */}
      <div className={styles.sectionDots}>
        {Array.from({ length: TOTAL_SECTIONS }, (_, i) => (
          <button
            key={i}
            className={`${styles.sectionDot} ${i === s ? styles.sectionDotActive : ""}`}
            onClick={() => {
              if (isAnimatingRef.current) return;
              isAnimatingRef.current = true;
              setActiveSection(i);
              setTimeout(() => { isAnimatingRef.current = false; }, TRANSITION_MS);
            }}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>
    </main>
  );
}
