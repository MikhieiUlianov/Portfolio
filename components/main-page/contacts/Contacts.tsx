import Image from "next/image";
import Section from "../../general-use/section/section";
import classes from "./contacts.module.scss";
import SocialLinks from "@/components/social-links/social-links";
import ContactsForm from "./contacts-form";

export default function Contacts() {
  return (
    <Section sectionClass={classes.contacts}>
      <div className={classes.wrapper}>
        <div className={classes.photo}>
          <Image src="/img/photos/form-photo.jpg" alt="photo" fill />
        </div>

        <div className={classes.descr}>
          <h2 className="title title_fz16 title__section-title">Contacts</h2>
          <div className="title title_fz36 title__section-subtitle">
            Contact me
          </div>
          <div className="divider"></div>
          <div className={`title title_fz14 ${classes.text}`}>
            In any way convinient for you:
          </div>

          <div className={classes.social}>
            <SocialLinks className={classes.links} />
          </div>
          <div className={`title title_fz14 ${classes.text}`}>
            Or leave your details and I will write you myself:
          </div>
          <ContactsForm />
        </div>
      </div>
    </Section>
  );
}
