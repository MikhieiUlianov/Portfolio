"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./menu.module.scss";
import CloseIcon from "@/components/UI/icons/close-icon";
import SocialLinks from "../social-links/social-links";
import StyledButton from "@/components/UI/styled-button/styled-button";

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
      <div className={`${classes.menu} ${active ? classes.active : ""} active`}>
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
          <div className={classes.modalActions}>
            <StyledButton href="/?modal=login">Log In</StyledButton>
            <StyledButton href="/?modal=signup">Sign Up</StyledButton>
            <StyledButton href="/?modal=change-password">
              Change Password
            </StyledButton>
          </div>

          <div className={classes.social}>
            <SocialLinks />
          </div>
        </div>
        <div className={classes.overlay}></div>
      </div>
    </div>
  );
}
