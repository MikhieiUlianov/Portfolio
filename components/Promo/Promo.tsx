"use client";

import { motion } from "framer-motion";
import Section from "../section/section";
import classes from "./promo.module.scss";
import Link from "next/link";

export default function Promo() {
  return (
    <div className={classes.overlay}>
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
          <div className={classes.actions}>
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/my-tools" className={classes.link}>
                My Tools
              </Link>
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/about" className={classes.link}>
                About me
              </Link>
            </motion.p>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
