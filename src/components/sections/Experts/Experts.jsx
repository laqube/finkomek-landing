import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./experts.css";
// import required modules
import { Pagination } from "swiper/modules";

export default function Experts() {
  const { t } = useTranslation("translation");
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide className="expert-slide">
          <div className="expert-slide-container">
            <div className="expert-slide-pic-wrapper">
              <img
                src="/assets/expert1.png"
                alt="aizhan"
                className="expert-slide-pic"
              />
            </div>
            <div className="expert-slide-content">
              <h1>{t("experts.carousel.0.name")}</h1>
              <a>{t("experts.carousel.0.description")}</a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <button className="expert-slide-button">
                  <a>{t("experts.carousel.0.button")}</a>
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="expert-slide">
          <div className="expert-slide-container">
            <div className="expert-slide-pic-wrapper">
              <img
                src="/assets/expert2.png"
                alt="secret"
                className="expert-slide-pic"
              />
            </div>
            <div className="expert-slide-content">
              <h1>{t("experts.carousel.1.name")}</h1>
              <a>{t("experts.carousel.1.description")}</a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <button className="expert-slide-button">
                  <a>{t("experts.carousel.1.button")}</a>
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="expert-slide">
          <div className="expert-slide-container">
            <div className="expert-slide-pic-wrapper">
              <img
                src="/assets/expert3.png"
                alt="victoria"
                className="expert-slide-pic"
              />
            </div>
            <div className="expert-slide-content">
              <h1>{t("experts.carousel.2.name")}</h1>
              <a>{t("experts.carousel.2.description")}</a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <button className="expert-slide-button">
                  <a>{t("experts.carousel.2.button")}</a>
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
