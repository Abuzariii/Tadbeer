import classes from "./Footer.module.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <motion.label whileHover={{ scale: 1.2 }}>Home</motion.label>
        <motion.label whileHover={{ scale: 1.2 }}>Contact</motion.label>
        <motion.label whileHover={{ scale: 1.2 }}>About us</motion.label>
      </div>
    </footer>
  );
}
