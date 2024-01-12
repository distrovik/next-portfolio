import { usePathname } from "next/navigation"
import Header from "@/components/header"

export default function Custom404 () {
    const siteTitle =
    usePathname().slice(1).charAt(0).toUpperCase() + usePathname().slice(2);

return (
    <>
    <Header title={`${siteTitle} Page not Found`}/>
    <div id="innerMain">
    <h1>404</h1>
    <h2>Nothing Here</h2>
    </div>
    </>
)
}