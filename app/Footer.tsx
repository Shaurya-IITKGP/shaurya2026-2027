import React from "react";
import styles from "./Footer.module.css";

/* ── Hidden SVG symbol definitions ──────────────────────────────────── */
function IconDefs() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="fi-anchor" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v14M8 11h8M4.5 14c.5 3.5 3.5 6 7.5 6s7-2.5 7.5-6M4.5 14 3 11.5M19.5 14l1.5-2.5" />
        </symbol>
        <symbol id="fi-cannon" viewBox="0 0 24 24">
          <rect x="2.5" y="8.5" width="13" height="5.5" rx="2.7" transform="rotate(-18 9 11)" />
          <circle cx="9.5" cy="17" r="3.2" />
          <circle cx="20" cy="6" r="1.6" />
        </symbol>
        <symbol id="fi-swords" viewBox="0 0 24 24">
          <path d="M4 20 19 5M5 15l4 4M20 20 5 5M15 19l4-4" />
        </symbol>
        <symbol id="fi-spyglass" viewBox="0 0 24 24">
          <rect x="2.5" y="11" width="11" height="5" rx="1" transform="rotate(-28 8 13.5)" />
          <rect x="12" y="5" width="8" height="6" rx="1" transform="rotate(-28 16 8)" />
          <path d="m6 19 3-3" />
        </symbol>
        <symbol id="fi-chest" viewBox="0 0 24 24">
          <path d="M4 12c0-4 3.5-7 8-7s8 3 8 7M4 12h16v8H4zM12 14.5v3" />
        </symbol>
        <symbol id="fi-trident" viewBox="0 0 24 24">
          <path d="M12 3v18M7 3v5a5 5 0 0 0 10 0V3M9.5 21h5" />
        </symbol>
        <symbol id="fi-flag" viewBox="0 0 24 24">
          <path d="M5 3v18M5 4.5c3-1.5 5 1.5 8 0s4-1 6 0v8c-2-1-3-1.5-6 0s-5-1.5-8 0" />
        </symbol>
        <symbol id="fi-chat" viewBox="0 0 24 24">
          <path d="M4 5h16v11H11l-5 4v-4H4z" />
        </symbol>
      </svg>
    </>
  );
}

/* ── Shaurya SVG emblem ─────────────────────────────────────────────── */
function ShauryaEmblem() {
  return (
    <svg
      className={styles.emblem}
      viewBox="-150 -140 300 360"
      role="img"
      aria-label="Shaurya emblem"
    >
      <defs>
        <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffeaa8" />
          <stop offset=".5" stopColor="#e3b040" />
          <stop offset="1" stopColor="#8a5f14" />
        </linearGradient>
        <path id="frp" d="M0 -106A106 106 0 1 1 -.1 -106" />
        <g id="fcut">
          <path d="M-96 0 58 -4.5V4.5Z" fill="url(#fg)" />
          <path d="M-90 -.5H55" stroke="#fff3c4" strokeOpacity=".6" strokeWidth=".8" />
          <rect x="57" y="-13" width="5" height="26" rx="2" fill="url(#fg)" />
          <path d="M62 -9c10-2 24 0 24 9s-14 11-24 9" fill="none" stroke="url(#fg)" strokeWidth="2.2" />
          <rect x="62" y="-3" width="24" height="6" rx="3" fill="#7a4f12" />
          <circle cx="90" cy="0" r="5" fill="url(#fg)" />
        </g>
        <g id="fsp">
          <path d="M0 -37V-60" stroke="url(#fg)" strokeWidth="4" fill="none" />
          <path d="M0 -62V-78" stroke="url(#fg)" strokeWidth="7" fill="none" />
          <circle cy="-82" r="4.5" fill="url(#fg)" stroke="none" />
        </g>
      </defs>

      {/* cutlasses */}
      <use href="#fcut" transform="translate(0 168) rotate(19)" />
      <use href="#fcut" transform="translate(0 168) scale(-1 1) rotate(19)" />

      {/* outer rings */}
      <circle r="127" fill="none" stroke="#f0bf45" strokeOpacity=".5" strokeWidth="5" strokeDasharray="1 9.98" />
      <circle r="123" fill="none" stroke="url(#fg)" strokeWidth="1.2" />
      <g fill="#f0bf45">
        <path id="fdm" d="M0 -136 4 -130 0 -124-4 -130Z" />
        <use href="#fdm" transform="rotate(90)" />
        <use href="#fdm" transform="rotate(180)" />
        <use href="#fdm" transform="rotate(270)" />
      </g>

      {/* spinning text ring */}
      <g className={styles.spinR}>
        <text fontFamily="Cinzel,serif" fontWeight="600" fontSize="12" fill="url(#fg)">
          <textPath href="#frp" textLength="652" lengthAdjust="spacing">
            SHAURYA ✦ IIT KHARAGPUR ✦ SHAURYA ✦ IIT KHARAGPUR ✦ SHAURYA ✦
          </textPath>
        </text>
      </g>
      <circle r="93" fill="#06152b" fillOpacity=".9" stroke="url(#fg)" strokeWidth="1" />

      {/* ship wheel */}
      <g className={styles.spin} fill="none" stroke="url(#fg)" strokeLinecap="round">
        <circle r="60" strokeWidth="7" />
        <circle r="52" strokeWidth="1" strokeOpacity=".6" />
        <use href="#fsp" />
        <use href="#fsp" transform="rotate(45)" />
        <use href="#fsp" transform="rotate(90)" />
        <use href="#fsp" transform="rotate(135)" />
        <use href="#fsp" transform="rotate(180)" />
        <use href="#fsp" transform="rotate(225)" />
        <use href="#fsp" transform="rotate(270)" />
        <use href="#fsp" transform="rotate(315)" />
      </g>

      {/* logo medallion */}
      <circle r="38" fill="#06152b" stroke="url(#fg)" strokeWidth="2.5" />
      <circle r="33" fill="none" stroke="#f0bf45" strokeOpacity=".35" strokeWidth=".8" strokeDasharray="2 3" />
      <image href="/logo.png" x="-26" y="-31" width="52" height="62" />
    </svg>
  );
}

/* ── Animated night sea ─────────────────────────────────────────────── */
function NightSea() {
  return (
    <div className={styles.sea}>
      {/* moon */}
      <div className={styles.moon} aria-hidden="true" />

      {/* moon shimmer */}
      <div className={styles.glim} aria-hidden="true">
        {[
          { w: "64px", y: "0px", d: "0s" },
          { w: "54px", y: "12px", d: "-0.5s" },
          { w: "60px", y: "24px", d: "-1.1s" },
          { w: "40px", y: "37px", d: "-1.6s" },
          { w: "46px", y: "50px", d: "-2.1s" },
          { w: "28px", y: "64px", d: "-2.6s" },
          { w: "34px", y: "78px", d: "-3.0s" },
          { w: "18px", y: "92px", d: "-1.3s" },
        ].map((v, i) => (
          <i
            key={i}
            style={
              { "--w": v.w, "--y": v.y, "--d": v.d } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* lighthouse */}
      <div className={styles.lighthouse} aria-hidden="true">
        <svg viewBox="0 0 70 150">
          <defs>
            <clipPath id="ftw">
              <path d="M27 112 31 40H39L43 112Z" />
            </clipPath>
          </defs>
          <path d="M0 150C8 128 14 120 20 112H50C56 120 62 128 70 150Z" fill="#030a14" />
          <g clipPath="url(#ftw)">
            <rect x="20" y="40" width="30" height="72" fill="#0a2038" />
            <rect x="20" y="52" width="30" height="12" fill="#c99a2e" />
            <rect x="20" y="76" width="30" height="12" fill="#c99a2e" />
            <rect x="20" y="100" width="30" height="12" fill="#c99a2e" />
          </g>
          <rect x="26" y="36" width="18" height="5" fill="#c99a2e" />
          <circle className={styles.halo} cx="35" cy="28" r="15" fill="#ffe29a" fillOpacity=".28" />
          <rect x="30" y="21" width="10" height="14" fill="#ffe9a8" stroke="#030a14" strokeWidth="1.5" />
          <path d="M27 21 35 11 43 21Z" fill="#030a14" />
        </svg>
        <i className={styles.beam} />
      </div>

      {/* waves + ship */}
      <div className={`${styles.wave} ${styles.w1}`} />
      <div className={styles.sail} aria-hidden="true">
        <svg viewBox="0 0 175 120">
          <g stroke="#f0bf45" strokeOpacity=".3" strokeWidth=".6">
            <path d="M4 78H150C146 96 128 106 104 107H44C24 104 10 92 4 78Z" fill="#030a14" />
            <path d="M6 78 9 60h31l3 18Z" fill="#030a14" />
            <path d="M118 78V66h28l7 12Z" fill="#030a14" />
            <path d="M50 80V26M82 80V8M112 80V22M146 68 172 52" stroke="#030a14" strokeOpacity="1" strokeWidth="2.6" />
            <path d="M35 28q15 7 30 0l-2 26q-13 6-26 0Z" fill="#0d2038" />
            <path d="M62 12q20 8 40 0l-2 30q-18 7-36 0Z" fill="#0d2038" />
            <path d="M60 46q22 9 44 0l-2 30q-20 8-40 0Z" fill="#0d2038" />
            <path d="M98 30q14 7 28 0l-2 26q-12 6-24 0Z" fill="#0d2038" />
            <path d="M82 8q9-3 17 2l-4 3 4 3q-9-4-17-1Z" fill="#030a14" />
            <path d="M112 22q8-3 14 1.5l-3 2.5 3 2.5q-8-3-14-1Z" fill="#030a14" />
            <path d="M50 26 10 62M82 8 10 62M82 8 150 70M112 22 150 70M112 22 50 26" fill="none" stroke="#030a14" strokeOpacity=".8" strokeWidth=".7" />
          </g>
          <g fill="#f0bf45">
            <circle cx="13" cy="69" r="1.8" />
            <circle cx="22" cy="69" r="1.8" />
            <circle cx="31" cy="69" r="1.8" />
            <circle cx="150" cy="73" r="1.5" />
            <circle cx="82" cy="6" r="1.5" />
          </g>
        </svg>
      </div>
      <div className={`${styles.wave} ${styles.w2}`} />

      <p className={styles.copyright}>&copy; 2026 Shaurya, IIT Kharagpur. All Rights Reserved.</p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.foot} role="contentinfo" aria-label="Site Footer">
      <IconDefs />

      {/* gold rope border */}
      <div className={styles.ropeBorder} aria-hidden="true" />

      {/* Main Footer Content Row */}
      <div className={styles.footerRow}>
        {/* Brand Box */}
        <div className={styles.brandBox}>
          <ShauryaEmblem />
          <div className={styles.brandText}>
            <h2>SHAURYA</h2>
            <p>Annual Inter-Collegiate Sports Fest of IIT Kharagpur</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <nav className={styles.linksBox} aria-label="Quick Links">
          <h4 className={styles.boxTitle}>
            <svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true">
              <use href="#fi-anchor" />
            </svg>
            Quick Links
          </h4>
          <ul className={styles.qlinks}>
            <li><a href="#home"><svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true"><use href="#fi-anchor" /></svg>Home</a></li>
            <li><a href="#events"><svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true"><use href="#fi-cannon" /></svg>Events</a></li>
            <li><a href="#teams"><svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true"><use href="#fi-swords" /></svg>Teams</a></li>
            <li><a href="#gallery"><svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true"><use href="#fi-spyglass" /></svg>Gallery</a></li>
            <li><a href="#sponsors"><svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true"><use href="#fi-chest" /></svg>Sponsors</a></li>
            <li><a href="#matches"><svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true"><use href="#fi-trident" /></svg>Matches</a></li>
          </ul>
        </nav>

        {/* Harbour / Contact & Socials */}
        <div className={styles.contactBox}>
          <h4 className={styles.boxTitle}>
            <svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true">
              <use href="#fi-spyglass" />
            </svg>
            The Harbour
          </h4>
          <a className={styles.mailLink} href="mailto:shaurya@iitkgp.ac.in">
            <svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            shaurya@iitkgp.ac.in
          </a>
          <div className={styles.locationTag}>
            <svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            IIT Kharagpur, WB
          </div>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r=".6" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M14 8h2.5V4.5H14C11.8 4.5 10.5 6 10.5 8.2V10.5H8V14h2.5v6H14v-6h2.5l.5-3.5H14V8.5c0-.3.3-.5.5-.5" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M6 10v8M6 6.5v.1M10.5 18v-8m0 3c0-2 1.5-3 3-3s3 1 3 3v5" /></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="4" /><path d="m10.5 9.5 4 2.5-4 2.5Z" /></svg>
            </a>
          </div>
        </div>

        {/* Action / Fleet Box */}
        <div className={styles.actionBox}>
          <h4 className={styles.boxTitle}>
            <svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true">
              <use href="#fi-flag" />
            </svg>
            Join the Fleet
          </h4>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="#campus-ambassador">
            <svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true"><use href="#fi-flag" /></svg>
            Campus Ambassador
          </a>
          <a className={styles.btn} href="#whatsapp">
            <svg className={styles.ico} viewBox="0 0 24 24" aria-hidden="true"><use href="#fi-chat" /></svg>
            WhatsApp Community
          </a>
        </div>
      </div>

      {/* Night sea animation: Lighthouse, moon, boat, and waves */}
      <NightSea />
    </footer>
  );
}
