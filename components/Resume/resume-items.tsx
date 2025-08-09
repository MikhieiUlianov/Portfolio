"use client";

import { motion, easeOut } from "framer-motion";
import classes from "./resume.module.scss";
import Image from "next/image";
export default function ResumeBlock({
  list,
}: {
  list: {
    icon: any;
    alt: string;
    title: string;
    location: string;
    description: string;
  }[];
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: easeOut },
    }),
  };
  return (
    <ul>
      {list.map((item, i) => (
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
              <div className={classes["item-location"]}>{item.location}</div>
            </div>
            <div className={classes["item-body"]}>{item.description}</div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
