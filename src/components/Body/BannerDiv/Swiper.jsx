import classes from "./Swiper.module.css";
import useWindowDimensions from "../WindowsDimensionHook";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwipeDiv() {
  const { width } = useWindowDimensions();

  return (
    <Swiper
      modules={[A11y]}
      spaceBetween={10}
      slidesPerView={width > 900 ? 2 : 1}
      className={classes.swiper}
    >
      <SwiperSlide className={`${classes.slide} ${classes.slide1}`}>
        <h1>Business Course</h1>
        <h2>100 topics</h2>
      </SwiperSlide>
      <SwiperSlide className={`${classes.slide} ${classes.slide2}`}>
        <h1>Start-up Course</h1>
        <h2>100 topics</h2>
      </SwiperSlide>
      <SwiperSlide className={`${classes.slide} ${classes.slide3}`}>
        <h1>Placement Course</h1>
        <h2>100 topics</h2>
      </SwiperSlide>
    </Swiper>
  );
}
