import Header from "@/components/header";
import { usePathname } from "next/navigation";
import styles from "@/styles/page.module.css";

export default function Contact() {
  const siteTitle =
    usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);

  return (
    <>
      <Header title={siteTitle} />
      <div id="innerMain">
        <div>
          <div className={styles.topDiv}>
            <h1>{siteTitle}</h1>
            <p id="topP">A place of infomation to get in touch with me.</p>
          </div>
          <div className={styles.secondDiv}>
            <h2>Direct</h2>
            <p>
              If you are looking to get into a work relationship, reach me at{" "}
              <a
                id="darkLink"
                className={styles.link}
                aria-label="fanvik.dev@gmail.com"
                href="mailto:fanvik.dev@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                fanvik.dev@gmail.com
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

            <p>
              Or you can browse my catalogue of services on freelance sites :
            </p>
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
                  Fiver
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
                  aria-label="Instagram link"
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
                  aria-label="LinkedIn profile link"
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
                  aria-label="Twitter link"
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
      </div>
    </>
  );
}
