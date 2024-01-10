import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <html>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main>
          <section className={utilStyles.headingMd} style={{ height: "100vh" }}>
            <h1>Hello World!</h1>
            <h2>Read my journey in Software Development</h2>
          </section>
        </main>
      </Layout>
    </html>
  );
}
