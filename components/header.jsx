import Head from "next/head";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentPath = usePathname();
  const siteTitle =
    usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta property="og:locale" content="en-US" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Freelance Software Developer" />
      <meta name="author" content="Fanvik" />
      <meta property="og:image" content="https://distrovik.com/images/profile_fanvik.jpg" />
      <meta name="og:title" content="Fanvik's Portfolio"/>
      <meta property="og:url" content="https://distrovik.com" />
      <meta property="og:site_name" content="DistroVik" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DistroVik" />
      <meta
        name="twitter:description"
        content="Freelance Software Developer"
      />
      <meta
        name="twitter:image"
        content="https://distrovik.com/favicon.ico"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://distrovik.com" />

      <title>
        {currentPath === "/" ? "DistroVik" : `${siteTitle} | DistroVik`}
      </title>
    </Head>
  );
}
