import SiteTitle from "@/components/siteTitle";
import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects(prop) {
  // Project Page Hooks
  const [title, setTitle] = useState();
  const [avatar, setAvatar] = useState();
  const [loaded, setLoaded] = useState(false);
  const [repoData, setRepoData] = useState([]);
  const [partialRepoData, setPartialRepoData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  // Project Showcase Hooks
  const [defaultSlide, setDefaultSlide] = useState([]);
  const [activeButton1, setActiveButton1] = useState(true);
  const [activeButton2, setActiveButton2] = useState(false);
  const [activeButton3, setActiveButton3] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://api.github.com/users/distrovik/repos"
      );
      const data = await result.json();

      if (
        data.documentation_url ===
        "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"
      ) {
        console.log("400", data);
      } else {
        setTitle(data[0].owner.html_url.toUpperCase().slice(8));
        setAvatar(data[0].owner.avatar_url);
        setLoaded(true);

        function mostRecent(a, b) {
          return b.id - a.id;
        }

        const sortedData = data.sort(mostRecent);

        setRepoData(sortedData);
        setPartialRepoData(sortedData.slice(0, 6));
        setTempData(sortedData.slice(0, 6));

        function array(item) {
          return (
            <a
              href={sortedData[item].html_url}
              id="projectCard"
              target="_blank"
              aria-label="github repo link"
              rel="noreferrer noopener"
              className={styles.slideDisplay}
              style={
                sortedData[item].language === "JavaScript"
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
        setDefaultSlide(array(10));
      }
    }
    fetchData();
  }, []);

  function slide(item) {
    return (
      <a
        href={repoData[item].html_url}
        id="projectCard"
        target="_blank"
        aria-label="github repo link"
        rel="noreferrer noopener"
        className={styles.slideDisplay}
        style={
          repoData[item].language === "JavaScript"
            ? { backgroundImage: `url("/images/js.png")` }
            : repoData[item].language === "HTML"
            ? { backgroundImage: `url("/images/html.png")` }
            : repoData[item].language === "Python"
            ? { backgroundImage: `url("/images/py.png")` }
            : { backgroundImage: `url("/images/git.png")` }
        }
      >
        <div>
          <h3>{repoData[item].name}</h3>
          <p>{repoData[item].description}</p>
        </div>
      </a>
    );
  }

  function showMoreRepo() {
    setPartialRepoData(repoData);
    setExpanded(true);
  }

  function showLessRepo() {
    setPartialRepoData(tempData);
    setExpanded(false);
  }

  function button1() {
    setDefaultSlide(slide(10));
    setActiveButton1(true);
    setActiveButton2(false);
    setActiveButton3(false);
  }

  function button2() {
    setDefaultSlide(slide(9));
    setActiveButton1(false);
    setActiveButton2(true);
    setActiveButton3(false);
  }

  function button3() {
    setDefaultSlide(slide(3));
    setActiveButton1(false);
    setActiveButton2(false);
    setActiveButton3(true);
  }

  return (
    <>
      {/* Project Page */}
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
            {partialRepoData.map((item) => (
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
            ))}
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
      {/* Project Showcase */}
      <div id="test" className={styles.mainDiv} style={{ display: prop.mini }}>
        <h1>Here are 3 of my recent projects...</h1>
        <div className={styles.slideDiv}>
          {/* buttons */}
          <div className={styles.slideButton}>
            <div
              id="hoverBackground"
              onClick={button1}
              className={activeButton1 ? "activeButton" : null}
            >
              <h3>{!loaded ? "Button" : repoData[10].name}</h3>
            </div>

            <div
              id="hoverBackground"
              onClick={button2}
              className={activeButton2 ? "activeButton" : null}
            >
              <h3>{!loaded ? "Button" : repoData[9].name}</h3>
            </div>

            <div
              id="hoverBackground"
              onClick={button3}
              className={activeButton3 ? "activeButton" : null}
            >
              <h3>{!loaded ? "Button" : repoData[3].name}</h3>
            </div>

            <Link
              id="darkButtonLink"
              className={styles.buttonLink}
              href="/projects"
            >
              <h3>More Projects &rarr;</h3>
            </Link>
          </div>

          {/* slide */}
          {loaded ? (
            defaultSlide
          ) : (
            <a href={null} className={styles.slideDisplay}>
              <div>
                <h3>Title</h3>
                <p>Description</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
