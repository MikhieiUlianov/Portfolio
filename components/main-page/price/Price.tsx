import Section from "../../section/section";
import classes from "./price.module.scss";

export default function Price() {
  return (
    <Section sectionClass={classes.price}>
      <h2 className="title title_fz16 title__section-title">Price-list</h2>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <div className={classes.type}>Landing-page</div>
          <div className={classes.count}>From 1000$</div>
          <div className={classes.descr}>
            One-page website for presentation of services/products/...
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.type}>Corporate website</div>
          <div className={classes.count}>From 1000$</div>
          <div className={classes.descr}>
            Website for your business or company
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.type}>Web-store</div>
          <div className={classes.count}>From 1000$</div>
          <div className={classes.descr}>A tool for your online sales</div>
        </div>
        <div className={classes.item}>
          <div className={classes.type}>Web-application</div>
          <div className={classes.count}>From 1000$</div>
          <div className={classes.descr}>In-browser app for better comfort</div>
        </div>
        <div className={classes.item}>
          <div className={classes.type}>Android/IOS Application</div>
          <div className={classes.count}>From 1000$</div>
          <div className={classes.descr}>Приложение для смартфона любой ОС</div>
        </div>
        <div className={classes.item}>
          <div className={classes.type}>Design</div>
          <div className={classes.count}>From 1000$</div>
          <div className={classes.descr}>
            I will create a design for your website/application...
          </div>
        </div>
      </div>
    </Section>
  );
}
