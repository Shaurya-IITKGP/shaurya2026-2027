import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.foot} role="contentinfo" aria-label="Site Footer">
      {/* Main Footer Content Row */}
      <div className={styles.footerRow}>
        {/* Brand Box */}
        <div className={styles.brandBox}>
          <img
            src="/logo.png"
            alt="Shaurya Logo"
            className={styles.brandLogo}
          />
          <div className={styles.brandText}>
            <h2>SHAURYA</h2>
            <p className={styles.subhead}>IIT Kharagpur</p>
            <p className={styles.brandDesc}>
              Celebrating athleticism, passion, and competitive spirit across campuses nationwide.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <nav className={styles.linksBox} aria-label="Quick Links">
          <h4 className={styles.boxTitle}>Quick Links</h4>
          <ul className={styles.qlinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/matches">Matches</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
            <li><a href="/teams">Teams</a></li>
          </ul>
        </nav>

        {/* Contact & Socials */}
        <div className={styles.contactBox}>
          <h4 className={styles.boxTitle}>Contact Us</h4>
          <a className={styles.mailLink} href="mailto:shaurya@iitkgp.ac.in">
            shaurya@iitkgp.ac.in
          </a>
          <div className={styles.locationTag}>
            IIT Kharagpur, West Bengal 721302
          </div>
          <div className={styles.social}>
            <a href="https://www.instagram.com/shaurya.iitkgp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r=".6" /></svg>
            </a>
            <a href="https://www.facebook.com/shauryaiitkgp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M14 8h2.5V4.5H14C11.8 4.5 10.5 6 10.5 8.2V10.5H8V14h2.5v6H14v-6h2.5l.5-3.5H14V8.5c0-.3.3-.5.5-.5" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M6 10v8M6 6.5v.1M10.5 18v-8m0 3c0-2 1.5-3 3-3s3 1 3 3v5" /></svg>
            </a>
            <a href="https://www.youtube.com/@ShauryaIITKharagpur" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="4" /><path d="m10.5 9.5 4 2.5-4 2.5Z" /></svg>
            </a>
          </div>
        </div>

        {/* Action Community Box */}
        <div className={styles.actionBox}>
          <h4 className={styles.boxTitle}>Get Involved</h4>
          <a
            className={`${styles.btn} ${styles.btnPrimary}`}
            href="https://chat.whatsapp.com/IOrORTpZLpA3RBAVTI4RJ2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={styles.btnIcon}
              width="20"
              height="20"
              viewBox="0 0 448 512"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            WhatsApp Community
          </a>
        </div>
      </div>

      {/* Clean Bottom Copyright Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>&copy; 2026 Shaurya, IIT Kharagpur. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
