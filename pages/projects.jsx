import SiteTitle from "@/components/siteTitle";
import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [avatarURL, setAvatarURL] = useState();
  const [title, setTitle] = useState();
  const [repoName, setRepoName] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          const data = result.map((item) => {
            return (
              <a key={item.id} href={item.svn_url} target="_blank">
                <div id="projectCard" className={styles.projectCard} style={(item.language === "JavaScript") ? {backgroundImage:`url("/images/react.png")`} : (item.language === "HTML") ? {backgroundImage:`url("/images/html.png")`} : (item.language === "Python") ? {backgroundImage:`url("/images/py.png")`} : {backgroundImage:`url("/images/git.png")`}}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            );
          });
          setRepoName(data);
        }, 
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/distrovik")
      .then((res) => res.json())
      .then(
        (result) => {
          setAvatarURL(result.avatar_url);
          setTitle(result.login.toUpperCase());
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
        <h3>{title}</h3>
        <div className="content-center grid sm:grid-cols-1  md:grid-cols-2 gap-3">
          {repoName}
        </div>
      </div>
    </>
  );
}
