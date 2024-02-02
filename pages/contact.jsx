import Header from "@/components/header";
import SiteTitle from "@/components/siteTitle";
import styles from "@/styles/page.module.css";

export default function Contact() {
  return (
    <>
      <div id="innerMain">
        <div id="goToTop" className={styles.topDiv}>
          <h1>{SiteTitle()}</h1>
          <h2 id="topP">A place of infomation to get in touch with me.</h2>
        </div>
        <div className={styles.secondDiv}>
          <h2>Direct</h2>
          <p>
            If you are looking to get into a work relationship, reach me at{" "}
            <a
              id="darkLink"
              className={styles.link}
              aria-label="vik@distrovik.com"
              href="mailto:vik@distrovik.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              vik@distrovik.com
            </a>
            .
          </p>
          <p>
            Else,{" "}
            <a
              id="darkLink"
              className={styles.link}
              target="_blank"
              aria-label="mrirfanwork@gmail.com"
              rel="noreferrer noopener"
              href="mailto:mrirfanwork@gmail.com"
            >
              mrirfanwork@gmail.com
            </a>
          </p>

          <p>Or you can browse my catalogue of services on freelance sites :</p>
          <ul>
            <li>
              <a
                id="darkLink"
                className={styles.link}
                target="_blank"
                href="https://fiverr.com"
                aria-label="fiverr profile link"
                rel="noreferrer noopener"
              >
                Fiverr
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.secondDiv}>
          <h2>Social</h2>
          <p>
            Here are some links that will redirect you to my social media
            accounts.
          </p>
          <ul>
            <li>
              <a
                id="darkLink"
                className={styles.link}
                target="_blank"
                href="https://www.facebook.com/nixnicksnix"
                aria-label="Facebook link"
                rel="noreferrer noopener"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                id="darkLink"
                className={styles.link}
                target="_blank"
                href="https://www.linkedin.com/in/irfan-fairuz-442960247"
                aria-label="LinkedIn link"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                id="darkLink"
                className={styles.link}
                target="_blank"
                href="https://discord.gg/eWbuu6PC"
                aria-label="Discord server link"
                rel="noreferrer noopener"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                id="darkLink"
                className={styles.link}
                target="_blank"
                href="https://github.com/distrovik"
                aria-label="Github link"
                rel="noreferrer noopener"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
