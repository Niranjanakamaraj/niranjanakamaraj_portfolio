"use client";
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
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/Projects" className={styles.navLink}>Projects</Link>
        <Link href="/Skills" className={styles.navLink}>Skills</Link>
        <Link href="/Experience" className={styles.navLink}>Experience</Link>
        <Link href="/Hackathons" className={styles.navLink}>Hackathon</Link>
        <Link href="/Contact" className={styles.navLink}>Contact</Link>
      </div>
    </nav>
  );
}