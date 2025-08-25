"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./menu.module.scss";
import CloseIcon from "@/components/UI/icons/close-icon";
import SocialLinks from "@/components/general-use/social-links";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { User } from "lucia";
import logout from "@/actions/log-out";

export default function Menu({ isLogged }: { isLogged: User | null }) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className={classes.hamburger} onClick={() => setActive(!active)}>
        <span></span>
        <span className="long"></span>
        <span></span>
      </div>

      <div className={`${classes.menu} ${active ? classes.active : ""}`}>
        <div className={classes.block}>
          <div onClick={() => setActive(false)}>
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
            {isLogged ? (
              <>
                <StyledButton href="/?modal=change-password">
                  Change Password
                </StyledButton>
                <form action={logout} onClick={() => setActive(false)}>
                  <StyledButton>Logout</StyledButton>
                </form>
              </>
            ) : (
              <>
                <StyledButton href="/?modal=login">Log In</StyledButton>
                <StyledButton href="/?modal=signup">Sign Up</StyledButton>
              </>
            )}
          </div>

          <div className={classes.social}>
            <SocialLinks />
          </div>
        </div>

        <div className={classes.overlay} onClick={() => setActive(false)}></div>
      </div>
    </div>
  );
}
