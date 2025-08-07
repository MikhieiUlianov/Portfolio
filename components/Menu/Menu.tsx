import "./menu.scss";
export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__block">
        <div className="menu__close icon-cancel"></div>
        <nav>
          <ul className="menu__list">
            <li className="menu__link">
              <a href="#">About me</a>
            </li>
            <li className="menu__link">
              <a href="#">My experience</a>
            </li>
            <li className="menu__link">
              <a href="#">My skills</a>
            </li>
            <li className="menu__link">
              <a href="#">My works</a>
            </li>
            <li className="menu__link">
              <a href="#">Price list</a>
            </li>
            <li className="menu__link">
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>

        <div className="menu__social">
          <a
            href="https://github.com/user09users"
            className="icon-github-circled"
          ></a>
          <a href="#" className="icon-instagram"></a>
          <a href="#" className="icon-facebook"></a>
        </div>
      </div>
      <div className="menu__overlay"></div>
    </div>
  );
}
