import Contacts from "@/components/contacts/Contacts";
import Portfolio from "@/components/portfolio/Portfolio";
import Price from "@/components/price/Price";
import Promo from "@/components/promo/Promo";
import About from "@/components/about/about";
import Resume from "@/components/resume/Resume";
import SidePanel from "@/components/sidepanel/Sidepanel";
import Skills from "@/components/skills/Skills";
import StyledButton from "@/components/UI/styled-button/styled-button";

export default function Home() {
  return (
    <main>
      <SidePanel />
      <Promo />
      <About />
      <Resume />
      <Skills />
      <StyledButton href={"/my-tools"} className="margin">
        See More
      </StyledButton>
      <Portfolio />
      <Price />
      <Contacts />
    </main>
  );
}
