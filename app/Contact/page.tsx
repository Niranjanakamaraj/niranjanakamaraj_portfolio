"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../Styling/Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.contactSection}>
        <div className={styles.contactWrapper}>

          {/* LEFT – PROFILE IMAGE */}
          <div className={styles.contactImageBox}>
            <img
              src="/contact.jpg"
              alt="Profile"
              className={styles.contactImage}
            />
          </div>

          {/* RIGHT – TEXT + FORM + SOCIALS */}
          <div className={styles.contactInfo}>
            <h3 className={styles.contactName}>Niranjana K</h3>
            <p className={styles.contactMail}>niranjanakamaaraj03@gmail.com</p>

            <h4 className={styles.connectTitle}>LET’S CONNECT</h4>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Name" className={styles.inputField} />
              <input type="email" placeholder="Email" className={styles.inputField} />
              <textarea placeholder="Message" className={styles.inputField}></textarea>
              <button type="submit" className={styles.sendBtn}>Send &#9993;</button>
            </form>

            <div className={styles.socialIcons}>
              <img src="/linkedin.png" alt="LinkedIn" />
              <img src="/github.png" alt="GitHub" />
              <img src="/email.png" alt="Email" />
            </div>

            <button className={styles.downloadBtn}>Download Resume</button>
          </div>

        </div>
      </section>
    </main>
  );
}