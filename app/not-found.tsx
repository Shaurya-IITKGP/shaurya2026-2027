import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./not-found.module.css";

export default function NotFound() {
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

      <section className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>OUT OF BOUNDS</span>
          <h1 className={styles.code}>404</h1>
          <h2 className={styles.title}>Match Point Lost!</h2>
          <p className={styles.description}>
            You&apos;ve strayed off the field into unchartered arena territory. The page you are looking for doesn&apos;t exist or has been moved.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryBtn}>
              Return Home
            </Link>
            <Link href="/matches" className={styles.secondaryBtn}>
              View Matches Timeline
            </Link>
            <Link href="/events" className={styles.secondaryBtn}>
              Browse Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
