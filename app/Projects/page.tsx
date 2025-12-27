"use client";
import React, { useState,useRef,useEffect } from "react";
import Navbar from "../components/Navbar";
import Styles from "../Styling/Projects.module.css";
const YOUTUBE_MAP: Record<string, string> = {
  "QR CODE GENERATOR": "YOUTUBE_ID_1",
  "WEBPAGE TRANSLATOR": "YOUTUBE_ID_2",
  "RANDOM USER GENERATOR": "YOUTUBE_ID_3",
  // add gradually, no rush
};
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
const rows = 3;
const SPEEDS = [0.5, 0.35, 0.45];
const cardsPerRow = Math.ceil(tools.length / rows);

const Projects: React.FC = () => {
  const [activeTool, setActiveTool] = useState<null | {
    title: string;
    desc: string;
    video: string;
  }>(null);
const trackRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
  const tracks = trackRefs.current;
  const widths: number[] = [];

  const animate = () => {
    tracks.forEach((track, i) => {
      if (!track) return;

      // ✅ Calculate width of the original set once
      if (!widths[i] && track.children.length > 0) {
        const originalSetLength = track.children.length / 2;
        let width = 0;
        for (let j = 0; j < originalSetLength; j++) {
          const el = track.children[j] as HTMLElement;
          // use bounding box for true rendered width
          width += el.getBoundingClientRect().width;
          // add your known spacing (margin-right: 2rem = 32px)
          width += 32;
          width += 40;
        }
        widths[i] = width;
        console.log("Row", i, "original width:", widths[i]);
      }

      if (!track.dataset.offset) track.dataset.offset = "0";
      let offset = parseFloat(track.dataset.offset);

      // move left
      offset -= SPEEDS[i];

      const originalWidth = widths[i];

      // ✅ Reset exactly when the first set has scrolled out
      if (originalWidth && offset <= -originalWidth) {
        offset = 0;
      }

      track.style.transform = `translateX(${offset}px)`;
      track.dataset.offset = offset.toString();
    });

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}, []);

  return (
    <section className={Styles.container}>
      <Navbar />
      <h2 className={Styles.heading}>Utility Tools</h2>

      <div className={Styles.grid}>
  {Array.from({ length: rows }).map((_, rowIdx) => (
    <div
      ref={(el) => {
        if (el) trackRefs.current[rowIdx] = el;
      }}
      className={Styles.track}
      key={rowIdx}
    >
      {tools
        .slice(rowIdx * cardsPerRow, (rowIdx + 1) * cardsPerRow)
        .concat(
          tools.slice(rowIdx * cardsPerRow, (rowIdx + 1) * cardsPerRow) // duplicate for seamless loop
        )
        .map((tool, idx) => (
          <div className={Styles.card} key={idx}>
            <div className={Styles.videoWrapper}>
              <video src={tool.video} autoPlay loop muted playsInline />
            </div>
            <div className={Styles.cardMeta}>
              <h3 className={Styles.cardTitle}>{tool.title}</h3>
              <button
                className={Styles.explore}
                onClick={() => setActiveTool(tool)}
              >
                Explore <span>&gt;</span>
              </button>
            </div>
          </div>
        ))}
    </div>
  ))}
</div>
      {activeTool && (
        <div
          className={Styles.modalOverlay}
          onClick={() => setActiveTool(null)}
        >
          <div
            className={Styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={Styles.closeButton}
              onClick={() => setActiveTool(null)}
            >
              ×
            </button>

            <div className={Styles.modalGrid}>
              <div className={Styles.track}></div>
              <div className={Styles.youtubeWrapper}>
  <iframe
    src={`https://www.youtube.com/embed/${
      YOUTUBE_MAP[activeTool.title]
    }?autoplay=1&rel=0`}
    title={activeTool.title}
    frameBorder="0"
    allow="autoplay; encrypted-media; picture-in-picture"
    allowFullScreen
  />
</div>
              <div className={Styles.modalText}>
                <h2>{activeTool.title}</h2>
                <p>{activeTool.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;