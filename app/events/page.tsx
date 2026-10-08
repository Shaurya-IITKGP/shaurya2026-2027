"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./page.module.css";

type Sport = {
  name: string;
  category: string;
  image: string;
};

const sportImageBase = "/events/";

const sports: Sport[] = [
  {
    name: "Cricket",
    category: "Team sport",
    image: `${sportImageBase}cricket.jpg`,
  },
  {
    name: "Football",
    category: "Team sport",
    image: `${sportImageBase}football.jpg`,
  },
  {
    name: "Basketball",
    category: "Team sport",
    image: `${sportImageBase}basketball.jpg`,
  },
  {
    name: "Table Tennis",
    category: "Racket sport",
    image: `${sportImageBase}tt.jpg`,
  },
  {
    name: "Volleyball",
    category: "Team sport",
    image: `${sportImageBase}volleyball.jpg`,
  },
  {
    name: "Athletics",
    category: "Track and field",
    image: `${sportImageBase}athletics.jpg`,
  },
  {
    name: "Badminton",
    category: "Racket sport",
    image: `${sportImageBase}badminton.jpg`,
  },
  {
    name: "Lawn Tennis",
    category: "Racket sport",
    image: `${sportImageBase}lawn-tennis.jpg`,
  },
  {
    name: "Powerlifting",
    category: "Strength sport",
    image: `${sportImageBase}powerlifting.jpg`,
  },
  {
    name: "Chess",
    category: "Mind sport",
    image: `${sportImageBase}chess.jpg`,
  },
  {
    name: "Kabaddi",
    category: "Team sport",
    image: `${sportImageBase}kabaddi-2026.jpg`,
  },
  {
    name: "Kho Kho",
    category: "Team sport",
    image: `${sportImageBase}kho-kho-2026.jpg`,
  },
];

export default function EventsPage() {
  const [activeSport, setActiveSport] = useState(sports[0]);

  return (
    <main className={styles.page}>
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Gallery", href: "/gallery" },
          { label: "Sponsors", href: "/sponsors" },
          { label: "Matches", href: "/matches" },
          { label: "Teams", href: "/teams" },
        ]}
      />

      <div className={styles.backdrop} aria-hidden="true" />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>SHAURYA 2026 / 12 SPORTS</p>
        <h1>Events</h1>
        <p className={styles.heroCopy}>
          Twelve arenas. One festival. Find the sport that brings your edge to
          the surface.
        </p>
        <div className={styles.heroRule} aria-hidden="true" />
      </section>

      <section
        className={styles.directory}
        aria-labelledby="sport-directory-title"
      >
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}>THE LINEUP</p>
            <h2 id="sport-directory-title">Choose your arena</h2>
          </div>
          <p className={styles.sectionNote}>
            Select a sport to see its character and follow the 2026 programme.
          </p>
        </div>

        <div
          className={styles.sportGrid}
          role="listbox"
          aria-label="Sports at Shaurya"
        >
          {sports.map((sport, index) => {
            const isActive = activeSport.name === sport.name;

            return (
              <button
                className={`${styles.sportCard} ${isActive ? styles.sportCardActive : ""}`}
                key={sport.name}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => setActiveSport(sport)}
              >
                <span className={styles.cardIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.cardImageWrap}>
                  <Image
                    src={sport.image}
                    alt=""
                    fill
                    sizes="(max-width: 680px) 50vw, (max-width: 980px) 33vw, 25vw"
                    className={styles.cardImage}
                  />
                </span>
                <span className={styles.cardContent}>
                  <span className={styles.cardCategory}>{sport.category}</span>
                  <span className={styles.cardName}>{sport.name}</span>
                  <span className={styles.cardArrow} aria-hidden="true">
                    ↗
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}