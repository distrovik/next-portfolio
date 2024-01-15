import Header from "./header";
import styles from "./layout.module.css";
import Footer from "./footer";
import Navbar from "./navbar";
import { ThemeProvider } from "@/components/themeProvider";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <main className={styles.main}>
          <Navbar />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}
