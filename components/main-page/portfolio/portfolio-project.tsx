"use client";
import { motion, easeOut } from "framer-motion";
import classes from "./portfolio.module.scss";
import Image from "next/image";

type PortfolioProjectProps = {
  href: string;
  img: string;
  alt: string;
  index: number;
  className: string;
};

export default function PortfolioProject({
  href,
  img,
  alt,
  index,
  className,
}: PortfolioProjectProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: easeOut },
    }),
  };
  return (
    <motion.a
      href={href}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
      className={`${classes.item} ${className}`}
    >
      <Image src={img} alt={alt} />
    </motion.a>
  );
}
