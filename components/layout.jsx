import Head from "next/head";
import styles from "./layout.module.css";
import Footer from "./footer";
import Navbar from "./navbar";
import { ThemeProvider } from "@/pages/themeProvider";

const name = "Viky Irfan";
export const siteTitle = "Fanvik Portfolio";

export default function Layout({ children}) {
  return (
    <html lang="en">
    <body className={`${styles.container}`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fanvik's Portfolio powered by NextJS"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="./public/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar></Navbar>
      <main>{children}</main>
      </ThemeProvider>
      <Footer></Footer>
    </body>
    </html>
  );
}
