import "./resume.scss";
import { resumeData } from "../../SideData";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Resume() {
  return (
    <section className="resume">
      <div className="container">
        <h2 className="title title_fz16 title__section-title">Experience</h2>
        <div className="title title_fz36 title__section-subtitle">
          What can I help
        </div>
        <div className="divider"></div>

        <div className="resume__wrapper">
          <div className="resume__column">
            <h3 className="title title_fz20 resume__column-title">Education</h3>
            <ul>
              {resumeData.education.map((item, i) => (
                <motion.li
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                >
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img src={item.icon} alt={item.alt} />
                      </div>
                      <h4 className="title title_fz14">{item.title}</h4>
                      <div className="resume__item-location">
                        {item.location}
                      </div>
                    </div>
                    <div className="resume__item-body">{item.description}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="resume__column">
            <h3 className="title title_fz20 resume__column-title">
              Work experience
            </h3>
            <ul>
              {resumeData.work.map((item, i) => (
                <motion.li
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                >
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img src={item.icon} alt={item.alt} />
                      </div>
                      <h4 className="title title_fz14">{item.title}</h4>
                      <div className="resume__item-location">
                        {item.location}
                      </div>
                    </div>
                    <div className="resume__item-body">{item.description}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
