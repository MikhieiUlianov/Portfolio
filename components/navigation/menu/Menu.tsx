"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./menu.module.scss";
import CloseIcon from "@/components/UI/icons/close-icon";

export default function Menu() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div
        className={classes.hamburger}
        onClick={() => setActive((prev) => !prev)}
      >
        <span></span>
        <span className="long"></span>
        <span></span>
      </div>
      <div className={`${classes.menu} ${active ? classes.active : ""}`}>
        <div className={classes.block}>
          <div onClick={() => setActive((prev) => !prev)}>
            <CloseIcon extraClass={`${classes.close} icon-cancel`} />
          </div>
          <nav>
            <ul className={classes.list}>
              <li className={classes.link} onClick={() => setActive(false)}>
                <Link href="/my-projects">My Projects</Link>
              </li>
              <li className={classes.link} onClick={() => setActive(false)}>
                <Link href="/certificates">My Certificates</Link>
              </li>
              <li className={classes.link} onClick={() => setActive(false)}>
                <Link href="/my-tools">My Tools</Link>
              </li>
            </ul>
          </nav>

          <div className={classes.social}>
            <a
              href="https://github.com/user09users"
              className="icon-github-circled"
            ></a>
            <a href="#" className="icon-instagram"></a>
            <a href="#" className="icon-facebook"></a>
          </div>
        </div>
        <div className={classes.overlay}></div>
      </div>
    </div>
  );
}
