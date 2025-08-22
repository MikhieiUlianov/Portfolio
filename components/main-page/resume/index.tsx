import classes from "./resume.module.scss";
import Section from "../../general-use/section";
import ResumeBlock from "./resume-items";
import { resumeData } from "../../SideData";

export default function Resume() {
  return (
    <Section sectionClass={classes.resume}>
      <h2 className="title title_fz16 title__section-title">Experience</h2>
      <div className="title title_fz36 title__section-subtitle">
        What can I help
      </div>
      <div className="divider"></div>

      <div className={classes.wrapper}>
        <div className={classes.column}>
          <h3 className={` title title_fz20 ${classes["column-title"]}`}>
            Education
          </h3>
          <ul>
            <ResumeBlock list={resumeData.education} />
          </ul>
        </div>

        <div className={classes.column}>
          <h3 className={` title title_fz20 ${classes["column-title"]}`}>
            Work experience
          </h3>
          <ul>
            <ResumeBlock list={resumeData.work} />
          </ul>
        </div>
      </div>
    </Section>
  );
}
