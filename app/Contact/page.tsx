"use client";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../Styling/Contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
   const form = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_61va293",         // your EmailJS service ID
        "template_cl3zwun",        // your EmailJS template ID
        form.current!,
        "AKz1rwebR7GOZUsgM"     // your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };
  
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
            <h1 className={styles.title}>Let's Connect</h1>
            <h3 className={styles.contactName}>Niranjana K</h3>
            <p className={styles.contactMail}>niranjanakamaaraj03@gmail.com</p>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
  Name<input type="text" name="name" className={styles.inputField} />
  Email<input type="email" name="email" className={styles.inputField} />
  Message<textarea name="message" className={styles.inputField}></textarea>
  <button type="submit" className={styles.sendBtn}>Send &#9993;</button>
</form>
            <div className={styles.socialIcons}>
  <a
    href="https://www.linkedin.com/in/niranjanakamaraj/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <img src="/linkedin.png" alt="LinkedIn" />
  </a>

  <a
    href="https://github.com/Niranjanakamaraj"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <img src="/github.png" alt="GitHub" />
  </a>

  <a
    href="mailto:niranjanakamaraj03@gmail.com"
    aria-label="Email"
  >
    <img src="/email.png" alt="Email" />
  </a>

            <a
  href="/K_Niranjana_resume.pdf"
  download="K_Niranjana_resume.pdf"
  className={styles.downloadBtn}
>
  Download Resume
</a>       
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}