import classes from "./Navbar.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import { sidebar1, sidebar2 } from "./styles.js";

export default function Navbar() {
  const [styleState, setStyleState] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [delay, setDelay] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <motion.nav
      className={classes.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
    >
      {/* Sidebar */}
      <div style={styleState ? sidebar1 : sidebar2}>
        <motion.div
          className={classes.sidebarDiv1}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ delay: delay, duration: duration }}
        >
          <h3>Find ideas</h3>
          <h3>Customers</h3>
          <h3>Skills</h3>
          <h3>Categories</h3>
        </motion.div>
        <motion.div
          className={classes.sidebarDiv2}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ delay: delay, duration: duration }}
        >
          <button className={classes.loginBtn}>Login</button>
          <button className={classes.trialBtn}>Free Trial</button>
        </motion.div>
      </div>

      {/* NavBar */}
      <div className={classes.div1}>
        <div>
          <label>Login</label>
          <label className={classes.trial}>Free Trial</label>
        </div>

        <div>
          <label>Find ideas</label>
          <label>Customers</label>
          <label>Skills</label>
        </div>
      </div>
      <div className={classes.div2}>
        <div
          className={classes.ham}
          onClick={() => {
            setStyleState(!styleState);
            setOpacity(opacity === 1 ? 0 : 1);
            setDelay(delay === 0.3 ? 0 : 0.3);
            setDuration(delay === 0.3 ? 0 : 0.3);
          }}
        >
          <Hamburger
            size={30}
            direction="right"
            duration={0.3}
            color="white"
            rounded
          />
        </div>

        <h1>تدبیر</h1>
      </div>
    </motion.nav>
  );
}
