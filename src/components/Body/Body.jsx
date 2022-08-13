import classes from "./Body.module.css";
import Banner from "./BannerDiv/Banner.jsx";
import ListsDiv from "./ListsDiv/ListsDiv";
import CardsDiv from "./CardsDiv/CardsDiv";
import PromoDiv from "./PromoDiv/PromoDIv";
import Footer from "./FooterDiv/Footer";
import CustomersDiv from "./CustomersDiv/CustomersDiv";
import BottomBlack from "./BottomBlack/BottomBlack";
import { motion } from "framer-motion";

export default function Body() {
  return (
    <div className={classes.container}>
      <Banner />

      <motion.h1
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Unlimited access too 100+ instructors
      </motion.h1>

      <ListsDiv />
      <CardsDiv />
      <PromoDiv />
      <CustomersDiv />
      <Footer />
      <BottomBlack />
    </div>
  );
}
