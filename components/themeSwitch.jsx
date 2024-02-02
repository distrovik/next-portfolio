"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./themeSwitch.module.css";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.logo}>
      <div id="outerLogo" className={styles.outerLogo}>
        <div
          id="innerLogo"
          className={styles.innerLogo}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? "Dark" : "Light"}
        </div>
      </div>
    </div>
  );
}
