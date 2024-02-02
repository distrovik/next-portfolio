import styles from "./porjectMini.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectMini() {
  const [buttons, setButtons] = useState();
  const [defaultSlide, setDefaultSlide] = useState();
  const [buttonClicked, isButtonClicked] = useState(false);
  const [slides, setSlides] = useState();
  
  useEffect(()=> {
    fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          function mostRecent(a, b) {
            return b.id - a.id;
          }
          if (buttonClicked === true) {
            setDefaultSlide()
          } else {
          const sortedData = result.sort(mostRecent);
          function display () {
            return(
                <div id="projectCard" className={styles.slideDisplay} style={
                    sortedData[0].language === "JavaScript"
                      ? { backgroundImage: `url("/images/react.png")` }
                      : sortedData[0].language === "HTML"
                      ? { backgroundImage: `url("/images/html.png")` }
                      : sortedData[0].language === "Python"
                      ? { backgroundImage: `url("/images/py.png")` }
                      : { backgroundImage: `url("/images/git.png")` }
                  }>
                    <h3>{sortedData[0].name}</h3>
                    <p>{sortedData[0].description}</p>
                </div>  
            )
          } 
            setDefaultSlide(display);}
        },
        (error) => {
          console.log(error);
        }
      );
  })
  

  async function handleClick0() {
    await fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          function mostRecent (a,b) {
            return b.id - a.id;
          }
          const sortedData = result.sort(mostRecent)
          function customDisplay () {
            return(
                <div id="projectCard" className={styles.slideDisplay} style={
                    sortedData[0].language === "JavaScript"
                      ? { backgroundImage: `url("/images/react.png")` }
                      : sortedData[0].language === "HTML"
                      ? { backgroundImage: `url("/images/html.png")` }
                      : sortedData[0].language === "Python"
                      ? { backgroundImage: `url("/images/py.png")` }
                      : { backgroundImage: `url("/images/git.png")` }
                  }>
                    <h3>{sortedData[0].name}</h3>
                    <p>{sortedData[0].description}</p>
                </div>  
            )
          } 
          
          setSlides(customDisplay);
          isButtonClicked(true)
        },
        (error) => {
          console.log(error);
        }
      );
  }
  async function handleClick1() {
    await fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          function mostRecent (a,b) {
            return b.id - a.id;
          }
          const sortedData = result.sort(mostRecent)
          function customDisplay () {
            return(
                <div id="projectCard" className={styles.slideDisplay} style={
                    sortedData[1].language === "JavaScript"
                      ? { backgroundImage: `url("/images/react.png")` }
                      : sortedData[1].language === "HTML"
                      ? { backgroundImage: `url("/images/html.png")` }
                      : sortedData[1].language === "Python"
                      ? { backgroundImage: `url("/images/py.png")` }
                      : { backgroundImage: `url("/images/git.png")` }
                  }>
                    <h3>{sortedData[1].name}</h3>
                    <p>{sortedData[1].description}</p>
                </div>  
            )
          } 
          setSlides(customDisplay);
          isButtonClicked(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  async function handleClick2() {
    await fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          function mostRecent (a,b) {
            return b.id - a.id;
          }
          const sortedData = result.sort(mostRecent)
          function customDisplay () {
            return(
                <div id="projectCard" className={styles.slideDisplay} style={
                    sortedData[2].language === "JavaScript"
                      ? { backgroundImage: `url("/images/react.png")` }
                      : sortedData[2].language === "HTML"
                      ? { backgroundImage: `url("/images/html.png")` }
                      : sortedData[2].language === "Python"
                      ? { backgroundImage: `url("/images/py.png")` }
                      : { backgroundImage: `url("/images/git.png")` }
                  }>
                    <h3>{sortedData[2].name}</h3>
                    <p>{sortedData[2].description}</p>
                </div>  
            )
          }
          setSlides(customDisplay);
          isButtonClicked(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetch("https://api.github.com/users/distrovik/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          function mostRecent(a, b) {
            return b.id - a.id;
          }
          const sortedData = result.sort(mostRecent);

          function data () {
            return (
             
                <div className={styles.slideButton}>
                  <ul>
                    <li>
                      <button onClick={handleClick0}>
                        <h3>{sortedData[0].name}</h3>
                      </button>
                    </li>
                    <li>
                      <button onClick={handleClick1}>
                        <h3>{sortedData[1].name}</h3>
                      </button>
                    </li>
                    <li>
                      <button onClick={handleClick2}>
                        <h3>{sortedData[2].name}</h3>
                      </button>
                    </li>
                  </ul>
                  <Link href="/projects">More Projects &rarr;</Link>
                </div>
               
            );
          }
          setButtons(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div className={styles.topDiv}>
      <h2>Here are 3 of my recent projects...</h2>
       <div className={styles.slideDiv}>
        {buttons}
        {defaultSlide}
        {slides}
      </div>
    </div>
  );
}
