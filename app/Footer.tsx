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
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.878-9.874 2.637 0 5.116 1.028 6.979 2.893a9.82 9.82 0 012.887 6.98c-.001 5.447-4.432 9.877-9.875 9.877m0-18.067c-6.19 0-11.226 5.037-11.229 11.227 0 1.979.518 3.91 1.503 5.617l-1.597 5.834 5.967-1.565a11.2 11.2 0 005.353 1.365h.005c6.19 0 11.228-5.038 11.231-11.23a11.16 11.16 0 00-3.287-7.942c-2.12-2.122-4.938-3.29-7.946-3.29z" />
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
