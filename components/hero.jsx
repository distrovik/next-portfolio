import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroDesc}>
        <h1>
          <span id="hey" className={styles.hey}>
            Hey,
          </span>{" "}
          <span style={{ display: "inline-block" }}>I&apos;m Viky.</span>
        </h1>
        <p>I&apos;m a Freelance Full-Stack Developer, based in Malaysia.</p>
        <p className={styles.p}>
          <span className="font-bold">NextJS</span> is my main frontend
          framework along with <span className="font-bold">TailwindCSS</span> &{" "}
          <span className="font-bold">Bootstrap</span>.
        </p>
        <p className={styles.p}>
          <span className="font-bold">NodeJS</span> with{" "}
          <span className="font-bold">ExpressJS</span> framework is my go-to
          backend stack since it&apos;s Javascript.
        </p>
        <div className={styles.heroLink}>
          <a
            href="https://github.com/fanvik"
            target="_blank"
            aria-label="Github link"
            rel="noreferrer noopener"
          >
            <i id="faIcon" className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/irfan-fairuz-442960247"
            target="_blank"
            aria-label="Linkedin link"
            rel="noreferrer noopener"
          >
            <i id="faIcon" className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/nixnicksnix"
            target="_blank"
            aria-label="Facebook link"
            rel="noreferrer noopener"
          >
            <i id="faIcon" className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://discord.gg/eWbuu6PC"
            target="_blank"
            aria-label="Discord Server link"
            rel="noreferrer noopener"
          >
            <i id="faIcon" className="fa-brands fa-discord"></i>
          </a>
          <Link href="/resume" aria-label="Resume link">
            <i id="faIcon" className="fa-solid fa-circle-user"></i>
          </Link>
        </div>
      </div>
      <Image
        id="heroPic"
        className={styles.profilePic}
        src="/images/profile_fanvik.jpg"
        alt="profile picture"
        width={200}
        height={200}
      ></Image>
    </div>
  );
}
