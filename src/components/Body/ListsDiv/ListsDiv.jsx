import { motion } from "framer-motion";
import classes from "./ListsDiv.module.css";
import { useState } from "react";

export default function ListsDiv() {
  const [listStyle1, setListStyle1] = useState({
    textDecoration: "underline",
    textDecorationThickness: "7px",
    textDecorationColor: "rgb(145, 230, 145)",
  });
  const [listStyle2, setListStyle2] = useState({ textDecoration: "none" });
  const [listStyle3, setListStyle3] = useState({ textDecoration: "none" });
  const [listStyle4, setListStyle4] = useState({ textDecoration: "none" });
  const [listStyle5, setListStyle5] = useState({ textDecoration: "none" });
  const [listStyle6, setListStyle6] = useState({ textDecoration: "none" });

  return (
    <motion.ul
      className={classes.list}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <li
        style={listStyle1}
        onClick={() => {
          setListStyle1({
            textDecoration: "underline",
            textDecorationThickness: "7px",
            textDecorationColor: "rgb(145, 230, 145)",
          });
          setListStyle2({ textDecoration: "none" });
          setListStyle3({ textDecoration: "none" });
          setListStyle4({ textDecoration: "none" });
          setListStyle5({ textDecoration: "none" });
          setListStyle6({ textDecoration: "none" });
        }}
      >
        All categories
      </li>
      <li
        style={listStyle2}
        onClick={() => {
          setListStyle1({ textDecoration: "none" });
          setListStyle2({
            textDecoration: "underline",
            textDecorationThickness: "7px",
            textDecorationColor: "rgb(145, 230, 145)",
          });
          setListStyle3({ textDecoration: "none" });
          setListStyle4({ textDecoration: "none" });
          setListStyle5({ textDecoration: "none" });
          setListStyle6({ textDecoration: "none" });
        }}
      >
        Entertainment
      </li>
      <li
        style={listStyle3}
        onClick={() => {
          setListStyle1({ textDecoration: "none" });
          setListStyle2({ textDecoration: "none" });
          setListStyle3({
            textDecoration: "underline",
            textDecorationThickness: "7px",
            textDecorationColor: "rgb(145, 230, 145)",
          });
          setListStyle4({ textDecoration: "none" });
          setListStyle5({ textDecoration: "none" });
          setListStyle6({ textDecoration: "none" });
        }}
      >
        Lifestyle
      </li>
      <li
        style={listStyle4}
        onClick={() => {
          setListStyle1({ textDecoration: "none" });
          setListStyle2({ textDecoration: "none" });
          setListStyle3({ textDecoration: "none" });
          setListStyle4({
            textDecoration: "underline",
            textDecorationThickness: "7px",
            textDecorationColor: "rgb(145, 230, 145)",
          });
          setListStyle5({ textDecoration: "none" });
          setListStyle6({ textDecoration: "none" });
        }}
      >
        Writing
      </li>
      <li
        style={listStyle5}
        onClick={() => {
          setListStyle1({ textDecoration: "none" });
          setListStyle2({ textDecoration: "none" });
          setListStyle3({ textDecoration: "none" });
          setListStyle4({ textDecoration: "none" });
          setListStyle5({
            textDecoration: "underline",
            textDecorationThickness: "7px",
            textDecorationColor: "rgb(145, 230, 145)",
          });
          setListStyle6({ textDecoration: "none" });
        }}
      >
        Business
      </li>
      <li
        style={listStyle6}
        onClick={() => {
          setListStyle1({ textDecoration: "none" });
          setListStyle2({ textDecoration: "none" });
          setListStyle3({ textDecoration: "none" });
          setListStyle4({ textDecoration: "none" });
          setListStyle5({ textDecoration: "none" });
          setListStyle6({
            textDecoration: "underline",
            textDecorationThickness: "7px",
            textDecorationColor: "rgb(145, 230, 145)",
          });
        }}
      >
        Food
      </li>
    </motion.ul>
  );
}
