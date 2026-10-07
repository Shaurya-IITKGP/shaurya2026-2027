"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import styles from "./page.module.css";

type Sport = {
  name: string;
  category: string;
  image: string;
  description: string;
};

const sportImageBase = "/events/";

const sports: Sport[] = [
  {
    name: "Cricket",
    category: "Team sport",
    image: `${sportImageBase}cricket.jpg`,
    description:
      "Build an innings, own the pressure, and play every ball with intent.",
  },
  {
    name: "Football",
    category: "Team sport",
    image: `${sportImageBase}football.jpg`,
    description:
      "Find space, move as one, and turn every attack into a statement.",
  },
  {
    name: "Basketball",
    category: "Team sport",
    image: `${sportImageBase}basketball.jpg`,
    description:
      "Fast breaks, sharp handles, and the final possession under pressure.",
  },
  {
    name: "Table Tennis",
    category: "Racket sport",
    image: `${sportImageBase}tt.jpg`,
    description: "Read the spin, control the rally, and take the point early.",
  },
  {
    name: "Volleyball",
    category: "Team sport",
    image: `${sportImageBase}volleyball.jpg`,
    description:
      "Serve with purpose, defend together, and finish above the net.",
  },
  {
    name: "Athletics",
    category: "Track and field",
    image: `${sportImageBase}athletics.jpg`,
    description:
      "Speed, strength, and endurance measured one decisive effort at a time.",
  },
  {
    name: "Badminton",
    category: "Racket sport",
    image: `${sportImageBase}badminton.jpg`,
    description:
      "Own the court with quick feet, clean timing, and fearless returns.",
  },
  {
    name: "Lawn Tennis",
    category: "Racket sport",
    image: `${sportImageBase}lawn-tennis.jpg`,
    description:
      "Construct the point patiently, then finish it with conviction.",
  },
  {
    name: "Powerlifting",
    category: "Strength sport",
    image: `${sportImageBase}powerlifting.jpg`,
    description:
      "Technique meets nerve in a test of control, power, and resolve.",
  },
  {
    name: "Chess",
    category: "Mind sport",
    image: `${sportImageBase}chess.jpg`,
    description:
      "See the board differently, calculate further, and make the move count.",
  },
  {
    name: "Kabaddi",
    category: "Team sport",
    image: `${sportImageBase}kabaddi.jpg`,
    description:
      "Raid with courage, defend as a unit, and never give the line away.",
  },
  {
    name: "Kho Kho",
    category: "Team sport",
    image: `${sportImageBase}kho-kho.jpg`,
    description:
      "Anticipate the turn, chase with discipline, and change the game in a breath.",
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
          { label: "Matches", href: "/#matches" },
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

        <article className={styles.detailPanel} aria-live="polite">
          <div className={styles.detailLabel}>
            <span className={styles.eyebrow}>SELECTED SPORT</span>
            <span className={styles.detailNumber}>
              {String(sports.indexOf(activeSport) + 1).padStart(2, "0")} / 12
            </span>
          </div>
          <div className={styles.detailBody}>
            <div>
              <p className={styles.detailCategory}>{activeSport.category}</p>
              <h2>{activeSport.name}</h2>
            </div>
            <p className={styles.detailDescription}>
              {activeSport.description}
            </p>
          </div>
          <div className={styles.detailFooter}>
            <span>SHAURYA 2026</span>
            <span>
              Schedule and registration details will be announced soon.
            </span>
          </div>
        </article>
      </section>

      <footer className={styles.footer}>
        <span>Shaurya 2026</span>
        <span>IIT Kharagpur</span>
      </footer>
    </main>
  );
}
