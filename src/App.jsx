import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  // Initialize theme state (default to light mode if not in localStorage)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply the theme by changing the body class whenever the theme state changes
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme); // Store theme preference in localStorage
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={styles.App}>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
