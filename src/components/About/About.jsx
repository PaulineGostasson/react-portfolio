import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
                <p>
                  Specializing in crafting responsive, user-friendly, and optimized websites using modern technologies like React, CSS, and more.
                </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>UI/UX Designer</h3>
                <p>
                  I design beautiful interfaces and experiences that provide meaningful interactions while ensuring consistency across different platforms.
                </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};