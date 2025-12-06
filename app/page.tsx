"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import styles from "./styling/Home.module.css"; // Import CSS Module
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const postsCFG = await fetchPosts("mycodeforgood2025.hashnode.dev");
      const postsAP = await fetchPosts("ap-police-hackathon.hashnode.dev");

      const combined = [
        ...postsCFG.map(post => ({ ...post, hostname: "mycodeforgood2025.hashnode.dev" })),
        ...postsAP.map(post => ({ ...post, hostname: "ap-police-hackathon.hashnode.dev" })),
      ];

      setPosts(combined);
    }

    loadPosts();
  }, []);

  return (
    <main id="home" className={styles.main}>
      <Navbar />

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.profileContainer}>
          <div className={styles.profileBorder}></div>
          <Image
            src="/profile.jpeg"
            alt="Profile Photo"
            width={300}
            height={100}
            className={styles.profileImage}
          />
        </div>

        <div className={styles.intro}>
          <h1 className={styles.name}>Niranjana K</h1>
          <div className={styles.role}>
            <div id="flip">
              <div>
                <div>Web Developer</div>
                <div>Web Designer</div>
              </div>
            </div>
          </div>
          <button className={styles.ctaButton}>Curious? Dive in</button>
        </div>
      </section>

      {/* PERSON SECTION */}
      <section className={styles.personSection}>
        <h1 className={styles.personHeading}>The Person <br /> & <br /> The Dev</h1>
        <div className={styles.personButtons}>
          <button className={styles.personBtn}>Who I Am ?</button>
          <button className={styles.personBtn}>What I Do</button>
        </div>
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
                <p className={styles.blogDesc}>{post.brief}</p>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}