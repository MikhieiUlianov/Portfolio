"use client";

import { motion } from "framer-motion";
import Section from "@/components/general-use/section/section";
import classes from "./promo.module.scss";
import StyledButton from "@/components/UI/styled-button/styled-button";

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
          className={`${classes.title} title title_fz30`}
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
            <StyledButton href="/my-tools" className={classes.link}>
              My Tools
            </StyledButton>
            <StyledButton href="/certificates" className={classes.link}>
              Certificates
            </StyledButton>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
