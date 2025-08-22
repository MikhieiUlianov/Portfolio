import Promo from "@/components/main-page/promo";
import Resume from "@/components/main-page/resume";
import Skills from "@/components/skills/skills-list";
import Contacts from "@/components/main-page/contacts";
import Portfolio from "@/components/main-page/portfolio";
import About from "@/components/main-page/about";

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
