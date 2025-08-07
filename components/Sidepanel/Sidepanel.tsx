import "./sidepanel.scss";
import "../../sass/libs/fontello.css";

export default function SidePanel() {
  return (
    <aside className="sidepanel">
      <div className="sidepanel__text title_fz16">
        <span>Social</span>
      </div>
      <div className="sidepanel__devider"></div>
      <a href="https://github.com/user09users" className="sidepanel__link">
        <div className="icon-github-circled"></div>
      </a>
      <a href="#" className="sidepanel__link">
        <div className="icon-instagram"></div>
      </a>
      <a href="#" className="sidepanel__link">
        <div className="icon-facebook"></div>
      </a>
    </aside>
  );
}
