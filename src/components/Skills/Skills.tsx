import "./skills.scss";
import { skillsItems } from "../../SideData";
import SkillsRatings from "../SkillsRatings/SkillsRatings";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="title title_fz16 title__section-title">Skills</h2>
        <div className="title title_fz36 title__section-subtitle">
          What I use in my work
        </div>
        <div className="divider"></div>

        <div className="skills__items">
          {skillsItems.map(({ img, alt, title, description }, i) => (
            <motion.div
              key={title}
              className="skills__item about__subtitle"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <div className="skills__item-img">
                <img src={img} alt={alt} />
              </div>
              <h3 className="title title_fz14">{title}</h3>
              <p>{description}</p>
            </motion.div>
          ))}
        </div>

        <SkillsRatings />
      </div>
    </section>
  );
}
