import { ReactNode } from "react";
import classes from "./layout.module.scss";
import Section from "@/components/section/section";
import CatalogHeader from "@/components/catalog-header/catalog-header";

export default function MyTools({
  filters,
  tools,
}: {
  filters: ReactNode;
  tools: ReactNode;
}) {
  return (
    <Section>
      <h2
        className="title title_fz16 title__section-title"
        style={{ marginTop: 50 }}
      >
        Skills
      </h2>
      <div className="title title_fz36 title__section-subtitle">
        What I use in my work
      </div>
      <div className="divider"></div>
      <CatalogHeader />
      <div className={classes.blocks}>
        <aside>{filters}</aside>
        <main>{tools}</main>
      </div>
    </Section>
  );
}
