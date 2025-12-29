"use client";
import Navbar from "../components/Navbar";
import styles from "../Styling/hackathon.module.css";
import { motion } from "framer-motion";

export default function Hackathon() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.03 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.03 },
  };

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.headerSection}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hackathon Journey
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where skills solve Real-World Problem
        </motion.p>
      </section>

      {/* JPMorgan Chase */}
      <motion.section
        className={`${styles.hackathonCard} ${styles.cardPrimary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeLeft}
        whileHover="hover"
      >
        <div className={styles.hackathonWrapper}>
          <motion.div
            className={styles.hackathonImageBox}
            variants={fadeLeft}
          >
            <img
              src="/jp.jpg"
              alt="JPMorgan Chase Hackathon"
              className={styles.hackathonImage}
            />
            <motion.a
              href="https://github.com/bengaluru25/Team-71"
              target="_blank"
              className={styles.gitButton}
              transition={{ duration: 0.2 }}
            >
              View GitHub
            </motion.a>
          </motion.div>
          <motion.div className={styles.hackathonInfo} variants={fadeRight}>
            <h3>JPMorgan Chase – Code for Good 2025</h3>
            <p><b>Built for:</b> Renu Kiran Foundation</p>
            <p><b>Team Size:</b> 6 · 24-hour Hackathon · July 2025</p>
            <h4>The Problem</h4>
            <p>
              Manual donor analysis and contribution forecasting were slow and error-prone, limiting fundraising efficiency.
            </p>
            <h4>The Solution</h4>
            <p>
              Developed and integrated an <b>ML-based donor prediction model</b>, automating contribution forecasts and reducing manual effort by ~70%.
            </p>
            <h4>Tech Stack</h4>
            <p>Python · Machine Learning · Data Analytics · React · APIs</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Shell AI Hackathon */}
      <motion.section
        className={`${styles.hackathonCard} ${styles.cardSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRight}
        whileHover="hover"
      >
        <div className={`${styles.hackathonWrapper} ${styles.reverse}`}>
          <motion.div
            className={styles.hackathonImageBox}
            variants={fadeRight}
          >
            <img
              src="/shell.png"
              alt="Shell AI Hackathon"
              className={styles.hackathonImage}
            />
            <motion.a
              href="https://github.com/Niranjanakamaraj/Shell-Shockers"
              target="_blank"
              className={styles.gitButton}
              transition={{ duration: 0.2 }}
            >
              View GitHub
            </motion.a>
          </motion.div>
          <motion.div className={styles.hackathonInfo} variants={fadeLeft}>
            <h3>Shell AI Hackathon 2025 – Pre-Finalist</h3>
            <p><b>Built for:</b> Energy Optimization Use Case</p>
            <p><b>Team Size:</b> 3 · August 2025</p>
            <h4>The Problem</h4>
            <p>Inefficient fuel belt usage causing energy loss and higher operational costs.</p>
            <h4>The Solution</h4>
            <p>
              Developed an <b>ML-driven fuel belt optimization model</b> with 85%+ accuracy and fully owned front-end for real-time visualization.
            </p>
            <h4>Tech Stack</h4>
            <p>Python · Machine Learning · React · JavaScript · Data Visualization</p>
          </motion.div>
        </div>
      </motion.section>

      {/* AI for Andhra Pradesh Police */}
      <motion.section
        className={`${styles.hackathonCard} ${styles.cardPrimary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeLeft}
      >
        <div className={styles.hackathonWrapper}>
          <motion.div
            className={styles.hackathonImageBox}
            variants={fadeLeft}
          >
            <img
              src="/ap.jpg"
              alt="AI for Andhra Pradesh Police Hackathon"
              className={styles.hackathonImage}
            />
            <motion.a
              href="https://github.com/Niranjanakamaraj/InvestigationAssistent"
              target="_blank"
              className={styles.gitButton}
              transition={{ duration: 0.2 }}
            >
              View GitHub
            </motion.a>
          </motion.div>
          <motion.div className={styles.hackathonInfo} variants={fadeRight}>
            <h3>AI for Andhra Pradesh Police Hackathon</h3>
            <p><b>Built for:</b> Andhra Pradesh Police Department</p>
            <p><b>Team Size:</b> 4 · 36-hour Hackathon · June 2025</p>
            <h4>The Problem</h4>
            <p>Law enforcement faced fragmented workflows and slow telecom data analysis.</p>
            <h4>The Solution</h4>
            <p>
              Built a <b>React-based full-stack investigation platform</b> enabling CPDR & IPDR analysis using tower dump data, improving efficiency by ~40%.
            </p>
            <h4>Tech Stack</h4>
            <p>React · JavaScript · Node.js · APIs · Telecom Data Processing</p>
          </motion.div>
        </div>
      </motion.section>

      {/* GDG On-Campus Solution Challenge */}
      <motion.section
        className={`${styles.hackathonCard} ${styles.cardSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRight}
        whileHover="hover"
      >
        <div className={`${styles.hackathonWrapper} ${styles.reverse}`}>
          <motion.div
            className={styles.hackathonImageBox}
            variants={fadeRight}
          >
            <img
              src="/gdg.png"
              alt="GDG On-Campus Solution Challenge"
              className={styles.hackathonImage}
            />
            <motion.a
              href="https://github.com/Niranjanakamaraj/gdgsolutionchallenge"
              target="_blank"
              className={styles.gitButton}
              transition={{ duration: 0.2 }}
            >
              View GitHub
            </motion.a>
          </motion.div>
          <motion.div className={styles.hackathonInfo} variants={fadeLeft}>
            <h3>GDG On-Campus Solution Challenge 2025</h3>
            <p><b>Built for:</b> AI-driven Healthcare Research</p>
            <p><b>Team Size:</b> 4 · January 2025</p>
            <h4>The Problem</h4>
            <p>Drug discovery research is slowed by limited access to intuitive tools for molecular interaction analysis.</p>
            <h4>The Solution</h4>
            <p>
              Led front-end development of an <b>AI-powered drug discovery platform</b>, enabling molecular input, interaction analysis, and drug comparison efficiently.
            </p>
            <h4>Tech Stack</h4>
            <p>React · AI/ML Models · JavaScript · Data Visualization</p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}