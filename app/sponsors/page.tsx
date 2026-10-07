import styles from "./page.module.css";
import Navbar from "../Navbar";

const sponsors = [
  { id: 1, tier: "TITLE PARTNER", name: "Grand Port Inc.", top: "25%", left: "12%" },
  { id: 2, tier: "PRINCIPAL PARTNER", name: "Emerald Corp", top: "15%", left: "44%" },
  { id: 3, tier: "GOLD PARTNER", name: "Golden Shore Co.", top: "17%", left: "71%" },
  { id: 4, tier: "SPORTS PARTNER", name: "Athlete's Cove", top: "25%", left: "89%" },
  { id: 5, tier: "CULTURAL PARTNER", name: "Whisper Studios", top: "53%", left: "19%" },
  { id: 6, tier: "ASSOCIATE PARTNER", name: "Trading Post LLC", top: "57%", left: "74%" },
  { id: 7, tier: "MEDIA PARTNER", name: "Mystic Media", top: "72%", left: "39%" },
  { id: 8, tier: "BANKING PARTNER", name: "Silver Isle Bank", top: "78%", left: "84.5%" },
  { id: 9, tier: "TRAVEL PARTNER", name: "Voyage Travels", top: "75%", left: "13%" },
  { id: 10, tier: "BEVERAGE PARTNER", name: "Ocean Drops", top: "85%", left: "22%" },
];

export default function Sponsors() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Sponsors</h1>
          <p className={styles.subtitle}>The legends funding our voyage.</p>
          <span className={styles.chartTitle}>— CHART OF THE ALLIED FLEET —</span>
        </div>

        <div className={styles.mapContainer}>
          <div className={styles.mapDarkenOverlay}></div>
          <img src="/spons.jpeg" alt="Sponsors Treasure Map" className={styles.mapImage} />
          
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id} 
              className={styles.sponsorMarker} 
              style={{ top: sponsor.top, left: sponsor.left }}
            >
              <div className={styles.crossMark}>X</div>
              
              <div className={styles.parchmentCard}>
                <div className={styles.cardLogo}>LOGO</div>
                <div className={styles.cardTier}>{sponsor.tier}</div>
                <div className={styles.cardName}>{sponsor.name}</div>
                <div className={styles.cardAction}>DISCOVER ↗</div>
              </div>
            </div>
          ))}
        </div>

        {/* Standard Information Grid */}
        <div className={styles.standardList}>
          <h2 className={styles.listHeading}>OUR VOYAGE PARTNERS</h2>
          
          <div className={styles.tierSection}>
            <h3 className={styles.tierTitle}>TITLE PARTNER</h3>
            <div className={styles.tierGridMain}><div className={styles.gridLogo}>LOGO</div></div>
          </div>

          <div className={styles.tierSection}>
            <h3 className={styles.tierTitle}>PRINCIPAL & GOLD PARTNERS</h3>
            <div className={styles.tierGridSecondary}>
              <div className={styles.gridLogo}>LOGO</div>
              <div className={styles.gridLogo}>LOGO</div>
              <div className={styles.gridLogo}>LOGO</div>
            </div>
          </div>
          
          <div className={styles.tierSection}>
            <h3 className={styles.tierTitle}>ASSOCIATE PARTNERS</h3>
            <div className={styles.tierGridSmall}>
              <div className={styles.gridLogo}>LOGO</div>
              <div className={styles.gridLogo}>LOGO</div>
              <div className={styles.gridLogo}>LOGO</div>
              <div className={styles.gridLogo}>LOGO</div>
              <div className={styles.gridLogo}>LOGO</div>
              <div className={styles.gridLogo}>LOGO</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}