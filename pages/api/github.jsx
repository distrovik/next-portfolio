import SiteTitle from "@/components/siteTitle";
import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects(prop) {
  // Project Page Hooks
  const [title, setTitle] = useState();
  const [avatar, setAvatar] = useState();
  const [repoDB, setRepoDB] = useState();
  const [partialRepoDB, setPartialRepoDB] = useState();
  const [tempDB, setTempDB] = useState();
  const [expanded, setExpanded] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // Project mini Hooks
  const [defaultSlide, setDefaultSlide] = useState();
  const [buttons, setButtons] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          if (
            // Add to fetch StaticAPI
            // Project Showcase Styling
            result.documentation_url ===
            "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"
          ) {
            console.log(result);
          } else {
            setTitle(result[0].owner.html_url.toUpperCase().slice(8));
            setAvatar(result[0].owner.avatar_url);
            setLoaded(true);

            function mostRecent(a, b) {
              return b.id - a.id;
            }
            const sortedData = result.sort(mostRecent);
            const projects = sortedData.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.svn_url}
                  target="_blank"
                  id="projectCard"
                  aria-label="github repo link"
                  rel="noreferrer noopener"
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
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              );
            });
            setRepoDB(projects);
            setPartialRepoDB(projects.slice(0, 6));
            setTempDB(projects.slice(0, 6));

            // Project Showcase
            function slide(item) {
              return (
                <a
                  href={sortedData[item].html_url}
                  id="projectCard"
                  target="_blank"
                  aria-label="github repo link"
                  rel="noreferrer noopener"
                  className={styles.slideDisplay}
                  style={
                    sortedData[item].name == "react"
                      ? { backgroundImage: `url("/images/react.png)` }
                      : sortedData[item].language === "JavaScript"
                      ? { backgroundImage: `url("/images/js.png")` }
                      : sortedData[item].language === "HTML"
                      ? { backgroundImage: `url("/images/html.png")` }
                      : sortedData[item].language === "Python"
                      ? { backgroundImage: `url("/images/py.png")` }
                      : { backgroundImage: `url("/images/git.png")` }
                  }
                >
                  <div>
                    <h3>{sortedData[item].name}</h3>
                    <p>{sortedData[item].description}</p>
                  </div>
                </a>
              );
            }
            setDefaultSlide(slide(10));

            function button1() {
              setDefaultSlide(slide(10));
            }

            function button2() {
              setDefaultSlide(slide(9));
            }

            function button3() {
              setDefaultSlide(slide(3));
            }

            function button() {
              return (
                <div className={styles.slideButton}>
                  <div id="hoverBackground" onClick={button1}>
                    <h3>{sortedData[10].name}</h3>
                  </div>

                  <div id="hoverBackground" onClick={button2}>
                    <h3>{sortedData[9].name}</h3>
                  </div>

                  <div id="hoverBackground" onClick={button3}>
                    <h3>{sortedData[3].name}</h3>
                  </div>

                  <Link
                    id="darkButtonLink"
                    className={styles.buttonLink}
                    href="/projects"
                  >
                    <h3>More Projects &rarr;</h3>
                  </Link>
                </div>
              );
            }
            setButtons(button);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  function showMoreRepo() {
    setPartialRepoDB(repoDB);
    setExpanded(true);
  }

  function showLessRepo() {
    setPartialRepoDB(tempDB);
    setExpanded(false);
  }

  return (
    <>
      <div style={{ display: prop.page }}>
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
            src={!loaded ? "/images/github1.png" : avatar}
            alt="Github Avatar"
            height={100}
            width={100}
            style={{ borderRadius: "20%" }}
            priority
          />
          <a href={`https://${title}`} target="_blank">
            <h3>{title}</h3>
          </a>
          <div className="content-center grid sm:grid-cols-2 gap-3">
            {partialRepoDB}
          </div>
          <button
            id="projectButton"
            className={styles.showMore}
            onClick={!expanded ? showMoreRepo : showLessRepo}
          >
            {!expanded ? "Show More" : "Show Less"}
          </button>
        </div>
      </div>
      <div className={styles.mainDiv} style={{ display: prop.mini }}>
        <h1>Here are 3 of my recent projects...</h1>
        <div className={styles.slideDiv}>
          {buttons}
          {defaultSlide}
        </div>
      </div>
    </>
  );
}
