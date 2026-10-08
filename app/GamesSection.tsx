"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./GamesSection.module.css";

interface Game {
  image: string;
  name: string;
  description: string;
}

const games: Game[] = [
  {
    image: "/games/cricket.png",
    name: "Cricket",
    description:
      "Experience the thrill of leather on willow as top university teams battle for glory in powerplay tournaments and T20 showdowns.",
  },
  {
    image: "/games/football.png",
    name: "Football",
    description:
      "Watch electrifying 11-a-side matches where strategy meets raw athleticism on the pitch under floodlights.",
  },
  {
    image: "/games/basketball.png",
    name: "Basketball",
    description:
      "Fast-paced court action with slam dunks, buzzer-beaters, and fierce inter-college rivalries that keep the crowd roaring.",
  },
  {
    image: "/games/athletics.png",
    name: "Athletics",
    description:
      "Sparks on the track and soaring bounds in the field as athletes push peak human endurance in sprints, relays, and field events.",
  },
  {
    image: "/games/badminton.png",
    name: "Badminton",
    description:
      "Lightning-fast smashes, deceptive drops, and intense rally duels on indoor courts in high-octane singles and doubles.",
  },
  {
    image: "/games/volleyball.png",
    name: "Volleyball",
    description:
      "High-flying spikes, rock-solid blocks, and desperate digs in relentless team battles above the net.",
  },
  {
    image: "/games/lawn-tennis.png",
    name: "Lawn Tennis",
    description:
      "Power serves, baseline rallies, and surgical precision on court as players battle set-by-set for championship glory.",
  },
  {
    image: "/games/table-tennis.jpg",
    name: "Table Tennis",
    description:
      "Rapid spin, split-second reflexes, and tactical counter-attacks on the ping pong tables.",
  },
  {
    image: "/games/chess.jpg",
    name: "Chess",
    description:
      "Grandmaster-level tactical duels, quiet tension, and grand strategic gambits on the 64 squares of the chessboard.",
  },
  {
    image: "/games/weightlifting.jpg",
    name: "Weightlifting",
    description:
      "Raw strength, mental fortitude, and explosive power as lifters conquer heavy barbells in snatch and clean & jerk disciplines.",
  },
];

export default function GamesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalGames = games.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalGames) % totalGames);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalGames);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalGames);
    }, 3500);

    return () => clearInterval(interval);
  }, [totalGames]);

  return (
    <section className={styles.gamesSection} id="games">
      <div className={styles.sectionHeader}>
        <h3 className={styles.yellowHeading}>OUR GAMES</h3>
        <h2 className={styles.sectionTitle}>Compete. Conquer. Celebrate.</h2>
      </div>

      <div className={styles.carouselTrack}>
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={handlePrev}
          aria-label="Previous game"
        >
          ‹
        </button>

        {games.map((game, idx) => {
          // Compute slot position (0: Left, 1: Center/Active, 2: Right)
          const position = (idx - activeIndex + 1 + totalGames) % totalGames;
          const isActive = position === 1;

          return (
            <div
              key={game.name}
              className={`${styles.gameCard} ${isActive ? styles.cardActive : ""}`}
              style={{ "--card-pos": position } as React.CSSProperties}
              onClick={() => setActiveIndex(idx)}
            >
              <div className={styles.cardImageWrap}>
                <img
                  src={game.image}
                  alt={game.name}
                  className={styles.cardImage}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className={styles.cardInfo}>
                <h4 className={styles.cardName}>{game.name}</h4>
                <p className={styles.cardDesc}>{game.description}</p>
              </div>
            </div>
          );
        })}

        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={handleNext}
          aria-label="Next game"
        >
          ›
        </button>
      </div>
    </section>
  );
}
