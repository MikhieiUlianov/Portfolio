import classes from "./header.module.scss";
import StyledButton from "@/components/UI/styled-button/styled-button";
import Link from "next/link";
import Image from "next/image";
import { verifyAuth } from "@/lib/auth";
import logout from "@/actions/log-out";
export default async function Header() {
  const accountExists = await verifyAuth();

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
          {accountExists.user ? (
            <div className={classes.logged}>
              {/* <div className={classes["logged-block"]}>
                <div className={`${classes["logged-text"]}`}>Favourites</div>
              </div> */}
              <form action={logout}>
                <StyledButton>Logout</StyledButton>
              </form>
              <span className={`${classes["logged-divider"]}`}></span>
              <div className={classes["logged-profile"]}>
                <img
                  src="/icons/user.svg"
                  alt="selfie"
                  className="header__logged-profile-photo"
                />
                <div className="header__logged-profile-name">
                  {accountExists.user.name}
                </div>
              </div>
            </div>
          ) : (
            <div className={classes.login}>
              <StyledButton
                className="header__login-btn"
                href={"/?modal=login"}
              >
                Login
                <Image
                  style={{ marginLeft: 10 }}
                  src="/icons/user-black.svg"
                  alt="selfie"
                  width={20}
                  height={20}
                />
              </StyledButton>
              <StyledButton
                href={"/?modal=signup"}
                className="header__login-btn"
              >
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
