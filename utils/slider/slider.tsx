"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import classes from "./slider.module.scss";

interface ProjectSliderProps {
  images: string[];
}

export default function Slider({ images }: ProjectSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={classes.projectSlider}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{ clickable: true }}
        modules={[Navigation, Thumbs]}
        className={classes.mainSwiper}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1200: { slidesPerView: 1 },
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Slide ${i}`}
              width={600}
              height={400}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={3}
        /* 
        centeredSlides={true} */
        /*  slidesPerView={3} */
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className={classes.thumbSwiper}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Thumb ${i}`}
              width={80}
              height={80}
              style={{ objectFit: "cover", cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
