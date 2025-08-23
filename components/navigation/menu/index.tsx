"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./menu.module.scss";
import CloseIcon from "@/components/UI/icons/close-icon";
import SocialLinks from "@/components/general-use/social-links";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { User } from "lucia";
import { Session } from "inspector/promises";

export default function Menu() {
  const [active, setActive] = useState(false);
  const [isLogged, setIsLogged] = useState<
    { user: User; session: Session } | { user: null; session: null }
  >({ user: null, session: null });

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => setIsLogged(data))
      .catch(() => setIsLogged({ user: null, session: null }));
  }, []);

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
            {isLogged?.user ? (
              <StyledButton href="/?modal=change-password">
                Change Password
              </StyledButton>
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
