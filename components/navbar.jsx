import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

import ThemeSwitcher from "./themeSwitch";

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.icon}>
      <ThemeSwitcher/>
      </div>

      <div className={styles.links}>
        <Link
          id={currentRoute === "/" ? "active" : "notActive"}
          className={currentRoute === "/" ? styles.Tlink : styles.Flink}
          href={"./"}
        >
          Home
        </Link>
        <Link
          id={currentRoute === "/blog" ? "active" : "notActive"}
          className={currentRoute === "/blog" ? styles.Tlink : styles.Flink}
          href={"./blog"}
        >
          Blog
        </Link>
        <Link
          id={currentRoute === "/projects" ? "active" : "notActive"}
          className={currentRoute === "/projects" ? styles.Tlink : styles.Flink}
          href={"./projects"}
        >
          Projects
        </Link>
        <Link
          id={currentRoute === "/reach" ? "active" : "notActive"}
          className={currentRoute === "/reach" ? styles.Tlink : styles.Flink}
          href={"./reach"}
        >
          Reach
        </Link>
      </div>
    </nav>
  );
}
