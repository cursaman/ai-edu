"use client";

import Image from "next/image";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./hero-swiper.module.css";

const slides = [
  { file: "website-build", alt: "노트북에서 펼쳐지는 홀로그램 홈페이지" },
  { file: "ai-collaboration", alt: "사람과 로봇의 손이 함께 만드는 홈페이지" },
  { file: "website-launch", alt: "홈페이지가 홀로그램 지구와 연결되는 모습" },
];

export default function HeroSwiper() {
  return (
    <div className={styles.gallery} role="region" aria-label="AI 홈페이지 제작 이미지">
      <Swiper
        modules={[A11y, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        rewind
        a11y={{
          prevSlideMessage: "이전 이미지",
          nextSlideMessage: "다음 이미지",
          paginationBulletMessage: "{{index}}번 이미지 보기",
        }}
      >
        {slides.map(({ file, alt }, index) => (
          <SwiperSlide key={file}>
            <div className={styles.frame}>
              <Image
                src={`/images/hero/${file}.webp`}
                alt={alt}
                fill
                sizes="(max-width: 860px) 94vw, 45vw"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
