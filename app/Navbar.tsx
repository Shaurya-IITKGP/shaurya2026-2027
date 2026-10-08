"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  links?: Array<{ label: string; href: string }>;
}

const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Matches", href: "/matches" },
  { label: "Teams", href: "/teams" },
];

export default function Navbar({ links = defaultLinks }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const leftLinks = links.slice(0, 3);
  const rightLinks = links.slice(3, 6);

  return (
    <header className={styles.headerFixed}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.navContainer}>
          <div className={styles.instLogoWrap}>
            <a
              href="http://www.iitkgp.ac.in/"
              className={styles.logoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/iit_kgp.png"
                alt="IIT Kharagpur logo"
                className={styles.instLogo}
              />
            </a>
          </div>

          {/* Left Desktop Links */}
          <div className={styles.leftGroup}>
            {leftLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navBtn}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className={styles.logoWrap}>
            <a href={links[0]?.href ?? "/"} className={styles.logoLink}>
              <img src="/logo.png" alt="Shaurya logo" className={styles.logo} />
            </a>
          </div>

          {/* Right Desktop Links */}
          <div className={styles.rightGroup}>
            {rightLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navBtn}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.registerWrap}>
            <a href="/register" className={styles.registerBtn}>
              Register
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>

        {/* Mobile Dropdown Drawer Overlay */}
        <div
          className={`${styles.mobileDrawer} ${isOpen ? styles.mobileDrawerOpen : ""}`}
          aria-hidden={!isOpen}
        >
          <div className={styles.mobileLinksGroup}>
            {links.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.mobileNavBtn}
                onClick={() => setIsOpen(false)}
                style={{ "--nav-idx": idx } as React.CSSProperties}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/register"
              className={styles.mobileRegisterBtn}
              onClick={() => setIsOpen(false)}
              style={{ "--nav-idx": links.length } as React.CSSProperties}
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
