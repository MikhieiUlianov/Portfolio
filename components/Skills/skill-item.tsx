"use client";

import { motion, easeOut } from "framer-motion";
import classes from "./skills.module.scss";
import Image from "next/image";

type SkillItemProps = {
  img: string;
  alt: string;
  title: string;
  description: string;
  index: number;
};

export default function SkillItem({
  img,
  alt,
  title,
  description,
  index,
}: SkillItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: easeOut },
    }),
  };

  return (
    <motion.div
      className={classes.item}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >
      <div className={classes["item-img"]}>
        <Image src={img} alt={alt} />
      </div>
      <h3 className="title title_fz14">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
