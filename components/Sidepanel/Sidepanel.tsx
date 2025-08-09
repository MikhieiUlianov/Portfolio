import classes from "./sidepanel.module.scss";
import "../../sass/libs/fontello.css";

export default function SidePanel() {
  return (
    <aside className={classes.sidepanel}>
      <div className={`${classes.text} title_fz16`}>
        <span>Social</span>
      </div>
      <div className={classes.devider}></div>
      <a href="https://github.com/user09users" className={classes.link}>
        <div className="icon-github-circled"></div>
      </a>
      <a href="#" className={classes.link}>
        <div className="icon-instagram"></div>
      </a>
      <a href="#" className={classes.link}>
        <div className="icon-facebook"></div>
      </a>
    </aside>
  );
}
