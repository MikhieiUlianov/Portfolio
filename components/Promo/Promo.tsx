"use client";
import { motion } from "framer-motion";
import Section from "../section/section";
import classes from "./promo.module.scss";

export default function Promo() {
  return (
    <div className={classes.overlay}>
      {/*  <Hamburger /> */}

      <Section sectionClass={classes.promo}>
        <motion.div
          className={`${classes.subtitle} title title_fz16 `}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My name is Mikhiei Ulianov
        </motion.div>

        <motion.div
          className={`${classes.title} title title_fz48`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I'm web-developer from town Kiev
        </motion.div>

        <motion.div
          className={classes.btns}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/*     <a
            href="#portfolio"
            className={`promo__link btn__promo ${
              activeButton === "portfolio" ? " btn__promo_active " : ""
            }`}
            onClick={() => handleClick("portfolio")}
          >
            Portfolio
          </a>
          <a
            href="#about"
            className={`promo__link btn__promo ${
              activeButton === "about" ? " btn__promo_active " : ""
            }`}
            onClick={() => handleClick("about")}
          >
            About me
          </a> */}
        </motion.div>
      </Section>
    </div>
  );
}
