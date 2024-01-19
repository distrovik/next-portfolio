import SiteTitle from "@/components/siteTitle";
import styles from "@/styles/page.module.css";

export default function Journal() {
  return (
    <>
      <div id="innerMain">
        <div className={styles.topDiv}>
          <h1>{SiteTitle()}</h1>
          <h2 id="topP">
            Stay tuned for epic dev stories and upcoming projects!
          </h2>
          <p id="topP" style={{ visibility: "hidden" }}>
            Hello World! Read my journey as a Web Developer.
          </p>
        </div>
        <div className="secondDiv"></div>
      </div>
    </>
  );
}
