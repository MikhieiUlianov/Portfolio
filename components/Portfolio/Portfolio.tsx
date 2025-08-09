import classes from "./portfolio.module.scss";
import { portfolioItems } from "../SideData";
import Section from "../section/section";
import PortfolioProject from "./portfolio-project";

export default function Portfolio() {
  const projects = portfolioItems;

  return (
    <Section sectionClass={classes.portfolio}>
      <h2 className="title title_fz16 title__section-title">Portfolio</h2>
      <div className="title title_fz36 title__section-subtitle">My works</div>
      <div className="divider"></div>

      <div className={classes.wrapper}>
        {projects.map((project, i) => (
          <PortfolioProject
            key={`${project.img}-${i}`}
            {...project}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}
