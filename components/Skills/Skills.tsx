import classes from "./skills.module.scss";
import { skillsItems } from "../SideData";
import Section from "../general-use/section/section";
import SkillItem from "./skill-item";

export default function Skills() {
  const skills = skillsItems.splice(0, 3);
  return (
    <>
      <Section sectionClass={classes.skills}>
        <h2 className="title title_fz16 title__section-title">Skills</h2>
        <div className="title title_fz36 title__section-subtitle">
          What I use in my work
        </div>
        <div className="divider"></div>

        <div className={classes.items}>
          {skills.map((skill, i) => (
            <SkillItem key={skill.title} {...skill} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
