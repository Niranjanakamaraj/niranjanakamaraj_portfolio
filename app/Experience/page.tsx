"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Styles from "../Styling/Experience.module.css";
import { motion } from "framer-motion";

const Experience = () => {
  // Motion Variants
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    hover: { scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" },
  };

  const skillVariant = {
    hover: { scale: 1.1, rotate: 2, transition: { duration: 0.2 } },
  };

  return (
    <div className={Styles.container}>
      <Navbar />
      <motion.h2
        className={Styles.sectionTitle}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      >
        Experience
      </motion.h2>

      {[
        {
          company: "EVAL BENCH",
          role: "Software Engineer Intern",
          date: "Nov’25 – Present",
          responsibilities: [
            "Developed and optimized frontend features using Next.js for production environments.",
            "Executed cookie monitoring and classification processes supporting privacy compliance.",
            "Designed Power BI dashboards for data interpretation and stakeholder reporting.",
          ],
          skills: [
            "Next.js & modern frontend engineering",
            "Cookie classification and privacy tracking",
            "Power BI",
            "EmailJS automation",
            "Cookie Analysis Reporting",
            "Shopify Website Development",
          ],
        },
        {
          company: "AIRPORT AUTHORITY OF INDIA",
          role: "",
          date: "Oct’25",
          responsibilities: [
            "Assisted in basic network monitoring and troubleshooting under supervision",
            "Gained exposure to aviation communication systems and operational workflow",
          ],
          skills: ["Networking fundamentals", "System monitoring"],
        },
      ].map((exp, idx) => (
        <React.Fragment key={idx}>
          <motion.div
            className={Styles.card}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <div className={Styles.header}>
              <span className={Styles.company}>{exp.company}</span>
              {exp.role && <span className={Styles.role}>{exp.role}</span>}
              <span className={Styles.date}>{exp.date}</span>
            </div>

            <div className={Styles.subSection}>
              <h4>RESPONSIBILITIES :</h4>
              <ul>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={Styles.subSection}>
              <h4>SKILLS APPLIED :</h4>
              <div className={Styles.skills}>
                {exp.skills.map((skill, i) => (
                  <span key={i}>
                    {skill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {idx === 0 && <div className={Styles.connector}></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Experience;