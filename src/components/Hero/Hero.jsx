import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pau</h1>
        <p className={styles.description}>
          I am a passionate frontend developer with a focus on creating modern, responsive, and user-friendly web applications. 
          With a strong foundation in JavaScript, React, and CSS, I love turning complex ideas into seamless experiences. 
          Let’s build something amazing together!
        </p>
        <div className={styles.buttonContainer}>
  <a href="mailto:gostassonpauline@gmail.com" className={styles.contactBtn}>
    Contact Me
  </a>
  <a href="/CV.pdf" download className={styles.downloadCvBtn}>
    Download My CV
  </a>
</div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
