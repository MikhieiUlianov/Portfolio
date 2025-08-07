import "./contacts.scss";

export default function Contacts() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <div className="contacts__photo">
            <img src="/src/img/Photo.jpeg" alt="photo" />
          </div>

          <div className="contacts__descr">
            <h2 className="title title_fz16 contacts__title animate__animated animate__bounceInLeft wow">
              Contacts
            </h2>
            <div className="title contacts__subtitle animate__animated animate__backInRight wow">
              Contact me
            </div>
            <div className="divider"></div>
            <div className="title title_fz14 contacts__text">
              In any way convinient for you:
            </div>

            <div className="contacts__social">
              <a href="#" className="contacts__link icon-github-circled"></a>
              <a href="#" className="contacts__link icon-telegram"></a>
              <a href="#" className="contacts__link icon-instagram"></a>
            </div>
            <div className="title title_fz14 contacts__text">
              Or leave your details and I will write you myself:
            </div>

            <form action="#" className="contacts__form">
              <div className="contacts__input">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Name"
                />
                <label htmlFor="name">Your name</label>
              </div>
              <div className="contacts__input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="E-mail"
                />
                <label htmlFor="email">Your E-mail</label>
              </div>

              <div className="contacts__textarea">
                <textarea name="text" id="text" required></textarea>
                <label htmlFor="text">Your message</label>
              </div>

              <div className="contacts__triggers">
                <button className="btn contacts__btn">Send message</button>
                <div className="contacts__policy">
                  <input required type="checkbox" />
                  <span>
                    {" "}
                    I agree with <a href="/policy.html">the privacy policy</a>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
