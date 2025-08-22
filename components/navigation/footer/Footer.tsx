import SocialLinks from "../social-links/social-links";
import StyledButton from "@/components/UI/styled-button/styled-button";
import classes from "./footer.module.scss";
import FooterForm from "./footer-form";
import Image from "next/image";

export default function Footer() {
  return (
    <section className={classes.footer}>
      <div className={classes.subscribe}>
        <div className={classes.subscribeBlock}>
          <h2 className={classes.subscribeTitle}>Subscribe Newsletter</h2>
          <div className={classes.subscribeText}>
            This form does not actually subcrive newsletters for now.
          </div>
          <FooterForm />
        </div>
        <Image
          width={400}
          height={296}
          src="/icons/mailbox.svg"
          alt="mailbox"
        />
      </div>
      <span className={classes.devider}></span>
      <ul className={classes.nav}>
        <li>
          <StyledButton href="/my-projects">My Projects</StyledButton>
        </li>
        <li>
          <StyledButton href="/certificates">My Certificates</StyledButton>
        </li>
        <li>
          <StyledButton href="/my-tools">My Tools</StyledButton>
        </li>
      </ul>
      <span className={classes.devider}></span>
      <div className={classes.social}>
        <h2>Social:</h2>
        <SocialLinks />
      </div>
      <div className={classes.email}>
        <span>Email:</span>
        <a href="mailto:>mikhieiulianov@gmail.com">mikhieiulianov@gmail.com</a>
      </div>
    </section>
  );
}
