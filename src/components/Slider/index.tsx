import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";

type ImgT = {
  alt: string;
  src: string;
};

type SliderPropsT = {
  imgs: ImgT[];
};

export const Slider: React.FC<SliderPropsT> = ({ imgs }) => {
  return (
    <Swiper modules={[Keyboard, Pagination]} slidesPerView={1}>
      {imgs.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img.src} alt={img.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
