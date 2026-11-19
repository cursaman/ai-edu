import type { Metadata } from "next";
import { recruitmentUrl } from "@/content/site-content";
import LearningCards from "../../learning-cards";
import SiteHeader from "../../site-header";
import styles from "../../home.module.css";

export const metadata: Metadata = {
  title: "교육 문의",
  alternates: { canonical: "/education/join.html" },
};

export default function JoinPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#inquiry-main">본문으로 바로가기</a>
      <SiteHeader />
      <main id="inquiry-main" tabIndex={-1}>
        <header className={`${styles.section} ${styles.container}`}>
          <h1>교육 문의</h1>
          <p className={styles.lead}>문의 유형을 선택한 뒤 당근 모임의 채팅에서 내용을 전달해 주세요.</p>
        </header>
        <LearningCards title="어떤 교육을 알아보고 계세요?" items={[
          { title: "개인 수강 문의", description: "관심 과정, 참여 가능한 날짜, 만들고 싶은 결과물을 알려주세요.", href: recruitmentUrl, label: "당근에서 수강 문의" },
          { title: "기업·기관 출강 문의", description: "교육 대상과 인원, 희망 일정, 만들고 싶은 결과물을 알려주세요.", href: recruitmentUrl, label: "당근에서 출강 문의" },
        ]} />
      </main>
    </div>
  );
}
