import Contacts from "@/components/contacts/Contacts";
import Menu from "@/components/menu/Menu";
import Portfolio from "@/components/portfolio/Portfolio";
import Price from "@/components/price/Price";
import Promo from "@/components/promo/Promo";
import About from "@/components/About/About";
import Resume from "@/components/resume/Resume";
import SidePanel from "@/components/sidepanel/Sidepanel";
import Skills from "@/components/skills/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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
