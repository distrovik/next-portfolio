import SiteTitle from "@/components/siteTitle";
import styles from "@/styles/page.module.css";

export default function Projects() {
  return (
    <>
      <div id="innerMain">
        <div className={styles.topDiv}>
          <h1>{SiteTitle()}</h1>
          <h2 id="topP">Here are my recent projects from github.</h2>
        </div>
      </div>
    </>
  );
}
