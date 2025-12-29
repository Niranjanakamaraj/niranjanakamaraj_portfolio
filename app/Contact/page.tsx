"use client";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../Styling/Contact.module.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_61va293",
        "template_cl3zwun",
        form.current!,
        "AKz1rwebR7GOZUsgM"
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.contactSection}>
        <div className={styles.contactWrapper}>
          {/* LEFT – PROFILE IMAGE */}
          <motion.div
            className={styles.contactImageBox}
            initial="hidden"
            viewport={{ once: true }}
          >
            <img
              src="/contact.jpg"
              alt="Profile"
              className={styles.contactImage}
            />
          </motion.div>

          {/* RIGHT – TEXT + FORM + SOCIALS */}
          <motion.div
            className={styles.contactInfo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.linkedin.com/in/niranjanakamaraj/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
              whileHover={{ scale: 1.05, color: "#0A66C2" }}
              transition={{ duration: 0.2 }}
            >
              <h1 className={styles.title}>Let's Connect</h1>
            </motion.a>

            <h3 className={styles.contactName}>Niranjana K</h3>
            <p className={styles.contactMail}>niranjanakamaaraj03@gmail.com</p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className={styles.contactForm}
            >
              Name
              <input type="text" name="name" className={styles.inputField} />
              Email
              <input
                type="email"
                name="email"
                className={styles.inputField}
              />
              Message
              <textarea
                name="message"
                className={styles.inputField}
              ></textarea>

              <motion.button
                type="submit"
                className={styles.sendBtn}
                whileHover={{ scale: 1.05}}
                transition={{ duration: 0.2 }}
              >
                Send &#9993;
              </motion.button>
            </form>

            <div className={styles.socialIcons}>
              {[
                { href: "https://www.linkedin.com/in/niranjanakamaraj/", src: "/linkedin.png", alt: "LinkedIn" },
                { href: "https://github.com/Niranjanakamaraj", src: "/github.png", alt: "GitHub" },
                { href: "mailto:niranjanakamaraj03@gmail.com", src: "/email.png", alt: "Email" },
              ].map((icon, i) => (
                <motion.a
                  key={i}
                  href={icon.href}
                  target={icon.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={icon.src} alt={icon.alt} />
                </motion.a>
              ))}

              <motion.a
                href="/K_Niranjana_resume.pdf"
                download="K_Niranjana_resume.pdf"
                className={styles.downloadBtn}
                whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.2 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}