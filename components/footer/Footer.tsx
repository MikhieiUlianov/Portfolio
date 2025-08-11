import StyledButton from "../UI/styled-button/styled-button";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.form}>
        <div className={classes.formBlock}>
          <h2 className={classes.formTitle}>Subscribe Newsletter</h2>
          <div className={classes.formText}>
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </div>
          <form>
            <input
              className={classes.input}
              name="name"
              placeholder="Find Travel"
              style={{ width: "450px" }}
            />
            <StyledButton className={classes.formAction}>Button</StyledButton>
          </form>
        </div>
        <img src="/icons/mailbox.svg" alt="mailbox" />
      </div>
      <span className={classes.devider}></span>
      <ul className={classes.nav}>
        <li>
          <StyledButton>About</StyledButton>
        </li>
        <li>
          <StyledButton>About</StyledButton>
        </li>
        <li>
          <StyledButton>About</StyledButton>
        </li>
        <li>
          <StyledButton>About</StyledButton>
        </li>
      </ul>
      <span className={classes.devider}></span>
      <div className={classes.social}>
        <h2>Social:</h2>
        <ul className={classes.links}>
          <li>
            <a href="https://github.com/user09users" className={classes.link}>
              <span className="icon-github-circled"></span>
            </a>
          </li>
          <li>
            <a href="https://x.com/rachoookk" className={classes.link}>
              <span className="icon-twitter"></span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
