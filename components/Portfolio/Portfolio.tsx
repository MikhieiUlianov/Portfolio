import "./portfolio.scss";
import { portfolioItems } from "../../SideData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import usePortfolioServices from "../../services/PortfolioServices";

type Project = {
  href: string;
  img: string;
  alt: string;
  className: string;
};

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentAmount, setCurrentAmount] = useState(0);
  const { getPortfolioItems } = usePortfolioServices();
  const [catalogEnded, setCatalogEnded] = useState(false);

  useEffect(() => {
    if (currentAmount === 0) {
      const newProjects = getPortfolioItems(0, 4);
      setProjects(newProjects);
      return;
    }

    const newProjects = getPortfolioItems(currentAmount, 4);
    setProjects((prev) => [...prev, ...newProjects]);

    // если достигли конца
    if (currentAmount + 4 >= portfolioItems.length) {
      setCatalogEnded(true);
    }
  }, [currentAmount]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="title title_fz16 title__section-title">Portfolio</h2>
        <div className="title title_fz36 title__section-subtitle">My works</div>
        <div className="divider"></div>

        <div className="portfolio__wrapper">
          {projects.map(({ href, img, alt, className }, i) => (
            <motion.a
              href={href}
              key={`${img}-${i}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              className={`portfolio__item ${className}`}
            >
              <img src={img} alt={alt} />
            </motion.a>
          ))}
        </div>

        {!catalogEnded && (
          <button
            className="portfolio__btn"
            onClick={() => setCurrentAmount((prevAmount) => prevAmount + 4)}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
