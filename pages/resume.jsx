import SiteTitle from "@/components/siteTitle";
import Image from "next/image";
import styles from "@/styles/page.module.css";

export default function Resume() {
  return (
    <>
      <div id="goToTop" className={styles.resumePage}>
        <div className={styles.topDiv}>
          <h1>{SiteTitle()}</h1>
        </div>
        <div id="resume" className={styles.resume}>
          <div className={styles.innerResume}>
            <div className={styles.aboutMe}>
              <Image
                className={styles.pic}
                src="/images/resume.jpg"
                alt="profile picture"
                height={150}
                width={150}
                style={{ borderRadius: "20%" }}
                priority
              />
              <div className={styles.info}>
                <h1>
                  IRFAN FAIRUZ{" "}
                  <span style={{ display: "inline-block" }}>@ VIKY</span>
                </h1>
                <ul>
                  <li>
                    <p id="topP">FullStack Web Developer</p>
                  </li>

                  <li>
                    <p id="topP">Based in Malaysia</p>
                  </li>
                  <li>
                    <p id="topP">Born in 1996</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.summary}>
              <div>
                <h2>Professional Summary</h2>
                <p>
                  Highly skilled and motivated web developer with years of
                  experience in front-end and back-end development.
                </p>
                <p>
                  Strong knowledge of HTML, CSS & JavaScript with a focus on
                  creating responsive and UI/UX friendly websites & web
                  applications with efficient technologies.
                </p>
                <p>
                  My main stacks are NextJS with TailwindCSS for Frontend and
                  NodeJS with ExpressJS for Backend.
                </p>
              </div>
            </div>

            <div className={styles.summary}>
              <div>
                <h2>Work Experience</h2>
                <div className={styles.summaryDiv}>
                  <div style={{ maxWidth: "150px", minWidth: "150px" }}>
                    <p id="topP">Full-Stack Developer (Freelance)</p>
                    <p id="topP">2024 - Present</p>
                  </div>
                  <div>
                    <p id="topP">Freelance and Open To Work</p>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        Develop and maintain responsive websites for clients,
                        utilizing HTML, CSS, JavaScript and ReactJS.
                      </li>
                      <li>
                        Writing well designed, testable, efficient code by using
                        best software development practices.
                      </li>
                      <li>
                        Integrating data from various back-end services and
                        databases.
                      </li>
                      <li>
                        Gather and refine specifications and requirements based
                        on technical needs.
                      </li>
                      <li>
                        Stay plugged into emerging technologies and applying
                        them into projects.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.summaryDiv}>
                  <div style={{ maxWidth: "150px", minWidth: "150px" }}>
                    <p id="topP">Web Developer (Front-End)</p>
                    <p id="topP">2021 - 2023</p>
                  </div>
                  <div>
                    <p id="topP">Ozwin Retailing Sdn Bhd</p>
                    <ul style={{ listStyleType: "disc" }}>
                    <li>
                      Write clean, maintainable code using HTML, CSS, and JavaScript, utilizing frameworks such as React and Bootstrap.
                      </li>

                      <li>
                        Developed e-commerce websites features using React, resulting in a significant increase in user engagement.
                      </li>
                      <li>Collaborated with UX designers to create intuitive interfaces ensuring the websites is easy to navigate, visually appealing, and responsive.</li>
                      <li>
                      Optimize websites performance by minimizing load times and improving responsiveness. Monitor and address any performance bottlenecks.
                      </li>
                      
                      <li>
                      Work closely with cross-functional teams, including designers, marketers, and product managers.                      </li>

                    </ul>
                  </div>
                </div>
                <div className={styles.summaryDiv}>
                  <div style={{ maxWidth: "150px", minWidth: "150px" }}>
                    <p id="topP">IT Technician & PC Sale Advisor</p>
                    <p id="topP">2017 - 2020</p>
                  </div>
                  <div>
                    <p id="topP">Stormzone PLT</p>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        Computer hardware installation, troubleshooting and
                        maintenance.
                      </li>
                      <li>
                        Advice and accommodate client for custom builds based on
                        best Price–Performance ratio.
                      </li>
                      <li>Basic networking.</li>
                      <li>Closing sales.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.summary}>
              <div>
                <h2>Education & Certifications</h2>
                <div className={styles.summaryDiv}>
                  <div style={{ maxWidth: "150px", minWidth: "150px" }}>
                    <p id="topP">Certified Full-Stack Web Developer</p>
                    <p id="topP">2022-2023</p>
                  </div>
                  <div>
                    <p id="topP">Udemy</p>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Front-End Web Development : HTML, CSS & JAVASCRIPT.</li>
                      <li>
                        Front-End Frameworks : JQuery, Bootstrap, TailwindCSS &
                        ReactJS.
                      </li>
                      <li>Back-End Web Development : NodeJS with ExpressJS.</li>
                      <li>SQL & NOSQL Databases , API and Version Control.</li>
                      <li>
                        Authentication and Security - Handling Credentials &amp;
                        Designing Secure Login.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.summaryDiv}>
                  <div style={{ maxWidth: "150px", minWidth: "150px" }}>
                    <p id="topP">Diploma In Management</p>
                    <p id="topP">2014 - 2017</p>
                  </div>
                  <div>
                    <p id="topP">Astin College</p>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        Business systems, Business ethics and Human resource
                        management.
                      </li>

                      <li>
                        Forms of business organisations management processes.
                      </li>

                      <li>
                        Future dimensions of business opportunities in a global
                        economy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.otherSection}>
              <div className={styles.title}>
                <h2>Technical Skills</h2>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillSummary}>
                  <div>
                    <p id="topP">FRONTEND</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JAVASCRIPT</li>
                      <li>TYPESCRIPT</li>
                    </ul>
                  </div>
                  <div>
                    <p id="topP">BACKEND</p>
                    <ul>
                      <li>NODEJS</li>
                      <li>PYTHON</li>
                      <li>MONGODB</li>
                      <li>MYSQL</li>
                      <li>RESTFUL</li>
                    </ul>
                  </div>
                  <div>
                    <p id="topP">FRAMEWOKRS</p>
                    <ul>
                      <li>REACTJS</li>
                      <li>NEXTJS</li>
                      <li>JQUERY</li>
                      <li>TAILWINDCSS</li>
                      <li>BOOTSTRAP</li>
                      <li>EXPRESSJS</li>
                    </ul>
                  </div>
                  <div>
                    <p id="topP">TOOLS</p>
                    <ul>
                      <li>VSCODE</li>
                      <li>GIT & GITHUB</li>
                      <li>POSTMAN</li>
                      <li>PESTICIDE</li>
                      <li>NPM</li>
                      <li>CDT</li>
                      <li>MONGOOSE</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.skillIcon}>
                  <Image
                    src="/images/html.png"
                    alt="html logo"
                    height={50}
                    width={50}
                    priority
                  />
                  <Image
                    src="/images/js.png"
                    alt="javascript logo"
                    height={50}
                    width={50}
                    priority
                  />
                                    <Image
                    src="/images/ts.png"
                    alt="typescript logo"
                    height={50}
                    width={50}
                    priority
                  />

                  <Image
                    src="/images/py.png"
                    alt="python logo"
                    height={50}
                    width={50}
                    priority
                  />
                  <Image
                    src="/images/react.png"
                    alt="react logo"
                    height={50}
                    width={50}
                    priority
                  />
                                    <Image
                    src="/images/tw.png"
                    alt="tailwind logo"
                    height={50}
                    width={50}
                    priority
                  />

                  <Image
                    src="/images/nodejs.png"
                    alt="nodejs logo"
                    height={50}
                    width={50}
                    priority
                  />
                  <Image
                    src="/images/mongo.png"
                    alt="mongodb logo"
                    height={50}
                    width={50}
                    priority
                  />
                </div>
              </div>
              <div className={styles.title}>
                <h2>Languages</h2>
              </div>
              <div className={styles.langSummary}>
                <div>
                  <p id="topP">TECHNICAL</p>
                  <ul>
                    <li>JAVASCRIPT :</li>
                    <li>
                      <h4>Advanced</h4>
                    </li>
                    <li>TYPESCRIPT :</li>
                    <li>
                      <h4>Intermediate</h4>
                    </li>
                    <li>PYTHON :</li>
                    <li>
                      <h4>Intermediate</h4>
                    </li>
                  </ul>
                </div>
                <div>
                  <p id="topP">NON-TECHNICAL</p>
                  <ul>
                    <li>ENGLISH :</li>
                    <li>
                      <h4>Bilingual Proficiency</h4>
                    </li>
                    <li>B.MALAYSIA :</li>
                    <li>
                      <h4>Native</h4>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.contactDiv}>
                <ul>
                  <li>
                    <a
                      id="darkLink"
                      className={styles.link}
                      href="https://wa.me/601163390588?text=I'm%20interested%20in%20your%20resume,%20let's%20set%20an%20interview%20on%20"
                      target="_blank"
                      aria-label="+60-11-633-90-588"
                      rel="noreferrer noopener"
                      style={{ textDecoration: "none", padding: "0 5px" }}
                    >
                      <i
                        id="faIcon"
                        className="fa-solid fa-phone"
                        style={{ fontSize: "15px" }}
                      ></i>{" "}
                      +60-1163390588
                    </a>
                  </li>
                  <li>
                    <a
                      id="darkLink"
                      className={styles.link}
                      href="mailto:vik@distrovik.com"
                      target="_blank"
                      aria-label="vik@distrovik.com"
                      rel="noreferrer noopener"
                      style={{ textDecoration: "none", padding: "0 5px" }}
                    >
                      <i
                        id="faIcon"
                        className="fa-solid fa-envelope"
                        style={{ fontSize: "15px" }}
                      ></i>{" "}
                      vik@distrovik.com
                    </a>
                  </li>
                  <li>
                    <a
                      id="darkLink"
                      className={styles.link}
                      href="https://distrovik.com"
                      target="_blank"
                      aria-label="website link"
                      rel="noreferrer noopener"
                      style={{ textDecoration: "none", padding: "0 5px" }}
                    >
                      <i
                        id="faIcon"
                        className="fa-solid fa-globe"
                        style={{ fontSize: "15px" }}
                      ></i>{" "}
                      distrovik.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a
          className={styles.downloadDiv}
          href="/irfan_resume.pdf"
          download="irfan's resume.pdf"
        >
          <i id="faIcon" className="fa-solid fa-download"></i>
        </a>
      </div>
    </>
  );
}
