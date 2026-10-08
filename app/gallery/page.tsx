import styles from "./page.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const images = [
  // Original Photos
  { id: 1, src: "/gallery/DSC00006.JPG", category: "SPORTS", title: "Action Shot", desc: "Shaurya Highlights" },
  { id: 2, src: "/gallery/C0011T01.JPG", category: "EVENTS", title: "In The Moment", desc: "Capturing the spirit" },
  { id: 3, src: "/gallery/C0138T01.JPG", category: "SPORTS", title: "Game Time", desc: "Fierce competition" },
  { id: 4, src: "/gallery/DSC00114.JPG", category: "CULTURE", title: "Event Night", desc: "Unforgettable memories" },
  { id: 5, src: "/gallery/DSC00089.JPG", category: "SPORTS", title: "The Big Match", desc: "Pushing limits" },
  { id: 6, src: "/gallery/DSC00103.JPG", category: "EVENTS", title: "Team Spirit", desc: "United we stand" },
  { id: 7, src: "/gallery/C0046T01.JPG", category: "SPORTS", title: "Victory", desc: "Celebrating success" },
  { id: 8, src: "/gallery/DSC00122.JPG", category: "CULTURE", title: "Closing Ceremony", desc: "The voyage continues" },
  // Newly Uploaded Photos
  { id: 9, src: "/gallery/C0016T01.JPG", category: "SPORTS", title: "Fierce Agility", desc: "Dominating the field" },
  { id: 10, src: "/gallery/C0032T01.JPG", category: "CULTURE", title: "Cultural Elegance", desc: "A beautiful performance" },
  { id: 11, src: "/gallery/DSC00098.JPG", category: "EVENTS", title: "Crowd Roar", desc: "The energy goes wild" },
  { id: 12, src: "/gallery/DSC00107.JPG", category: "SPORTS", title: "Winning Strike", desc: "The ultimate goal" },
  { id: 13, src: "/gallery/DSC00111.JPG", category: "CULTURE", title: "Rhythm & Soul", desc: "Lost in the music" },
  { id: 14, src: "/gallery/DSC00134.JPG", category: "EVENTS", title: "Night Magic", desc: "Sparkling festivities" },
  { id: 15, src: "/gallery/DSC09997.JPG", category: "SPORTS", title: "Unstoppable", desc: "Relentless energy" },
  // Final 3 Added Photos
  { id: 16, src: "/gallery/C0207T01.JPG", category: "EVENTS", title: "Memories Created", desc: "Bonds of a lifetime" },
  { id: 17, src: "/gallery/C0210T01.JPG", category: "SPORTS", title: "Peak Condition", desc: "Beyond the limits" },
  { id: 18, src: "/gallery/C0246T01.JPG", category: "CULTURE", title: "Grand Finale", desc: "A night to remember" },
];

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Animated background overlay */}
        <div className={styles.bgOverlay}></div>

        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>Event Gallery</h1>
            <p className={styles.subtitle}>Relive the moments that made SHAURYA.</p>
          </div>

          <div className={styles.galleryGrid}>
            {images.map((img) => (
              <div key={img.id} className={styles.imageCard}>
                <div className={styles.imageWrapper}>
                  <img src={img.src} alt={img.title} className={styles.galleryImage} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}