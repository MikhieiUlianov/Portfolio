import Section from "../section/section";
import classes from "./contacts.module.scss";

export default function Contacts() {
  return (
    <Section sectionClass={classes.contacts}>
      <div className={classes.wrapper}>
        <div className={classes.photo}>
          <img src="/img/Photo.jpeg" alt="photo" />
        </div>

        <div className={classes.descr}>
          <h2 className={`title title_fz16 ${classes.title}`}>Contacts</h2>
          <div className={`title ${classes.subtitle}`}>Contact me</div>
          <div className="divider"></div>
          <div className={`title title_fz14 ${classes.text}`}>
            In any way convinient for you:
          </div>

          <div className={classes.social}>
            <a href="#" className={`icon-github-circled ${classes.link}`}></a>
            <a href="#" className={`icon-telegram ${classes.link}`}></a>
            <a href="#" className={`icon-instagram ${classes.link}`}></a>
          </div>
          <div className={`title title_fz14 ${classes.text}`}>
            Or leave your details and I will write you myself:
          </div>

          <form action="#" className={classes.form}>
            <div className={classes.input}>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
              />
              <label htmlFor="name">Your name</label>
            </div>
            <div className={classes.input}>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="E-mail"
              />
              <label htmlFor="email">Your E-mail</label>
            </div>

            <div className={classes.textarea}>
              <textarea name="text" id="text" required></textarea>
              <label htmlFor="text">Your message</label>
            </div>

            <div className={classes.triggers}>
              <button className={`btn ${classes.btn}`}>Send message</button>
              <div className={classes.policy}>
                <input required type="checkbox" />
                <span>
                  I agree with <a href="/policy.html">the privacy policy</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
