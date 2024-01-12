import Script from "next/script";

export default function Footer() {
  return (
    <div>
      <p>&copy; Fanvik {new Date().getFullYear()}</p>
      <Script
        src={"https://kit.fontawesome.com/04da4f41a5.js"}
        crossorigin={"anonymous"}
      ></Script>
    </div>
  );
}
