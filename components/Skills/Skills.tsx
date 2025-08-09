"use client";
import classes from "./skills.module.scss";
import { skillsItems } from "../SideData";
import SkillsRatings from "./SkillsRatings";
import { motion } from "framer-motion";
import Section from "../section/section";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <>
      <Section sectionClass={classes.skills}>
        <h2 className="title title_fz16 title__section-title">Skills</h2>
        <div className="title title_fz36 title__section-subtitle">
          What I use in my work
        </div>
        <div className="divider"></div>

        <div className={classes.items}>
          {skillsItems.map(({ img, alt, title, description }, i) => (
            <motion.div
              key={title}
              className={classes.item}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <div className={classes["item-img"]}>
                <img src={img} alt={alt} />
              </div>
              <h3 className="title title_fz14">{title}</h3>
              <p>{description}</p>
            </motion.div>
          ))}
        </div>

        <SkillsRatings />
      </Section>
    </>
  );
}
