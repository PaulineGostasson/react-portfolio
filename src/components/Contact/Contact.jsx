import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {/* Email Icon and Link */}
        <li className={styles.link}>
          <a href="mailto:gostassonpauline@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <span>gostassonpauline@gmail.com</span>
          </a>
        </li>

        {/* LinkedIn Icon and Link */}
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/paulineg%C3%B6stasson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <span>linkedin.com/paulinegöstasson</span>
          </a>
        </li>

        {/* GitHub Icon and Link */}
        <li className={styles.link}>
          <a
            href="https://github.com/PaulineGostasson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <span>github.com/PaulineGostasson</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
