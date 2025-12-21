"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Styles from "../Styling/Projects.module.css";

const tools = [
  {
    title: "QR CODE GENERATOR",
    desc: "Turn any link or text into a scannable QR in seconds. Sleek, fast, and fully customizable",
    video: "/projects/QR Code Generator.mp4",
  },
  {
    title: "WEBPAGE TRANSLATOR",
    desc: "Instantly flip web pages into multiple languages without breaking layout",
    video: "/projects/Web Page Translator.mp4",
  },
  {
    title: "RANDOM USER GENERATOR",
    desc: "Mock data, real impact. Generate realistic user profiles for testing, demos, or prototypes",
    video: "/projects/Random user Generator.mp4",
  },
  {
    title: "SCREENSHOT TO TEXT CONVERTOR",
    desc: "Snap, extract, done. Converts images to editable text lightning-fast with precision",
    video: "/projects/Screenshot to Text.mp4",
  },
  {
    title: "TEXT TO SPEECH CONVERTER",
    desc: "Turn text into natural-sounding voiceovers on the fly. Listen, don’t just read",
    video: "/projects/Text to Speech Converter.mp4",
  },
  {
    title: "URL SHORTENER",
    desc: "Shrink links, track clicks, share smarter. Minimal link, maximum impact",
    video: "/projects/URL Shortener.mp4",
  },
  {
    title: "PASSWORD STRENGTH CHECKER",
    desc: "Evaluate password resilience offline. No leaks, no compromises",
    video: "/projects/Offline Password Strength Checker.mp4",
  },
  {
    title: "COLOR CONTRAST TESTER",
    desc: "Validate color accessibility instantly. Design that reads well and passes standards",
    video: "/projects/ColorContrastTester.mp4",
  },

  // 🚀 New tools start here

  {
    title: "BOOKBUDDY",
    desc: "Your reading accountability engine. Track progress, build habits, finish books",
    video: "/projects/Book Buddy .mp4",
  },
  {
    title: "CRYPTOPEEK",
    desc: "Market pulse at a glance. Spot crypto momentum before the crowd reacts",
    video: "/projects/Crypto Peek.mp4",
  },
  {
    title: "CURRENCY CONVERTER",
    desc: "Instant crypto-to-fiat and token conversions with zero friction",
    video: "/projects/Currency Converter.mp4",
  },
  {
    title: "ENVIRONMENT DRIFT DETECTOR",
    desc: "Detect data and environment drift before models silently fail",
    video: "/projects/Environment Drift Detector .mp4",
  },
  {
    title: "HABIT REMINDER",
    desc: "Color-coded habit nudges that keep routines visually memorable",
    video: "/projects/Habit Reminder.mp4",
  },
  {
    title: "LOCAL NETWORK SCANNER",
    desc: "Map devices on your local network. Visibility, security, control",
    video: "/projects/Local Network Scanner.mp4",
  },
  {
    title: "LOCAL SEARCH ENGINE",
    desc: "Search your local files like Google. Fast indexing, instant retrieval",
    video: "/projects/Local Search Engine.mp4",
  },
  {
    title: "MESSAGE TONE ANALYZER",
    desc: "Analyze tone and sentiment of messages before you hit send",
    video: "/projects/Message Tone Analyzer.mp4",
  },
  {
    title: "CHALLENGE TRACKER",
    desc: "Define goals, track challenges, and measure execution velocity",
    video: "/projects/Streakify - Challenge Tracker.mp4",
  },
  {
    title: "TASK SEQUENCER",
    desc: "Break complex work into optimal execution order automatically",
    video: "/projects/Task Sequencer.mp4",
  },
  {
    title: "TREND SCOUT",
    desc: "Identify emerging trends early using real-time signal analysis",
    video: "/projects/TrendScout.mp4",
  },
  {
    title: "WIFI DEATH ZONE MAPPER",
    desc: "Visualize weak WiFi zones and optimize network coverage",
    video: "/projects/Wi-Fi Dead Zone Mapper.mp4",
  },
];

const Projects: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className={Styles.container}>
      <Navbar />
      <h2 className={Styles.heading}>Utility Tools</h2>
      <div className={Styles.grid}>
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className={Styles.card}
            onClick={() => setSelectedVideo(tool.video)}
            style={{ cursor: "pointer" }}
          >
            <div className={Styles.title}>{tool.title}</div>
            <div className={Styles.videoWrapper}>
              <video src={tool.video} autoPlay loop muted playsInline />
            </div>
            <div className={Styles.desc}>{tool.desc}</div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedVideo && (
        <div className={Styles.modalOverlay} onClick={() => setSelectedVideo(null)}>
          <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={Styles.closeButton} onClick={() => setSelectedVideo(null)}>
              ×
            </button>
            <video src={selectedVideo} autoPlay loop controls />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
