import styles from "./page.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const networkPartners = [
  { name: "EaseMyTrip", role: "Travel Partner", logo: "/sponsors/EaseMyTrip%20Logo.png", whiteLogo: true },
  { name: "JioSaavn", role: "Music Streaming Partner", logo: "/sponsors/Jio%20Saavn%20Logo.png", whiteLogo: true },
  { name: "Cubelelo", role: "Cubing Partner", logo: "/sponsors/cubelelo-logo-9_v%3D1791202587.webp" },
  { name: "Unstop", role: "Campus Ambassador Partner", logo: "/sponsors/unstop.jpeg", whiteLogo: true },
  { name: "BK Diagnostics", role: "Medical Partner", logo: "/sponsors/BKdiagnostics%20logo.jpeg" },
  { name: "The Belgian Waffle Co.", role: "Food Partner", logo: "/sponsors/The_Belgian_Waffle_Co_id1EvX9jp7_0.png" },
  { name: "Taco Bell", role: "Food Partner", logo: "/sponsors/taco%20bell.png" },
  { name: "Frooti", role: "Beverage Partner", logo: "/sponsors/frooti.png" },
];

const mediaPartners = [
  { name: "The Weekly Mail", logo: "/sponsors/The%20Weekly%20Mail.jpg.jpeg", whiteLogo: true },
  { name: "Academic Insights", logo: "/sponsors/Acadamic%20insights.jpg.jpeg", whiteLogo: true },
  { name: "Career Beacon", logo: "/sponsors/Career%20Beacon.jpg.jpeg", whiteLogo: true },
  { name: "PK Media Group", logo: "/sponsors/Pk%20Media%20group%20Logo%20(1).jpg.jpeg", whiteLogo: true },
  { name: "TT Edugraph", logo: "/sponsors/TT%20Edugraph.png" },
  { name: "Storify News", logo: "/sponsors/Storify%20News.png" },
  { name: "K News", logo: "/sponsors/K%20news.jpg.jpeg" },
  { name: "Navbharat Times", logo: "/sponsors/Navbharat_Times.webp", whiteLogo: true },
  { name: "Jagran Josh", logo: "/sponsors/jagran-josh-logo-freelogovectors.net_.png", whiteLogo: true },
  { name: "Knowafest", logo: "/sponsors/Knowafest.png" },
];

const sponsors = [
  { id: 1,  tier: "TITLE PARTNER",       name: "JSL",             logo: "/sponsors/JSL-White.jpeg",                        top: "25%",  left: "12%",   popDown: true  },
  { id: 2,  tier: "CO-TITLE PARTNER",    name: "Shyam Steel",     logo: "/sponsors/shyam%20steel.png",                    top: "15%",  left: "44%",   popDown: true  },
  { id: 3,  tier: "GOLD PARTNER",        name: "Edufabrica",      logo: "/sponsors/Edufabrica%20logo.png",                 top: "17%",  left: "71%",   popDown: true  },
  { id: 4,  tier: "STRATEGIC PARTNER",   name: "GAIL",            logo: "/sponsors/GAIL%20Logo%20100%20pc%20yellow.png",  top: "25%",  left: "89%",   popDown: true  },
  { id: 5,  tier: "ASSOCIATE PARTNER",   name: "Sri Mahavir",     logo: "/sponsors/srimahavir.jpeg",                      top: "53%",  left: "19%",   popDown: false },
  { id: 6,  tier: "EDUCATIONAL PARTNER", name: "Top One Percent", logo: "/sponsors/Toponepercentlogo.png",                top: "57%",  left: "74%",   popDown: false },
  { id: 7,  tier: "GAMING PARTNER",      name: "Krafton",         logo: "/sponsors/BGMI_New%20logo_B%26W%26C-02.png",     top: "72%",  left: "39%",   popDown: false },
  { id: 8,  tier: "TECHNOLOGY PARTNER",  name: "Arcade X",        logo: "/sponsors/arcade%20x%20logo.jpeg",               top: "78%",  left: "84.5%", popDown: false },
  { id: 9,  tier: "CHESS PARTNER",       name: "Paramount Chess", logo: "/sponsors/PARAMOUNT_CHESS_LOGO.webp",            top: "75%",  left: "13%",   popDown: false },
  { id: 10, tier: "CHESS PARTNER",       name: "Chess Cafe",      logo: "/sponsors/chess_cafe_india_logo.jpeg",           top: "85%",  left: "22%",   popDown: false },
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
          <div className={styles.mapImageWrap}>
            <img src="/sponsors/spons.jpeg" alt="Sponsors Treasure Map" className={styles.mapImage} />
          </div>

          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={styles.sponsorMarker}
              style={{ top: sponsor.top, left: sponsor.left }}
            >
              <div className={styles.crossMark}>X</div>

              <div
                className={`${styles.parchmentCard} ${sponsor.popDown ? styles.parchmentCardDown : ""}`}
              >
                <div className={styles.cardLogo}>
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} className={styles.cardLogoImage} />
                </div>
                <div className={styles.cardTier}>{sponsor.tier}</div>
                <div className={styles.cardName}>{sponsor.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Standard Information Grid */}
        <div className={styles.standardList}>
          <h2 className={styles.listHeading}>OUR VOYAGE PARTNERS</h2>
          
          <div className={styles.tierSection}>
            <h3 className={styles.tierTitle}>TITLE PARTNER</h3>
            <div className={styles.tierGridMain}>
              <div className={`${styles.gridLogo} ${styles.jslLogo}`}>
                <img src="/sponsors/JSL-White.jpeg" alt="JSL logo" className={styles.logoImage} />
              </div>
            </div>
          </div>

          <div className={styles.partnerRow}>
            <div className={styles.tierSection}>
              <h3 className={styles.tierTitle}>CO-TITLE PARTNER</h3>
              <div className={styles.tierGridMain}>
                <div className={styles.gridLogo}>
                  <img src="/sponsors/shyam%20steel.png" alt="Shyam Steel logo" className={styles.logoImage} />
                </div>
              </div>
            </div>

            <div className={styles.tierSection}>
              <h3 className={styles.tierTitle}>GOLD PARTNER</h3>
              <div className={styles.tierGridMain}>
                <div className={styles.gridLogo}>
                  <img src="/sponsors/Edufabrica%20logo.png" alt="Edufabrica logo" className={styles.logoImage} />
                </div>
              </div>
            </div>

            <div className={styles.tierSection}>
              <h3 className={styles.tierTitle}>STRATEGIC PARTNER</h3>
              <div className={styles.tierGridMain}>
                <div className={`${styles.gridLogo} ${styles.gailLogo}`}>
                  <div className={styles.gailImageFrame}>
                    <img src="/sponsors/GAIL%20Logo%20100%20pc%20yellow.png" alt="GAIL logo" className={styles.gailImage} />
                  </div>
                  <span className={styles.gailName}>GAIL (India) Limited</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.tierSection}>
            <div className={styles.tierGridSmall}>
              <div className={`${styles.gridLogo} ${styles.associateCard}`}>
                <img src="/sponsors/srimahavir.jpeg" alt="Sri Mahavir logo" className={styles.associateLogo} />
                <span className={styles.associateName}>Sri Mahavir</span>
                <span className={styles.associateRole}>Associate Partner</span>
              </div>
              <div className={`${styles.gridLogo} ${styles.associateCard}`}>
                <img src="/sponsors/Toponepercentlogo.png" alt="Top One Percent logo" className={styles.associateLogo} />
                <span className={styles.associateName}>Top One Percent</span>
                <span className={styles.associateRole}>Educational Partner</span>
              </div>
              <div className={`${styles.gridLogo} ${styles.associateCard}`}>
                <img src="/sponsors/BGMI_New%20logo_B%26W%26C-02.png" alt="Krafton BGMI logo" className={`${styles.associateLogo} ${styles.bgmiLogo}`} />
                <span className={styles.associateName}>Krafton</span>
                <span className={styles.associateRole}>Gaming Partner</span>
              </div>
              <div className={`${styles.gridLogo} ${styles.associateCard}`}>
                <img src="/sponsors/arcade%20x%20logo.jpeg" alt="Arcade X logo" className={styles.associateLogo} />
                <span className={styles.associateName}>Arcade X</span>
                <span className={styles.associateRole}>Technology Partner</span>
              </div>
              <div className={`${styles.gridLogo} ${styles.associateCard}`}>
                <img src="/sponsors/PARAMOUNT_CHESS_LOGO.webp" alt="Paramount Chess logo" className={styles.associateLogo} />
                <span className={styles.associateName}>Paramount Chess</span>
                <span className={styles.associateRole}>Chess Partner</span>
              </div>
              <div className={`${styles.gridLogo} ${styles.associateCard}`}>
                <img src="/sponsors/chess_cafe_india_logo.jpeg" alt="Chess Cafe logo" className={styles.associateLogo} />
                <span className={styles.associateName}>Chess Cafe</span>
                <span className={styles.associateRole}>Chess Partner</span>
              </div>
            </div>

            <section className={styles.networkSection} aria-labelledby="partner-network-heading">
              <h2 id="partner-network-heading" className={styles.sectionHeading}>PARTNER NETWORK</h2>
              <div className={styles.networkGrid}>
                {networkPartners.map((partner) => (
                  <div className={`${styles.gridLogo} ${styles.networkCard}`} key={partner.name}>
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={`${styles.networkLogo} ${partner.whiteLogo ? styles.whiteLogo : ""}`}
                    />
                    <span className={styles.networkName}>{partner.name}</span>
                    <span className={styles.networkRole}>{partner.role}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.networkSection} aria-labelledby="media-partners-heading">
              <h2 id="media-partners-heading" className={styles.sectionHeading}>MEDIA PARTNERS</h2>
              <div className={`${styles.networkGrid} ${styles.mediaGrid}`}>
                {mediaPartners.map((partner) => (
                  <div className={`${styles.gridLogo} ${styles.networkCard}`} key={partner.name}>
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={`${styles.networkLogo} ${partner.whiteLogo ? styles.whiteLogo : ""}`}
                    />
                    <span className={styles.networkName}>{partner.name}</span>
                    <span className={styles.networkRole}>Media Partner</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}