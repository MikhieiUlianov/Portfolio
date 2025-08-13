"use client";
import { useState } from "react";
import classes from "./header.module.scss";
import StyledButton from "@/components/UI/styled-button/styled-button";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [logged, setLogged] = useState(true);

  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.find}>
          <StyledButton>About</StyledButton>
          <StyledButton href="/my-projects">My Projects</StyledButton>
        </div>

        <Link href="/">
          <Image
            width={100}
            height={100}
            className={classes.logo}
            src="/img/logo.png"
            alt="logo"
          />
        </Link>

        <div className={classes.desktop}>
          {logged ? (
            <div className={classes.logged}>
              <div className={classes["logged-block"]}>
                <div className={`${classes["logged-text"]}`}>Favourites</div>
              </div>
              <span className={`${classes["logged-divider"]}`}></span>
              <div className={classes["logged-profile"]}>
                <img
                  src="/icons/user.svg"
                  alt="selfie"
                  className="header__logged-profile-photo"
                />
                <div className="header__logged-profile-name">John D.</div>
              </div>
            </div>
          ) : (
            <div className={classes.login}>
              <StyledButton className="header__login-btn">
                Login
                <Image
                  style={{ marginLeft: 10 }}
                  src="/icons/user-black.svg"
                  alt="selfie"
                  width={20}
                  height={20}
                />
              </StyledButton>
              <StyledButton className="header__login-btn" id="signBtn">
                Sign up
                <Image
                  style={{ marginLeft: 10 }}
                  src="/icons/user.svg"
                  alt="selfie"
                  width={20}
                  height={20}
                />
              </StyledButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
