import Script from "next/script";
import styles from "./footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github,Linkedin,Facebook,Discord } from "./url";

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
                href={currentRoute==="/"?"#cover":"./"}
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
                href={currentRoute==="/projects"?"#goToTop":"./projects"}
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
                href={currentRoute==="/journal"?"#goToTop":"./journal"}
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
                href={currentRoute==="/contact"?"#goToTop":"./contact"}
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
                href={currentRoute==="/resume"?"#goToTop":"./resume"}
              >
                Resume
              </Link>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </div>
        <div>
          <p>SOCIAL</p>
          <ul>
            <li>
              <a
                id="darkLink"
                className={styles.link}
                target="_blank"
                href={Facebook()}
                aria-label="Facebook link"
                rel="noreferrer noopener"
                style={{padding:"0"}}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                id="darkLink"
                className={styles.link}
                target="_blank"
                href={Linkedin()}
                aria-label="LinkedIn profile link"
                rel="noreferrer noopener"
                style={{padding:"0"}}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                id="darkLink"
                className={styles.link}
                target="_blank"
                href={Discord()}
                aria-label="Discord server invite link"
                rel="noreferrer noopener"
                style={{padding:"0"}}
              >
                Discord
              </a>
            </li>
            <li>
              <a
                id="darkLink"
                className={styles.link}
                target="_blank"
                href={Github()}
                aria-label="Github link"
                rel="noreferrer noopener"
                style={{padding:"0"}}
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          <i className="fa-solid fa-copyright"></i> DistroVik{" "}
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
