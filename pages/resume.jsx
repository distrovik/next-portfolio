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
          <div className={styles.head}>
            <div className={styles.aboutMe}>
              <Image
                className={styles.pic}
                src="/images/profile_fanvik.jpg"
                alt="profile picture"
                height={150}
                width={150}
                style={{ borderRadius: "20%" }}
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
                  I&apos;m an enthusiastic developer with a strong set of
                  technical && non-technical skills.
                </p>
                <p>
                  I&apos;m dedicated towards creating useful and interactive web
                  & web applications with modern and efficient web technologies.
                </p>
                <p>
                  My main stacks are NextJS with TailwindCSS for Frontend and
                  NodeJS with ExpressJS for Backend.
                </p>
              </div>
            </div>

            <div className={styles.skillSection}>
              <div className={styles.title}>
                <h2>Skills</h2>
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

                <div className={styles.skillBox}>
                  <img src="/images/html.png" alt="html logo" />
                  <img src="/images/css.png" alt="css logo" />
                  <img src="/images/js.png" alt="js logo" />
                  <img src="/images/py.png" alt="py logo" />
                  <img src="/images/react.png" alt="react logo" />
                  <img src="/images/nodejs.png" alt="nodejs logo" />
                  <img src="/images/vsc.png" alt="vsc logo" />
                  <img src="/images/git.png" alt="git logo" />
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
            </div>

            <div className={styles.summary}>
              <div>
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
            </div>
            <div className={styles.summary}>
              <div>
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
