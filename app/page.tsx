"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import styles from "./Styling/Home.module.css"; // Import CSS Module
import { fetchPosts } from "../hashnodeClient";

const testimonials = [
  {
    text: "\"A very calm and friendly team worker with great ideas and excellent amount of patience. A sweet, humble and talented being.\"",
    name: "Vidhya K Rao",
    role: "JPMC CFG'25 Teammate",
  },
  {
    text: "\"Niranjana is a very hard-working person. I had high expectations from her and she met them with excellence.\"",
    name: "Aryan Sachan",
    role: "JPMC CFG'25 Teammate",
  },
  {
    text: "\"Working with Niranjana was a totally different experience. She is very calm and composed during extreme situations. I love her modular working style. The team spirit she brought along with herself kept us motivated.\"",
    name: "Dakshita Agrawal",
    role: "JPMC CFG'25 Teammate",
  },
  {
    text: "\"She is dedicated, reliable and always puts in her best effort in every project. I've seen her consistent and commitment firsthand!\"",
    name: "Prakshi Lakhchaura ",
    role: "JPMC CFG'25 Teammate",
  },
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [active, setActive] = useState<null | "who" | "what">(null);
  interface Post {
  title: string;
  slug: string;
  coverImage?: string;
  hostname?: string;
}
  useEffect(() => {
  async function loadPosts() {
    try {
      const postsCFG = await fetchPosts("mycodeforgood2025.hashnode.dev");
      const postsAP = await fetchPosts("ap-police-hackathon.hashnode.dev");

const postsCFGTyped: Post[] = postsCFG;
const postsAPTyped: Post[] = postsAP;

const combined = [
  ...postsCFGTyped.map(post => ({ ...post, hostname: "mycodeforgood2025.hashnode.dev" })),
  ...postsAPTyped.map(post => ({ ...post, hostname: "ap-police-hackathon.hashnode.dev" })),
];
      setPosts(combined);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  }

  loadPosts();
}, []);

  return (
    <main id="home" className={`${styles.main} ${active ? styles.blurBg : ""}`}>
      <Navbar />

      {/* HERO SECTION */}
<section className={styles.heroSection}>
   <video
    autoPlay
    loop
    muted
    playsInline
    className={styles.heroVideo}
  >
    <source src="/bg.mp4" type="video/mp4" />
  </video>
  <div className={styles.profileContainer}>
    <div className={styles.profileBorder}></div>
    <Image
      src="/pro.png"
      alt="Profile Photo"
      width={400}
      height={500}
      className={styles.profileImage}
    />
  </div>

  <div className={styles.intro}>
  {/* Tagline */}
  <h1 className={styles.tagline}><span>FULLSTACK DEVELOPER </span><br />FRONTEND SPECIALIST</h1>
  <div className={styles.githubStatsContainer}>
    <h3 className={styles.githubLabel}>GitHub Contribution</h3>
    <a
      href="https://github.com/Niranjanakamaraj"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://streak-stats.vercel.app/?user=Niranjanakamaraj&theme=light&hide_border=true&date_format=M%20j%5B%2C%20Y%5D"
        alt="GitHub Streak Stats for Niranjanakamaraj"
      />
    </a>
  </div>
</div>

</section>

      {/* PERSON SECTION */}
<section className={styles.personSection}>
  <h1 className={styles.personHeading}>
    The Person <br /> & <br /> The Dev
  </h1>

  <div className={styles.personButtons}>
    <button
      className={styles.personBtn}
      onClick={() => setActive("who")}
    >
      Who I Am →
    </button>

    <button
      className={styles.personBtn}
      onClick={() => setActive("what")}
    >
      What I Do →
    </button>
  </div>

  {/* FLAP */}
  {active && (
    <div className={styles.flapWrapper}>
      <div className={styles.flap}>
        <div className={styles.flapFront}>
          {active === "who" ? "Who I Am" : "What I Do"}
        </div>

        <div className={styles.flapBack}>
          <button
            className={styles.close}
            onClick={() => setActive(null)}
          >
            ✕
          </button>

          {active === "who" ? (
            <p>
              I’m a 3rd-year B.Tech student in Computer Science and Business
              Systems at Rajalakshmi Institute of Technology, focused on
              solving real-world problems through web development.
            </p>
          ) : (
            <p>
              I build modern web experiences using React and Next.js,
              blending creativity with functionality to deliver scalable,
              user-focused applications.
            </p>
          )}
        </div>
      </div>
    </div>
  )}
</section>

      {/* TESTIMONIAL SECTION */}
      <section className={styles.testimonialSection}>
        <h1 className={styles.testimonialTitle}>Testimonials</h1>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>{t.text}</p>
              <h4 className={styles.testimonialName}>{t.name}</h4>
              <p className={styles.testimonialRole}>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className={styles.blogsSection}>
        <h1 className={styles.blogsTitle}>Blogs</h1>
        <div className={styles.blogsGrid}>
          {posts.map((post) => {
            const blogUrl = post.hostname ? `https://${post.hostname}/${post.slug}` : "#";

            const coverImage =
              post.coverImage ||
              (post.hostname === "mycodeforgood2025.hashnode.dev"
                ? "/jp.jpg"
                : post.hostname === "ap-police-hackathon.hashnode.dev"
                ? "/ap.jpg"
                : "/default-blog.jpg");

            return (
              <a
                key={post.slug}
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blogItem}
              >
                <img src={coverImage} className={styles.blogImg} />
                <h3 className={styles.blogHeading}>{post.title}</h3>
                <p className={styles.blogDesc}>Read More &gt; </p>
              </a>
            );
          })}
        </div>
      </section>
      {/* CONTACT CTA SECTION */}
<section className={styles.contactCtaSection}>
  <h2 className={styles.contactCtaTitle}>
    Got a problem worth solving?
  </h2>
  <p className={styles.contactCtaDesc}>
    I’m in. Let’s connect and create impactful solutions together.
  </p>
  <a href="/Contact" className={styles.contactCtaBtn}>
    Get in Touch →
  </a>
</section>

    </main>
  );
}