"use client";
import React, { useEffect, useState } from "react";
import styles from "./ContactSection.module.css";

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 10v8M6 6.5v.1M10.5 18v-8m0 3c0-2 1.5-3 3-3s3 1 3 3v5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

// ─── Compass ─────────────────────────────────────────────────────────────────

function Compass() {
  return (
    <svg className={styles.compass} viewBox="0 0 100 100" aria-hidden="true">
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="#ffc93d"
        strokeOpacity=".7"
        strokeWidth="1.5"
      />
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="#ffc93d"
        strokeOpacity=".35"
        strokeWidth=".8"
        strokeDasharray="2 3"
      />
      <path
        d="M50 6 56 44 94 50 56 56 50 94 44 56 6 50 44 44Z"
        fill="#ffc93d"
        fillOpacity=".14"
        stroke="#ffc93d"
        strokeOpacity=".7"
        strokeWidth="1"
      />
      <g className={styles.needle}>
        <path d="M50 18 54 50 50 82 46 50Z" fill="#ffc93d" />
      </g>
      <circle
        cx="50"
        cy="50"
        r="3.5"
        fill="#070b12"
        stroke="#ffc93d"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ─── XMark icon ──────────────────────────────────────────────────────────────

function XMark() {
  return (
    <svg className={styles.xmark} viewBox="0 0 34 34" aria-hidden="true">
      <path
        d="M7 7l20 20M27 7 7 27"
        stroke="#ffc93d"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Person silhouette ────────────────────────────────────────────────────────

function PersonSilhouette() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={styles.silhouette}
    >
      <circle cx="12" cy="8" r="4.5" />
      <path d="M3 22c0-5 4-8 9-8s9 3 9 8Z" />
    </svg>
  );
}

// ─── Team data ────────────────────────────────────────────────────────────────

interface TeamMember {
  name: string;
  phone: string;
  tel: string;
  imageUrl?: string;
  posX: string;
  posY: string;
  instagramUrl: string;
  linkedinUrl: string;
  emailUrl: string;
}

const team: TeamMember[] = [
  {
    name: "Sutirtha Jana",
    phone: "+91 9907234970",
    tel: "+919907234970",
    imageUrl: "/teams/team2026/Sutirtha Jana.jpg",
    posX: "17%",
    posY: "34%",
    instagramUrl:
      "https://www.instagram.com/s.jana_107?stkn=MWFxMDJwdzJ3bmg4Yg==",
    linkedinUrl:
      "https://www.linkedin.com/in/sutirtha-jana-768548321?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    emailUrl: "mailto:sutirthajana107@gmail.com",
  },
  {
    name: "Angothu Gopichand",
    phone: "+91 6300145936",
    tel: "+916300145936",
    imageUrl: "/teams/team2026/Angothu Gopichand.jpg",
    posX: "50%",
    posY: "64%",
    instagramUrl:
      "https://www.instagram.com/mr_gopi_chand9?stkn=MTQ2dnJmeTB2cDJ6eA%3D%3D",
    linkedinUrl: "https://www.linkedin.com/in/gopichand-angothu-a0a231324/",
    emailUrl: "mailto:Sirisrinivas464@gmail.com",
  },
  {
    name: "Aravind Naik",
    phone: "+91 8121980076",
    tel: "+918121980076",
    imageUrl: "/teams/team2026/Aravind Naik.jpg",
    posX: "83%",
    posY: "32%",
    instagramUrl:
      "https://www.instagram.com/aravindnaik__?stkn=MWJlbDBqZjNobXIxaQ%3D%3D&utm_source=qr",
    linkedinUrl: "https://www.linkedin.com/in/aravind-naik-kethavath-67a5b835/",
    emailUrl: "mailto:aravindnaikkethavth2@gmail.com",
  },
];

// ─── Ember particle type ──────────────────────────────────────────────────────

interface Ember {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactSection() {
  const [embers, setEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    setEmbers(
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 7 + 5,
        delay: -(Math.random() * 8),
        driftX: (Math.random() - 0.5) * 120,
      })),
    );
  }, []);

  return (
    <section
      className={styles.contact}
      id="contact"
      aria-labelledby="ct-heading"
    >
      {/* Embers */}
      <div className={styles.embers} aria-hidden="true">
        {embers.map((e) => (
          <span
            key={e.id}
            className={styles.ember}
            style={
              {
                left: e.left,
                width: `${e.size}px`,
                height: `${e.size}px`,
                animationDuration: `${e.duration}s`,
                animationDelay: `${e.delay}s`,
                "--drift": `${e.driftX}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className={styles.wrap}>
        {/* ── Left column ── */}
        <div className={styles.leftCol}>
          <p className={styles.eyebrow}>Contact us</p>
          <h2 className={styles.heading} id="ct-heading">
            Send Word
            <br />
            to the Crew
          </h2>
          <p className={styles.lede}>
            Want to join the community, ask queries or reach out for
            collaboration? Find a crew member on the chart, or join the official
            WhatsApp community.
          </p>

          <a
            className={styles.bottle}
            href="https://chat.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our WhatsApp Community"
          >
            {/* Bottle SVG */}
            <svg
              className={styles.bottleSvg}
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <rect
                x="19"
                y="1.5"
                width="10"
                height="7"
                rx="2"
                fill="#a8723a"
              />
              <path
                d="M20 8h8v7c6 3 9 7 9 12v12a5 5 0 0 1-5 5H16a5 5 0 0 1-5-5V27c0-5 3-9 9-12Z"
                fill="#22d3ee"
                fillOpacity=".3"
                stroke="#7dd3fc"
                strokeWidth="1.5"
              />
              <rect
                x="19"
                y="22"
                width="10"
                height="17"
                rx="2"
                fill="#f3e2b4"
                transform="rotate(8 24 30)"
              />
              <path
                d="M21 27h6M21 31h6M21 35h4"
                stroke="#a8721a"
                strokeWidth="1.2"
                strokeLinecap="round"
                transform="rotate(8 24 30)"
              />
            </svg>
            <span className={styles.bottleText}>
              <strong className={styles.bottleTitle}>
                Join our WhatsApp community
              </strong>
              <small className={styles.bottleSub}>
                Get live updates, event schedules and important announcements.
              </small>
            </span>
          </a>
        </div>

        {/* ── Right column — crew contacts ── */}
        <div
          className={styles.map}
          role="group"
          aria-label="Crew contact chart"
        >
          {/* Crew stops */}
          {team.map((member) => (
            <article
              key={member.name}
              className={styles.stop}
              style={{ left: member.posX, top: member.posY }}
            >
              <div className={styles.isle}>
                <div className={styles.ring}>
                  <div className={styles.ringInner}>
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={`${member.name} portrait`}
                        className={styles.memberImage}
                      />
                    ) : (
                      <PersonSilhouette />
                    )}
                  </div>
                </div>
              </div>

              <h3 className={styles.memberName}>{member.name}</h3>
              <a href={`tel:${member.tel}`} className={styles.memberPhone}>
                {member.phone}
              </a>
              <div className={styles.links}>
                <a
                  href={member.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                  aria-label={`${member.name}'s Instagram`}
                >
                  <InstagramIcon />
                </a>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={member.emailUrl}
                  className={styles.linkBtn}
                  aria-label={`Email ${member.name}`}
                >
                  <MailIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
