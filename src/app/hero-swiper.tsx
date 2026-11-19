"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
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
  const [instance, setInstance] = useState<SwiperInstance | null>(null);
  const [playing, setPlaying] = useState(true);

  function initialize(swiper: SwiperInstance) {
    setInstance(swiper);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swiper.autoplay.stop();
      setPlaying(false);
    }
  }

  function toggleAutoplay() {
    if (!instance) return;
    if (playing) instance.autoplay.stop();
    else instance.autoplay.start();
    setPlaying(!playing);
  }

  return (
    <div className={styles.gallery} role="region" aria-label="AI 홈페이지 제작 이미지">
      <Swiper
        modules={[A11y, Autoplay, Navigation, Pagination]}
        onSwiper={initialize}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                sizes="100vw"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={styles.playback} type="button" onClick={toggleAutoplay} disabled={!instance}>
        {playing ? "자동 전환 일시정지" : "자동 전환 재생"}
      </button>
    </div>
  );
}
