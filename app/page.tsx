import Promo from "@/components/main-page/promo/Promo";
import Contacts from "@/components/main-page/contacts/Contacts";
import Portfolio from "@/components/main-page/portfolio/Portfolio";
import Price from "@/components/main-page/price/Price";
import About from "@/components/main-page/about/about";
import Resume from "@/components/main-page/resume/Resume";
import SidePanel from "@/components/navigation/sidepanel/Sidepanel";
import Skills from "@/components/skills/Skills";
import StyledButton from "@/components/UI/styled-button/styled-button";

export const metadata = {
  title: "My portfolio",
  message: "This is portfolio about me, my knowledge, and my results.",
};

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
