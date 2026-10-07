import styles from "./page.module.css";
import Navbar from "../Navbar";

const images = [
  { id: 1, src: "/DSC00006.JPG", category: "SPORTS", title: "Action Shot", desc: "Shaurya Highlights" },
  { id: 2, src: "/C0011T01.JPG", category: "EVENTS", title: "In The Moment", desc: "Capturing the spirit" },
  { id: 3, src: "/C0138T01.JPG", category: "SPORTS", title: "Game Time", desc: "Fierce competition" },
  { id: 4, src: "/DSC00114.JPG", category: "CULTURE", title: "Event Night", desc: "Unforgettable memories" },
  { id: 5, src: "/DSC00089.JPG", category: "SPORTS", title: "The Big Match", desc: "Pushing limits" },
  { id: 6, src: "/DSC00103.JPG", category: "EVENTS", title: "Team Spirit", desc: "United we stand" },
  { id: 7, src: "/C0046T01.JPG", category: "SPORTS", title: "Victory", desc: "Celebrating success" },
  { id: 8, src: "/DSC00122.JPG", category: "CULTURE", title: "Closing Ceremony", desc: "The voyage continues" },
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
                  
                  <div className={styles.hoverContent}>
                    <span className={styles.categoryBadge}>{img.category}</span>
                    <h3 className={styles.cardTitle}>{img.title}</h3>
                    <p className={styles.cardDesc}>{img.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
