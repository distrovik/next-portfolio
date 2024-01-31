import SiteTitle from "@/components/siteTitle";
import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [avatarURL, setAvatarURL] = useState();
  const [title, setTitle] = useState();
  const [repoDB, setRepoDB] = useState();
  const [moreRepo, setMoreRepo] = useState();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          const data = result.slice(0, 6).map((item) => {
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
          const data = result.slice(6).map((item) => {
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

  function showLessRepo () {
    setMoreRepo()
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
      <div className={styles.topDiv}>
        <h1>{SiteTitle()}</h1>
        <h2 id="topP">Here are my recent projects from github.</h2>
      </div>
      <div className={styles.projectSummary}>
        <img
          src={avatarURL}
          alt="avatar"
          style={{ width: "100px", height: "100px" }}
        />
        <a href={`https://${title}`} target="_blank">
          <h3>{title}</h3>
        </a>
        <div className="content-center grid sm:grid-cols-2 gap-3">
          {repoDB}
          {moreRepo}
        </div>
        <button id="projectButton" className={styles.showMore} onClick={!expanded?showMoreRepo:showLessRepo}>{!expanded ? "Show More" : "Show Less"}</button>
      </div>
    </>
  );
}
