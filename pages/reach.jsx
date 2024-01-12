import Header from "@/components/header";
import { usePathname } from "next/navigation";

export default function Reach() {
  const siteTitle =
    usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);

  return (
    <>
      <Header title={siteTitle} />
      <div id="innerMain">
        <h1>Reach</h1>
      </div>
    </>
  );
}
