import Header from "@/components/header";
import { usePathname } from "next/navigation";

export default function Resume() {
  const siteTitle =
    usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);

  return (
    <>
      <Header title={siteTitle} />
      <div id="innerMain">
        <div>
          <div className="topDiv">
            <h1>{siteTitle}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
