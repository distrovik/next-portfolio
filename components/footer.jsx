import Script from "next/script";
import styles from "./footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentRoute = usePathname();
  return (
    <div className={styles.innerMain}>
      <div className={styles.mainDiv}>
        <div>
          <p>SITEMAP</p>
          <ul>
            <li>
              <Link
                id={currentRoute === "/" ? "activeLink" : "notActiveLink"}
                className={currentRoute === "/" ? styles.Tlink : styles.Flink}
                href={"./"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                id={
                  currentRoute === "/projects" ? "activeLink" : "notActiveLink"
                }
                className={
                  currentRoute === "/projects" ? styles.Tlink : styles.Flink
                }
                href={"./projects"}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                id={
                  currentRoute === "/journal" ? "activeLink" : "notActiveLink"
                }
                className={
                  currentRoute === "/journal" ? styles.Tlink : styles.Flink
                }
                href={"./journal"}
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                id={
                  currentRoute === "/contact" ? "activeLink" : "notActiveLink"
                }
                className={
                  currentRoute === "/contact" ? styles.Tlink : styles.Flink
                }
                href={"./contact"}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                id={currentRoute === "/resume" ? "activeLink" : "notActiveLink"}
                className={
                  currentRoute === "/resume" ? styles.Tlink : styles.Flink
                }
                href={"./resume"}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                id={
                  currentRoute === "/sitemap" ? "activeLink" : "notActiveLink"
                }
                className={
                  currentRoute === "/sitemap" ? styles.Tlink : styles.Flink
                }
                href={"./sitemap"}
              >
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p>SOCIAL</p>
          <ul>
            <li>
              <a
                id="darkLink"
                target="_blank"
                href="https://www.facebook.com/nixnicksnix"
                aria-label="Instagram link"
                rel="noreferrer noopener"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                id="darkLink"
                target="_blank"
                href="https://www.linkedin.com/in/irfan-fairuz-442960247"
                aria-label="LinkedIn profile link"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                id="darkLink"
                target="_blank"
                href="https://discord.gg/eWbuu6PC"
                aria-label="Twitter link"
                rel="noreferrer noopener"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                id="darkLink"
                target="_blank"
                href="https://github.com/fanvik"
                aria-label="Github link"
                rel="noreferrer noopener"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          <i class="fa-solid fa-copyright"></i> Fanvik{" "}
          {new Date().getFullYear()}
        </p>
      </div>
      <Script
        src={"https://kit.fontawesome.com/04da4f41a5.js"}
        crossorigin={"anonymous"}
      ></Script>
    </div>
  );
}
