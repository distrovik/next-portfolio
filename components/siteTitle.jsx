import { usePathname } from "next/navigation";

export default function SiteTitle() {
  const siteTitle =
    usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);

  return <span>{siteTitle}</span>;
}
