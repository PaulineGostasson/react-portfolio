import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils"; // Assuming you have a utility to get images

export const Navbar = ({ toggleTheme, currentTheme }) => {
  // Define the state to track whether the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/closed
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>

      {/* Hamburger Menu for small screens */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </div>

      {/* Display menu items based on the state of menuOpen */}
      <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
          {/* Theme Toggle Button */}
      <li><a onClick={toggleTheme} className={styles.themeToggle}>
        {currentTheme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
      </a></li>
      </ul>

    </nav>
  );
};
