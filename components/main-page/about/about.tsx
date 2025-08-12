"use client";
import classes from "./about.module.scss";
import Image from "next/image";
import { aboutSkills } from "@/components/SideData";
import { motion } from "framer-motion";
import Section from "@/components/section/section";

export default function About() {
  return (
    <Section sectionClass={classes.about}>
      <div className={classes.wrapper}>
        <div className={classes.photo}>
          <Image
            src="/img/Photo.jpeg"
            alt="Some of my photo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={classes.descr}>
          <motion.h2
            className="title title_fz16 title__section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            About me
          </motion.h2>

          <motion.div
            className="title title_fz36 title__section-subtitle"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            My name is Mikhiei
          </motion.div>

          <div className="divider"></div>

          <motion.p
            className={classes.text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </motion.p>
        </div>

        <div className={classes.skills}>
          {aboutSkills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className={`${classes.subtitle} ${classes["skills-item"]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + i * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={classes["skills-circle"]}>
                <Image src={skill.img} alt={skill.alt} />
              </div>
              <div>
                <div className="title title_fz14">{skill.title}</div>
                <div className={classes["skills-text"]}>
                  {skill.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
