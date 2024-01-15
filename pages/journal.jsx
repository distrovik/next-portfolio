import Header from "@/components/header";
import { usePathname } from "next/navigation";
import styles from "@/styles/page.module.css"

export default function Journal() {
  const siteTitle =
    usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);
  return (
    <>
      <Header title={siteTitle} />
      <div id="innerMain">
        <div >
          <div className={styles.topDiv}>
            <h1>{siteTitle}</h1>

            <p id="topP" style={{visibility: "hidden"}}>Hello World! Read my journey as a Web Developer.</p>
          </div>
          <div className="secondDiv">
            <h2 id="topP">Stay tuned for epic dev stories and upcoming projects!</h2>
          </div>
        </div>
      </div>
    </>
  );
}
