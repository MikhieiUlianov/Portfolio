import { motion } from "framer-motion";
import "./promo.scss";
import "../Hamburger/hamburger.scss";
import { useState } from "react";

export default function Promo() {
  const [activeButton, setActiveButton] = useState("portfolio");

  function handleClick(link: string) {
    setActiveButton(link);
  }
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__hamburger">
          <span></span>
          <span className="long"></span>
          <span></span>
        </div>

        <motion.div
          className="title title_fz16 promo__subtitle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My name is Mikhiei Ulianov
        </motion.div>

        <motion.div
          className="title title_fz48 promo__title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I'm web-developer from town Kiev
        </motion.div>

        <motion.div
          className="promo__btns"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <a
            href="#portfolio"
            className={`promo__link btn__promo ${
              activeButton === "portfolio" ? " btn__promo_active " : ""
            }`}
            onClick={() => handleClick("portfolio")}
          >
            Portfolio
          </a>
          <a
            href="#about"
            className={`promo__link btn__promo ${
              activeButton === "about" ? " btn__promo_active " : ""
            }`}
            onClick={() => handleClick("about")}
          >
            About me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
