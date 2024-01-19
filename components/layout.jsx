import Header from "./header";
import styles from "./layout.module.css";
import Footer from "./footer";
import Navbar from "./navbar";
import { ThemeProvider } from "@/components/themeProvider";
import { Teko, Montserrat } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <main className={`${teko.variable} ${montserrat.variable}`}>
          <div className={styles.main}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}
