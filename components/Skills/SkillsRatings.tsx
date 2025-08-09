import { skillsRatings } from "../SideData";
import classes from "./skills-ratings.module.scss";

export default function SkillsRatings() {
  return (
    <div className={classes.ratings}>
      {skillsRatings.map(({ title, percent }) => (
        <div key={title} className={classes["ratings-item"]}>
          <div className={`title title_fz14 ${classes["ratings-title"]}`}>
            {title}
          </div>
          <div className={classes["ratings-counter"]}>{percent}</div>
          <div className={classes["ratings-line"]}>
            <span></span>
          </div>
        </div>
      ))}
    </div>
  );
}
