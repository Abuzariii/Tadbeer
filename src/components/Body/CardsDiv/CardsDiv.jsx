import classes from "./CardsDiv.module.css";
import { motion } from "framer-motion";

export default function CardsDiv() {
  return (
    <div className={classes.CardsContainer}>
      <motion.div
        className={classes.card1}
        initial={{ y: 0 }}
        whileInView={{ y: -79 }}
        transition={{ duration: 0.7 }}
      >
        <div className={classes.cardDiv1}></div>
        <div className={classes.secDiv}>
          <h1>Sales Marketing</h1>
          <h2>2 months</h2>
        </div>
      </motion.div>

      <motion.div
        className={classes.card2}
        initial={{ y: 0 }}
        whileInView={{ y: -53 }}
        transition={{ duration: 0.7 }}
      >
        <div className={classes.cardDiv2}></div>
        <div className={classes.secDiv}>
          <h1>Data Analytics</h1>
          <h2>1 year</h2>
        </div>
      </motion.div>

      <div className={classes.card3}>
        <div className={classes.cardDiv3}></div>
        <div className={classes.secDiv}>
          <h1>Object Detection</h1>
          <h2>5 months</h2>
        </div>
      </div>

      <motion.div
        className={classes.card4}
        initial={{ y: 0 }}
        whileInView={{ y: -79 }}
        transition={{ duration: 0.7 }}
      >
        <div className={classes.cardDiv4}></div>
        <div className={classes.secDiv}>
          <h1>Unity Development</h1>
          <h2>15 months</h2>
        </div>
      </motion.div>
    </div>
  );
}
