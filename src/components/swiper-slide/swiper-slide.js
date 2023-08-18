import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
  EffectCoverflow
} from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./swiper-slide.module.css";
import slide1 from "../../assets/MySwioper/slide1.jpg";
import slide2 from "../../assets/MySwioper/slide2.jpg";
import slide3 from "../../assets/MySwioper/slide3.jpg";
import slide4 from "../../assets/MySwioper/slide4.jpg";
import slide5 from "../../assets/MySwioper/slide5.jpg";
import slide6 from "../../assets/MySwioper/slide6.jpg";
import { Row } from "react-bootstrap";
const MySwiper = () => {
  return (
    <Row className="mt-5 ">
      <div className={`col-md-4 col-12 py-0 mb-4 ${styles['padding-left-swiper']}`} >
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFlip,
            Autoplay,
          ]}
          effect={"flip"}
          className={`${styles["swipers"]}  rounded-4 `}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="w-100">
            <img
              src={slide4}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide5}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide6}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={`col-md-8 col-12  py-0 ${styles['padding-right-swiper']}`} >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay , EffectCoverflow]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 150,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          className={`${styles["swipers"]}  rounded-4`}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className=" w-100">
            <img
              src={slide1}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide2}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide3}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Row>
  );
};

export default MySwiper;
