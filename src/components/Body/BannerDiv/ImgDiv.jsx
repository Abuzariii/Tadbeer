import classes from "./ImgDiv.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ImgDiv() {
  const [div1Style, setDiv1Style] = useState({
    width: "32vw",
  });
  const [div2Style, setDiv2Style] = useState({
    width: "9vw",
  });
  const [div3Style, setDiv3Style] = useState({
    width: "9vw",
  });
  const [cd1Opacity, setCd1Opacity] = useState(1);
  const [cd2Opacity, setCd2Opacity] = useState(1);
  const [cd1h1Opacity, setCd1h1Opacity] = useState(0);
  const [cd2h1Opacity, setCd2h1Opacity] = useState(0);
  const [imgDiv1hOpacity, setImgDiv1hOpacity] = useState(1);

  return (
    <motion.div
      className={classes.wrapper}
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div style={div1Style} className={classes.imgDiv1}>
        <motion.h1 animate={{ opacity: imgDiv1hOpacity }}>
          Business Course
        </motion.h1>
        <motion.h2
          animate={{ opacity: imgDiv1hOpacity }}
          className={classes.d1h1}
        >
          100 Topics
        </motion.h2>
      </div>
      <div
        style={div2Style}
        className={classes.imgDiv2}
        onMouseEnter={() => {
          setDiv2Style({
            width: "32vw",
          });
          setDiv1Style({
            width: "9vw",
          });
          setCd1Opacity(0);
          setCd1h1Opacity(1);
          setImgDiv1hOpacity(0);
        }}
        onMouseLeave={() => {
          setDiv2Style({
            width: "9vw",
          });
          setDiv1Style({
            width: "32vw",
          });
          setCd1Opacity(1);
          setCd1h1Opacity(0);
          setImgDiv1hOpacity(1);
        }}
      >
        <motion.div
          animate={{ opacity: cd1Opacity }}
          className={classes.colorDiv}
        >
          <h1>Start-up</h1>
        </motion.div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: cd1h1Opacity }}>
          Start-up Course
        </motion.h1>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: cd1h1Opacity }}>
          100 Topics
        </motion.h2>
      </div>

      <div
        style={div3Style}
        className={classes.imgDiv3}
        onMouseEnter={() => {
          setDiv3Style({
            width: "32vw",
          });
          setDiv1Style({
            width: "9vw",
          });
          setCd2Opacity(0);
          setCd2h1Opacity(1);
          setImgDiv1hOpacity(0);
        }}
        onMouseLeave={() => {
          setDiv3Style({
            width: "9vw",
          });
          setDiv1Style({
            width: "32vw",
          });
          setCd2Opacity(1);
          setCd2h1Opacity(0);
          setImgDiv1hOpacity(1);
        }}
      >
        <motion.div
          animate={{ opacity: cd2Opacity }}
          transition={{ duration: 0.2 }}
          className={classes.colorDiv}
        >
          <h1>Placement</h1>
        </motion.div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: cd2h1Opacity }}>
          Placement Course
        </motion.h1>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: cd2h1Opacity }}>
          100 Topics
        </motion.h2>
      </div>
    </motion.div>
  );
}
