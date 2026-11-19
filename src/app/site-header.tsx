import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site-content";
import autoSitesLogo from "../../public/images/brand/autosites-auto-logo-v2.png";
import CourseSelector from "./course-selector";

export default function SiteHeader() {
  return <header className="siteHeader" data-site-header>
    <Link className="siteHeaderBrand" href="/" aria-label="AutoSites 홈으로 이동"><Image src={autoSitesLogo} alt="" width={40} height={40} priority /><span>AutoSites</span></Link>
    <CourseSelector groups={siteContent.navigation} />
    <Link className="siteHeaderAction" href="/education/join.html">교육 문의</Link>
  </header>;
}
