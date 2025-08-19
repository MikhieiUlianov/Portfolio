import Promo from "@/components/main-page/promo/promo";
import Resume from "@/components/main-page/resume/resume";
import Skills from "@/components/skills/skills";
import Contacts from "@/components/main-page/contacts/contacts";
import Portfolio from "@/components/main-page/portfolio/Portfolio";
import About from "@/components/main-page/about/about";

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
