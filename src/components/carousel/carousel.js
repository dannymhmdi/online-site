import React, { useRef } from "react";
import styles from "./carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.min.css";
import images from "../../assets/carousel-images";
import { Navigation, Pagination, Scrollbar, A11y , EffectCube } from "swiper/modules";
import "./swiper-bundle.min.css";
import { EffectFade } from "swiper/modules";
import "../../../node_modules/swiper/swiper"
const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y ,EffectCube]}
      //   effect="fade"
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles["swiper-wrapper"]}
    >
      {images.map((img, index) => {
        return (
          <SwiperSlide key={index} className={styles["swiper-slide"]}>
            <img src={img} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
