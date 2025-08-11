import classes from "./sidepanel.module.scss";
import "../../sass/libs/fontello.css";
import SocialLinks from "../social-links/social-links";

export default function SidePanel() {
  return (
    <aside className={classes.sidepanel}>
      <div className={`${classes.text} title_fz16`}>
        <span>Social</span>
      </div>
      <div className={classes.devider}></div>
      <SocialLinks className={classes.links} />
    </aside>
  );
}
