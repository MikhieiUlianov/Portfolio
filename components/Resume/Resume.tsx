"use client";
import classes from "./resume.module.scss";
import { resumeData } from "../SideData";
import { motion } from "framer-motion";
import Section from "../section/section";
import Image from "next/image";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Resume() {
  return (
    <Section sectionClass={classes.resume}>
      <h2 className="title title_fz16 title__section-title">Experience</h2>
      <div className="title title_fz36 title__section-subtitle">
        What can I help
      </div>
      <div className="divider"></div>

      <div className={classes.wrapper}>
        <div className={classes.column}>
          <h3 className={` title title_fz20 ${classes["column-title"]}`}>
            Education
          </h3>
          <ul>
            {resumeData.education.map((item, i) => (
              <motion.li
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
              >
                <div className={classes.item}>
                  <div className={classes["item-head"]}>
                    <div className={classes["item-icon"]}>
                      <Image src={item.icon} alt={item.alt} />
                    </div>
                    <h4 className="title title_fz14">{item.title}</h4>
                    <div className={classes["item-location"]}>
                      {item.location}
                    </div>
                  </div>
                  <div className={classes["item-body"]}>{item.description}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className={classes.column}>
          <h3 className={` title title_fz20 ${classes["column-title"]}`}>
            Work experience
          </h3>
          <ul>
            {resumeData.work.map((item, i) => (
              <motion.li
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
              >
                <div className={classes.item}>
                  <div className={classes["item-head"]}>
                    <div className={classes["item-icon"]}>
                      <Image src={item.icon} alt={item.alt} />
                    </div>
                    <h4 className="title title_fz14">{item.title}</h4>
                    <div className={classes["item-location"]}>
                      {item.location}
                    </div>
                  </div>
                  <div className={classes["item-body"]}>{item.description}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
