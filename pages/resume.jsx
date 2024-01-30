import SiteTitle from "@/components/siteTitle";
import Image from "next/image";
import styles from "@/styles/page.module.css";

export default function Resume() {
  return (
    <>
      <div className={styles.resumePage}>
        <div className={styles.topDiv}>
          <h1>{SiteTitle()}</h1>
        </div>
        <div id="resume" className={styles.resume}>
          <div className={styles.innerResume}>
            <div className={styles.aboutMe}>
              <Image
                className={styles.pic}
                src="/images/resume_pic.jpg"
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
                    <p id="topP">Freelance Developer</p>
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
                    <p id="topP">Freelance Web Developer</p>
                    <p id="topP">2023 - 2024</p>
                  </div>
                  <div>
                    <p id="topP">Freelance and Open For Works</p>
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
                        Stay plugged into emerging technologies and applying them
                        into projects.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.summaryDiv}>
                  <div style={{ maxWidth: "150px", minWidth: "150px" }}>
                    <p id="topP">Executive Warehouse Management</p>
                    <p id="topP">2020 - 2023</p>
                  </div>
                  <div>
                    <p id="topP">Ozwin Retailing Sdn Bhd</p>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        Organize and control stocks to ensure inventories are
                        maintained at optimum level consistent with usage
                        requirements.
                      </li>
                      <li>Weekly stocks arrangement to all branches.</li>
                      <li>
                        Manage and maintain company&apos;s E-Commerce sites:
                        Lazada, Shopee, Woocommerce and Shopify.
                      </li>
                      <li>
                        Manage and update backend database of warehouse daily to
                        ensure stock availability on E-Commerce sites & retail
                        branches.
                      </li>
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
                    <p id="topP">Full-Stack Web Development Certificate</p>
                    <p id="topP">2022 - 2023</p>
                  </div>
                  <div>
                    <p id="topP">Udemy</p>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Front-End Web Development : HTML, CSS & JS.</li>
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
                    src="/images/css.png"
                    alt="css logo"
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
                    src="/images/nodejs.png"
                    alt="nodejs logo"
                    height={50}
                    width={50}
                    priority
                  />
                  <Image
                    src="/images/vsc.png"
                    alt="vsc logo"
                    height={50}
                    width={50}
                    priority
                  />
                  <Image
                    src="/images/git.png"
                    alt="git logo"
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
                      style={{ textDecoration: "none" }}
                    >
                      <i
                        id="faIcon"
                        class="fa-solid fa-phone"
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
                      style={{ textDecoration: "none" }}
                    >
                      <i
                        id="faIcon"
                        class="fa-solid fa-envelope"
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
                      style={{ textDecoration: "none" }}
                    >
                      <i
                        id="faIcon"
                        class="fa-solid fa-globe"
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
          href="/fanvik_resume.pdf"
          download
        >
          <i id="faIcon" className="fa-solid fa-download"></i>
        </a>
      </div>
    </>
  );
}
