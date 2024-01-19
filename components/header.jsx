import Head from "next/head";
import { usePathname } from "next/navigation";

export const Title = "Fanvik Portfolio";

export default function Header(prop) {
  const siteTitle =
    usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta property="og:locale" content="en-US"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Fanvik's Portfolio build with NextJS" />
      <meta name="author" content="Fanvik" />
      <meta property="og:image" content="https://distrovik.com/favicon.ico" />
      <meta name="og:title" content={Title} />
      <meta property="og:url" content="https://distrovik.com" />
      <meta property="og:site_name" content="DistroVik" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DistroVik" />
      <meta
        name="twitter:description"
        content="Fanvik's Portfolio build with NextJS"
      />
      <meta
        name="twitter:image"
        content="https://distrovik.com/favicon.ico"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://distrovik.com" />

      <title>
        {prop.title}
        {siteTitle} | DistroVik
      </title>
    </Head>
  );
}
