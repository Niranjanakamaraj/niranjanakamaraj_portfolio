"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../Styling/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Hamburger Button for Mobile */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Navigation Links */}
      <div
        className={`${styles.navLinks} ${
          menuOpen ? styles.navActive : ""
        }`}
      >
        <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/Projects" className={styles.navLink} onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="/Skills" className={styles.navLink} onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link href="/Hackathons" className={styles.navLink} onClick={() => setMenuOpen(false)}>Hackathon</Link>
        <Link href="/Experience" className={styles.navLink} onClick={() => setMenuOpen(false)}>Experience</Link>
        <Link href="/Contact" className={styles.navLink} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}