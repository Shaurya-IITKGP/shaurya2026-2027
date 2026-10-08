import styles from "./Navbar.module.css";

interface NavbarProps {
  links?: Array<{ label: string; href: string }>;
}

const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Matches", href: "/matches" },
  { label: "Teams", href: "/teams" },
];

export default function Navbar({ links = defaultLinks }: NavbarProps) {
  // Split links into 3 on the left of logo, 3 on the right of logo
  const leftLinks = links.slice(0, 3);
  const rightLinks = links.slice(3, 6);

  return (
    <header className={styles.headerFixed}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.navContainer}>
          <div className={styles.leftGroup}>
            {leftLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navBtn}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.logoWrap}>
            <a href={links[0]?.href ?? "/"} className={styles.logoLink}>
              <img src="/logo.png" alt="Shaurya logo" className={styles.logo} />
            </a>
          </div>

          <div className={styles.rightGroup}>
            {rightLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navBtn}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
