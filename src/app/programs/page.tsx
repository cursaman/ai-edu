import type { Metadata } from "next";
import { recruitmentUrl } from "@/content/site-content";
import SiteHeader from "../site-header";
import styles from "../home.module.css";

export const metadata: Metadata = {
  title: "AI 영상·실무 과정과 기관 교육",
  description: "AI 홈페이지 심화 실습, 영상 제작, 통합 과정과 기업·기관 교육 안내",
  alternates: { canonical: "/programs" },
};

const programs = [
  { id: "web", title: "AI 홈페이지 8주 실무반", description: "내 사업이나 경력을 소개하는 여러 페이지를 만들고, 관리자 화면과 블로그까지 연결하는 실습을 준비하고 있습니다." },
  { id: "video", title: "AI 영상 제작", description: "체험반에서는 30~60초 홍보영상 한 편을 만드는 것을 목표로 합니다. 완성반에서는 쇼츠와 썸네일을 만들고 게시 계획을 세웁니다." },
  { id: "integrated", title: "홈페이지·영상 통합 과정", description: "자신의 홈페이지에 블로그와 쇼츠를 연결하고, 방문자가 문의할 수 있는 경로를 만듭니다." },
  { id: "organizations", title: "기업·기관 출강", description: "참여 인원과 교육 목표에 맞춰 특강이나 정규과정을 협의합니다. 문의할 때 대상, 인원과 원하는 결과물을 알려주세요." },
];

export default function ProgramsPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main-content">본문으로 바로가기</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className={styles.container}>
        <header className={styles.section}>
          <h1>AI 실무 과정과 기관 교육</h1>
          <p className={styles.lead}>과정별 개설 일정과 수강료는 교육 문의에서 확인해 주세요.</p>
        </header>
        {programs.map(({ id, title, description }) => (
          <section key={id} id={id} className={styles.section} style={{ scrollMarginTop: "calc(var(--nav-height) + 1rem)" }}>
            <h2>{title}</h2>
            <p className={styles.lead}>{description}</p>
          </section>
        ))}
        <div className={styles.section}>
          <a className={styles.primaryAction} href={recruitmentUrl}>교육 문의</a>
        </div>
      </main>
    </div>
  );
}
