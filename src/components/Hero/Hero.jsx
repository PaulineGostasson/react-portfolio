import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pau</h1>
        <p className={styles.description}>
          I am a passionate Frontend developer with a focus on creating modern, responsive, and user-friendly web applications. 
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

      {/* Add Framer Motion hover effect to the hero image */}
      <motion.img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
        initial={{ borderRadius: "50%", scale: 1 }}  // Start as a circle
        whileHover={{ 
          borderRadius: ["50%", "20%", "10%"],  // Change shape on hover
          scale: 1.2,  // Slightly enlarge
        }}
        transition={{ 
          duration: 0.5, 
          ease: "easeInOut" 
        }}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
