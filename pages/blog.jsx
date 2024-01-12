import Header from "@/components/header";
import { usePathname } from "next/navigation";

export default function Blog() {
  const siteTitle =
  usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);
  return (
    <>
      <Header title={siteTitle} />
      <div id="innerMain">
        <h1>Blog</h1>
        <div>
          <h2>Hello World! Read my journey as a Web Developer.</h2>
          
        </div>
      </div>
    </>
  );
}
