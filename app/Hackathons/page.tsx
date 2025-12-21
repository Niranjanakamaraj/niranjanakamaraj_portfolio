"use client";
import Navbar from "../components/Navbar";
import styles from "../Styling/hackathon.module.css";

export default function Hackathon() {
  return (
    <main className={styles.main}>
      <Navbar />
    <section className={styles.headerSection}>
        <h1 className={styles.title}>Hackathon Journey</h1>
        <p className={styles.subtitle}>Where skills solve Real-World Problem</p>
      </section>
      {/* JPMorgan Chase */}
      <section className={`${styles.hackathonCard} ${styles.cardPrimary}`}>
        <div className={styles.hackathonWrapper}>
          <div className={styles.hackathonImageBox}>
            <img
              src="/jp.jpg"
              alt="JPMorgan Chase Hackathon"
              className={styles.hackathonImage}
            />
            <a
              href="https://gitplaceholder.com/jpmc"
              target="_blank"
              className={styles.gitButton}
            >
              View GitHub
            </a>
          </div>
          <div className={styles.hackathonInfo}>
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
          </div>
        </div>
      </section>

      {/* Shell AI Hackathon */}
      <section className={`${styles.hackathonCard} ${styles.cardSecondary}`}>
        <div className={`${styles.hackathonWrapper} ${styles.reverse}`}>
          <div className={styles.hackathonImageBox}>
            <img
              src="/shell.png"
              alt="Shell AI Hackathon"
              className={styles.hackathonImage}
            />
            <a
              href="https://gitplaceholder.com/shell"
              target="_blank"
              className={styles.gitButton}
            >
              View GitHub
            </a>
          </div>
          <div className={styles.hackathonInfo}>
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
          </div>
        </div>
      </section>

      {/* AI for Andhra Pradesh Police */}
      <section className={`${styles.hackathonCard} ${styles.cardPrimary}`}>
        <div className={styles.hackathonWrapper}>
          <div className={styles.hackathonImageBox}>
            <img
              src="/ap.jpg"
              alt="AI for Andhra Pradesh Police Hackathon"
              className={styles.hackathonImage}
            />
            <a
              href="https://gitplaceholder.com/ap-police"
              target="_blank"
              className={styles.gitButton}
            >
              View GitHub
            </a>
          </div>
          <div className={styles.hackathonInfo}>
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
          </div>
        </div>
      </section>

      {/* GDG On-Campus Solution Challenge */}
      <section className={`${styles.hackathonCard} ${styles.cardSecondary}`}>
        <div className={`${styles.hackathonWrapper} ${styles.reverse}`}>
          <div className={styles.hackathonImageBox}>
            <img
              src="/gdg.png"
              alt="GDG On-Campus Solution Challenge"
              className={styles.hackathonImage}
            />
            <a
              href="https://gitplaceholder.com/gdg"
              target="_blank"
              className={styles.gitButton}
            >
              View GitHub
            </a>
          </div>
          <div className={styles.hackathonInfo}>
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
          </div>
        </div>
      </section>
    </main>
  );
}