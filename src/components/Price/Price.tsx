import "./price.scss";

export default function Price() {
  return (
    <section className="price">
      <div className="container">
        <h2 className="title title_fz16 title__section-title">Price-list</h2>
        <div className="price__wrapper">
          <div className="price__item">
            <div className="price__type">Landing-page</div>
            <div className="price__count">From 1000$</div>
            <div className="price__descr">
              One-page website for presentation of services/products/...
            </div>
          </div>
          <div className="price__item">
            <div className="price__type">Corporate website</div>
            <div className="price__count">From 1000$</div>
            <div className="price__descr">
              Website for your business or company
            </div>
          </div>
          <div className="price__item">
            <div className="price__type">Web-store</div>
            <div className="price__count">From 1000$</div>
            <div className="price__descr">A tool for your online sales</div>
          </div>
          <div className="price__item">
            <div className="price__type">Web-application</div>
            <div className="price__count">From 1000$</div>
            <div className="price__descr">
              In-browser app for better comfort
            </div>
          </div>
          <div className="price__item">
            <div className="price__type">Android/IOS Application</div>
            <div className="price__count">From 1000$</div>
            <div className="price__descr">
              Приложение для смартфона любой ОС
            </div>
          </div>
          <div className="price__item">
            <div className="price__type">Design</div>
            <div className="price__count">From 1000$</div>
            <div className="price__descr">
              I will create a design for your website/application...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
