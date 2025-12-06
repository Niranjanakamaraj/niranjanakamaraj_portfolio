"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Styles from "../Styling/Projects.module.css";

const tools = [
  { title: "QR CODE GENERATOR", desc: "Turn any link or text into a scannable QR in seconds. Sleek, fast, and fully customizable", video: "/QR Code Generator.mp4" },
  { title: "WEBPAGE TRANSLATOR", desc: "Instantly flip web pages into multiple languages without breaking layout", video: "/Web Page Translator.mp4" },
  { title: "RANDOM USER GENERATOR", desc: "Mock data, real impact. Generate realistic user profiles for testing, demos, or prototypes", video: "/Random user Generator.mp4" },
  { title: "SCREENSHOT TO TEXT CONVERTOR", desc: "Snap, extract, done. Converts images to editable text lightning-fast with precision", video: "/Screenshot to Text.mp4" },
  { title: "TEXT TO SPEECH CONVERTER", desc: "Turn text into natural-sounding voiceovers on the fly. Listen, don’t just read", video: "/Text to Speech Converter.mp4" },
  { title: "URL SHORTENER", desc: "From link to scan-ready QR in seconds. Clean, fast, custom", video: "/URL Shortener.mp4" },
  { title: "PASSWORD STRENGTH CHECKER", desc: "Shrink links, track clicks, share smarter. Minimal link, maximum impact", video: "/Offline Password Strength Checker.mp4" },
  { title: "COLOR CONTRAST TESTER", desc: "Check color combos in a flash. Ensure readability, accessibility, and design harmony", video: "/ColorContrastTester.mp4" },
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
