"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Styles from "../Styling/Experience.module.css";

const Experience = () => {
  return (
    <div className={Styles.container}>
    <Navbar />
      <h2 className={Styles.sectionTitle}>Experience</h2>

      {/* Eval Bench */}
      <div className={Styles.card}>
        <div className={Styles.header}>
          <span className={Styles.company}>EVAL BENCH</span>
          <span className={Styles.role}>Software Engineer Intern</span>
          <span className={Styles.date}>Nov’25 – Present</span>
        </div>
        <div className={Styles.subSection}>
          <h4>RESPONSIBILITIES :</h4>
          <ul>
            <li>Developed and optimized frontend features using Next.js for production environments.</li>
            <li>Executed cookie monitoring and classification processes supporting privacy compliance.</li>
            <li>Designed Power BI dashboards for data interpretation and stakeholder reporting.</li>
          </ul>
        </div>
        <div className={Styles.subSection}>
          <h4>SKILLS APPLIED :</h4>
          <div className={Styles.skills}>
            <span>Next.js & modern frontend engineering</span>
            <span>Cookie classification and privacy tracking</span>
            <span>Power BI</span>
            <span>EmailJS automation</span>
            <span>Cookie Analysis Reporting</span>
            <span>Shopify Website Development</span>
          </div>
        </div>
      </div>

      {/* Connector line */}
      <div className={Styles.connector}></div>

      {/* Airport Authority of India */}
      <div className={Styles.card}>
        <div className={Styles.header}>
          <span className={Styles.company}>AIRPORT AUTHORITY OF INDIA</span>
          <span className={Styles.date}>Oct’25</span>
        </div>
        <div className={Styles.subSection}>
          <h4>RESPONSIBILITIES :</h4>
          <ul>
            <li>Assisted in basic network monitoring and troubleshooting under supervision</li>
            <li>Gained exposure to aviation communication systems and operational workflow</li>
          </ul>
        </div>
        <div className={Styles.subSection}>
          <h4>SKILLS APPLIED :</h4>
          <div className={Styles.skills}>
            <span>Networking fundamentals</span>
            <span>System monitoring</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;