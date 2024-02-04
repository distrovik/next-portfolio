import GithubProjects from "@/pages/api/github";
import SiteTitle from "@/components/siteTitle";
import styles from "@/styles/page.module.css";

export default function Projects() {
  return (
    <>
      <div id="goToTop" className={styles.topDiv}>
        <h1>{SiteTitle()}</h1>
        <h2 id="topP">
        Since 2022, I&apos;ve been immersed in programming, here is a showcase of projects
          I&apos;ve built.
        </h2>
      </div>

      <div className={styles.projectTitle}>
        <h2 id="topP">My recent projects from github...</h2>
      </div>
      <GithubProjects mini="none" />
    </>
  );
}
