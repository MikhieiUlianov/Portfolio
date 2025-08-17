import Promo from "@/components/main-page/promo/Promo";
import Contacts from "@/components/main-page/contacts/Contacts";
import Portfolio from "@/components/main-page/portfolio/Portfolio";
import About from "@/components/main-page/about/about";
import Resume from "@/components/main-page/resume/Resume";
import Skills from "@/components/skills/Skills";

export const metadata = {
  title: "My portfolio",
  message: "This is portfolio about me, my knowledge, and my results.",
};

export default function Home() {
  return (
    <main>
      <Promo />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Contacts />
    </main>
  );
}
