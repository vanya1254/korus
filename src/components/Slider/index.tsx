import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Keyboard, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/keyboard";

import styles from "./Slider.module.scss";

type ImgT = {
  alt: string;
  src: string;
};

type SliderPropsT = {
  imgs: ImgT[];
};

export const Slider: React.FC<SliderPropsT> = ({ imgs }) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <>
      <Swiper
        modules={[Keyboard, Navigation]}
        grabCursor
        slidesPerView={1}
        className={styles.root}
        onBeforeInit={(swiper: SwiperType) => (swiperRef.current = swiper)}
      >
        {imgs.map((img, i) => (
          <SwiperSlide key={i} className={styles.root_slide}>
            <img src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.root__navigation}>
        <button
          className={styles.root_btn}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            transform="rotate(180)"
          >
            <path
              d="M9.39777 5.66281L3.36027 0.947189C3.34449 0.934768 3.32553 0.92705 3.30557 0.924919C3.2856 0.922788 3.26544 0.926332 3.2474 0.935143C3.22936 0.943955 3.21417 0.957676 3.20357 0.974732C3.19298 0.991787 3.18741 1.01149 3.1875 1.03156V2.06683C3.1875 2.13246 3.2183 2.1954 3.2692 2.23558L8.09063 6.00031L3.2692 9.76505C3.21697 9.80522 3.1875 9.86817 3.1875 9.9338V10.9691C3.1875 11.0588 3.29063 11.1083 3.36027 11.0534L9.39777 6.33781C9.44908 6.29779 9.4906 6.24658 9.51915 6.1881C9.5477 6.12962 9.56254 6.06539 9.56254 6.00031C9.56254 5.93523 9.5477 5.87101 9.51915 5.81253C9.4906 5.75404 9.44908 5.70284 9.39777 5.66281Z"
              fill="black"
              fillOpacity="0.85"
            />
          </svg>
        </button>
        <button
          className={styles.root_btn}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M9.39777 5.66281L3.36027 0.947189C3.34449 0.934768 3.32553 0.92705 3.30557 0.924919C3.2856 0.922788 3.26544 0.926332 3.2474 0.935143C3.22936 0.943955 3.21417 0.957676 3.20357 0.974732C3.19298 0.991787 3.18741 1.01149 3.1875 1.03156V2.06683C3.1875 2.13246 3.2183 2.1954 3.2692 2.23558L8.09063 6.00031L3.2692 9.76505C3.21697 9.80522 3.1875 9.86817 3.1875 9.9338V10.9691C3.1875 11.0588 3.29063 11.1083 3.36027 11.0534L9.39777 6.33781C9.44908 6.29779 9.4906 6.24658 9.51915 6.1881C9.5477 6.12962 9.56254 6.06539 9.56254 6.00031C9.56254 5.93523 9.5477 5.87101 9.51915 5.81253C9.4906 5.75404 9.44908 5.70284 9.39777 5.66281Z"
              fill="black"
              fillOpacity="0.85"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
