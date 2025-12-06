"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../Styling/Home.module.css";
export default function Home() {
  return (
    <main id="home" className={styles.main}>
    <Navbar />
    <section className={styles.contactSection}>

  <div className={styles.contactWrapper}>

    {/* LEFT – PROFILE IMAGE */}
    <div className={styles.contactImageBox}>
      <img
        src="/mnt/data/a953c0dd-5e61-4e42-afc6-7c02eaa89f84.png"
        className={styles.contactImage}
      />
    </div>

    {/* RIGHT – TEXT + SOCIALS + RESUME */}
    <div className={styles.contactInfo}>
      <h2 className={styles.contactTitle}>Reach out</h2>

      <h3 className={styles.contactName}>Niranjana K</h3>
      <p className={styles.contactMail}>niranjanakamaaraj03@gmail.com</p>

      <div className={styles.resumeBox}>
        <img src="/resume-icon.png" className={styles.resumeIcon} />
        <a className={styles.resumeText}>Download<br />Resume</a>
      </div>

      <div className={styles.socialBox}>
        <p className={styles.socialTitle}>LET’S CONNECT</p>

        <div className={styles.socialIcons}>
          <img src="/linkedin.png" className={styles.socialIcon} />
          <img src="/github.png" className={styles.socialIcon} />
          <img src="/x.png" className={styles.socialIcon} />
        </div>
      </div>

    </div>

  </div>
</section>
</main>
  );
}