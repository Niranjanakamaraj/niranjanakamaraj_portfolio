"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../Styling/Skills.module.css";

export default function Skills() {
  // Original arrays for reuse
  const webDevSkills = [
    { img: "/react.jpg", name: "React" },
    { img: "/nextjs.svg", name: "Next.js" },
    { img: "/Nodejs.png", name: "Node" },
    { img: "/Javascript.png", name: "Javascript" },
    { img: "/Typescript.png", name: "Typescript" },
    { img: "/redux.svg", name: "Redux" },
    { img: "/Tailwind_CSS.png", name: "Tailwind" },
    { img: "/bootstrap.png", name: "Bootstrap" },
    { img: "/html.png", name: "HTML" },
    { img: "/css.jpg", name: "CSS" },
  ];

  const mlSkills = [
    { img: "/streamlit.png", name: "Streamlit" },
    { img: "/sklearn.png", name: "Scikit-learn" },
    { img: "/tf.png", name: "TensorFlow / Keras" },
    { img: "/numpy.jpg", name: "Numpy" },
    { img: "/pandas.png", name: "Pandas" },
  ];

  const otherTools = [
    { img: "/postman.svg", name: "Postman" },
    { img: "/gc.png", name: "Google Colab" },
    { img: "/Vercel.svg", name: "Vercel" },
    { img: "/Firebase.png", name: "Firebase" },
    { img: "/wix.avif", name: "Wix Studio" },
    { img: "/Notion.png", name: "Notion" },
    { img: "/jira.png", name: "Jira" },
    { img: "/Netlify.svg", name: "Netlify" },
    { img: "/Figma.png", name: "Figma" },
    { img: "/Canva.png", name: "Canva" },
  ];

  function duplicateArray<T>(arr: T[], times: number): T[] {
  return Array(times).fill(arr).flat();
}

  return (
    <main className={styles.skillsMain}>
      <Navbar />

      {/* Header */}
      <section className={styles.headerSection}>
        <h1 className={styles.title}>The Toolbox</h1>
        <p className={styles.subtitle}>Where skills become solutions</p>
      </section>

      <section className={styles.category}>
  <h2 className={styles.categoryTitle}>Web Development</h2>
  <div className={`${styles.grid} ${styles.scrollRight}`}>
    {/* first copy */}
    {duplicateArray(webDevSkills, 5).map((item, i) => (
      <div key={`web-a-${i}`} className={styles.skillCard}>
        <Image src={item.img} width={60} height={60} alt={item.name} />
        <p className={styles.skillName}>{item.name}</p>
      </div>
    ))}
    {/* second copy (exact same items) */}
    {duplicateArray(webDevSkills, 5).map((item, i) => (
      <div key={`web-b-${i}`} className={styles.skillCard}>
        <Image src={item.img} width={60} height={60} alt={item.name} />
        <p className={styles.skillName}>{item.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* Programming Languages + Version Control */}
      <section className={styles.splitCategory}>
        <div className={styles.splitBlock}>
          <h2 className={styles.categoryTitle}>Programming Languages</h2>
          <div className={styles.scrollRow}>
            {duplicateArray([
              { img: "/python.png", name: "Python" },
              { img: "/java.svg", name: "Java" },
              { img: "/sql.svg", name: "SQL" },
              { img: "/Javascript.png", name: "Javascript" },
            ], 8).map((item, i) => (
              <div key={i} className={styles.skillCard}>
                <Image src={item.img} width={60} height={60} alt={item.name} />
                <p className={styles.skillName}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.splitBlock}>
          <h2 className={styles.categoryTitle}>Version Control</h2>
          <div className={styles.scrollRow}>
            {duplicateArray([
              { img: "/git.webp", name: "Git" },
              { img: "/github.png", name: "GitHub" },
            ], 10).map((item, i) => (
              <div key={i} className={styles.skillCard}>
                <Image src={item.img} width={60} height={60} alt={item.name} />
                <p className={styles.skillName}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning */}
      <section className={styles.category}>
        <h2 className={styles.categoryTitle}>Machine Learning (Python Ecosystem)</h2>
        <div className={`${styles.grid} ${styles.scrollRight}`} data-duplicate="true">
          {duplicateArray(mlSkills, 5).map((item, i) => (
            <div key={i} className={styles.skillCard}>
              <Image src={item.img} width={60} height={60} alt={item.name} />
              <p className={styles.skillName}>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Tools */}
      <section className={styles.category}>
        <h2 className={styles.categoryTitle}>Other Tools & Platforms</h2>
        <div className={styles.grid}>
          {duplicateArray(otherTools, 5).map((item, i) => (
            <div key={i} className={styles.skillCard}>
              <Image src={item.img} width={60} height={60} alt={item.name} />
              <p className={styles.skillName}>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>Your vision, my tech — let’s create</footer>
    </main>
  );
}
