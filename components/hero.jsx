import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroDesc}>
        <h2 id="hey" className={styles.hey}>
          HEY THERE,
        </h2>
        <h1>
          <span
            id="name"
            className={styles.name}
            style={{ display: "inline-block" }}
          >
            I&apos;m Viky.
          </span>
        </h1>
        <p>I&apos;m a Full-Stack Web Developer.</p>
        <p>Based in Malaysia.</p>
        <p className={styles.p}>
          My passion lies in crafting elegant and responsive Web & WebApp experiences using modern and efficient frameworks.
        </p>
        <p className={styles.p}>
        On the frontend, I rely on{" "} 
          <span className="boldText">NextJS</span>, complemented by <span className="boldText">TailwindCSS</span> &{" "}
          <span className="boldText">Bootstrap</span>.
        </p>
        <p className={styles.p}>
        For backend development, my go-to stack is{" "} 
          <span className="boldText">NodeJS</span> with{" "}
          <span className="boldText">ExpressJS</span> framework, leveraging the power of <span className="JS">JavaScript</span>.
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
        src="/images/profile.jpg"
        alt="profile picture"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
