import Header from "@/components/header";
import styles from "@/styles/page.module.css";

export default function Custom404() {
  return (
    <>
      <Header title={"Page not Found"} />
      <div id="innerMain">
        <div className={styles.centerDiv} style={{height:"60vh"}}>
          <h1>404</h1>
          <h2>Nothing Here</h2>
        </div>
      </div>
    </>
  );
}
