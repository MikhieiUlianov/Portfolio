import "./about.scss";
import { aboutSkills } from "../../SideData";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__photo">
            <picture>
              <source
                media="(max-width: 576px)"
                srcSet="/src/img/Photo-min.jpeg"
              />
              <source media="(min-width: 577px)" srcSet="/src/img/Photo.jpeg" />
              <img src="/src/img/Photo.jpeg" alt="photo" />
            </picture>
          </div>

          <div className="about__descr">
            <motion.h2
              className="title title_fz16 about__title"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              About me
            </motion.h2>

            <motion.div
              className="title about__subtitle"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              My name is Mikhiei
            </motion.div>

            <div className="divider"></div>

            <motion.p
              className="about__text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </motion.p>
          </div>

          <div className="about__skills">
            {aboutSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                className="about__skills-item about__subtitle"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="about__skills-circle">
                  <img src={skill.img} alt={skill.alt} />
                </div>
                <div>
                  <div className="title title_fz14">{skill.title}</div>
                  <div className="about__skills-text">{skill.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
