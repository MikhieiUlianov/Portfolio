"use client";
import classes from "./portfolio.module.scss";
import { portfolioItems } from "../SideData";
import { motion } from "framer-motion";
import Section from "../section/section";
/* 
import usePortfolioServices from "../../services/PortfolioServices"; */

type Project = {
  href: string;
  img: string;
  alt: string;
  className: string;
};

export default function Portfolio() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };
  const projects = portfolioItems;

  return (
    <Section sectionClass={classes.portfolio}>
      <h2 className="title title_fz16 title__section-title">Portfolio</h2>
      <div className="title title_fz36 title__section-subtitle">My works</div>
      <div className="divider"></div>

      <div className={classes.wrapper}>
        {projects.map(({ href, img, alt, className }, i) => (
          <motion.a
            href={href}
            key={`${img}-${i}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className={`${classes.item} ${className}`}
          >
            <img src={img} alt={alt} />
          </motion.a>
        ))}
      </div>

      {/*    {!catalogEnded && (
          <button
            className="portfolio__btn"
            onClick={() => setCurrentAmount((prevAmount) => prevAmount + 4)}
          >
            Load More
          </button>
        )} */}
    </Section>
  );
}
