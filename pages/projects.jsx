import Header from "@/components/header";
import { usePathname } from "next/navigation";

export default function Projects() {
  const siteTitle =
    usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);

  return (
    <>
      <Header title={siteTitle} />
      <div id="innerMain">
        <h1>Projects</h1>
      </div>
    </>
  );
}
