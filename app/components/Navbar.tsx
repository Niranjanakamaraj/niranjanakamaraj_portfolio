import Image from "next/image";
import Link from "next/link";
import styles from "../Styling/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
          src="/logo.png"
          alt="logo Photo"
          width={60}
          height={60}
          className={styles.logoImage}
        />
        <span className={styles.logoText}>iranjana Kamaraj</span>
      </div>

      <div className={styles.navLinks}>
        <Link href="#home" className={styles.navLink}>Home</Link>
        <Link href="#skills" className={styles.navLink}>Skills</Link>
        <Link href="#hackathon" className={styles.navLink}>Hackathon</Link>
        <Link href="#projects" className={styles.navLink}>Projects</Link>
        <Link href="#experience" className={styles.navLink}>Experience</Link>
        <Link href="#contact" className={styles.navLink}>Contact</Link>
      </div>
    </nav>
  );
}