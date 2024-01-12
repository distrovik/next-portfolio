import Image from "next/image";
import styles from "./hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroDesc}>
        <h1>
          <span id="hey" className={styles.hey}>
            Hey,
          </span>{" "}
          <span style={{ display: "inline-flex" }}>I&apos;m Irfan.</span>
        </h1>
        <p>I&apos;m a Freelance Full-Stack Developer, based in Malaysia.</p>
        <p className={styles.p}><span style={{ fontWeight: "bold" }}>NextJS</span> is my main frontend framework along with <span style={{ fontWeight: "bold" }}>TailwindCSS & Bootstrap</span>.</p>
        <p className={styles.p}><span style={{ fontWeight: "bold" }}>NodeJS</span> with <span style={{ fontWeight: "bold" }}>ExpressJS</span> framework is my go-to backend stack since it&apos;s Javascript.</p>
        <div className={styles.heroLink}>
          <a href="https://github.com/fanvik">
            <i id="faIcon" className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/irfan-fairuz-442960247">
            <i id="faIcon" className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/nixnicksnix">
            <i id="faIcon" className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://discord.gg/eWbuu6PC">
            <i id="faIcon" className="fa-brands fa-discord"></i>
          </a>
          <Link href="/cv"><i id="faIcon" class="fa-regular fa-address-card"></i></Link>
        </div>
      </div>
      <div id="heroPic" className={styles.heroPic}>
        <Image
          src={"/images/profile_fanvik.jpg"}
          alt="profile picture"
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
        ></Image>
      </div>
    </div>
  );
}
