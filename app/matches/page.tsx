"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./page.module.css";

/* ──────────────────────────────────────────────
   DATA — parsed from the CSV schedule
─────────────────────────────────────────────── */
type DayKey = "day0" | "day1" | "day2";

interface ScheduleEvent {
  sport: string;
  time: string;
  venue: string;
  tag?: "highlight" | "ceremony";
}

const schedule: Record<DayKey, ScheduleEvent[]> = {
  day0: [
    { sport: "Badminton", time: "6:00 PM – 9:00 PM", venue: "TSG Badminton Courts" },
    { sport: "Basketball", time: "10:00 AM – 1:00 AM & 5:30 PM – 8:00 PM", venue: "LLR Basketball Courts" },
    { sport: "Cricket", time: "9:00 AM – 9:00 PM", venue: "Tata Complex" },
    { sport: "Football", time: "9:00 AM – 1:30 PM & 3:30 PM – 9:30 PM", venue: "Tata Complex" },
    { sport: "Volleyball", time: "10:00 AM – 9:00 PM", venue: "Panloop Volleyball Court" },
    { sport: "Esports", time: "5:00 PM – 12:00 AM", venue: "Vikramshila" },
    { sport: "Opening Ceremony", time: "6:00 PM – 7:40 PM", venue: "Netaji Auditorium", tag: "ceremony" },
  ],
  day1: [
    { sport: "Basketball", time: "10:00 AM – 1:00 PM & 4:00 PM – 6:30 PM", venue: "LLR Basketball Courts" },
    { sport: "Cricket", time: "9:00 AM – 9:00 PM", venue: "Tata Complex" },
    { sport: "Football", time: "9:00 AM – 1:30 PM & 2:00 PM – 9:30 PM", venue: "Tata Complex" },
    { sport: "Athletics", time: "Full Day", venue: "Jnan Ghosh Stadium" },
    { sport: "Volleyball", time: "9:00 AM – 1:00 PM & 4:00 PM – 8:00 PM", venue: "Panloop Volleyball Court" },
    { sport: "Lawn Tennis", time: "9:00 AM – 12:00 PM & 4:00 PM – 7:00 PM", venue: "TSG Tennis Court" },
    { sport: "Esports", time: "5:00 PM – 12:00 AM", venue: "Gymkhana" },
    { sport: "Table Tennis", time: "10:00 AM – 12:00 PM & 5:00 PM – 8:00 PM", venue: "Gymkhana" },
    { sport: "Chess", time: "10:30 AM – 12:45 PM & 3:00 PM – 6:30 PM", venue: "Vikramshila Foyer" },
    { sport: "Badminton", time: "11:00 AM – 12:30 PM & 3:00 PM – 6:30 PM", venue: "TSG Badminton Courts" },
    { sport: "Kabaddi", time: "3:00 PM – 6:00 PM", venue: "LLR Volleyball Court" },
    { sport: "Arena & Funzone", time: "4:00 PM – 1:00 AM", venue: "TSG Foyer / Shaurya Arena", tag: "highlight" },
  ],
  day2: [
    { sport: "Athletics", time: "8:00 AM – 10:30 AM & 2:45 PM – 4:00 PM", venue: "Jnan Ghosh Stadium" },
    { sport: "Badminton", time: "10:00 AM – 11:30 AM & 2:00 PM – 3:30 PM", venue: "TSG Badminton Courts" },
    { sport: "Basketball", time: "8:00 AM – 10:00 AM & 3:00 PM – 5:00 PM", venue: "LLR Basketball Courts" },
    { sport: "Cricket", time: "8:30 AM – 12:30 PM & 2:00 PM – 6:00 PM", venue: "Tata Complex" },
    { sport: "Football", time: "9:00 AM – 12:00 PM & 2:00 PM – 5:00 PM", venue: "Tata Complex" },
    { sport: "Kabaddi", time: "9:30 AM – 12:30 PM & 2:00 PM – 5:00 PM", venue: "LLR Volleyball Court" },
    { sport: "Lawn Tennis", time: "9:00 AM – 12:00 PM & 2:00 PM – 5:00 PM", venue: "TSG Tennis Court" },
    { sport: "Table Tennis", time: "11:00 AM – 12:15 PM & 2:00 PM – 4:30 PM", venue: "Gymkhana" },
    { sport: "Squash", time: "9:30 AM – 12:00 PM & 2:30 PM – 4:30 PM", venue: "Gymkhana Squash Court" },
    { sport: "Volleyball", time: "9:00 AM – 12:00 PM & 2:00 PM – 5:00 PM", venue: "Panloop" },
    { sport: "Pickleball", time: "9:00 AM – 12:00 PM & 2:00 PM – 6:00 PM", venue: "TSG Tennis Court" },
    { sport: "Weightlifting & Powerlifting", time: "Weigh-in 7:30–9:00 AM | 11:00 AM – 4:00 PM", venue: "Gymkhana" },
    { sport: "Mr. Shaurya", time: "5:00 PM – 6:00 PM", venue: "Gymkhana", tag: "highlight" },
    { sport: "College Campus Tour Finals", time: "9:00 AM – 12:30 PM", venue: "Vikramshila" },
    { sport: "Campus Clash India Finals", time: "1:00 PM Onwards", venue: "Vikramshila" },
    { sport: "Golf", time: "4:00 PM – 1:00 AM", venue: "Arena" },
    { sport: "Arena & Funzone", time: "4:00 PM – 1:00 AM", venue: "TSG Foyer / Shaurya Arena", tag: "highlight" },
    { sport: "Closing Ceremony", time: "7:00 PM – 9:00 PM", venue: "Jnan Ghosh Stadium", tag: "ceremony" },
  ],
};

const dayLabels: Record<DayKey, { label: string; subtitle: string; date: string }> = {
  day0: { label: "Day 0", subtitle: "Arrival & Opening", date: "Oct 9, 2026" },
  day1: { label: "Day 1", subtitle: "The Battle Begins", date: "Oct 10, 2026" },
  day2: { label: "Day 2", subtitle: "Grand Finale", date: "Oct 11, 2026" },
};

export default function MatchesPage() {
  const [activeDay, setActiveDay] = useState<DayKey>("day0");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const days: DayKey[] = ["day0", "day1", "day2"];
  const events = schedule[activeDay];

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

      {/* ── Background ── */}
      <div className={styles.backdrop} aria-hidden="true" />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroHeader}>
          <span className={styles.eyebrow}>SHAURYA 2026 / MATCH TIMELINE</span>
          <h1>Matches Timeline</h1>
          <p className={styles.heroCopy}>
            Explore the chronological timeline of events, matches, and ceremonies across all 12 arenas of Shaurya 2026.
          </p>
        </div>
      </section>

      {/* ── Schedule Timeline Section ── */}
      <section className={styles.scheduleSection}>
        {/* Day Tabs */}
        <div className={styles.tabRow} role="tablist" aria-label="Select day">
          {days.map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={activeDay === d}
              className={`${styles.tab} ${activeDay === d ? styles.tabActive : ""}`}
              onClick={() => {
                setActiveDay(d);
                setHoveredIndex(0);
              }}
            >
              <div className={styles.tabHeader}>
                <span className={styles.tabLabel}>{dayLabels[d].label}</span>
                <span className={styles.tabDate}>{dayLabels[d].date}</span>
              </div>
              <span className={styles.tabSub}>{dayLabels[d].subtitle}</span>
            </button>
          ))}
        </div>

        {/* ── Timeline Display ── */}
        <div className={styles.timelineWrapper}>
          {/* Continuous Vertical Timeline Line */}
          <div className={styles.timelineSpine}>
            <div
              className={styles.timelineSpineActive}
              style={{
                height: `${
                  hoveredIndex !== null && events.length > 1
                    ? ((hoveredIndex + 1) / events.length) * 100
                    : 0
                }%`,
              }}
            />
          </div>

          {/* List of Timeline Rows */}
          <div className={styles.timelineList}>
            {events.map((ev, i) => {
              const formattedIndex = String(i + 1).padStart(2, "0");
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={`${ev.sport}-${i}`}
                  className={`${styles.timelineRow} ${isHovered ? styles.timelineRowActive : ""}`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  style={{ "--item-index": i } as React.CSSProperties}
                >
                  {/* Node on Vertical Line */}
                  <div className={styles.nodeWrapper}>
                    <div className={`${styles.nodeCircle} ${isHovered ? styles.nodeCircleActive : ""}`}>
                      <div className={styles.nodeDot} />
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <article
                    className={`${styles.card} ${
                      ev.tag === "ceremony"
                        ? styles.cardCeremony
                        : ev.tag === "highlight"
                        ? styles.cardHighlight
                        : ""
                    }`}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.numberPrefix}>{formattedIndex}</span>
                      <div className={styles.cardTitleWrap}>
                        <h3 className={styles.cardTitle}>{ev.sport}</h3>
                      </div>

                      {ev.tag && (
                        <span
                          className={`${styles.badge} ${
                            ev.tag === "ceremony" ? styles.badgeCeremony : styles.badgeHighlight
                          }`}
                        >
                          {ev.tag === "ceremony" ? "CEREMONY" : "SPECIAL"}
                        </span>
                      )}
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.metaGroup}>
                        <div className={styles.metaItem}>
                          <svg
                            className={styles.metaIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 3" />
                          </svg>
                          <span className={styles.metaValue}>{ev.time}</span>
                        </div>

                        <div className={styles.metaItem}>
                          <svg
                            className={styles.metaIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
                            <circle cx="12" cy="9.5" r="2.5" />
                          </svg>
                          <span className={styles.metaValue}>{ev.venue}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
