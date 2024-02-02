import SiteTitle from "@/components/siteTitle";
import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [avatarURL, setAvatarURL] = useState();
  const [title, setTitle] = useState();
  const [repoDB, setRepoDB] = useState();
  const [moreRepo, setMoreRepo] = useState();
  const [expanded, setExpanded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          function mostRecent (a,b) {
            return b.id - a.id;
          }
          const sortedData = result.sort(mostRecent)
          const data = sortedData.slice(0, 6).map((item) => {
            return (
              <a key={item.id} href={item.svn_url} target="_blank">
                <div
                  id="projectCard"
                  className={styles.projectCard}
                  style={
                    item.language === "JavaScript"
                      ? { backgroundImage: `url("/images/react.png")` }
                      : item.language === "HTML"
                      ? { backgroundImage: `url("/images/html.png")` }
                      : item.language === "Python"
                      ? { backgroundImage: `url("/images/py.png")` }
                      : { backgroundImage: `url("/images/git.png")` }
                  }
                >
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            );
          });
          setRepoDB(data);
          setLoaded(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  async function showMoreRepo() {
    await fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          function mostRecent (a,b) {
            return b.id - a.id;
          }
          const sortedData = result.sort(mostRecent)
          const data = sortedData.slice(6).map((item) => {
            return (
              <a key={item.id} href={item.svn_url} target="_blank">
                <div
                  id="projectCard"
                  className={styles.projectCard}
                  style={
                    item.language === "JavaScript"
                      ? { backgroundImage: `url("/images/react.png")` }
                      : item.language === "HTML"
                      ? { backgroundImage: `url("/images/html.png")` }
                      : item.language === "Python"
                      ? { backgroundImage: `url("/images/py.png")` }
                      : { backgroundImage: `url("/images/git.png")` }
                  }
                >
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            );
          });
          setMoreRepo(data);
          setExpanded(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function showLessRepo() {
    setMoreRepo();
    setExpanded(false);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/distrovik")
      .then((res) => res.json())
      .then(
        (result) => {
          setAvatarURL(result.avatar_url);
          setTitle(result.html_url.toUpperCase().slice(8));
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <>
      <div id="goToTop" className={styles.topDiv}>
        <h1>{SiteTitle()}</h1>
        <h2 id="topP">
          I&apos;ve been programming since 2022. You can find projects that
          I&apos;ve built here.
        </h2>
      </div>

      <div className={styles.projectTitle}>
        <h2 id="topP">Here are my recent projects from github.</h2>
      </div>
      <div className={styles.projectSummary}>
        <Image 
        src={!loaded?"/images/git.png":avatarURL}
        alt="Github Avatar"
        height={100}
        width={100}
        priority/>
        <a href={`https://${title}`} target="_blank">
          <h3>{title}</h3>
        </a>
        <div className="content-center grid sm:grid-cols-2 gap-3">
          {repoDB}
          {moreRepo}
        </div>
        <button
          id="projectButton"
          className={styles.showMore}
          onClick={!expanded ? showMoreRepo : showLessRepo}
        >
          {!expanded ? "Show More" : "Show Less"}
        </button>
      </div>
    </>
  );
}
