import "./sass/style.scss";

import Contacts from "./components/Contacts/Contacts";
import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import Promo from "./components/Promo/Promo";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import SidePanel from "./components/Sidepanel/Sidepanel";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <main className="container">
      <SidePanel />
      <Menu />
      <Promo />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Price />
      <Contacts />
    </main>
  );
}

export default App;
