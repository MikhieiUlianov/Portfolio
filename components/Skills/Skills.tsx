import classes from "./skills.module.scss";
import { skillsItems } from "../SideData";
import SkillsRatings from "./SkillsRatings";
import Section from "../section/section";
import SkillItem from "./skill-item";

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
          {skillsItems.map((skill, i) => (
            <SkillItem key={skill.title} {...skill} index={i} />
          ))}
        </div>

        <SkillsRatings />
      </Section>
    </>
  );
}
