import Section from "@/components/general-use/section/section";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  filters: never;
  projects: never;
};

export default function MyProjectsLayout({ children }: LayoutProps) {
  return (
    <Section>
      <h2
        className="title title_fz16 title__section-title"
        style={{ marginTop: 50 }}
      >
        Projects
      </h2>

      <div className="title title_fz36 title__section-subtitle">
        My projects
      </div>

      <div className="divider"></div>
      {children}
    </Section>
  );
}
