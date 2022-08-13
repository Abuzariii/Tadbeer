import classes from "./Banner.module.css";
import ImgDiv from "./ImgDiv";
import SwipeDiv from "./Swiper";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className={classes.bannerDiv}>
      <motion.div
        className={classes.bd1}
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1>دیکھیں۔</h1>
        <h1>سیکھیں۔</h1>
        <h1>بڑھیں۔</h1>
      </motion.div>
      <SwipeDiv />
      <ImgDiv />

      <motion.div
        className={classes.searchDiv}
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <input
          type="search"
          placeholder="Find your passion"
          className={classes.search}
        ></input>
        <div className={classes.GoDiv}>Go</div>
      </motion.div>
    </div>
  );
}
